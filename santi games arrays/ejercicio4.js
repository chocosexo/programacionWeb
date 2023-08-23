function terminanEnA() {
  const palabras = ["ayuda,camion,auto,avion,luna"];
  const terminanSinA = palabras.some((palabra) => palabra.endsWith("a"));

  const nombres = ["manuela,juana,ana,vera,luana"];
  const palabraA = nombres.every((nombre) => nombre.endsWith("a"));

  console.log("terminanSinA ->", terminanSinA);
  console.log("terminanEnA ->", palabraA);
}

terminanEnA();
