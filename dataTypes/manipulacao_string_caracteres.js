let frase = "JavaScript é incrível!";

frase_maiuscula = frase.toUpperCase();
console.log(frase_maiuscula);

if (frase.includes("incrível")) {
  console.log("A frase possui a palavra 'incrível' ");
} else {
  console.log("A frase NÃO possui a palavra 'incrível' ");
}

frase.replace("incrível", "poderoso");
console.log(frase);
