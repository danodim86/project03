const jsonServer = require('json-server');
const next = require('next');
const path = require('path');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Create the JSON server
const apiServer = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

apiServer.use(middlewares);
apiServer.use(router);

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Use JSON server as a middleware
  server.use('/api', apiServer);

  // Handle Next.js routing
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
