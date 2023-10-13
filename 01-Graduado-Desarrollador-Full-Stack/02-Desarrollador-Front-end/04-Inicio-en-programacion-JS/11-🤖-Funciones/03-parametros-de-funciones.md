# Los parámetros de las funciones

## Objetivo

- Saber utilizar los parámetros de una función

## Contexto

Vamos a ver cómo se declara una función JavaScript con parámetros.

## Función JavaScript con parámetros

Las paréntesis de una función pueden recibir opcionalmente parámetros: se trata de variables que van a ser utilizadas en el código de la función (puede ser un número, un texto, una lista de valores, un booleano true/false, etc.). Estos parámetros se llaman argumentos. Si hay varios argumentos, entonces se separan por una coma seguida de un espacio (para una mejor legibilidad).

Queremos crear una función que nos permita calcular el cuadrado de un número (square en inglés), el cuadrado de un número se obtiene multiplicando un número por sí mismo. Buscamos declarar una función que multiplique un número por sí mismo (number*number).

```javascript
function squareNumber (){
  console.log (number * number)
}
```

En el estado actual no es posible llamar a nuestra función dándole a este número un valor, para ello hay que pasarle a la función squareNumber() un argumento que será reconocido y utilizado por la función, es decir squareNumber(number);

```javascript
// Cuadrado de un número
function squareNumber (number) {
  console.log (number * number)
}

// Mostrar en la consola: 49
squareNumber (7)

// Mostrar en la consola: 256
squareNumber (16)
```

## Ejemplo

Un ejemplo con varios parámetros

```javascript
function hello (userName, age) {
  console.log ('Bonjour ' + userName + ' / ' + age + ' ans')
}

// Mostrar en la consola: Bonjour John / 36 ans
hello ('John', 36)

// Mostrar en la consola: Bonjour Jane / 41 ans
hello ('Jane', 41)
```

Se declara una función hello() que tiene como argumento un nombre de usuario (userName) y una edad (age). Estos argumentos están separados por una coma.

## A recordar

En los paréntesis de una función, se puede pasar opcionalmente uno o varios parámetros, que serán utilizados en el código de la función.

## Complemento

**[Fonctions (MDN Web docs)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Functions)**