const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  let media = (num1 + num2 + num3) / 3;
  let mediaArredondada = media.toFixed(2);

  if (isFinite(media)) {
    console.log(`A média arredondada dos números é ${mediaArredondada}.`);
  } else {
    console.log("O resultado não é um número finito.");
  }
} else {
  console.log(
    "Entrada inválida. Certifique-se de que todos os valores são números."
  );
}
