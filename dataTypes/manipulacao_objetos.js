const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
};
console.log(carro);

carro.cor = "vermelho";

carro.ano = 2024;

if (carro.hasOwnProperty("marca") === true) {
  console.log("O carro tem a propriedade marca");
} else {
  console.log("O carro NÃO tem a propriedade marca");
}

console.log(carro);
