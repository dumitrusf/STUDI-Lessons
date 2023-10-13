# Las bucles for

## Objetivos

- La bucle for
- La bucle for...of

## Contexto

Vamos a ver cómo hacer una bucle PARA en JavaScript con los diferentes usos de for.

## for

La instrucción for nos va a permitir ejecutar en bucle (el número de veces definido hasta el valor de salida) un mismo bloque de instrucciones. El primer parámetro de la instrucción for es el valor de inicialización (como un contador). El segundo es una condición evaluada antes de cada paso en la bucle, si la condición se verifica, entonces la instrucción se ejecuta. El tercer parámetro es una expresión evaluada al final de cada iteración (paso en la bucle).

```javascript
// Muestra el valor de I en la consola
for (let i = 0; i < 6; i++) {
  console.log(i);
}
```

Explicaciones:

Aquí están los detalles de la instrucción for:

- Para "i" = 0 (`let i = 0`), mientras que "i" sea inferior a 6 (`i < 6`), se incrementa "i" (`i++`). Incrementar "i" significa que se aumenta su valor: "i" valdrá entonces "i + 1" (`i++`) al final de cada paso en la bucle, es decir 1 (=0+1), 2 (=1+1), 3, 4, 5 y finalmente 6 (=5+1).
- En el primer paso en la bucle, "i" vale 0, lo que equivale a ejecutar la instrucción presente en la bucle: `console.log(0)`
- Luego así sucesivamente, mientras que "i" sea inferior a 6: `console.log(1)` `console.log(2)` `console.log(3)` `console.log(4)` `console.log(5)`
- Después, "i" vale 6 y no es más inferior a 6, lo que hace que la bucle se termine.

## for...of

Esta instrucción crea una bucle que permite ejecutar un bloque de instrucciones sobre cada elemento de una lista. Puede ser un array, una cadena de caracteres (que puede ser considerada como un array de caracteres), etc.

```javascript
let text = "Lion";
for (let value of text) {
  console.log(value);
}
```

El ejemplo anterior va a mostrar en la consola:

- L
- i
- o
- n

En efecto, cada letra es considerada como un valor de la variable text que vale 'Lion' y es entonces recorrida y mostrada independientemente en la consola. `console.log(L)` `console.log(i)` ...

## Nota: for...of en un array

>Este tipo de bucle permite también recorrer un array de cadenas de caracteres. Los arrays o «arrays», presentes en varios lenguajes de programación incluyendo Javascript.

## Nota: Las otras bucles

>Existen otras formas de hacer una bucle, como algunos métodos del objeto Array() (ej: forEach()), que es el objeto que permite crear arrays o también for…in que será tratada en el curso sobre los objetos Javascript.

## A recordar

- for: permite ejecutar en bucle (el número de veces definido) un mismo bloque de instrucciones.
- for...of: crea una bucle que permite ejecutar un bloque de instrucciones sobre cada valor de un objeto.

## Complemento

- **[for](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for)**
- **[for...of](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for...of)**
- **[El protocolo iterable](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Iteration_protocols#it%C3%A9rable)**