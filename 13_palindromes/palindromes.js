const palindromes = function (str) {
  let cleanStr = str.replace(/[^a-zA-Z^1-9|s]/g, "").toLowerCase();
  let reversed = cleanStr.split("").reverse().join("");
  if (reversed === cleanStr) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
