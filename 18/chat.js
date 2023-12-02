const express = require('express');
const bodyParser = require('body-parser'); // This middleware is used to parse the request body
const app = express();
const port = 3000;

// Middleware to parse JSON and form data in the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route handler for the root path (responds to both GET and POST requests)
app.route('/')
  .get((req, res) => {
    res.send('Hello, this is the root path!');
  })
  .post((req, res) => {
    const requestData = req.body; // Access the parsed request body
    res.json({ message: 'Received a POST request', data: requestData });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
