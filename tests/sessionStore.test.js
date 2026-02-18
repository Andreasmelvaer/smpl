const { test, describe, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

// Import the compiled JavaScript modules
const { SqliteSessionStore, getDatabase, closeDatabase } = require('../dist/database');

describe('SqliteSessionStore', () => {
  const testDbPath = path.join(__dirname, 'test-session-store.db');
  let sessionStore;

  beforeEach(() => {
    // Clean up any existing test database
    if (fs.existsSync(testDbPath)) {
      fs.unlinkSync(testDbPath);
    }
    
    // Clean up data directory if it exists
    const dataDir = './data';
    if (fs.existsSync(dataDir)) {
      const files = fs.readdirSync(dataDir);
      files.forEach(file => {
        fs.unlinkSync(path.join(dataDir, file));
      });
    }

    // Close any existing database connection
    closeDatabase();

    // Initialize session store
    sessionStore = new SqliteSessionStore();
    
    // Clear all existing sessions to ensure clean state
    sessionStore.clear();
  });

  afterEach(() => {
    // Close database connections
    closeDatabase();
    
    // Clean up test database
    if (fs.existsSync(testDbPath)) {
      fs.unlinkSync(testDbPath);
    }
  });

  test('should extend express-session Store', () => {
    const { Store } = require('express-session');
    assert(sessionStore instanceof Store, 'SqliteSessionStore should extend Store');
  });

  test('should set and get session data', (t, done) => {
    const sessionId = 'test-session-123';
    const sessionData = {
      userId: 1,
      username: 'testuser',
      cookie: { maxAge: 3600000 }
    };

    // Set session data
    sessionStore.set(sessionId, sessionData, (setError) => {
      assert.strictEqual(setError, undefined, 'Set should not return error');
      
      // Get session data
      sessionStore.get(sessionId, (getError, retrievedData) => {
        assert.strictEqual(getError, null, 'Get should not return error');
        assert.strictEqual(typeof retrievedData, 'object', 'Should return session object');
        assert.strictEqual(retrievedData.userId, 1, 'Should retrieve correct userId');
        assert.strictEqual(retrievedData.username, 'testuser', 'Should retrieve correct username');
        done();
      });
    });
  });

  test('should return null for non-existent session', (t, done) => {
    sessionStore.get('non-existent-session', (error, data) => {
      assert.strictEqual(error, null, 'Should not return error');
      assert.strictEqual(data, null, 'Should return null for non-existent session');
      done();
    });
  });

  test('should destroy session', (t, done) => {
    const sessionId = 'test-session-destroy';
    const sessionData = {
      userId: 1,
      username: 'testuser',
      cookie: { maxAge: 3600000 }
    };

    // Set session data
    sessionStore.set(sessionId, sessionData, (setError) => {
      assert.strictEqual(setError, undefined, 'Set should not return error');
      
      // Destroy session
      sessionStore.destroy(sessionId, (destroyError) => {
        assert.strictEqual(destroyError, undefined, 'Destroy should not return error');
        
        // Try to get destroyed session
        sessionStore.get(sessionId, (getError, retrievedData) => {
          assert.strictEqual(getError, null, 'Get should not return error');
          assert.strictEqual(retrievedData, null, 'Destroyed session should return null');
          done();
        });
      });
    });
  });

  test('should touch session to update expiration', (t, done) => {
    const sessionId = 'test-session-touch';
    const sessionData = {
      userId: 1,
      username: 'testuser',
      cookie: { maxAge: 1000 } // Very short expiration
    };

    // Set session data with short expiration
    sessionStore.set(sessionId, sessionData, (setError) => {
      assert.strictEqual(setError, undefined, 'Set should not return error');
      
      // Update expiration with touch
      const updatedSessionData = {
        ...sessionData,
        cookie: { maxAge: 3600000 } // Long expiration
      };
      
      sessionStore.touch(sessionId, updatedSessionData, (touchError) => {
        assert.strictEqual(touchError, undefined, 'Touch should not return error');
        
        // Verify session still exists after touch
        sessionStore.get(sessionId, (getError, retrievedData) => {
          assert.strictEqual(getError, null, 'Get should not return error');
          assert.strictEqual(typeof retrievedData, 'object', 'Should return session object');
          assert.strictEqual(retrievedData.userId, 1, 'Should retrieve correct userId');
          done();
        });
      });
    });
  });

  test('should update existing session', (t, done) => {
    const sessionId = 'test-session-update';
    const initialData = {
      userId: 1,
      username: 'testuser',
      cookie: { maxAge: 3600000 }
    };
    
    const updatedData = {
      userId: 1,
      username: 'testuser',
      lastAction: 'login',
      cookie: { maxAge: 3600000 }
    };

    // Set initial session data
    sessionStore.set(sessionId, initialData, (setError) => {
      assert.strictEqual(setError, undefined, 'Set should not return error');
      
      // Update session data
      sessionStore.set(sessionId, updatedData, (updateError) => {
        assert.strictEqual(updateError, undefined, 'Update should not return error');
        
        // Get updated session data
        sessionStore.get(sessionId, (getError, retrievedData) => {
          assert.strictEqual(getError, null, 'Get should not return error');
          assert.strictEqual(retrievedData.userId, 1, 'Should retrieve correct userId');
          assert.strictEqual(retrievedData.lastAction, 'login', 'Should retrieve updated data');
          done();
        });
      });
    });
  });

  test('should get session count', (t, done) => {
    const sessionData = {
      userId: 1,
      username: 'testuser',
      cookie: { maxAge: 3600000 }
    };

    // Initially should be 0 sessions
    sessionStore.length((error, count) => {
      assert.strictEqual(error, null, 'Length should not return error');
      
      // Set a session
      sessionStore.set('test-session-count', sessionData, () => {
        // Should now be 1 session
        sessionStore.length((error2, count2) => {
          assert.strictEqual(error2, null, 'Length should not return error');
          assert.strictEqual(count2, 1, 'Should have 1 active session');
          done();
        });
      });
    });
  });

  test('should clear all sessions', (t, done) => {
    const sessionData = {
      userId: 1,
      username: 'testuser',
      cookie: { maxAge: 3600000 }
    };

    // Set multiple sessions
    sessionStore.set('session-1', sessionData, () => {
      sessionStore.set('session-2', sessionData, () => {
        // Clear all sessions
        sessionStore.clear((clearError) => {
          assert.strictEqual(clearError, undefined, 'Clear should not return error');
          
          // Check session count is 0
          sessionStore.length((lengthError, count) => {
            assert.strictEqual(lengthError, null, 'Length should not return error');
            assert.strictEqual(count, 0, 'Should have 0 sessions after clear');
            done();
          });
        });
      });
    });
  });

  test('should cleanup expired sessions', (t, done) => {
    // We need to directly insert expired sessions to test cleanup
    const db = getDatabase();
    const sessionId = 'expired-session';
    const userId = 1;
    const expiredDate = new Date(Date.now() - 1000).toISOString(); // 1 second ago
    
    // Insert expired session directly
    db.createSession(sessionId, userId, expiredDate, JSON.stringify({ test: 'data' }));
    
    // Cleanup expired sessions
    sessionStore.cleanupExpiredSessions((error, deletedCount) => {
      assert.strictEqual(error, null, 'Cleanup should not return error');
      assert.strictEqual(typeof deletedCount, 'number', 'Should return number of deleted sessions');
      assert(deletedCount >= 1, 'Should delete at least 1 expired session');
      
      // Verify expired session was removed
      sessionStore.get(sessionId, (getError, data) => {
        assert.strictEqual(getError, null, 'Get should not return error');
        assert.strictEqual(data, null, 'Expired session should be null');
        done();
      });
    });
  });

  test('should handle JSON parsing errors gracefully', (t, done) => {
    // We need to directly insert invalid JSON to test error handling
    const db = getDatabase();
    const sessionId = 'invalid-json-session';
    const userId = 1;
    const expiresAt = new Date(Date.now() + 3600000).toISOString();
    
    // Insert session with invalid JSON directly
    db.db.prepare(`
      INSERT INTO sessions (session_id, user_id, expires_at, data)
      VALUES (?, ?, ?, ?)
    `).run(sessionId, userId, expiresAt, 'invalid json {');
    
    // Try to get session with invalid JSON
    sessionStore.get(sessionId, (error, data) => {
      assert.strictEqual(typeof error, 'object', 'Should return error for invalid JSON');
      assert.strictEqual(data, null, 'Should return null for invalid JSON');
      done();
    });
  });

  test('should persist sessions across store instances', (t, done) => {
    const sessionId = 'persistent-session';
    const sessionData = {
      userId: 1,
      username: 'testuser',
      cookie: { maxAge: 3600000 }
    };

    // Set session with first store instance
    sessionStore.set(sessionId, sessionData, (setError) => {
      assert.strictEqual(setError, undefined, 'Set should not return error');
      
      // Create new store instance
      const newSessionStore = new SqliteSessionStore();
      
      // Get session with new store instance
      newSessionStore.get(sessionId, (getError, retrievedData) => {
        assert.strictEqual(getError, null, 'Get should not return error');
        assert.strictEqual(typeof retrievedData, 'object', 'Should return session object');
        assert.strictEqual(retrievedData.userId, 1, 'Should retrieve correct userId from new store instance');
        done();
      });
    });
  });
});