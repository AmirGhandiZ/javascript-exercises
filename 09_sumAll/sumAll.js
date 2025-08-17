const sumAll = function (num1, num2) {
  let temp;
  let sum = 0;

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  } else {
    if (num1 > num2) {
      temp = num2;
      num2 = num1;
      num1 = temp;
      console.log(temp, num1, num2);
    }

    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
    return sum;
    console.log(sum);
  }
};

sumAll(123, 1);
// Do not edit below this line
module.exports = sumAll;
