import Database from 'better-sqlite3';
import * as path from 'path';
import * as fs from 'fs';
import { hashPasswordSync, validatePasswordSync } from '../auth/password';

interface User {
  id: number;
  username: string;
  password_hash: string;
  created_at: string;
  updated_at: string;
}

interface Session {
  session_id: string;
  user_id: number;
  expires_at: string;
  data: string | null;
  created_at: string;
  username?: string;
}

interface UserCreateResult {
  id: number;
  username: string;
}

interface DatabaseStats {
  users: number;
  activeSessions: number;
}

class DatabaseManager {
  private dbPath: string;
  public db!: Database.Database; // Using definite assignment assertion

  constructor(dbPath: string = './data/dashboard.db') {
    this.dbPath = dbPath;
    this.init();
  }

  private init(): void {
    // Ensure data directory exists
    const dataDir = path.dirname(this.dbPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Open database connection
    this.db = new Database(this.dbPath);
    this.db.pragma('journal_mode = WAL');
    this.db.pragma('foreign_keys = ON');
    
    // Create tables
    this.createTables();
    
    // Seed initial admin user
    this.seedAdminUser();
  }

  private createTables(): void {
    // Users table
    const createUsersTable = this.db.prepare(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Sessions table
    const createSessionsTable = this.db.prepare(`
      CREATE TABLE IF NOT EXISTS sessions (
        session_id TEXT PRIMARY KEY,
        user_id INTEGER NOT NULL,
        expires_at DATETIME NOT NULL,
        data TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // Execute table creation
    createUsersTable.run();
    createSessionsTable.run();

    // Create index on sessions for cleanup
    const createSessionsIndex = this.db.prepare(`
      CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions(expires_at)
    `);
    createSessionsIndex.run();

    console.log('Database tables created successfully');
  }

  private seedAdminUser(): void {
    // Check if admin user already exists
    const checkAdmin = this.db.prepare('SELECT id FROM users WHERE username = ?');
    const existingAdmin = checkAdmin.get('admin') as User | undefined;
    
    if (!existingAdmin) {
      const defaultPassword = 'admin123'; // Should be changed on first login
      const hashedPassword = hashPasswordSync(defaultPassword);
      
      const insertAdmin = this.db.prepare(`
        INSERT INTO users (username, password_hash) 
        VALUES (?, ?)
      `);
      
      const result = insertAdmin.run('admin', hashedPassword);
      console.log(`Admin user created with ID: ${result.lastInsertRowid}`);
      console.log('Default password: admin123 (please change after first login)');
    }
  }

  // User management methods
  createUser(username: string, password: string): UserCreateResult {
    const hashedPassword = hashPasswordSync(password);
    
    const insertUser = this.db.prepare(`
      INSERT INTO users (username, password_hash) 
      VALUES (?, ?)
    `);
    
    try {
      const result = insertUser.run(username, hashedPassword);
      return { id: result.lastInsertRowid as number, username };
    } catch (error: any) {
      if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
        throw new Error('Username already exists');
      }
      throw error;
    }
  }

  getUserByUsername(username: string): User | undefined {
    const getUser = this.db.prepare('SELECT * FROM users WHERE username = ?');
    return getUser.get(username) as User | undefined;
  }

  getUserById(id: number): User | undefined {
    const getUser = this.db.prepare('SELECT * FROM users WHERE id = ?');
    return getUser.get(id) as User | undefined;
  }

  verifyPassword(password: string, hash: string): boolean {
    return validatePasswordSync(password, hash);
  }

  // Session management methods
  createSession(sessionId: string, userId: number, expiresAt: string, data: string | null = null): Database.RunResult {
    const insertSession = this.db.prepare(`
      INSERT INTO sessions (session_id, user_id, expires_at, data)
      VALUES (?, ?, ?, ?)
    `);
    
    return insertSession.run(sessionId, userId, expiresAt, data);
  }

  getSession(sessionId: string): Session | undefined {
    const getSession = this.db.prepare(`
      SELECT s.*, u.username 
      FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.session_id = ? AND s.expires_at > ?
    `);
    
    const now = new Date().toISOString();
    return getSession.get(sessionId, now) as Session | undefined;
  }

  // Get session without expiry check (for testing)
  getSessionRaw(sessionId: string): Session | undefined {
    const getSession = this.db.prepare(`
      SELECT s.*, u.username 
      FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.session_id = ?
    `);
    
    return getSession.get(sessionId) as Session | undefined;
  }

  deleteSession(sessionId: string): Database.RunResult {
    const deleteSession = this.db.prepare('DELETE FROM sessions WHERE session_id = ?');
    return deleteSession.run(sessionId);
  }

  cleanupExpiredSessions(): number {
    const cleanup = this.db.prepare('DELETE FROM sessions WHERE expires_at <= ?');
    const now = new Date().toISOString();
    const result = cleanup.run(now);
    return result.changes;
  }

  // Database maintenance
  close(): void {
    if (this.db) {
      this.db.close();
    }
  }

  // Get database stats
  getStats(): DatabaseStats {
    const userCount = this.db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };
    const sessionCount = this.db.prepare('SELECT COUNT(*) as count FROM sessions WHERE expires_at > datetime(\'now\')').get() as { count: number };
    
    return {
      users: userCount.count,
      activeSessions: sessionCount.count
    };
  }
}

export default DatabaseManager;
export { User, Session, UserCreateResult, DatabaseStats };