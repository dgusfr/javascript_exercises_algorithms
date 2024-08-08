const prompt = require("prompt-sync")();

function convertTemperatura(value, unit) {
  const temp = Number(value);
  if (isNaN(temp)) {
    return "Entrada inválida.";
  }

  let result;
  if (unit === "C") {
    result = (temp * 9) / 5 + 32;
    return `${temp}°C é igual a ${result.toFixed(2)}°F`;
  } else if (unit === "F") {
    result = ((temp - 32) * 5) / 9;
    return `${temp}°F é igual a ${result.toFixed(2)}°C`;
  } else {
    return "Unidade inválida.";
  }
}

const tempValue = prompt("Digite a temperatura:");
const tempUnit = prompt(
  "Digite a unidade (C para Celsius ou F para Fahrenheit):"
);
console.log(convertTemperatura(tempValue, tempUnit.toUpperCase()));
