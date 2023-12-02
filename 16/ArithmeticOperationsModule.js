// Define a module for arithmetic operations

// Function to add two numbers
exports.add = function (a, b) {
    return a + b;
  };
  
  // Function to subtract two numbers
  exports.subtract = function (a, b) {
    return a - b;
  };
  
  // Function to multiply two numbers
  exports.multiply = function (a, b) {
    return a * b;
  };
  
  // Function to divide two numbers
  exports.divide = function (a, b) {
    // Ensure b is not zero to avoid division by zero
    return b !== 0 ? a / b : 'Cannot divide by zero';
  };
  