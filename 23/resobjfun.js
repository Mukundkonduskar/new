const express = require('express');
const app = express();
const port = 3000;

// Middleware to log response details
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`Response status: ${res.statusCode}`);
  });
  next();
});

// Route to demonstrate response object functions
app.get('/demo', (req, res) => {
  // 1. Set response status code
  res.status(200);

  // 2. Set response headers
  res.set('Content-Type', 'application/json');

  // 3. Send JSON response
  res.json({ message: 'Express.js response object demo' });

  // 4. Send response with custom status code and message
  // res.status(404).send('Not Found');

  // 5. Redirect to another URL
  // res.redirect('https://www.example.com');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
