
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('minimal project for yandex virt dockerfile');
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
