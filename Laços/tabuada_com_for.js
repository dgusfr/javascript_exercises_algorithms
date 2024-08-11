const prompt = require("prompt-sync")();

let numeroInteiro = prompt("Digite um numero inteiro:");

for (let i = 1; i < 11; i++) {
  console.log(i * numeroInteiro);
}
