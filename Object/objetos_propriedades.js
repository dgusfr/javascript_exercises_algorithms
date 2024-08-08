const prompt = require("prompt-sync")();

const livro = {
  titulo: "",
  autor: "",
  ano: 0,
};

livro.titulo = prompt("Digite aqui o titulo do livro:");
livro.autor = prompt("Digite aqui o autor do livro:");
livro.ano = parseInt(prompt("Digite aqui o ano do livro:"));
livro.genero = prompt("Digite aqui o genero do livro:");

console.log("O objeto tem a propriedade 'ano'? ", livro.hasOwnProperty("ano"));

console.log("O objeto livro como string fica:", JSON.stringify(livro, null, 2));
