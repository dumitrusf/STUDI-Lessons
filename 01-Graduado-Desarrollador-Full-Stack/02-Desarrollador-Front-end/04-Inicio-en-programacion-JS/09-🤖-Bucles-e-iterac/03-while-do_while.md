# Los bucles while / do...while

## Objetivos

- La bucle while
- La bucle do...while

## Contexto

Vamos a ver la bucle while, que es la implementación JavaScript de la bucle MIENTRAS. En algunos de nuestros algoritmos, vamos a tener que realizar la misma operación un cierto número de veces. Para ello, vamos a utilizar bucles. Nos van a permitir, por ejemplo, realizar una acción para cada letra de una palabra o para cada elemento de una lista.

Como humanos, si queremos contar hasta un cierto número, vamos a empezar de forma creciente.

## while

While va a permitir crear un bucle que se va a ejecutar mientras que la condición indicada entre paréntesis se cumpla. Esta condición se evalúa antes de ejecutar el bloque de instrucciones contenido en el bucle.

```javascript
//Inicialización de la variable n a 0
let n = 0
//MIENTRAS n sea inferior a 5, las instrucciones del bucle se ejecutan.
while ( n < 5 ) {
  // Muestra un mensaje en la consola con el valor de n
  console . log ( n + ' : es inferior a 5' )
  // Incrementa n de 1 (equivalente a n = n + 1)
  n ++
  // Muestra un mensaje con el nuevo valor de n
  console . log ( 'n después de incrementar : ' + n )
}
```

En el ejemplo anterior, creamos una variable n que vale 0. Luego, creamos un bucle while con la condición (n < 5), que significa que entramos en el bucle mientras que n sea inferior a 5. Se observa un n++. El “++” es el equivalente de +1. Podríamos haber escrito también n = n + 1, sin embargo la formulación ++ es mucho más práctica. Aumentar un valor de 1 se llama incrementar. En nuestro ejemplo, hemos incrementado nuestro contador.

Si n es inferior a 5, las instrucciones siguientes se ejecutan:

- Muestra un mensaje en la consola de tipo "<valor de n> es inferior a 5" (ej: 0 es inferior a 5).
- Luego, incrementamos n de uno, por lo tanto n vale n + 1 (ej: 0 + 1 en el primer paso, luego 1 + 1, 2 + 1, ...).
- Muestra un mensaje con el nuevo valor de n (ej: n después de incrementar : 1).

Al final del primer paso, n vale entonces 1, luego 2 al final del segundo paso, y así sucesivamente hasta que sea igual a 5 y que la condición (n < 5) no se cumpla más, lo que provoca el fin del bucle.

La consola muestra entonces:

```
0 : es inferior a 5
n después de incrementar : 1
1 : es inferior a 5
n después de incrementar : 2
2 : es inferior a 5
n después de incrementar : 3
3 : es inferior a 5
n después de incrementar : 4
4 : es inferior a 5
n después de incrementar : 5
```

## do...while

Esta instrucción va a permitir crear un bucle que va a ejecutar un bloque de instrucciones hasta que una condición dada se cumpla. La diferencia con while es que, esta vez, la condición se analiza después de la ejecución del bloque de instrucciones.

```javascript
// Inicialización de la variable n
let n = 0
do {
  // Muestra un mensaje en la consola con el valor de n
  console . log ( 'n : ' + n )
  // Incrementa n de 1 (n = n + 1)
  n ++
} while ( n < 3 )
```

El ejemplo anterior va a mostrar en la consola:

```
n : 0
n : 1
n : 2
```

## Ejemplo: Diferencia entre while y do...while

Para distinguir bien la diferencia entre las dos soluciones, aquí está el código JavaScript con los dos bucles:

```javascript
let x = 3
do {
  console . log ( 'x : ' + x )
  x ++
} while ( x < 3 )

let y = 3
while ( y < 3 ) {
  console . log ( 'y : ' + y )
  y ++
}
```

En el ejemplo anterior, la consola va a mostrar únicamente:

```
x : 3
```

En efecto, aunque x esté inicializado a 3, el bloque de instrucciones del do se ejecuta antes de verificar la condición (x < 3), por lo tanto el mensaje de la consola se muestra. En el caso siguiente, donde y está inicializado a 3, la condición se prueba enseguida y, como no se cumple, el mensaje de la consola no se muestra.

## Atención: Bucle infinito

Hay que tener cuidado al utilizar while / do...while, porque es posible crear un bucle infinito, es decir un bucle cuya condición nunca se invalide. Como la condición se cumple siempre, pasaremos eternamente por el bloque de instrucciones y habrá que conseguir forzar manualmente el paro, cerrando la pestaña del navegador o utilizando la funcionalidad de paro en algunos navegadores, por ejemplo.

```javascript
// ATENCIÓN – bucle infinito a no reproducir
// Ejemplo 1
let n = 0
while ( n < 5 ) {
  console . log ( 'Bucle infinito' )
}

// ATENCIÓN – bucle infinito a no reproducir
// Ejemplo 2
let isValid = true
while ( isValid === true ) {
  console . log ( 'Bucle infinito' )
}
```

## Método: Instrucciones break y continue

Sin embargo, es posible terminar un bucle cuando una condición se cumple usando la instrucción break. Esta instrucción permite parar la ejecución de un bucle.

En el ejemplo siguiente, la condición para que el bucle while termine es que n llegue a 10. Sin embargo, la condición if dentro indica que el bucle debe terminar cuando n llegue a 5: el bucle se parará entonces una vez que la condición se cumpla, es decir cuando n alcance 5.

```javascript
let n = 0;
while ( n <= 10 ) {
  if ( n == 5 ) {
    break;
  }
  n ++
  console . log ( n )
}
```

La instrucción continue, ella, ignora el resto del bucle y vuelve a la iteración siguiente. En el ejemplo siguiente, cuando n tenga el valor 3, el bucle continuará sin aplicarse a esta condición.

```javascript
let n = 0;
while ( n < 5 ) {
  n ++
  if ( n === 3 ) {
    continue;
  }
  console . log ( n )
}
```

## A recordar

- Los bucles permiten repetir instrucciones un cierto número de veces. Se pueden utilizar para realizar una acción para cada letra de una palabra, por ejemplo.
- Cuando recorremos una palabra usando un bucle, se crea una variable que contiene cada letra.
- Incrementar una variable de 1 significa aumentarla de 1.
- while: va a permitir crear un bucle que se va a ejecutar mientras que la condición indicada entre paréntesis se cumpla.
- do...while: la diferencia con while es que la condición se analiza después de la ejecución del bloque de instrucciones.
- Atención a no crear un bucle infinito.

## Complemento

**[while](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/while)**

**[do...while](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/do...while)**