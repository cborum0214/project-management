const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Example route for projects
app.get('/projects', (req, res) => {
  res.json([
    { id: 1, name: 'Project 1', description: 'First project description' },
    { id: 2, name: 'Project 2', description: 'Second project description' },
  ]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
