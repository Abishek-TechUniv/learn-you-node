const filteredList = require('./filtered_module');

const logger = (path, extension, call) => {
  filteredList(path, extension, (err, data) => {
    if (err) call(err.code);
    else {
      data.forEach((element) => {
        call(element);
      });
    }
  });
};

module.exports = logger;
// logger(process.argv[2], process.argv[3], console.log);
