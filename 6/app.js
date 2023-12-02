const fs = require('fs').promises;
const path = require('path');

// Function 1: Create a directory
async function createDirectory(directoryPath) {
  await fs.mkdir(directoryPath);
  console.log(`Directory created at: ${directoryPath}`);
}

// Function 2: Create a file
async function createFile(filePath, content) {
  await fs.writeFile(filePath, content);
  console.log(`File created at: ${filePath}`);
}

// Function 3: Write to a file
async function writeToFile(filePath, content) {
  await fs.appendFile(filePath, content);
  console.log(`Content appended to: ${filePath}`);
}

// Function 4: Read from a file
async function readFromFile(filePath) {
  const data = await fs.readFile(filePath, 'utf8');
  console.log(`Content of ${filePath}:\n${data}`);
}

// Function 5: Delete a file
async function deleteFile(filePath) {
  await fs.unlink(filePath);
  console.log(`File deleted: ${filePath}`);
}

// Example: Replace 'path/to/your/directory' with the actual path
const directoryPath = 'C:/Users/Mukund/Desktop/POE - APL II/6/new';
const fileName = 'example.txt';
const filePath = path.join(directoryPath, fileName);

// Demonstrate each function
createDirectory(directoryPath)
  .then(() => createFile(filePath, 'Hello, this is a sample file content.'))
  .then(() => writeToFile(filePath, '\nAppended content.'))
  .then(() => readFromFile(filePath))
  .then(() => deleteFile(filePath))
  .catch((err) => console.error('Error:', err));
