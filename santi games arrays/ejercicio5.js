let numeros = [1, -2, -7, 8, -3];
function ordNumerosAbsolutos(numbers) {
  let numeros = [];
  numbers.map((item) => {
    const numerosAbsolutos = Math.abs(item);
    numeros.push(numerosAbsolutos);
  });
  return numeros.sort((a, b) => a - b);
}

console.log(ordNumerosAbsolutos(numeros));

  