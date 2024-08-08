const prompt = require("prompt-sync")();

let celsius = parseFloat(
  prompt("Qual a temperatura em Celsius a ser convertida?")
);
let fahrenheit = celsius * 1.8 + 32;

console.log(
  `A temperatura digitada em celsius corresponde a ${fahrenheit} em fahrenheit`
);
