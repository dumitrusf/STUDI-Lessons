# La programación imperativa

## Objetivos

- Descubrir el principio de la programación imperativa
- Comprender la importancia de este paradigma

## Mise en situation

La programación imperativa es el paradigma más extendido entre los lenguajes de programación. Es un tipo de programación básica, que se utiliza sobre todo en el lenguaje máquina, es decir, el lenguaje del nivel más bajo posible al que todos los demás lenguajes deben ser traducidos.

## La programación imperativa

La programación imperativa se compone de 5 pilares principales:

- El uso de una secuencia de instrucciones, lo que significa que el código se ejecutará instrucción tras instrucción, en un orden determinado.
- La asignación de valores en la memoria para poder manipularlos.
- El uso de instrucciones condicionales que permiten ejecutar una parte del código solo en algunos casos.
- El uso de bucles que permiten repetir la ejecución de una parte del código varias veces.
- Los saltos, que permiten manipular el orden en el que se ejecutarán las instrucciones, gracias a las funciones o los goto.

## Nota: El pseudocódigo

>Estos principios de la programación imperativa se implementan en la gran mayoría de los lenguajes. Por eso se utilizan en algoritmia pura como elementos constitutivos del pseudocódigo. A partir de un algoritmo que respeta la programación imperativa, es posible codificar en cualquier lenguaje, aunque la implementación final pueda diferir ligeramente para satisfacer los otros paradigmas del lenguaje.

## Ejemplo: Programación imperativa en JavaScript

Todas estas instrucciones se leerán de arriba a abajo, en orden. Esto es lo que da línea por línea:

Línea 1: Asignación del valor 0 en la variable "contador"
Línea 2: Se hace un bucle, es decir, se repiten las instrucciones siguientes mientras que "contador" sea menor que 10
Línea 3: Instrucción condicional: se ejecuta el código solo si "contador" es par
Línea 4: Salto: se llama a la función display, cuyo código está declarado en otro lugar
Línea 6: Se modifica el valor de contador, lo que también forma parte de la asignación de valores

```javascript
let contador = 0;
while (contador < 10) {
  if (contador % 2 === 0) {
    display(contador);
  }
  contador++;
}
```

## A recordar

- La programación imperativa representa las operaciones básicas comunes a muchos lenguajes de programación: la secuencia de ejecución, la asignación de variables, las condiciones, los bucles y los saltos.

## Complemento

- **[Programación imperativa](https://fr.wikipedia.org/wiki/Programmation_imp%C3%A9rative)**