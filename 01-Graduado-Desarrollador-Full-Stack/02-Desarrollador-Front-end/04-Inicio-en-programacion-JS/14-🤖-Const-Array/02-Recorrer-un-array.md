# Recorrer un array JavaScript

## Objetivos

- Conocer las diferentes posibilidades para recorrer un array JavaScript
- Utilizar el método que mejor se adapte a su necesidad

## Situación

Ya sabes cómo recorrer un array con for (usando la propiedad length ), y luego con forEach . En este curso, vas a aprender que existen otros métodos que ofrecen más posibilidades para trabajar con los arrays.

## Los arrays JavaScript

Un array es un objeto que almacena una colección de valores, llamados elementos, que pueden ser de cualquier tipo de dato. Los elementos se acceden mediante un índice numérico que empieza por 0.

### La instrucción for y la propiedad length

La instrucción JavaScript for asociada a la propiedad length (indica el número de elementos contenidos en el array) del objeto Array permite recorrer un array.

```javascript
let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
// Muestra la longitud del array (6) en la consola
console.log(animals.length)
// Muestra el valor del array en el índice i en la consola
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i])
}
```

### El método forEach()

El método forEach cuando a él, permite ejecutar una función sobre cada elemento del array.

```javascript
let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
// Muestra cada elemento del array en la consola
animals.forEach(function (element) {
  console.log(element)
})
// Muestra cada índice del array y su elemento en la consola
animals.forEach(function (element, index) {
  console.log(index + ' : ' + element)
})
```

## Los otros métodos que permiten recorrer un array JavaScript

### El método every()

Este método va a aplicarse sobre todos los elementos de un array para comprobar si la condición pasada como parámetro (en forma de función) se cumple o no. Devuelve un booleano true (verdadero) si todos los elementos del array cumplen la condición, y false (falso) en caso contrario.

```javascript
// Devuelve true si el elemento es mayor que cero, y false en caso contrario.
function isGreaterThanZero(element) {
  return element > 0
}
let numbers = [0, 9, 5, 4, 6, 8, 2]
// Muestra false en la consola porque NO TODOS los números son estrictamente mayores que 0 (0 no es mayor que 0)
console.log(numbers.every(isGreaterThanZero))
// Muestra true en la consola porque TODOS los elementos son mayores o iguales que cero
console.log(
  numbers.every(function (element) {
    return element >= 0
  })
)
```

### El método some()

Va a aplicarse sobre todos los elementos de un array para comprobar si la condición pasada como parámetro (en forma de función) se cumple o no. Devuelve un booleano true (verdadero) si al menos uno de los elementos del array cumple la condición, y false (falso) en caso contrario.

```javascript
// Devuelve true si el elemento es mayor que cero, y false en caso contrario.
function isGreaterThanZero(element) {
  return element > 0
}
let numbers = [0, 9, 5, 4, 6, 8, 2]
// Muestra true en la consola porque al menos un número es estrictamente mayor que 0
console.log(numbers.some(isGreaterThanZero))
// Muestra false en la consola porque no hay al menos un elemento estrictamente inferior a cero
console.log(
  numbers.some(function (element) {
    return element < 0
  })
)
```

### El método map()

Este método va a aplicar una función sobre todos los elementos de un array, y devuelve un nuevo array que contiene únicamente los valores para los que la función pasada como parámetro ha devuelto true . El array original no se va a modificar.

```javascript
// Devuelve el cuadrado de un número dado
function squareNumber(number) {
  return number * number
}
let numbers = [0, 9, 5, 4, 6, 8, 2]
// Crea un nuevo array que contiene los números al cuadrado
let squaredNumbers = numbers.map(squareNumber)
// Crea un nuevo array que contiene los números divididos por 2, a partir del array squaredNumbers
let otherNumbers = squaredNumbers.map(function (element) {
  return element / 2
})
// Muestra en la consola el array de números
// [0, 9, 5, 4, 6, 8, 2]
console.log(numbers)
// Muestra en la consola el nuevo array que contiene los números al cuadrado
// [0, 81, 25, 16, 36, 64, 4], (resultados de : 0*0, 9*9, ...)
console.log(squaredNumbers)
// Muestra en la consola el nuevo array que contiene los números divididos por 2
// [0, 40.5, 12.5, 8, 18, 32, 2], (resultados de : 0/2, 81/2, ...)
console.log(otherNumbers)
```

### El método reduce()

Este método va a aplicarse sobre todos los elementos de un array, y a partir de una función pasada como parámetro va a reducir la lista de valores a un valor único. Puede servir por ejemplo para sumar los valores de un array. Los valores se recorren de izquierda a derecha . Para recorrerlos de derecha a izquierda hay que usar el método reduceRight().

La función pasada como parámetro del método reduce() toma 2 parámetros que son :

- accumulator : valor devuelto por reduce() de los elementos ya recorridos en el array
- currentValue : valor del elemento que se está procesando en el array

El método reduce() puede tomar opcionalmente un segundo parámetro que es un valor inicial que se usará antes del primer valor del array. En el caso de una suma, se suele indicar este parámetro a 0 .

Este método devuelve un solo valor .

```javascript
// Devuelve el resultado de la suma del acumulador del array y el valor actual del array.
// accumulator : valor devuelto por sumReducer() de los elementos ya recorridos en el array
// currentValue : valor del elemento que se está procesando en el array
function sumReducer(accumulator, currentValue) {
  return accumulator + currentValue
}
let numbers = [0, 9, 5, 4, 6, 8, 2]
// Muestra en la consola el valor devuelto por reduce : 34
// Explicación paso a paso (accumulator + currentValue) : 0 + 9 | 9 + 5 | 14 + 4 | 18 + 6 | 24 + 8 | 32 + 2
console.log(numbers.reduce(sumReducer))
// Ejemplo de resultado con un valor inicial (6) pasado como parámetro : 40
// Explicación paso a paso : 6 + 0 | 6 + 9 | 15 + 5 | 20 + 4 | 24 + 6 | 30 + 8 | 38 + 2
console.log(numbers.reduce(sumReducer,6))
// Muestra -34 en la consola (0 -9 | -9 -5 | -14 -4 | ...)
console.log(
numbers.reduce(function (accumulator,currentValue) {
return accumulator - currentValue
}))
// Muestra -66 en la consola (valor inicial :100), (100 -0 |100 -9 |91 -5 | ...)
console.log(
numbers.reduce(function (accumulator,currentValue) {
return accumulator - currentValue
},100))
```

## A recordar

Elija el método de recorrido que se adapte a su caso antes de empezar a desarrollar.

- **`length:`** número de elementos del array.

- **`for:`** instrucción para crear un bucle.

- **`forEach():`** ejecuta una función sobre cada elemento del array.

- **`every():`** recorre el array y devuelve true si todos los elementos cumplen una condición dada, en una función pasada como parámetro; si no false .

- **`some():`** recorre el array y devuelve true si al menos uno de los elementos cumple una condición dada; en una función pasada como parámetro; si no false .

- **`map():`** recorre el array y crea un nuevo array que contiene los valores devueltos por la función pasada como parámetro.

- **`reduce():`** recorre el array y a partir de una función pasada como parámetro va a reducir la lista de valores a un valor único.

## Complemento

- **[length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)**

- **[for](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for)**

- **[forEach()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)**

- **[every()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every)**

- **[some()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some)**

- **[map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)**

- **[reduce()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)**