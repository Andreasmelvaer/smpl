import {
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
} from './connection';

// Re-export everything
export {
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
  getStats,

  // Types
  AuthenticatedUser,
  User,
  Session,
  UserCreateResult,
  DatabaseStats
};