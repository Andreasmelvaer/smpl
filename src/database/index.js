const {
  getDatabase,
  closeDatabase,
  authenticate,
  createUser,
  createSession,
  getSession,
  deleteSession,
  cleanupSessions,
  getStats
} = require('./connection');

module.exports = {
  // Database management
  getDatabase,
  closeDatabase,
  
  // Authentication
  authenticate,
  createUser,
  
  // Session management
  createSession,
  getSession,
  deleteSession,
  cleanupSessions,
  
  // Statistics
  getStats
};