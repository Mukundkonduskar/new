// Step 1: Install Express using npm install express
// Step 2: Create a file (e.g., app.js) and write the following code

// Line 1: Require the Express module
const express = require('express');

// Line 2: Create an Express application
const app = express();

// Line 3: Define a route that handles all HTTP methods
app.all('/example', (req, res) => {
  // Line 4: Get the HTTP method of the incoming request
  const httpMethod = req.method;

  // Line 5: Send a response with the HTTP method
  res.send(`HTTP Method: ${httpMethod}`);
});

// Line 6: Set up the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
