# La programación funcional

## Objetivos

- Descubrir el principio de la programación funcional

- Comprender la diferencia entre programación declarativa y programación funcional

## Contexto

Tal como se ha presentado hasta ahora, la programación declarativa parece más limitada que los otros paradigmas: solo se describe la acción deseada, pero su resolución depende de otro programa (como un motor de base de datos, para el SQL). En realidad, la programación declarativa representa simplemente una base sobre la que se apoyan muchos otros paradigmas. Es posible respetar estas mismas reglas en la programación más clásica. Para ello, hay que recurrir a la programación funcional.

## La programación funcional

La programación funcional es un paradigma que permite considerar su programa como un conjunto de llamadas a funciones matemáticas. El término de "funciones matemáticas" no debe tomarse en el sentido algebraico, sino que designa más generalmente funciones que no tienen ningún efecto secundario y que devuelven un resultado.

Para introducir los principios de la programación declarativa en el desarrollo, la programación funcional se basa en principios que le son propios:

- El uso de funciones puras, es decir, funciones cuya ejecución solo depende de los datos que se les dan.
- La inmutabilidad de las variables: para poder estar seguro de la pureza de nuestras funciones, los datos no pueden ser modificados. Las variables tienen así solo un valor inicial, pero no pueden ser cambiadas. Para hacer evolucionar los valores, hay que crear nuevas variables que recibirán el resultado de la operación.
- Esta inmutabilidad de las variables plantea un problema: cuando usamos bucles, el estado de nuestras variables, como un contador, debe cambiar para salir del bucle. Los bucles tradicionales no son pues realizables en programación funcional, sino que son reemplazados por funciones recursivas, es decir, funciones que se llaman a sí mismas.
- Las funciones de orden superior, que son funciones que pueden tomar como parámetros (o devolver) otras funciones.

## Ejemplo: Imperativo versus funcional

Implementemos estos principios en JavaScript. Imaginemos que tenemos una lista de valores numéricos y que queremos recuperar el valor máximo de esta lista. Veamos primero su implementación en programación imperativa. El principio es simple: vamos a recorrer todo el array, del principio al final, gracias a un bucle. Una variable va a contener el valor máximo (inicializado a 0) y, en cada vuelta del bucle, si el valor actual del array es superior al valor máximo, entonces el valor actual del array se convierte en el valor máximo. Notemos que, para esta explicación, hemos descrito los pasos para llegar a un resultado, lo que es típico de la programación imperativa.

```javascript
function maximum(list) {
  let currentMax = 0;
  // Para todos los elementos del array
  for (let i = 0; i < list.length; i++) {
    // Si el valor máximo es más pequeño que el valor actual del array
    if (currentMax < list[i]) {
      // El valor actual se convierte en nuestro valor máximo
      currentMax = list[i];
    }
  }
  return currentMax;
}
// Ejemplo de una llamada
console.log(maximum([3, 4, 1, 6, 7, 1, 3, 5])); // Muestra "7"
```

Observamos que con esta implementación, varias variables son modificadas: `i`, en el bucle `for`, y `currentMax`. Veamos ahora el mismo código, implementado esta vez usando el paradigma funcional. En lugar de preguntarnos "Cómo calcular el número máximo de una lista", respetemos la programación declarativa y preguntémonos más bien "Qué es el máximo de una lista". El número máximo de una lista es simplemente un número que es superior a todos los demás elementos de la lista. Esta noción de "otros elementos de la lista" es una noción importante en programación funcional, ya que es gracias a ella que podremos hacer nuestro bucle. Descompongamos más precisamente lo que es un número máximo de una lista:

- Tomamos el valor máximo encontrado en la lista hasta el momento (si no hemos recorrido todavía nuestra lista, será 0)
- Si el primer elemento de la lista es superior a este valor, entonces el número máximo de la lista es el máximo entre su primer elemento y el resto de la lista
- Si el primer elemento de la lista es inferior a este valor, entonces el número máximo de la lista es el máximo entre el valor máximo encontrado y el resto de la lista

Veamos lo que da la implementación en JavaScript:

```javascript
function maximum(currentMax, list) {
  // Si la lista está vacía, entonces es el valor máximo encontrado hasta el momento
  if (list.length == 0) {
    return currentMax;
  }
  // Comparamos este valor con el primer elemento de la lista
  // Si el primer valor de la lista es superior
  if (currentMax < list[0]) {
    // Calculamos el máximo entre el primer valor y el resto de la lista
    return maximum(list[0], list.slice(1));
  } else {
    // Si no, calculamos el máximo entre el máximo actual y el resto de la lista
    return maximum(currentMax, list.slice(1));
  }
}
console.log(maximum(0, [3, 4, 1, 6, 7, 1, 3, 5])); // Muestra 7
```

En este código, ninguna variable es modificada. En su lugar, la función `maximum` se llama a sí misma, lo que crea un bucle. En cada nueva llamada, la lista se reduce, hasta que está vacía, lo que detiene la ejecución del programa.

## A recordar

- La programación funcional es una variante de la programación declarativa, en la que las variables no pueden ser modificadas. Cada función debe ser pura, es decir, depender solo de sus parámetros.
- Las funciones son elementos muy importantes en programación funcional. En efecto, para poder hacer bucles sin modificar variables, las funciones van a tener que llamarse a sí mismas: es el principio de funciones recursivas. Además, es posible pasar funciones como parámetros o devolverlas: son las funciones de orden superior.

## Complemento

- **[Programación funcional](https://fr.wikipedia.org/wiki/Programmation_fonctionnelle)**

- **[Los principios de programación funcional en JavaScript](https://www.freecodecamp.org/news/functional-programming-principles-in-javascript-1b8fc6c3563f/)**