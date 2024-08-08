const carro = {
  marca: "",
  modelo: "",
  ano: 0,
};

carro.__proto__.descrever = function () {
  return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
};

const meuCarro = Object.create(carro);
meuCarro.marca = "Toyota";
meuCarro.modelo = "Corolla";
meuCarro.ano = 2024;

console.log(meuCarro.descrever());

const isModeloEnumeravel = meuCarro.propertyIsEnumerable("modelo");
console.log(`A propriedade 'modelo' é enumerável? ${isModeloEnumeravel}`);
