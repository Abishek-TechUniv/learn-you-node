const net = require('net');

const leftPad = num => (num < 10 ? `0${num}` : `${num}`);

const now = () => {
  const dateObj = new Date();
  const year = leftPad(dateObj.getFullYear());
  const month = leftPad(dateObj.getMonth() + 1);
  const date = leftPad(dateObj.getDate());
  const hour = leftPad(dateObj.getHours());
  const minute = leftPad(dateObj.getMinutes());
  return `${year}-${month}-${date} ${hour}:${minute}`;
};

const server = net.createServer(socket => socket.end(`${now()}\n`));

// const port = Number(process.argv[2]);
// server.listen(port);

module.exports = { now, server, leftPad };
