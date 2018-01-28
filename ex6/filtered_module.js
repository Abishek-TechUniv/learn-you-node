const fs = require('fs');

const filteredList = (dirName, extension, callback) => {
  fs.readdir(dirName, (err, list) => {
    if (err) return callback(err);
    const result = list.filter(x => x.includes(`.${extension}`));
    return callback(null, result);
  });
};

module.exports = filteredList;
