const DatabaseManager = require('./schema');

// Singleton database instance
let dbInstance = null;

function getDatabase(dbPath = './data/dashboard.db') {
  if (!dbInstance) {
    dbInstance = new DatabaseManager(dbPath);
  }
  return dbInstance;
}

function closeDatabase() {
  if (dbInstance) {
    dbInstance.close();
    dbInstance = null;
  }
}

// Export the database interface
module.exports = {
  getDatabase,
  closeDatabase,
  
  // Helper functions for common operations
  async authenticate(username, password) {
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
  },
  
  createUser(username, password) {
    const db = getDatabase();
    return db.createUser(username, password);
  },
  
  createSession(sessionId, userId, expiresAt, data) {
    const db = getDatabase();
    return db.createSession(sessionId, userId, expiresAt, data);
  },
  
  getSession(sessionId) {
    const db = getDatabase();
    return db.getSession(sessionId);
  },
  
  deleteSession(sessionId) {
    const db = getDatabase();
    return db.deleteSession(sessionId);
  },
  
  cleanupSessions() {
    const db = getDatabase();
    return db.cleanupExpiredSessions();
  },
  
  getStats() {
    const db = getDatabase();
    return db.getStats();
  }
};