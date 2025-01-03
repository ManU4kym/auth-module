import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Mock user data
const users = [{ email: 'test@example.com', password: 'password' }];

// Login endpoint
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({ user: { email }, token: 'mock-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Logout endpoint
app.post('/api/auth/logout', (_, res) => {
  res.json({ message: 'Logged out successfully' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock backend running on http://localhost:${PORT}`);
});
