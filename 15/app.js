const fs = require('fs');

// Function 1: Create a writable stream to a file
const writableStream = fs.createWriteStream('output.txt');

// Function 2: Write data to the stream
writableStream.write('Hello, this is written to the stream.\n');
writableStream.write('This is another line of data.\n');

// Function 3: End the stream to indicate no more data will be written
writableStream.end();

// Function 4: Listen for the 'finish' event to know when the writing is done
writableStream.on('finish', () => {
  console.log('Writing to the stream is complete.');
});

// Function 5: Listen for the 'error' event to handle any errors
writableStream.on('error', (err) => {
  console.error('Error writing to the stream:', err);
});
