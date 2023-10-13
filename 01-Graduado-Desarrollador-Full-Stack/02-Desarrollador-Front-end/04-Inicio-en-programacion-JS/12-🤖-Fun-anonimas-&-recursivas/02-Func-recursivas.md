# Funciones recursivas JavaScript

## Objetivo

- Aprender qué es una función recursiva.

## Contexto

En algunos casos de desarrollo JavaScript, tenemos que crear una función recursiva, es decir, que se llama a sí misma. Por ejemplo, para recorrer una estructura de archivos para encontrar un archivo específico, para realizar un cálculo, etc.

## Nota

>Las funciones recursivas pueden parecerse a los bucles.

## Ejemplo simple

En los dos ejemplos siguientes, calculamos un porcentaje de carga: el resultado es el mismo, porque la consola muestra "¡Carga terminada!" en ambos casos. Solo el enfoque es diferente.

En la función `loading`, que se llama una sola vez, ponemos en marcha un bucle que incrementa el valor `percent` mientras sea inferior a 100, luego mostramos el mensaje.

En la función `loadingRecursive`, si el valor en porcentaje (`percent`) es inferior a 100, entonces lo incrementamos, luego llamamos de nuevo a la función pasándole el nuevo valor, y así sucesivamente hasta que no entremos más en la condición y se muestre el mensaje de la consola.

```javascript
function loading ( percent ) {
  while ( percent < 100 ) {
    percent ++
  }
  console . log ( '¡Carga terminada!' )
}

function loadingRecursive ( percent ) {
  if ( percent < 100 ) {
    percent ++
    loadingRecursive ( percent )
  } else {
    console . log ( '¡Carga terminada!' )
  }
}

loading ( 0 )
loadingRecursive ( 0 )
```

### Mostrar una cuenta atrás

```javascript
function countDown ( number ) {
  console . log ( number )
  if ( number > 0 ) {
    number --
    countDown ( number )
  }
}

countDown ( 5 )
```

Resultados sucesivos en la consola:

```
5
4
3
2
1
0
```

## Atención: El uso de return

Atención, las funciones recursivas son de usar con mucho cuidado. Cuando una función devuelve un valor, también hay que devolver su recursividad. Para entender mejor, tomemos un ejemplo: una función que concatena un número aleatorio mientras éste sea diferente de 0.

El método `Math.random() * (11) + 0;` permite devolver un valor entre un valor mínimo (incluido, en este caso 0) y un valor máximo (excluido, aquí 11).

El método `Math.floor(x)` devuelve el mayor entero que es inferior o igual a un número x.

La combinación de los dos métodos nos devuelve aleatoriamente un entero entre 0 y 10.

```javascript
function concatenation ( concat ) {
  let aleatoryNumber = Math . floor ( Math . random () * ( 11 )) + 0 ;
  if ( aleatoryNumber !== 0 ) {
    concat += `${ aleatoryNumber } `
    return concatenation ( concat ); // devolvemos la recursividad
  } else {
    return concat
  }
}

console . log ( concatenation ( '' )) // un array de números aleatorios.
```

Ahora, esta misma función sin el `return` sobre la recursividad devolverá `undefined`.

```javascript
function concatenation ( concat ) {
  let aleatoryNumber = Math . floor ( Math . random () * ( 11 )) + 0 ;
  if ( aleatoryNumber !== 0 ) {
    concat += `${ aleatoryNumber } `
    concatenation ( concat ); // devolvemos la recursividad
  } else {
    return concat
  }
}

console . log ( concatenation ( '' )) // undefined
```

## A recordar

Una función recursiva es una función que se llama a sí misma.

## Complemento

- **[Algoritmo recursivo (Wikipedia)](https://fr.wikipedia.org/wiki/Algorithme_r%C3%A9cursif)** 

- **[La recursividad (MDN Web docs)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Functions#La_r%C3%A9cursivit%C3%A9)**