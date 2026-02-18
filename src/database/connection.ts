import DatabaseManager, { User, Session, UserCreateResult, DatabaseStats } from './schema';
import Database from 'better-sqlite3';

interface AuthenticatedUser {
  id: number;
  username: string;
  created_at: string;
}

// Singleton database instance
let dbInstance: DatabaseManager | null = null;

function getDatabase(dbPath: string = './data/dashboard.db'): DatabaseManager {
  if (!dbInstance) {
    dbInstance = new DatabaseManager(dbPath);
  }
  return dbInstance;
}

function closeDatabase(): void {
  if (dbInstance) {
    dbInstance.close();
    dbInstance = null;
  }
}

// Helper functions for common operations
async function authenticate(username: string, password: string): Promise<AuthenticatedUser | null> {
  const db = getDatabase();
  const user = db.getUserByUsername(username);
  
  if (!user) {
    return null;
  }
  
  const isValid = db.verifyPassword(password, user.password_hash);
  if (!isValid) {
    return null;
  }
  
  return {
    id: user.id,
    username: user.username,
    created_at: user.created_at
  };
}

function createUser(username: string, password: string): UserCreateResult {
  const db = getDatabase();
  return db.createUser(username, password);
}

function createSession(sessionId: string, userId: number, expiresAt: string, data?: string | null): Database.RunResult {
  const db = getDatabase();
  return db.createSession(sessionId, userId, expiresAt, data || null);
}

function getSession(sessionId: string): Session | undefined {
  const db = getDatabase();
  return db.getSession(sessionId);
}

function deleteSession(sessionId: string): Database.RunResult {
  const db = getDatabase();
  return db.deleteSession(sessionId);
}

function cleanupSessions(): number {
  const db = getDatabase();
  return db.cleanupExpiredSessions();
}

function getStats(): DatabaseStats {
  const db = getDatabase();
  return db.getStats();
}

// Export the database interface
export {
  getDatabase,
  closeDatabase,
  authenticate,
  createUser,
  createSession,
  getSession,
  deleteSession,
  cleanupSessions,
  getStats,
  AuthenticatedUser,
  User,
  Session,
  UserCreateResult,
  DatabaseStats
};