const domain = require('domain');
const http = require('http');

// Function 1: Create a domain
const myDomain = domain.create();

// Function 2: Handle errors within the domain
myDomain.on('error', (err) => {
  console.error('Domain caught an error:', err.message);
});

// Function 3: Run code within the domain
myDomain.run(() => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    throw new Error('Simulated asynchronous error');
  }, 1000);
});

// Create a simple HTTP server to keep the process alive
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
}).listen(3000);

console.log('Server running at http://localhost:3000/');
