const dns = require('dns');

// Function 1: dns.lookup - Resolves a domain to an IP address
dns.lookup('www.example.com', (err, address, family) => {
  if (err) {
    console.error('Error in dns.lookup:', err);
    return;
  }

  console.log('dns.lookup result - IP address:', address);
  console.log('IP address family:', family);
});

// Function 2: dns.resolve - Resolves a domain to an array of record types
dns.resolve('www.example.com', 'A', (err, addresses) => {
  if (err) {
    console.error('Error in dns.resolve:', err);
    return;
  }

  console.log('dns.resolve result - IP addresses:', addresses);
});

// Function 3: dns.reverse - Resolves an IP address to an array of domain names
dns.reverse('8.8.8.8', (err, hostnames) => {
  if (err) {
    console.error('Error in dns.reverse:', err);
    return;
  }

  console.log('dns.reverse result - Hostnames:', hostnames);
});
