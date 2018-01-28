const fs = require('fs');

const filteredList = (dirName, extension, callback) => {
  fs.readdir(dirName, (err, list) => {
    if (err) return callback(err.code);
    const result = list.filter(x => x.includes(`.${extension}`));
    return callback(result);
  });
};

module.exports = filteredList;

const extension = (process.argv[3] === undefined) ? '' : process.argv[3];
filteredList(process.argv[2], extension, console.log);
