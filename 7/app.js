// Function 1: Log a message
console.log('Hello, this is a log message.');

// Function 2: Log an error message
console.error('Oops! An error occurred.');

// Function 3: Log a warning message
console.warn('Warning! This is a warning message.');

// Function 4: Log an information message
console.info('Information: This is an informative message.');

// Function 5: Time and TimeEnd to measure execution time
console.time('timer');
// Simulate a time-consuming operation
for (let i = 0; i < 1000000; i++) {
  // Do something
}
console.timeEnd('timer');
