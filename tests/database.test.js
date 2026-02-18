const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');
const bcrypt = require('bcrypt');
const db = require('../src/database');

// Test database path
const TEST_DB_PATH = './test-data/test-dashboard.db';

// Clean up function
function cleanupTestDB() {
  const testDir = path.dirname(TEST_DB_PATH);
  if (fs.existsSync(testDir)) {
    fs.rmSync(testDir, { recursive: true, force: true });
  }
}

test('Database Schema Tests', async (t) => {
  // Clean up before tests
  cleanupTestDB();

  await t.test('should create SQLite database with correct tables', async (t) => {
    const database = db.getDatabase(TEST_DB_PATH);
    
    // Verify database file exists
    assert.ok(fs.existsSync(TEST_DB_PATH), 'Database file should exist');
    
    // Verify tables exist by querying schema
    const rawDb = new Database(TEST_DB_PATH);
    
    const tables = rawDb.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
    const tableNames = tables.map(t => t.name);
    
    assert.ok(tableNames.includes('users'), 'Users table should exist');
    assert.ok(tableNames.includes('sessions'), 'Sessions table should exist');
    
    rawDb.close();
  });

  await t.test('should have correct users table schema', async (t) => {
    const rawDb = new Database(TEST_DB_PATH);
    
    const userColumns = rawDb.prepare("PRAGMA table_info(users)").all();
    const columnNames = userColumns.map(col => col.name);
    
    assert.ok(columnNames.includes('id'), 'Users table should have id column');
    assert.ok(columnNames.includes('username'), 'Users table should have username column');
    assert.ok(columnNames.includes('password_hash'), 'Users table should have password_hash column');
    assert.ok(columnNames.includes('created_at'), 'Users table should have created_at column');
    assert.ok(columnNames.includes('updated_at'), 'Users table should have updated_at column');
    
    // Verify id is primary key and autoincrement
    const idColumn = userColumns.find(col => col.name === 'id');
    assert.strictEqual(idColumn.pk, 1, 'id should be primary key');
    
    rawDb.close();
  });

  await t.test('should have correct sessions table schema', async (t) => {
    const rawDb = new Database(TEST_DB_PATH);
    
    const sessionColumns = rawDb.prepare("PRAGMA table_info(sessions)").all();
    const columnNames = sessionColumns.map(col => col.name);
    
    assert.ok(columnNames.includes('session_id'), 'Sessions table should have session_id column');
    assert.ok(columnNames.includes('user_id'), 'Sessions table should have user_id column');
    assert.ok(columnNames.includes('expires_at'), 'Sessions table should have expires_at column');
    assert.ok(columnNames.includes('data'), 'Sessions table should have data column');
    
    // Verify session_id is primary key
    const sessionIdColumn = sessionColumns.find(col => col.name === 'session_id');
    assert.strictEqual(sessionIdColumn.pk, 1, 'session_id should be primary key');
    
    rawDb.close();
  });

  await t.test('should have foreign key constraints', async (t) => {
    const rawDb = new Database(TEST_DB_PATH);
    
    const foreignKeys = rawDb.prepare("PRAGMA foreign_key_list(sessions)").all();
    
    assert.strictEqual(foreignKeys.length, 1, 'Sessions table should have one foreign key');
    assert.strictEqual(foreignKeys[0].table, 'users', 'Foreign key should reference users table');
    assert.strictEqual(foreignKeys[0].from, 'user_id', 'Foreign key should be on user_id column');
    assert.strictEqual(foreignKeys[0].to, 'id', 'Foreign key should reference id column');
    
    rawDb.close();
  });

  await t.test('should create initial admin user with bcrypt hashed password', async (t) => {
    const database = db.getDatabase(TEST_DB_PATH);
    
    // Verify admin user exists
    const rawDb = new Database(TEST_DB_PATH);
    const adminUser = rawDb.prepare("SELECT * FROM users WHERE username = 'admin'").get();
    
    assert.ok(adminUser, 'Admin user should exist');
    assert.strictEqual(adminUser.username, 'admin', 'Admin username should be correct');
    assert.ok(adminUser.password_hash, 'Admin should have password hash');
    assert.ok(adminUser.created_at, 'Admin should have created_at timestamp');
    
    // Verify password is properly hashed with bcrypt
    const isValidHash = bcrypt.compareSync('admin123', adminUser.password_hash);
    assert.ok(isValidHash, 'Admin password should be properly hashed with bcrypt');
    
    rawDb.close();
  });

  await t.test('should have correct database file permissions', async (t) => {
    const stats = fs.statSync(TEST_DB_PATH);
    
    // Verify file is readable and writable by owner
    assert.ok(stats.mode & fs.constants.S_IRUSR, 'Database should be readable by owner');
    assert.ok(stats.mode & fs.constants.S_IWUSR, 'Database should be writable by owner');
  });
});

