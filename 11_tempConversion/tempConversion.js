const convertToCelsius = function (temp) {
  // (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9

  let tempInCelsius = ((temp - 32) * 5) / 9;
  let tempRounded = Math.round(tempInCelsius * 10) / 10;
  return tempRounded;
};

const convertToFahrenheit = function (temp) {
  // (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32

  let tempInFahrenheit = (temp * 9) / 5 + 32;
  let tempRounded = Math.round(tempInFahrenheit * 10) / 10;
  return tempRounded;
};

console.log(convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
