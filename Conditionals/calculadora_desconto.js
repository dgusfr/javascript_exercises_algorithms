const prompt = require("prompt-sync")();

const valor = parseFloat(prompt("Valor do produto:"));
const forma_de_pagamento = prompt(
  "Digite a forma de pagamento: (A: avista, P: Parcelado)  "
);

if (forma_de_pagamento === "A") {
  valor_com_desconto = valor - valor * 0.1;
  console.log("O valor com desconto é ", valor_com_desconto);
} else {
  console.log("O valor não possui desconto");
}
