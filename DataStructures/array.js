const numerosInteiros = [5, 12, 7, 34, 2, 19, 23, 8, 10, 3];

numerosInteiros.push(41);
console.log(numerosInteiros);

numerosInteiros.shift();
console.log(numerosInteiros);

if (numerosInteiros.includes(10)) {
  console.log("Número 10 encontrado");
} else {
  console.log("Número Não 10 encontrado");
}

numerosInteiros.sort((a, b) => a - b);
console.log(numerosInteiros);
