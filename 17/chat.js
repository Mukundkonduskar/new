const express = require('express');
const app = express();
const port = 3000;

// Middleware to log the HTTP method for every request
app.use((req, res, next) => {
  console.log(`HTTP Method: ${req.method}`);
  next();
});

// Route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

// Route handler for the /example path
//app.post('/example', next(),(req, res) => {
  //res.send('This is a POST request to /example');
//});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
