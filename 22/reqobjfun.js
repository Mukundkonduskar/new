const express = require('express');
const app = express();
const port = 3000;

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.path}`);
  next();
});

// Route to demonstrate request object functions
app.get('/', (req, res) => {
  // 1. Get the request method (GET, POST, etc.)
  const method = req.method;

  // 2. Get the request URL
  const url = req.url;

  // 3. Get the request headers
  const headers = req.headers;

  // 4. Get query parameters
  const queryParams = req.query;

  // 5. Get request parameters from the URL
  const params = req.params;

  // Send a response with the information
  res.json({
    method,
    url,
    headers,
    queryParams,
    params
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
