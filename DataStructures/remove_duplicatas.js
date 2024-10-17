const numerosComDuplicatas = [1, 2, 3, 4, 3, 2, 5, 6, 6, 7, 8];

const numerosSemDuplicadas = new Set();

numerosComDuplicatas.map((numero) => {
  numerosSemDuplicadas.add(numero);
});

const resultado = Array.from(numerosSemDuplicadas);
console.log("Array sem duplicatas:", resultadoFinal);
