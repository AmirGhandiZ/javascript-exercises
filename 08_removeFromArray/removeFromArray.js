const removeFromArray = function (array, ...args) {
  console.log(args);

  let filteredArray = array.filter((item) => !args.includes(item));
  return filteredArray;
};

console.log(removeFromArray([1, 2, 3, 4, 5], 1, 2));

// Do not edit below this line
module.exports = removeFromArray;
