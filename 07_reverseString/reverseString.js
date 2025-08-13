const reverseString = function (string) {
  // split the string into something else and then JOIN it back into a string.
  // use split to make string into chars and an array
  // then use sort to sort the array items (chars) decending (backwards)
  // then join/concat them back together

  let test = string.split("").reverse().join("");
  return test;
};

console.log(reverseString("hello there"));
// Do not edit below this line
module.exports = reverseString;
