const prompt = require("prompt-sync")();

let frase = prompt("Digite aqui a frase:");

let palavra = prompt("Digite aqui a palavra que você deseja buscar:");

if (frase.includes(palavra)) {
  let string_final = frase.toLowerCase();
  console.log(string_final);
} else {
  console.log(`A palavra não foi encontrada.`);
}
