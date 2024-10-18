const prompt = require("prompt-sync")();

let idade = parseFloat(prompt("Qual a sua idade? "));

let verifica_idade =
  idade >= 18 ? "Você é maior de idade" : "Você é menor de idade";

console.log(verifica_idade);
