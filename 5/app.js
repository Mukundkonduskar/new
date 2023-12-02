const fs = require('fs');
const path = require('path');

// Function to read contents of a directory and display them
function readDirectoryContents(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    console.log('Contents of the directory:', directoryPath);
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`);
    });
  });
}

// Example: Replace 'path/to/your/directory' with the actual path to your directory
const directoryPath = 'C:/Users/Mukund/Desktop/POE - APL II/2/';

// Call the function with the specified directory path
readDirectoryContents(directoryPath);
