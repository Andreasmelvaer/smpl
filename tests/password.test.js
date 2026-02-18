const test = require('node:test');
const assert = require('node:assert');
const bcrypt = require('bcrypt');

// Import the compiled JavaScript versions of the password utilities
// (they'll be available after TypeScript compilation)
let password;

test('Password Hashing Utility Tests', async (t) => {
  // Import after build to ensure compiled files exist
  await t.test('import password utilities', async (t) => {
    try {
      password = require('../dist/auth/password');
      assert.ok(password.hashPassword, 'hashPassword should be exported');
      assert.ok(password.hashPasswordSync, 'hashPasswordSync should be exported');
      assert.ok(password.validatePassword, 'validatePassword should be exported');
      assert.ok(password.validatePasswordSync, 'validatePasswordSync should be exported');
      assert.ok(password.getSaltRounds, 'getSaltRounds should be exported');
    } catch (err) {
      // If compiled file doesn't exist, require the TypeScript source directly using ts-node
      // For now, we'll test the functionality through the database layer
      assert.fail('Password utilities not found. Make sure to run npm run build first.');
    }
  });

  await t.test('getSaltRounds should return value >= 12', async (t) => {
    const saltRounds = password.getSaltRounds();
    assert.strictEqual(typeof saltRounds, 'number', 'Salt rounds should be a number');
    assert.ok(saltRounds >= 12, 'Salt rounds should be >= 12 for security');
  });

  await t.test('hashPasswordSync should hash password with bcrypt', async (t) => {
    const plainPassword = 'testpassword123';
    const hashedPassword = password.hashPasswordSync(plainPassword);
    
    // Verify it's a valid bcrypt hash format
    assert.ok(hashedPassword.startsWith('$2b$'), 'Hash should start with bcrypt identifier');
    assert.ok(hashedPassword.length >= 50, 'Hash should be proper length');
    
    // Verify the hash contains the correct salt rounds
    const saltRounds = hashedPassword.split('$')[2];
    assert.ok(parseInt(saltRounds) >= 12, 'Hash should use salt rounds >= 12');
    
    // Verify it's different from the plain password
    assert.notStrictEqual(hashedPassword, plainPassword, 'Hash should not equal plain password');
  });

  await t.test('hashPassword async should hash password with bcrypt', async (t) => {
    const plainPassword = 'testpassword456';
    const hashedPassword = await password.hashPassword(plainPassword);
    
    // Verify it's a valid bcrypt hash format
    assert.ok(hashedPassword.startsWith('$2b$'), 'Hash should start with bcrypt identifier');
    assert.ok(hashedPassword.length >= 50, 'Hash should be proper length');
    
    // Verify the hash contains the correct salt rounds
    const saltRounds = hashedPassword.split('$')[2];
    assert.ok(parseInt(saltRounds) >= 12, 'Hash should use salt rounds >= 12');
    
    // Verify it's different from the plain password
    assert.notStrictEqual(hashedPassword, plainPassword, 'Hash should not equal plain password');
  });

  await t.test('validatePasswordSync should validate correct password', async (t) => {
    const plainPassword = 'validpassword789';
    const hashedPassword = password.hashPasswordSync(plainPassword);
    
    // Test correct password
    const isValid = password.validatePasswordSync(plainPassword, hashedPassword);
    assert.strictEqual(isValid, true, 'Should validate correct password as true');
    
    // Test incorrect password
    const isInvalid = password.validatePasswordSync('wrongpassword', hashedPassword);
    assert.strictEqual(isInvalid, false, 'Should validate incorrect password as false');
  });

  await t.test('validatePassword async should validate correct password', async (t) => {
    const plainPassword = 'asyncvalidpassword';
    const hashedPassword = await password.hashPassword(plainPassword);
    
    // Test correct password
    const isValid = await password.validatePassword(plainPassword, hashedPassword);
    assert.strictEqual(isValid, true, 'Should validate correct password as true');
    
    // Test incorrect password
    const isInvalid = await password.validatePassword('wrongpassword', hashedPassword);
    assert.strictEqual(isInvalid, false, 'Should validate incorrect password as false');
  });

  await t.test('different calls should produce different hashes for same password', async (t) => {
    const plainPassword = 'samepassword';
    const hash1 = password.hashPasswordSync(plainPassword);
    const hash2 = password.hashPasswordSync(plainPassword);
    
    // Hashes should be different due to salt randomization
    assert.notStrictEqual(hash1, hash2, 'Different hash calls should produce different hashes');
    
    // But both should validate the same password
    assert.ok(password.validatePasswordSync(plainPassword, hash1), 'First hash should validate');
    assert.ok(password.validatePasswordSync(plainPassword, hash2), 'Second hash should validate');
  });

  await t.test('password validation should use bcrypt.compare internally', async (t) => {
    const plainPassword = 'bcrypttest';
    const hashedPassword = password.hashPasswordSync(plainPassword);
    
    // Verify our utility function produces same result as direct bcrypt usage
    const utilityResult = password.validatePasswordSync(plainPassword, hashedPassword);
    const bcryptResult = bcrypt.compareSync(plainPassword, hashedPassword);
    
    assert.strictEqual(utilityResult, bcryptResult, 'Utility function should match bcrypt.compareSync result');
  });

  await t.test('edge cases should be handled properly', async (t) => {
    // Empty password
    const emptyPassword = '';
    const emptyHash = password.hashPasswordSync(emptyPassword);
    assert.ok(password.validatePasswordSync('', emptyHash), 'Empty password should hash and validate');
    
    // Long password
    const longPassword = 'a'.repeat(1000);
    const longHash = password.hashPasswordSync(longPassword);
    assert.ok(password.validatePasswordSync(longPassword, longHash), 'Long password should hash and validate');
    
    // Special characters
    const specialPassword = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const specialHash = password.hashPasswordSync(specialPassword);
    assert.ok(password.validatePasswordSync(specialPassword, specialHash), 'Special characters should hash and validate');
  });
});

// Integration test to verify the database layer uses these utilities
test('Database Integration with Password Utilities', async (t) => {
  const db = require('../src/database');
  const TEST_DB_PATH = './test-data/integration-test.db';
  
  // Clean up function
  function cleanupTestDB() {
    const fs = require('fs');
    const path = require('path');
    const testDir = path.dirname(TEST_DB_PATH);
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true, force: true });
    }
  }
  
  await t.test('database should use password utilities for user creation', async (t) => {
    cleanupTestDB();
    const database = db.getDatabase(TEST_DB_PATH);
    
    const testUser = 'testuser';
    const testPassword = 'testpassword123';
    
    // Create user
    const userResult = db.createUser(testUser, testPassword);
    assert.ok(userResult.id, 'User should be created with ID');
    assert.strictEqual(userResult.username, testUser, 'Username should match');
    
    // Verify authentication works (which uses password validation internally)
    const authResult = await db.authenticate(testUser, testPassword);
    assert.ok(authResult, 'Authentication should succeed with correct password');
    assert.strictEqual(authResult.username, testUser, 'Authenticated user should match');
    
    // Verify wrong password fails
    const wrongAuthResult = await db.authenticate(testUser, 'wrongpassword');
    assert.strictEqual(wrongAuthResult, null, 'Authentication should fail with wrong password');
    
    db.closeDatabase();
    cleanupTestDB();
  });
});