const prompt = require("prompt-sync")();

let numero = prompt("Digite um número:");
let numero_convertido = parseFloat(numero);

if (!isNaN(numero_convertido)) {
  let notacao_cientifica = numero_convertido.toExponential();

  if (Number.isInteger(numero_convertido)) {
    console.log("O número é um inteiro.");
  } else {
    console.log("O número não é um inteiro.");
  }
} else {
  console.log(
    "Entrada inválida. Não foi possível converter a string para um número."
  );
}
