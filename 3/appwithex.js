const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// Replace 'path/to/your/file.txt' with the actual path to your file
const filePath = 'C:/Users/Mukund/Desktop/POE - APL II/2/Club.txt';

// Content to be written to the file
const contentToWrite = 'Hello, File from Express!';

app.get('/', (req, res) => {
  // Write to file asynchronously
  fs.writeFile(filePath, contentToWrite, 'utf8', (err) => {
    if (err) {
      res.status(500).send(`Error writing to file: ${err.message}`);
    } else {
      res.send(`Content written to ${filePath}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
