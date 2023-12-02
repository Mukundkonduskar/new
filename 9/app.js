const os = require('os');

// Function 1: Get the operating system platform
console.log('Operating System Platform:', os.platform());

// Function 2: Get the operating system architecture
console.log('Operating System Architecture:', os.arch());

// Function 3: Get the total system memory
console.log('Total System Memory (bytes):', os.totalmem());

// Function 4: Get the free system memory
console.log('Free System Memory (bytes):', os.freemem());

// Function 5: Get information about the current user
console.log('User Info:', os.userInfo());
