function ordenarNumeros(...numeros) {
  return numeros.sort((a, b) => a - b);
}

console.log(ordenarNumeros(5, 3, 8, 1, 4));
