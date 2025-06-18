import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello, I am a server');
  res.end();
});

server.listen(8081, () => {
  console.log('Server is running on http://localhost:8081');
});