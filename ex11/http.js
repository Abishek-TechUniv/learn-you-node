const http = require('http');
const fs = require('fs');

const setupHTTPServer = (port, filePath) => {
  const server = http.createServer((request, response) => {
    const fileReadStream = fs.createReadStream(filePath);
    fileReadStream.pipe(response);
  });
  server.listen(port);
};

module.exports = setupHTTPServer;

setupHTTPServer(process.argv[2], process.argv[3]);
