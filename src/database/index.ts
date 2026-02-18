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

import {
  hashPassword,
  hashPasswordSync,
  validatePassword,
  validatePasswordSync,
  getSaltRounds
} from '../auth/password';

import SqliteSessionStore from './sessionStore';

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

  // Password utilities
  hashPassword,
  hashPasswordSync,
  validatePassword,
  validatePasswordSync,
  getSaltRounds,

  // Session store
  SqliteSessionStore,

  // Types
  AuthenticatedUser,
  User,
  Session,
  UserCreateResult,
  DatabaseStats
};