const fs = require('fs');

// Function to read file contents asynchronously and execute a callback
function readFileAndPrint(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(`Error reading file: ${err.message}`);
    } else {
      callback(null, data);
    }
  });
}

// Usage of the readFileAndPrint function
const filePath = 'C:/Users/Mukund/Desktop/POE - APL II/2/Club.txt';

// Callback function to handle the result
function handleFileReadError(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('File read successfully!');
  }
}

// Reading the file and printing the contents using the callback
readFileAndPrint(filePath, handleFileReadError);
