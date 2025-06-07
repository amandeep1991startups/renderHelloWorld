// server/server.js
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS middleware to allow requests from the client
app.use(cors());

// API endpoint that returns a "Hello World" message
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Server!' });
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
