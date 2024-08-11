const prompt = require("prompt-sync")();

let numero = prompt("Digite um numero inicial da contagem regressiva:");
do {
  console.log(numero);
  numero--;
} while (numero > 0);
