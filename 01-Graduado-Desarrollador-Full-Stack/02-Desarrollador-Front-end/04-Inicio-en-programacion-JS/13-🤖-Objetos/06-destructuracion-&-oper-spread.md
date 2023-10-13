# Desestructuración y operador spread

## Objetivos

- Comprender cómo funciona la desestructuración JavaScript que apareció con ES6 y sus ventajas.
- Saber utilizar los operadores spread.

## La desestructuración en JavaScript

La desestructuración consiste en la asignación de variables que provienen de un objeto o de un arreglo basándose en su estructura. Hay dos sintaxis diferentes para los objetos y los arreglos.

```javascript
// El objeto "persona" tiene las propiedades nombre, edad y ciudad
let persona = {
  nombre: "Thomas",
  edad: 35,
  ciudad: "París"
};

// Con los métodos clásicos, hay que declarar una variable y asignarle la propiedad del objeto por separado cada vez.
let nombre = persona.nombre;
let edad = persona.edad;
let direccion = persona.ciudad;

// Con la desestructuración, basta con una sola línea
// Definición de las variables nombre, edad y ciudad, que se renombran como dirección, para aplicarles los valores de las propiedades del mismo nombre del objeto persona
let {nombre, edad, ciudad: direccion} = persona;

console.log("nombre: ", nombre, " edad: ", edad, " dirección: ", direccion);
// Mostrará nombre: Thomas edad: 35 dirección: París
```

La sintaxis es la siguiente: `let {nombre de cada propiedad del objeto deseado} = nombre del objeto;`
Si se desea que la variable tenga un nombre diferente al de la propiedad existente, hay que renombrarla así: `nombre de la propiedad : nombre deseado para la variable`.
Este método es más simple y rápido que el método habitual³[3].

Para un arreglo, la sintaxis es similar pero se usan corchetes `[]`.

```javascript
// El arreglo
let lenguajes = ["JavaScript", "Java", "PHP", "Go"];

// Con los métodos clásicos, hay que declarar una variable y asignarle el valor de cada elemento del arreglo por separado.
let lenguaje1 = lenguajes[0];
let lenguaje2 = lenguajes[1];
let lenguaje3 = lenguajes[2];
let lenguaje4 = lenguajes[3];

// Con la desestructuración, basta con una sola línea.
let [lenguaje1, lenguaje2, lenguaje3, lenguaje4] = lenguajes;

// También se puede proceder así
let [lenguaje1, lenguaje2, lenguaje3, lenguaje4] = ["JavaScript", "Java", "PHP", "Go"];

console.log("lenguaje1: ", lenguaje1, " lenguaje2: ", lenguaje2, " lenguaje3: ", lenguaje3, " lenguaje4: ", lenguaje4);
// Mostrará lenguaje1: JavaScript, lenguaje2: Java, lenguaje3: PHP, lenguaje4: Go⁴[4]
```

La sintaxis es la siguiente: `let [nombre de cada variable] = arreglo;`
También es posible practicar la desestructuración en varios niveles, tanto en un objeto como en un arreglo. Si el valor no existe en el primer nivel, devolverá `undefined`. Sin embargo, si hay necesidad de acceder a un nivel inferior a `undefined`, se devolverá un error debido al anidamiento.

## Omitir claves

Es posible desestructurar un arreglo omitiendo algunas de sus claves sin asignarlas a ninguna variable. En este caso, simplemente se olvida de especificar una.

```javascript
// 1
let [lenguaje1, lenguaje2, lenguaje3] = ["JavaScript", "Java", "PHP", "Go"];
console.log(lenguaje1, lenguaje2, lenguaje3); // JavaScript Java PHP

// 2
let [lenguaje1,,lenguaje3] = ["JavaScript", "Java", "PHP", "Go"];
console.log(lenguaje1, lenguaje3); // JavaScript PHP

// 3
let [,lenguaje2,lenguaje3] = ["JavaScript", "Java", "PHP", "Go"];
console.log(lenguaje2,lenguaje3); // Java PHP
```

Se asigna `JavaScript` a `lenguaje1`, `Java` a `lenguaje2`, `PHP` a `lenguaje3` y `Go` a nada.
Se asigna `JavaScript` a `lenguaje1`, `Java` a nada, `PHP` a `lenguaje3` y `Go` a nada.
Se asigna `JavaScript` a nada, `Java` a `lenguaje2`, `PHP` a `lenguaje3` y `Go` a nada.

## El operador spread

El operador spread permite expandir un objeto iterable (como un arreglo o una cadena de caracteres) cuando se necesita varios argumentos que forman parte de sus propiedades.

```javascript
let miFecha = [1985, 12, 10];
new Date(...miFecha);
// Esta notación equivale a new Date(1985, 12, 10)

let miCadenaDeCaracteres = "mi cadena";
[...miCadenaDeCaracteres]
// Esta notación equivale a ["m", "i", " ", "c", "a", "d", "e", "n", "a"]
```

Se puede mezclar con otros argumentos:

```javascript
let miFecha = [1985, 12, 10];
new Date(...miFecha, 50);
// Esta notación equivale a new Date(1985, 12, 10, 50)
```

Este operador permite facilitar varios procesos frecuentemente necesarios, como la concatenación de varios iterables, la desestructuración en un arreglo, etc.

```javascript
// Concatenación de varios iterables
let misLenguajes = ["JavaScript", "Java"];

// Antiguamente con ES5
["PHP", "Go"].concat(misLenguajes);

// Con ES6
let lang = ["PHP", "Go", ...misLenguajes]
console.log(lang)
// Devolverá ["PHP", "Go", "JavaScript", "Java"]


// Desestructuración en un arreglo

let misLenguajes = ["JavaScript", "Java", "PHP", "Go"];

// Antiguamente con ES5
let primerPalabra = misLenguajes[0];
// "JavaScript"
let resto = misLenguajes.slice(1);
console.log(resto)
// ["Java", "PHP", "Go"]

// Con ES6
let [primerPalabra, ...resto] = misLenguajes;
// Se obtiene el mismo resultado con menos operaciones que realizar.
```

## A recordar

La desestructuración y el operador spread permiten simplificar el código y hacerlo más claro y conciso, evitando procesos repetitivos innecesarios.

## Complemento:

- **[Asignación por destructuracion](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)**

- **[sintaxis de destructuracion](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax)**