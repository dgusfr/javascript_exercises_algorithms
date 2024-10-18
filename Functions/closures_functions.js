function criarContadorPersonalizado(inicial) {
  let contador = inicial;
  return function () {
    contador++;
    console.log(contador);
  };
}

const contador = criarContadorPersonalizado(10);
contador();
contador();
contador();
