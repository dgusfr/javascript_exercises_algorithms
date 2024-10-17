const prompt = require("prompt-sync")();

const peso = prompt("Digite seu peso (kg):");
const altura = prompt("Digite sua altura (metros):");
console.log(calculadoraIMC(altura, peso));

function calculadoraIMC(altura, peso) {
  const alturaNum = Number(altura);
  const pesoNum = Number(peso);

  if (isNaN(alturaNum) || isNaN(pesoNum) || alturaNum <= 0 || pesoNum <= 0) {
    return "Entrada inválida";
  }

  const IMC = pesoNum / (alturaNum * alturaNum);
  let category = "";

  if (IMC < 18.5) {
    category = "Abaixo do peso";
  } else if (IMC < 24.9) {
    category = "Peso normal";
  } else if (IMC < 29.9) {
    category = "Sobrepeso";
  } else {
    category = "Obesidade";
  }

  return `IMC: ${IMC.toFixed(2)} (${category})`;
}
