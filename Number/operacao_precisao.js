const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

if (!isNaN(num1) && !isNaN(num2)) {
  let soma = num1 + num2;
  let subtracao = num1 - num2;
  let multiplicacao = num1 * num2;
  let divisao = num1 / num2;
  let modulo = num1 % num2;
  let potenciacao = num1 ** num2;
  let potenciaArredondada = potenciacao.toPrecision(4);

  console.log(`Soma: ${soma}`);
  console.log(`Subtração: ${subtracao}`);
  console.log(`Multiplicação: ${multiplicacao}`);
  console.log(`Divisão: ${divisao}`);
  console.log(`Módulo: ${modulo}`);
  console.log(
    `Potenciação (com precisão de 4 casas decimais): ${potenciaArredondada}`
  );
  console.log(
    `Nota: A representação em ponto flutuante pode causar pequenas imprecisões nos resultados.`
  );
} else {
  console.log(
    "Entrada inválida. Certifique-se de que ambos os valores são números."
  );
}
