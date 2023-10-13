# Las bucles anidadas

## Objetivo

Aprender qué son las bucles anidadas, cómo y cuándo usarlas.

## Puesta en situación

Las bucles anidadas son bucles que contienen a su vez otros bucles. Por ejemplo, para recorrer por completo las casillas de un tablero de ajedrez línea por línea (8 líneas que contienen cada una 8 casillas), usaremos un primer bucle para recorrer las líneas, y dentro de éste un bucle que recorra las casillas de la línea actual.

## Bucles anidados for/for

Retomemos nuestro ejemplo de recorrido de un tablero de ajedrez línea por línea: podemos realizarlo usando una anidación de bucles for.

Ejemplo:

```javascript
let squareNumber = 1
for (let x = 1; x < 9; x++) {
  for (let y = 1; y < 9; y++) {
    console.log('x:' + x + '|y:' + y + ' [' + squareNumber + ']')
    squareNumber++
  }
}
```

En el ejemplo anterior, el primer bucle recorre las líneas (x) y el segundo recorre cada casilla (y) de la línea actual. Una vez que se han recorrido las casillas de la línea, se pasa a la siguiente línea y se recorren sus casillas, y así sucesivamente. La consola mostrará entonces:

```
x:1|y:1 [1]
x:1|y:2 [2]
...
x:1|y:8 [8]
x:2|y:1 [9]
x:2|y:2 [10]
...
x:8|y:8 [64]
```

## **Atención**:

Hay que nombrar bien las variables de iteración de manera diferente: en el ejemplo anterior, el primer bucle usa x y el segundo y. Usar la misma variable podría provocar comportamientos inesperados.

## **Nota**:

>La anidación for/for también se usa mucho en los arrays de varias dimensiones (arrays que contienen otros arrays) para poder recorrerlos todos.

## while/while

while/while funciona de la misma manera.

Ejemplo:

```javascript
let squareNumber = 1
let x = 1
while (x < 9) {
  let y = 1
  while (y < 9) {
    console.log('x:' + x + '|y:' + y + ' [' + squareNumber + ']')
    squareNumber++
    y++
  }
  x++
}
```

## Mezcla for/while

También es posible mezclar los bucles según las necesidades que se encuentren.

Ejemplo:

```javascript
let squareNumber = 1
let x = 1
while (x < 9) {
  for (let y = 1; y < 9; y++) {
    console.log('x:' + x + '|y:' + y + ' [' + squareNumber + ']')
    squareNumber++
  }
  x++
}
```

## A recordar

Las bucles anidadas son bucles que contienen a su vez otros bucles.