let nume = [1, 2, 3, 4, 5, 6];
let sumar = 0;
function sumarPares(numeros) {
  for (let i = 0; i < numeros.length; i++) { 
    if (numeros[i] % 2 === 0){
      sumar = sumar + numeros[i]   
    }
  }
  console.log(sumar);
}
sumarPares(nume);