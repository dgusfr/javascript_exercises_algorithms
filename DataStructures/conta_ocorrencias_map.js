const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "banana", "uva"];

const frutaContagem = new Map();

frutas.forEach((fruta) => {
  if (frutaContagem.has(fruta)) {
    const contador = frutaContagem.get(fruta);
    frutaContagem.set(fruta, contador + 1);
  } else {
    frutaContagem.set(fruta, 1);
  }
});

frutaContagem.forEach((contador, fruta) => {
  console.log(`${fruta} : ${contador}`);
});
