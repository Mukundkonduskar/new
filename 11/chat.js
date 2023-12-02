const net = require('net');

// Function 1: Creating a TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');

  // Function 2: Handling data received from clients
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
  });

  // Function 3: Handling client disconnection
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Function 4: Listening on a specific port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Function 5: Making a TCP client
const client = net.createConnection({ port: PORT }, () => {
  console.log('Connected to server');
  // Sending data to the server
  client.write('Hello, server!');
});

// Handling data received from the server by the client
client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
  // Closing the client connection
  client.end();
});
