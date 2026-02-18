import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

/**
 * Hash a plain text password using bcrypt with salt rounds >= 12
 * @param password - Plain text password to hash
 * @returns Promise that resolves to the hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Synchronous version of hashPassword for cases where async is not suitable
 * @param password - Plain text password to hash
 * @returns Hashed password
 */
export function hashPasswordSync(password: string): string {
  return bcrypt.hashSync(password, SALT_ROUNDS);
}

/**
 * Validate a plain text password against a bcrypt hash
 * @param password - Plain text password to validate
 * @param hash - Bcrypt hash to compare against
 * @returns Promise that resolves to true if password is valid, false otherwise
 */
export async function validatePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Synchronous version of validatePassword for cases where async is not suitable
 * @param password - Plain text password to validate
 * @param hash - Bcrypt hash to compare against
 * @returns True if password is valid, false otherwise
 */
export function validatePasswordSync(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}

/**
 * Get the salt rounds used for password hashing
 * @returns Number of salt rounds used
 */
export function getSaltRounds(): number {
  return SALT_ROUNDS;
}