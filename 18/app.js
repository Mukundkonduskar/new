// Step 1: Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Step 2: Create an Express application
const app = express();

// Step 3: Use bodyParser middleware to parse JSON data
app.use(bodyParser.json());

// Step 4: Define a route for handling POST requests
app.post('/api/post-example', (req, res) => {
  // Step 5: Access the request body (parsed by bodyParser)
  const requestData = req.body;

  // Step 6: Process the data or perform any desired actions
  console.log('Received POST data:', requestData);

  // Step 7: Send a response back to the client
  res.json({ message: 'Data received successfully!' });
});

// Step 8: Start the Express server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


