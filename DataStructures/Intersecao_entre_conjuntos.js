const conjuntoA = [1, 2, 3, 4, 5];
const conjuntoB = [4, 5, 6, 7, 8];

const setB = new Set(conjuntoB);

const intersecao = conjuntoA.filter((numero) => setB.has(numero));

console.log("A interseção entre o conjunto A e B é: ", intersecao);
