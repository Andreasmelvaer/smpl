import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import { 
  getDatabase, 
  authenticate, 
  createUser, 
  SqliteSessionStore,
  AuthenticatedUser 
} from './database';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
const dbPath = process.env.TEST_DB_PATH || './data/dashboard.db';
const database = getDatabase(dbPath);
app.use(session({
  store: new SqliteSessionStore(),
  secret: process.env.SESSION_SECRET || 'dev-secret-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  }
}));

// Types for session
declare module 'express-session' {
  interface SessionData {
    user?: AuthenticatedUser;
    isAuthenticated?: boolean;
  }
}

// Input validation and sanitization helpers
function validateUsername(username: any): string {
  if (typeof username !== 'string') {
    throw new Error('Username must be a string');
  }
  const sanitized = username.trim();
  if (!sanitized) {
    throw new Error('Username cannot be empty');
  }
  if (sanitized.length < 3) {
    throw new Error('Username must be at least 3 characters long');
  }
  if (sanitized.length > 50) {
    throw new Error('Username must be at most 50 characters long');
  }
  if (!/^[a-zA-Z0-9_-]+$/.test(sanitized)) {
    throw new Error('Username can only contain letters, numbers, underscores, and hyphens');
  }
  return sanitized;
}

function validatePassword(password: any): string {
  if (typeof password !== 'string') {
    throw new Error('Password must be a string');
  }
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }
  if (password.length > 128) {
    throw new Error('Password must be at most 128 characters long');
  }
  // Basic password strength check
  if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
    throw new Error('Password must contain at least one letter and one number');
  }
  return password;
}

function sanitizeHtml(input: string): string {
  // Basic HTML/XSS prevention
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Authentication middleware
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session.isAuthenticated && req.session.user) {
    next();
  } else {
    res.status(401).json({ error: 'Authentication required' });
  }
}

// Admin authentication middleware
function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!req.session.isAuthenticated || !req.session.user) {
    res.status(401).json({ error: 'Authentication required' });
    return;
  }
  
  // For now, only the 'admin' user has admin privileges
  // In a production system, this would check a user role/permission field
  if (req.session.user.username !== 'admin') {
    res.status(403).json({ error: 'Admin privileges required' });
    return;
  }
  
  next();
}

// User Management API Endpoints

// GET /api/users - List all users (admin only)
app.get('/api/users', requireAdmin, (req: Request, res: Response): void => {
  try {
    const db = getDatabase(dbPath);
    const stmt = db.db.prepare('SELECT id, username, created_at, updated_at FROM users ORDER BY created_at DESC');
    const users = stmt.all();
    
    res.json({
      success: true,
      data: users,
      total: users.length
    });
  } catch (error: any) {
    console.error('Error fetching users:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch users' 
    });
  }
});

// POST /api/users - Create new user with validation
app.post('/api/users', requireAdmin, (req: Request, res: Response): void => {
  try {
    const { username, password } = req.body;

    // Input validation
    const validUsername = validateUsername(username);
    const validPassword = validatePassword(password);

    // Create user
    const result = createUser(validUsername, validPassword);
    
    res.status(201).json({
      success: true,
      data: {
        id: result.id,
        username: result.username,
        message: 'User created successfully'
      }
    });
  } catch (error: any) {
    console.error('Error creating user:', error);
    
    if (error.message === 'Username already exists') {
      res.status(409).json({ 
        success: false, 
        error: 'Username already exists' 
      });
    } else if (error.message.includes('Username') || error.message.includes('Password')) {
      res.status(400).json({ 
        success: false, 
        error: error.message 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        error: 'Failed to create user' 
      });
    }
  }
});

