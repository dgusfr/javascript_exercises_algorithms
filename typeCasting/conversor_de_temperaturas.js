const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));

if (isNaN(celsius)) {
  console.log("Entrada inválida. Por favor, digite um número.");
} else {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(celsius + "°C é igual a " + fahrenheit.toFixed(2) + "°F");
}
