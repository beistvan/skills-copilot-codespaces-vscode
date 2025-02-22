// Create web server
// Create a new web server using Express.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body-parser
app.use(bodyParser.json());

// Define a port
const port = 3000;

// Define an array of comments
const comments = [];

// Define a path for getting comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Define a path for creating comments
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Run the server
// Run the server by running the following command in the terminal:
// node comments.js
// The server is now running on port 3000. You can test the server using a REST client like Postman.