// PUT /api/users/:id - Update user (admin only)
app.put('/api/users/:id', requireAdmin, (req: Request, res: Response): void => {
  try {
    const userIdParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const userId = parseInt(userIdParam);
    if (isNaN(userId)) {
      res.status(400).json({ 
        success: false, 
        error: 'Invalid user ID' 
      });
      return;
    }

    const { username, password } = req.body;

    // Check if user exists
    const db = getDatabase(dbPath);
    const existingUser = db.getUserById(userId);
    if (!existingUser) {
      res.status(404).json({ 
        success: false, 
        error: 'User not found' 
      });
      return;
    }

    let updateFields: string[] = [];
    let values: any[] = [];

    // Update username if provided
    if (username !== undefined) {
      const validUsername = validateUsername(username);
      updateFields.push('username = ?');
      values.push(validUsername);
    }

    // Update password if provided
    if (password !== undefined) {
      const validPassword = validatePassword(password);
      const { hashPasswordSync } = require('./auth/password');
      const hashedPassword = hashPasswordSync(validPassword);
      updateFields.push('password_hash = ?');
      values.push(hashedPassword);
    }

    if (updateFields.length === 0) {
      res.status(400).json({ 
        success: false, 
        error: 'No valid fields provided for update' 
      });
      return;
    }

    // Add updated_at timestamp
    updateFields.push('updated_at = ?');
    values.push(new Date().toISOString());

    // Add user ID for WHERE clause
    values.push(userId);

    // Execute update
    const updateStmt = db.db.prepare(`
      UPDATE users 
      SET ${updateFields.join(', ')} 
      WHERE id = ?
    `);
    
    const result = updateStmt.run(...values);
    
    if (result.changes === 0) {
      res.status(404).json({ 
        success: false, 
        error: 'User not found' 
      });
      return;
    }

    // Fetch updated user data (without password hash)
    const updatedUser = db.db.prepare('SELECT id, username, created_at, updated_at FROM users WHERE id = ?').get(userId);
    
    res.json({
      success: true,
      data: updatedUser,
      message: 'User updated successfully'
    });
  } catch (error: any) {
    console.error('Error updating user:', error);
    
    if (error.message === 'Username already exists' || error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      res.status(409).json({ 
        success: false, 
        error: 'Username already exists' 
      });
    } else if (error.message.includes('Username') || error.message.includes('Password')) {
      res.status(400).json({ 
        success: false, 
        error: error.message 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        error: 'Failed to update user' 
      });
    }
  }
});

// DELETE /api/users/:id - Delete user (admin only)
app.delete('/api/users/:id', requireAdmin, (req: Request, res: Response): void => {
  try {
    const userIdParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const userId = parseInt(userIdParam);
    if (isNaN(userId)) {
      res.status(400).json({ 
        success: false, 
        error: 'Invalid user ID' 
      });
      return;
    }

    // Prevent admin from deleting themselves
    if (req.session.user && req.session.user.id === userId) {
      res.status(400).json({ 
        success: false, 
        error: 'Cannot delete your own user account' 
      });
      return;
    }

    // Check if user exists
    const db = getDatabase(dbPath);
    const existingUser = db.getUserById(userId);
    if (!existingUser) {
      res.status(404).json({ 
        success: false, 
        error: 'User not found' 
      });
      return;
    }

    // Delete user (cascading delete will handle sessions)
    const deleteStmt = db.db.prepare('DELETE FROM users WHERE id = ?');
    const result = deleteStmt.run(userId);
    
    if (result.changes === 0) {
      res.status(404).json({ 
        success: false, 
        error: 'User not found' 
      });
      return;
    }

    res.json({
      success: true,
      data: {
        id: userId,
        username: existingUser.username
      },
      message: 'User deleted successfully'
    });
  } catch (error: any) {
    console.error('Error deleting user:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to delete user' 
    });
  }
});

// Authentication endpoints for testing
app.post('/api/auth/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ error: 'Username and password are required' });
      return;
    }

    const user = await authenticate(username, password);
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    req.session.user = user;
    req.session.isAuthenticated = true;

    res.json({
      success: true,
      user: {
        id: user.id,
        username: user.username
      }
    });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/auth/logout', (req: Request, res: Response): void => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
      res.status(500).json({ error: 'Failed to logout' });
      return;
    }
    res.json({ success: true, message: 'Logged out successfully' });
  });
});

// Error handling middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

export default app;

// Start server if run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`User management API server running on port ${PORT}`);
  });
}