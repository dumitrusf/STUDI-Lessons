# Los operadores de comparación

## Objetivo

Saber comparar dos valores numéricos

## Situación

En JavaScript, es posible verificar si un valor numérico es mayor o menor que otro, gracias a los operadores de comparación. Si queremos saber si un valor es mayor o menor que otro, usaremos los siguientes operadores:

- mayor estricto `>`: permite saber si el valor a la izquierda del operador es estrictamente mayor que el valor de la derecha.
- menor estricto `<`: permite saber si el valor a la izquierda del operador es estrictamente menor que el valor de la derecha.

## Ejemplo

Si comparamos la superioridad estricta de dos valores:

```javascript
2 > 3 // devuelve falso, porque 2 no es mayor que 3.
3 > 2 // devuelve verdadero.
```

Si comparamos la inferioridad estricta de dos valores:

```javascript
2 < 3 // devuelve verdadero.
3 < 2 // devuelve falso.
```

Es posible realizar la comparación de superioridad o inferioridad con igualdad. Para ello, usaremos los siguientes operadores:

- mayor o igual `>=`: permite saber si el valor a la izquierda del operador es mayor o igual que el valor de la derecha.
- menor o igual `<=`: permite saber si el valor a la izquierda del operador es menor o igual que el valor de la derecha.

## Ejemplo

Si comparamos la superioridad o igualdad de dos valores:

```javascript
2 >= 3 // devuelve falso.
2 >= 2 // devuelve verdadero.
```

Si comparamos la inferioridad o igualdad de dos valores:

```javascript
2 <= 3 // devuelve verdadero.
2 <= 2 // devuelve verdadero.
```

## Nota

>Si realizamos este tipo de comparación sobre cadenas de caracteres, el operador de comparación se basará en el orden lexicográfico de las palabras comparadas.

## Definición

El orden lexicográfico sigue el orden alfabético que encontramos en un diccionario. Por ejemplo, imaginemos dos cadenas de caracteres "aa" y "ab", "aa" será menor que "ab" porque en el alfabeto, "a" se sitúa antes que "b".

```javascript
let a = 'aa'; // Declaramos una primera variable a
let b = 'ab'; // Declaramos una segunda variable b

if (a > b) { // Verificamos si 'aa'>'ab'
  console.log('verdadero'); // Devolvemos verdadero en caso de respuesta correcta
} else {
  console.log('falso'); // Sino devolvemos falso
}
```

## A recordar

Los operadores de comparación estrictamente mayores o estrictamente menores permiten comparar el valor numérico de dos variables. También podemos probar si son mayores o iguales, o menores o iguales, usando los operadores `>=` y `<=`.