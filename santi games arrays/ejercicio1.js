const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[2] = 30;
console.log(numbers);
//cuando hagamos esto el 1 y el 3 se van a remplazar por el 10 y el 30.
//eso es porque la funcion (numbers[0] = 10) remplaza el numero en la posicion 0 por un 10.
