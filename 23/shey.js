const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // 1. Set the status code of the response
  res.status(200);
  console.log(`Status code: ${res.statusCode}`);

  // 2. Set a header on the response
  res.set('Content-Type', 'text/plain');
  console.log(`Content-Type header: ${res.get('Content-Type')}`);

  // 3. Send a plain text response
  res.send('Hello from Express!');

  // 4. Send a JSON response
  res.json({ message: 'Hello from Express!' });

  // 5. Send a redirect to another URL
  res.redirect('/about');
});

app.get('/about', (req, res) => {
  res.send('This is the About page');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
