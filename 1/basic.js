// Import the http module
const http = require('http');

// Create an HTTP server that responds with "Hello" to all requests
const server = http.createServer((req, res) => {
  // Set the content type of the response
  res.setHeader('Content-Type', 'text/html');

  // Send the "Hello" message to the browser
  res.end('Hello\n');
});

// Listen on port 3000 and IP address 127.0.0.1
const PORT = 3000;
const IP = '127.0.0.1';
server.listen(PORT, IP, () => {
  console.log(`Server running at http://${IP}:${PORT}/`);
});