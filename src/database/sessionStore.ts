import { Store, SessionData } from 'express-session';
import { getDatabase } from './connection';
import { v4 as uuidv4 } from 'uuid';

export class SqliteSessionStore extends Store {
  
  constructor() {
    super();
  }

  /**
   * Get session data by session ID
   */
  get(sessionId: string, callback: (err: any, session?: SessionData | null) => void): void {
    try {
      const db = getDatabase();
      const sessionRecord = db.getSession(sessionId);
      
      if (!sessionRecord) {
        // Session not found or expired
        callback(null, null);
        return;
      }

      // Parse session data
      let sessionData: SessionData | null = null;
      if (sessionRecord.data) {
        try {
          sessionData = JSON.parse(sessionRecord.data) as SessionData;
        } catch (parseError) {
          callback(new Error('Failed to parse session data'), null);
          return;
        }
      }

      callback(null, sessionData);
    } catch (error) {
      callback(error, null);
    }
  }

  /**
   * Set session data
   */
  set(sessionId: string, session: SessionData, callback?: (err?: any) => void): void {
    try {
      const db = getDatabase();
      
      // Calculate expiration time (default 1 hour if not specified)
      const maxAge = session.cookie?.maxAge || 3600000; // 1 hour in milliseconds
      const expiresAt = new Date(Date.now() + maxAge).toISOString();
      
      // Serialize session data
      const serializedData = JSON.stringify(session);
      
      // Check if session exists
      const existingSession = db.getSessionRaw(sessionId);
      
      if (existingSession) {
        // Update existing session
        const updateSession = db.db.prepare(`
          UPDATE sessions 
          SET data = ?, expires_at = ?, created_at = CURRENT_TIMESTAMP
          WHERE session_id = ?
        `);
        updateSession.run(serializedData, expiresAt, sessionId);
      } else {
        // Create new session - need a user_id, defaulting to 1 (admin) for now
        // In a real implementation, this should be set when user logs in
        const userId = (session as any).userId || 1;
        db.createSession(sessionId, userId, expiresAt, serializedData);
      }
      
      if (callback) callback();
    } catch (error) {
      if (callback) callback(error);
    }
  }

  /**
   * Destroy a session
   */
  destroy(sessionId: string, callback?: (err?: any) => void): void {
    try {
      const db = getDatabase();
      db.deleteSession(sessionId);
      if (callback) callback();
    } catch (error) {
      if (callback) callback(error);
    }
  }

  /**
   * Touch a session to update its expiration
   */
  touch(sessionId: string, session: SessionData, callback?: (err?: any) => void): void {
    try {
      const db = getDatabase();
      
      // Calculate new expiration time
      const maxAge = session.cookie?.maxAge || 3600000; // 1 hour in milliseconds
      const expiresAt = new Date(Date.now() + maxAge).toISOString();
      
      // Update expiration time
      const touchSession = db.db.prepare(`
        UPDATE sessions 
        SET expires_at = ?
        WHERE session_id = ?
      `);
      touchSession.run(expiresAt, sessionId);
      
      if (callback) callback();
    } catch (error) {
      if (callback) callback(error);
    }
  }

  /**
   * Get all sessions as object (optional method)
   */
  all(callback: (err: any, obj?: { [sid: string]: SessionData } | null) => void): void {
    try {
      const db = getDatabase();
      const getAllSessions = db.db.prepare(`
        SELECT session_id, data 
        FROM sessions 
        WHERE expires_at > ?
      `);
      
      const now = new Date().toISOString();
      const sessions = getAllSessions.all(now) as { session_id: string; data: string | null }[];
      
      const sessionObject: { [sid: string]: SessionData } = {};
      sessions.forEach(record => {
        if (record.data) {
          try {
            sessionObject[record.session_id] = JSON.parse(record.data) as SessionData;
          } catch (e) {
            // Skip invalid session data
          }
        }
      });
      
      callback(null, sessionObject);
    } catch (error) {
      callback(error, null);
    }
  }

  /**
   * Get the number of all sessions (optional method)
   */
  length(callback: (err: any, length?: number) => void): void {
    try {
      const db = getDatabase();
      const countSessions = db.db.prepare(`
        SELECT COUNT(*) as count 
        FROM sessions 
        WHERE expires_at > ?
      `);
      
      const now = new Date().toISOString();
      const result = countSessions.get(now) as { count: number };
      
      callback(null, result.count);
    } catch (error) {
      callback(error);
    }
  }

  /**
   * Clear all sessions (optional method)
   */
  clear(callback?: (err?: any) => void): void {
    try {
      const db = getDatabase();
      const clearSessions = db.db.prepare('DELETE FROM sessions');
      clearSessions.run();
      
      if (callback) callback();
    } catch (error) {
      if (callback) callback(error);
    }
  }

  /**
   * Clean up expired sessions
   */
  cleanupExpiredSessions(callback?: (err?: any, deletedCount?: number) => void): void {
    try {
      const db = getDatabase();
      const deletedCount = db.cleanupExpiredSessions();
      
      if (callback) callback(null, deletedCount);
    } catch (error) {
      if (callback) callback(error);
    }
  }
}

export default SqliteSessionStore;