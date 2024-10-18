const prompt = require("prompt-sync")();

let numero_um = parseFloat(prompt("Primeiro numero:"));
let numero_dois = parseFloat(prompt("Segundo numero:"));
let operacao = prompt("Qual a operação a ser realizada? (+, -, *, /) ");

switch (operacao) {
  case "+":
    resultado = numero_um + numero_dois;
    console.log("A soma dos valores é: ", resultado);
    break;
  case "-":
    resultado = numero_um - numero_dois;
    console.log("A subtração dos valores é: ", resultado);
    break;
  case "*":
    resultado = numero_um * numero_dois;
    console.log("A multiplicação dos valores é: ", resultado);
    break;
  case "/":
    resultado = numero_um / numero_dois;
    console.log("A divisão dos valores é: ", resultado);
    break;
  default:
    console.log("Digite uma operação valida");
}
