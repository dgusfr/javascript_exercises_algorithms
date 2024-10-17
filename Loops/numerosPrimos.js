const prompt = require("prompt-sync")();

let num = parseInt(prompt("Digite um número: "));

if (num <= 1) {
  console.log(num + " não é um número primo.");
} else if (num <= 3) {
  console.log(num + " é um número primo.");
} else if (num % 2 === 0 || num % 3 === 0) {
  console.log(num + " não é um número primo.");
} else {
  console.log(num + " é um número primo.");
}
