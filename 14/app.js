const fs = require('fs');

// Function 1: Create a readable stream from a file
const readableStream = fs.createReadStream('example.txt', 'utf8');

// Function 2: Listen for 'data' events to read chunks of data
readableStream.on('data', (chunk) => {
  // Function 3: Process each chunk of data
  console.log('Received chunk:', chunk);
});

// Function 4: Listen for 'end' event to know when the stream has ended
readableStream.on('end', () => {
  console.log('Stream reading complete.');
});

// Function 5: Listen for 'error' event to handle any errors during reading
readableStream.on('error', (err) => {
  console.error('Error reading stream:', err);
});
