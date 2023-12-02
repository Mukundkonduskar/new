const fs = require('fs');

// Replace 'path/to/your/file.txt' with the actual path to your file
const filePath = 'C:/Users/Mukund/Desktop/POE - APL II/2/Club.txt';

// Read file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
  } else {
    console.log(`File contents:\n${data}`);
  }
});