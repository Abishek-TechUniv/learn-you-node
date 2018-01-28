const bl = require('bl');
const http = require('http');

const result = [];
let count = 0;

const print = (resultArr, call) => {
  resultArr.forEach(x => call(x));
};

const collect = (urlArray, callback) => {
  urlArray.forEach(url =>
    http.get(url, (response) => {
      response.pipe(bl((err, data) => {
        if (err) callback(err.code);
        result[count] = data.toString();
        count += 1;
        if (count === 3) print(result, callback);
      }));
    }));
};

module.exports = collect;
// collect(process.argv.slice(2), console.log);