test('Database Connection Interface Tests', async (t) => {
  await t.test('should export proper database interfaces', async (t) => {
    // Verify all required functions are exported
    assert.strictEqual(typeof db.getDatabase, 'function', 'getDatabase should be a function');
    assert.strictEqual(typeof db.closeDatabase, 'function', 'closeDatabase should be a function');
    assert.strictEqual(typeof db.authenticate, 'function', 'authenticate should be a function');
    assert.strictEqual(typeof db.createUser, 'function', 'createUser should be a function');
    assert.strictEqual(typeof db.createSession, 'function', 'createSession should be a function');
    assert.strictEqual(typeof db.getSession, 'function', 'getSession should be a function');
    assert.strictEqual(typeof db.deleteSession, 'function', 'deleteSession should be a function');
    assert.strictEqual(typeof db.cleanupSessions, 'function', 'cleanupSessions should be a function');
    assert.strictEqual(typeof db.getStats, 'function', 'getStats should be a function');
  });

  await t.test('should authenticate admin user correctly', async (t) => {
    const database = db.getDatabase(TEST_DB_PATH);
    
    // Test correct credentials
    const validAuth = await db.authenticate('admin', 'admin123');
    assert.ok(validAuth, 'Should authenticate with correct credentials');
    assert.strictEqual(validAuth.username, 'admin', 'Should return correct username');
    assert.ok(validAuth.id, 'Should return user ID');
    
    // Test wrong credentials
    const invalidAuth = await db.authenticate('admin', 'wrongpassword');
    assert.strictEqual(invalidAuth, null, 'Should return null for wrong password');
    
    // Test non-existent user
    const noUserAuth = await db.authenticate('nonexistent', 'password');
    assert.strictEqual(noUserAuth, null, 'Should return null for non-existent user');
  });

  await t.test('should create and manage sessions', async (t) => {
    const database = db.getDatabase(TEST_DB_PATH);
    
    // Get admin user ID
    const adminUser = await db.authenticate('admin', 'admin123');
    assert.ok(adminUser, 'Admin user should exist');
    
    // Create session
    const sessionId = 'test-session-123';
    const expiresAt = new Date(Date.now() + 3600000).toISOString(); // 1 hour from now
    const sessionData = JSON.stringify({ test: 'data' });
    
    const sessionResult = db.createSession(sessionId, adminUser.id, expiresAt, sessionData);
    assert.ok(sessionResult, 'Should create session successfully');
    
    // Retrieve session
    const retrievedSession = db.getSession(sessionId);
    assert.ok(retrievedSession, 'Should retrieve session');
    assert.strictEqual(retrievedSession.session_id, sessionId, 'Session ID should match');
    assert.strictEqual(retrievedSession.user_id, adminUser.id, 'User ID should match');
    assert.strictEqual(retrievedSession.username, 'admin', 'Username should be included');
    
    // Delete session
    const deleteResult = db.deleteSession(sessionId);
    assert.ok(deleteResult.changes > 0, 'Should delete session');
    
    // Verify session is gone
    const deletedSession = db.getSession(sessionId);
    assert.strictEqual(deletedSession, undefined, 'Session should be deleted');
  });

  await t.test('should get database statistics', async (t) => {
    const database = db.getDatabase(TEST_DB_PATH);
    
    const stats = db.getStats();
    assert.ok(stats, 'Should return stats object');
    assert.strictEqual(typeof stats.users, 'number', 'Should return user count');
    assert.strictEqual(typeof stats.activeSessions, 'number', 'Should return session count');
    assert.ok(stats.users >= 1, 'Should have at least one user (admin)');
  });

  await t.test('should cleanup expired sessions', async (t) => {
    const database = db.getDatabase(TEST_DB_PATH);
    
    // Create expired session
    const adminUser = await db.authenticate('admin', 'admin123');
    const expiredSessionId = 'expired-session';
    const pastDate = new Date(Date.now() - 3600000).toISOString(); // 1 hour ago
    
    db.createSession(expiredSessionId, adminUser.id, pastDate);
    
    // Verify session exists before cleanup (using raw query)
    const rawDb = database.db;
    const sessionBefore = rawDb.prepare('SELECT * FROM sessions WHERE session_id = ?').get(expiredSessionId);
    assert.ok(sessionBefore, 'Session should exist before cleanup');
    
    // Cleanup expired sessions
    const cleanupCount = db.cleanupSessions();
    assert.ok(cleanupCount >= 1, 'Should cleanup at least one expired session');
    
    // Verify expired session is gone
    const sessionAfter = rawDb.prepare('SELECT * FROM sessions WHERE session_id = ?').get(expiredSessionId);
    assert.strictEqual(sessionAfter, undefined, 'Expired session should be cleaned up');
  });

  // Clean up after tests
  await t.test('cleanup', async (t) => {
    db.closeDatabase();
    cleanupTestDB();
  });
});