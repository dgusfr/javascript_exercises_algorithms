const prompt = require("prompt-sync")();

let frase = prompt("Digite aqui a frase:");

let numero_de_caracteres = frase.length;
console.log(numero_de_caracteres);

let maiusculas = frase.toUpperCase();
console.log(maiusculas);

let posicao_javascript = frase.indexOf("JavaScript");
if (posicao_javascript != -1) {
  console.log("A posição da palavra JavaScript é:", posicao_javascript);
} else {
  console.log("A palavra 'JavaScript' não foi encontrada.");
}

let fraseLimpa = frase.trim();
console.log("Frase limpa:", fraseLimpa);
