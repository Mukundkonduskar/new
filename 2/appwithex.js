const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// Replace 'path/to/your/file.txt' with the actual path to your file
const filePath = 'C:/Users/Mukund/Desktop/POE - APL II/2/Club.txt';

app.get('/', (req, res) => {
  // Read file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send(`Error reading file: ${err.message}`);
    } else {
      res.send(`File contents:\n${data}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
