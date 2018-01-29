const http = require('http');
const through2map = require('through2-map');

const toUpper = through2map(reqBody => reqBody.toString().toUpperCase());

const startServer = (port) => {
  const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
      return req.pipe(toUpper).pipe(res);
    }
    return res.end('End');
  });
  server.listen(port);
};

startServer(process.argv[2]);
module.exports = startServer;
