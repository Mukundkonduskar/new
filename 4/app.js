const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Serve the HTML file
    fs.readFile('public/index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Error reading HTML file: ${err.message}`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/result') {
    // Perform asynchronous operation and send result as JSON
    const inputData = 'Hello, Callback!';

    performAsyncOperation(inputData, (err, result) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ result }));
      }
    });
  } else {
    // Handle other routes (404)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Function to simulate an asynchronous operation
function performAsyncOperation(data, callback) {
  setTimeout(() => {
    if (data) {
      const processedData = data.toUpperCase();
      callback(null, processedData);
    } else {
      const error = new Error('No data provided');
      callback(error, null);
    }
  }, 1000);
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
