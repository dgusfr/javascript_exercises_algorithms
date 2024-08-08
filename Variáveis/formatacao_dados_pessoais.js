const prompt = require("prompt-sync")();

let largura = parseFloat(prompt("Qual a largura do retângulo?"));
let altura = parseFloat(prompt("Qual a altura do retângulo?"));

// Constantes não devem ser reatribuídas. Use 'let' para variáveis que serão atualizadas.
let area = 0;
let perimetro = 0;

if (largura > 0 && altura > 0) {
  area = largura * altura;
  perimetro = 2 * (largura + altura);
  console.log(`A área do retângulo é ${area} e seu perímetro é ${perimetro}`);
} else {
  console.log("Os valores devem ser maiores que zero!");
}
