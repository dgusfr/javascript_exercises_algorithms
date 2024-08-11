const prompt = require("prompt-sync")();

let telefoneNumeros = "";
let telefone = prompt("Digite o seu numero de telefone (XX)XXXXX-XXXX: ");

for (let char of telefone) {
  if (!isNaN(char)) {
    telefoneNumeros += char;
  }
}

if (telefoneNumeros.length === 11) {
  console.log("Número de telefone válido!");
  console.log(telefoneNumeros);
} else {
  console.log(
    "Número de telefone inválido. Certifique-se de inserir 11 dígitos."
  );
}
