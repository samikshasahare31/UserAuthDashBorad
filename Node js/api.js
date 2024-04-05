const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors module

const app = express();
const port = 8000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Sample users data (Replace this with your actual user data)
let users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Find user by username and password
  const user = users.find(u => u.username === username && u.password === password);

  // If user not found, return error
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // If user found, return success
  res.json({ message: 'Login successful', user });
});

// Registration endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Check if username already exists
  if (users.some(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Add new user
  const newUser = {
    id: users.length + 1,
    username,
    password
  };
  users.push(newUser);

  res.json({ message: 'Registration successful', user: newUser });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
