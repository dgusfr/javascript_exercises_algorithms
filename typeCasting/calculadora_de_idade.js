const prompt = require("prompt-sync")();

let dataNascimento = prompt(
  "Digite aqui a sua data de nascimento (DD/MM/AAAA):"
);

const dataFracionada = dataNascimento.split("/");
const diaNascimento = parseInt(dataFracionada[0]);
const mesNascimento = parseInt(dataFracionada[1]);
const anoNascimento = parseInt(dataFracionada[2]);

const dataAtual = new Date();
const diaAtual = dataAtual.getDate();
const mesAtual = dataAtual.getMonth() + 1;
const anoAtual = dataAtual.getFullYear();

const idade = anoAtual - anoNascimento;

if (
  mesAtual < mesNascimento ||
  (mesAtual === mesNascimento && diaAtual < diaNascimento)
) {
  idade--;
}

console.log(`Hoje você tem ${idade} anos`);
