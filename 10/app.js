const path = require('path');

// Function 1: Join path segments
const joinedPath = path.join('/path', 'to', 'directory', 'file.txt');
console.log('Joined Path:', joinedPath);

// Function 2: Resolve an absolute path
const resolvedPath = path.resolve('file.txt');
console.log('Resolved Path:', resolvedPath);

// Function 3: Get the directory name of a path
const dirname = path.dirname('/path/to/directory/file.txt');
console.log('Directory Name:', dirname);

// Function 4: Get the file extension of a path
const extname = path.extname('file.txt');
console.log('File Extension:', extname);

// Function 5: Parse a path into an object
const pathObj = path.parse('/path/to/directory/file.txt');
console.log('Parsed Path:', pathObj);
