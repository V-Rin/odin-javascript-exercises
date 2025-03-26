const convertToCelsius = function(temperatureInput) { //Temperature input measurement is Fahrenheit
  let result = (temperatureInput - 32) / 1.8;

  if(Number.isInteger(result)) return result;
  else return +result.toFixed(1);
};

const convertToFahrenheit = function(temperatureInput) { //Temperature input measurement is Celsus
  let result = temperatureInput * 1.8 + 32;

  if(Number.isInteger(result)) return result;
  else return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
