const args = process.argv.slice(2);

function sum(inputArr) {
  let result = 0;
  if (inputArr === undefined) return result;
  inputArr.forEach((element) => {
    result += Number(element);
  });
  return result;
}

console.log(sum(args));

module.exports = sum;
