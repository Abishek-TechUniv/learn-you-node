const http = require('http');

const request = (url, call) => {
  http.get(url, (response) => {
    response.setEncoding('utf-8');
    const responseList = [];

    response.on('data', (data) => {
      responseList.push(data);
      call('Ok');
    });

    response.on('end', () => {
      responseList.forEach(value => console.log(value));
    });
  }).on('error', () => { call('Error'); });
};
module.exports = request;

// request(process.argv[2], console.log);
