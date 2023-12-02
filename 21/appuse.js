const express = require('express');
const app = express();
const PORT = 3000;

// This middleware will not allow the
// request to go beyond it
app.use(function (req, res, next) {
	console.log("Middleware called")
	next();
});

// Requests will never reach this route
app.get('/user', function (req, res) {
	console.log("/user request called");
	res.send('hello');
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});