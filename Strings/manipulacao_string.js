const prompt = require("prompt-sync")();

let frase = prompt("Digite aqui a frase:");

let primeiros_caracteres = frase.slice(0, 5);
console.log(primeiros_caracteres);

//Substitui o primeiro "erro" encontrado na frase
let substitui_ocorrencia = frase.replace("erro", "correção");
console.log(substitui_ocorrencia);

//Substitui todos os "erros" encontrados na frase
let fraseCorrigida = frase.replace(/erro/g, "correção");
console.log("Frase com correções:", fraseCorrigida);

// Retorna o objetos com as palavras separadas
let separa_frase = frase.split(" ");
console.log(separa_frase);
