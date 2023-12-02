const fs = require('fs');

// Replace 'path/to/your/file.txt' with the actual path to your file
const filePath = 'C:/Users/Mukund/Desktop/POE - APL II/2/Club.txt';

// Content to be written to the file
const contentToWrite = 'Hello, File!';

// Write to file asynchronously
fs.writeFile(filePath, contentToWrite, 'utf8', (err) => {
  if (err) {
    console.error(`Error writing to file: ${err.message}`);
  } else {
    console.log(`Content written to ${filePath}`);
  }
});
