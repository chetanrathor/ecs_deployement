// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:chetanrathor/ecs_deployement.git
// git push -u origin main