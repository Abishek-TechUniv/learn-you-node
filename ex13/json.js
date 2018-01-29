
const http = require('http');
const url = require('url');

const parser = time => ({
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds(),
});

const unixTime = time => ({ unixtime: time.getTime() });

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const time = new Date(parsedUrl.query.iso);
  let result = null;

  if ((req.url).match(/^\/api\/parsetime/)) {
    result = parser(time);
  } else if ((req.url).match(/^\/api\/unixtime/)) {
    result = unixTime(time);
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result));
});

server.listen(Number(process.argv[2]));
