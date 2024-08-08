const prompt = require("prompt-sync")();

let pessoa = {
  nome: prompt("Digite seu nome:"),
  idade: prompt("Digite sua idade:"),
  cidade: prompt("Digite sua cidade:"),
};

console.log("Tipo de dado da variável pessoa:", typeof pessoa);

console.log("Objeto pessoa como string:", pessoa.toString());

console.log(
  "O objeto tem a propriedade 'cidade'? ",
  pessoa.hasOwnProperty("cidade")
);
