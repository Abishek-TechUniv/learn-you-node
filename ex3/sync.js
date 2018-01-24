const fs = require('fs');

function numberOfLines(fileName) {
  const content = fs.readFileSync(fileName);
  return content.toString().split('\n').length - 1;
}

module.exports = numberOfLines;
// console.log(numberOfLines(process.argv[2]));

