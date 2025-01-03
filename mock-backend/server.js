const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = [{ email: 'test@example.com', password: 'password' }];

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({ user: { email }, token: 'mock-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/api/auth/logout', (_, res) => {
  res.json({ message: 'Logged out successfully' });
});

app.listen(3000, () => console.log('Mock backend running on http://localhost:3000'));
