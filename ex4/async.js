const fs = require('fs');

const numberOfLines = (fileName, testCall) => {
  fs.readFile(fileName, 'utf8', (err, content) => {
    if (err) return testCall(err.code);
    return testCall(content.split('\n').length - 1);
  });
};

// numberOfLines(process.argv[2], console.log);
module.exports = numberOfLines;
