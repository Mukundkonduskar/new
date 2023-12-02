// Importing the 'express' module and assigning it to the 'express' constant
const express = require('express');

// Creating an instance of the express application
const app = express();

// Defining a constant variable 'PORT' and setting its value to 3000
const PORT = 3000;

// Creating a new express Router instance
const router = express.Router();

// Defining a route handler for GET requests to the root path ('/')
router.get('/', function (req, res, next) {
    // Logging a message to the console when a request is made to the root path
    console.log("Router Working");

    // Ending the response (sending no content back to the client)
    res.end();
})

// Using the router middleware with the main express application
app.use(router);

// Starting the server to listen on the specified port (3000)
app.listen(PORT, function (err) {
    // Checking for any errors that may occur during server startup
    if (err) console.log(err);
    
    // Logging a message to the console if the server is successfully listening on the specified port
    console.log("Server listening on PORT", PORT);
});




