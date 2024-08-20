import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/':
      res.end('Página Inicial');
      break;
    case '/sobre':
      res.end('Página Sobre');
      break;
    case '/contato':
      res.end('Página Contato');
      break;
    default:
      res.statusCode = 404;
      res.end('Página não encontrada');
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
