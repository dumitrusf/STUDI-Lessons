Hola, este es Bing. Estoy aquí para ayudarte con la traducción de la página web que tienes abierta en tu navegador Microsoft Edge. Aquí está la traducción del francés al español en formato markdown:

# Tri a bulles

## Objetivos

- Comprender el principio del tri a bulles¹[1]
- Descubrir el funcionamiento de los arreglos
- Ver cómo recorrer un arreglo

## Nota

Este capítulo presenta una noción más avanzada sobre los arreglos. Así que no dudes en leer este contenido más tarde si sientes que es difícil de acceder por ahora.

## Puesta en situación

En programación, a menudo tenemos que manejar listas de valores, como listas de nombres de usuarios o de números. Para poder manipular estas listas, usamos arreglos, que son una forma de almacenar varios valores en una misma variable. Cada valor se encuentra en una celda del arreglo, pero el arreglo en sí mismo se almacena en una variable. Para dar un ejemplo de manipulación de este tipo de datos, vamos a ver un ejemplo de ordenación de arreglos: el tri a bulles.

## Tri a bulles

Imaginemos una lista de números que debemos ordenar por orden creciente. Sin embargo, como para las cadenas de caracteres, sólo podemos tratar cada valor uno por uno, desde el principio hasta el final, gracias a un bucle. Una solución simple sería recorrer el arreglo desde el principio hasta el final buscando el número más grande de la lista, y luego colocarlo al final de la lista. Luego, recorremos de nuevo el arreglo desde el principio hasta el penúltimo valor buscando el número más grande, y luego lo colocamos en penúltimo lugar, y así sucesivamente. Este método es el tri por selección. Éste funciona bien, pero requeriría el uso de una variable adicional para almacenar el valor durante la búsqueda del elemento más grande, por lo que usaría más memoria. Por lo tanto, vamos a realizar una variante de esta técnica: el tri a bulles²[2].

El principio es básicamente el mismo, excepto que al recorrer el arreglo, vamos a comparar cada valor con su vecino para saber cuál es el más grande. Si el más grande está colocado antes, entonces intercambiamos los valores de las dos celdas: esto tendrá el efecto de "empujar" el valor más grande hacia el final del arreglo. Luego podremos repetir esta operación para el penúltimo valor y así sucesivamente hasta tener un arreglo ordenado.

Para hacer esto, vamos a necesitar un bucle que nos permita recorrer cada celda del arreglo y permutar los valores si es necesario. Pero este tratamiento sólo permite colocar un solo valor. Por lo tanto, este bucle tendrá que estar contenido en un bucle principal que nos permita repetir esta operación para cada posición (última, penúltima, etc.). Aquí está el código en JavaScript:

```javascript
let numbers = [ 3 , 8 , 5 , 9 , 1 ];
let numbersLength = numbers . length ;
for ( let main = 0 ; main < numbersLength - 1 ; main ++ ) {
  for ( let cell = 0 ; cell < numbersLength - main - 1 ; cell ++ ) {
    if ( numbers [ cell ] > numbers [ cell + 1 ]) {
      // Si la valeur de la case actuelle est supérieure à la valeur de la case d'après, on permute les valeurs (en utilisant l'échange de variables)
      numbers [ cell ] = numbers [ cell ] + numbers [ cell + 1 ];
      numbers [ cell + 1 ] = numbers [ cell ] - numbers [ cell + 1 ];
      numbers [ cell ] = numbers [ cell ] - numbers [ cell + 1 ];
    }
  }
}
console . log ( numbers );
```

Dos bucles anidados se crean aquí. El primero, donde se define un iterador main , nos servirá para determinar qué valor vamos a recuperar: en la primera vuelta del bucle, vamos a colocar el último valor, en la segunda vuelta, el penúltimo y así sucesivamente. El segundo bucle, con el iterador cell , se encargará de realizar las permutaciones (es este bucle el que sigue el esquema de arriba)³[3]. Se llamará tantas veces como elementos haya en el arreglo.

## Ejemplo

Aquí está la traza del algoritmo anterior. Para simplificar la traza, las permutaciones no aparecen: cada línea de la traza (a partir de los bucles) representa el resultado de una vuelta de bucle (es decir, si se han intercambiado valores o no). Las líneas en amarillo son las líneas donde ha habido una permutación.

## A recordar

- Para manejar listas de valores, se puede usar arreglos. Cada valor está contenido en una celda y tiene un número de celda que permite recuperar el valor. Los números de celda empiezan por 0.

## Complemento

**[El tri a bulles Wikipédia](https://fr.wikipedia.org/wiki/Tri_%C3%A0_bulles)**