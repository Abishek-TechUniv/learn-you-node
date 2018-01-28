const bl = require('bl');
const http = require('http');

const collect = (url, callback) => {
  http.get(url, (response) => {
    response.pipe(bl((err, data) => {
      if (err) callback(err.code);
      const content = data.toString();
      callback(`${content.length}\n${content}`);
    }));
  });
};

module.exports = collect;
// collect(process.argv[2], console.log);

