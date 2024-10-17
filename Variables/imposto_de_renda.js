const prompt = require("prompt-sync")();

const deducao_por_dependente = 1200;
const aliquota = 0.15;

const salario_bruto_anual = parseFloat(
  prompt("Digite seu salário bruto anual:")
);
const dependentes = parseInt(prompt("Digite o número de dependentes:"));

const total_deducoes = dependentes * deducao_por_dependente;
const salario_tributavel = salario_bruto_anual - total_deducoes;
const imposto = salario_tributavel * aliquota;

if (imposto > 0) {
  console.log("O imposto de renda devido é: R$", imposto.toFixed(2));
} else {
  console.log("Você está isento de imposto de renda.");
}
