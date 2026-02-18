const Database = require('better-sqlite3');
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');

class DatabaseManager {
  constructor(dbPath = './data/dashboard.db') {
    this.dbPath = dbPath;
    this.db = null;
    this.init();
  }

  init() {
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

  createTables() {
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

  seedAdminUser() {
    // Check if admin user already exists
    const checkAdmin = this.db.prepare('SELECT id FROM users WHERE username = ?');
    const existingAdmin = checkAdmin.get('admin');
    
    if (!existingAdmin) {
      const saltRounds = 12;
      const defaultPassword = 'admin123'; // Should be changed on first login
      const hashedPassword = bcrypt.hashSync(defaultPassword, saltRounds);
      
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
  createUser(username, password) {
    const saltRounds = 12;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    
    const insertUser = this.db.prepare(`
      INSERT INTO users (username, password_hash) 
      VALUES (?, ?)
    `);
    
    try {
      const result = insertUser.run(username, hashedPassword);
      return { id: result.lastInsertRowid, username };
    } catch (error) {
      if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
        throw new Error('Username already exists');
      }
      throw error;
    }
  }

  getUserByUsername(username) {
    const getUser = this.db.prepare('SELECT * FROM users WHERE username = ?');
    return getUser.get(username);
  }

  getUserById(id) {
    const getUser = this.db.prepare('SELECT * FROM users WHERE id = ?');
    return getUser.get(id);
  }

  verifyPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }

  // Session management methods
  createSession(sessionId, userId, expiresAt, data = null) {
    const insertSession = this.db.prepare(`
      INSERT INTO sessions (session_id, user_id, expires_at, data)
      VALUES (?, ?, ?, ?)
    `);
    
    return insertSession.run(sessionId, userId, expiresAt, data);
  }

  getSession(sessionId) {
    const getSession = this.db.prepare(`
      SELECT s.*, u.username 
      FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.session_id = ? AND s.expires_at > ?
    `);
    
    const now = new Date().toISOString();
    return getSession.get(sessionId, now);
  }

  // Get session without expiry check (for testing)
  getSessionRaw(sessionId) {
    const getSession = this.db.prepare(`
      SELECT s.*, u.username 
      FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.session_id = ?
    `);
    
    return getSession.get(sessionId);
  }

  deleteSession(sessionId) {
    const deleteSession = this.db.prepare('DELETE FROM sessions WHERE session_id = ?');
    return deleteSession.run(sessionId);
  }

  cleanupExpiredSessions() {
    const cleanup = this.db.prepare('DELETE FROM sessions WHERE expires_at <= ?');
    const now = new Date().toISOString();
    const result = cleanup.run(now);
    return result.changes;
  }

  // Database maintenance
  close() {
    if (this.db) {
      this.db.close();
    }
  }

  // Get database stats
  getStats() {
    const userCount = this.db.prepare('SELECT COUNT(*) as count FROM users').get();
    const sessionCount = this.db.prepare('SELECT COUNT(*) as count FROM sessions WHERE expires_at > datetime(\'now\')').get();
    
    return {
      users: userCount.count,
      activeSessions: sessionCount.count
    };
  }
}

module.exports = DatabaseManager;