function aplicarOperacaoEmArray(array, operacao) {
  return array.map((numero) => operacao(numero));
}

function dobrar(x) {
  return x * 2;
}

console.log(aplicarOperacaoEmArray([1, 2, 3, 4], dobrar));
