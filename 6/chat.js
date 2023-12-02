const fs = require('fs');
const path = require('path');

// Function 1: Read file contents asynchronously
function readFileContents(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(`Error reading file: ${err.message}`);
    } else {
      callback(null, data);
    }
  });
}

// Usage of function 1
const filePathToRead = 'C:/Users/Mukund/Desktop/POE - APL II/6/hello.txt';
readFileContents(filePathToRead, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File Contents:', data);
  }
});

// Function 2: Write content to a file
const filePathToWrite = 'C:/Users/Mukund/Desktop/POE - APL II/6/hello.txt';
const contentToWrite = 'Hello, this is some content to write to a file.';
fs.writeFile(filePathToWrite, contentToWrite, 'utf8', (err) => {
  if (err) {
    console.error(`Error writing to file: ${err.message}`);
  } else {
    console.log('File has been written successfully!');
  }
});

// Function 3: Check if a file exists
const fileToCheck = 'C:/Users/Mukund/Desktop/POE - APL II/6/hello.txt';
fs.access(fileToCheck, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`File does not exist: ${fileToCheck}`);
  } else {
    console.log(`File exists: ${fileToCheck}`);
  }
});

// Function 4: Create a new directory
const newDirectoryName = 'C:/Users/Mukund/Desktop/POE - APL II/6/new directory';
fs.mkdir(newDirectoryName, { recursive: true }, (err) => {
  if (err) {
    console.error(`Error creating directory: ${err.message}`);
  } else {
    console.log(`Directory created: ${newDirectoryName}`);
  }
});

// Function 5: List files in a directory
const directoryToRead = 'C:/Users/Mukund/Desktop/POE - APL II/6/';
fs.readdir(directoryToRead, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err.message}`);
  } else {
    console.log(`Files in ${directoryToRead}:`, files);
  }
});
