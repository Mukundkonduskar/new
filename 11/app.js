const domain = require('domain');
const fs = require('fs');

// Function 1: Create a domain
const myDomain = domain.create();

// Function 2: Handle errors within the domain
myDomain.on('error', (err) => {
  console.error('Domain caught an error:', err.message);
});

// Function 3: Run code within the domain
myDomain.run(() => {
  // Simulate an asynchronous operation that might throw an error
  fs.readFile('nonexistentfile.txt', 'utf8', (err, data) => {
    if (err) {
      throw err; // This error will be caught by the domain's 'error' event
    }

    console.log('File content:', data);
  });
});

// The domain does not catch synchronous errors outside its run method
try {
  throw new Error('This synchronous error will not be caught by the domain.');
} catch (err) {
  console.error('Synchronous error outside the domain:', err.message);
}