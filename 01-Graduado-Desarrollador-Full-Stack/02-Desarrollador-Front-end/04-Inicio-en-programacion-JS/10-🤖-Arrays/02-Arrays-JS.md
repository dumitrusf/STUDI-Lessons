# ¿Qué es un array JavaScript?

## Objetivos

- ¿Por qué usar un array?
- ¿Qué es un array JavaScript?
- Presentación rápida del objeto Array.

## Contexto

Cuando desarrolles en JavaScript, necesitarás gestionar listas de valores que tendrás que:

- almacenar,
- recorrer,
- añadir,
- modificar o eliminar.

Este curso va a presentar las bases del uso de los arrays JavaScript, su creación y el recorrido y acceso a los valores.

Un array contiene una lista de valores que pueden ser números, textos, objetos o incluso otros arrays. En este último caso, se habla entonces de array multidimensional, pero volveremos sobre ello.

## ¿Por qué usar un array?

¿Tienes que gestionar una lista de productos, categorías, personas, etc.? Un array te permitirá gestionar varios elementos en una sola variable.

## ¿Qué es un array en JavaScript?

En JavaScript, no hay un tipo primitivo para los arrays. Es el objeto Array, presente de forma nativa, el que se utiliza para la manipulación de arrays. Tiene diferentes propiedades y métodos que presentaremos más en detalle en un próximo curso.

Gracias a él, es posible entre otras cosas:

- Conocer el número de elementos de un array (su longitud),
- Añadir elementos al principio o al final,
- Eliminar el primer/último elemento,
- Encontrar la posición de un elemento (su índice dentro del array), etc.

### Ejemplo

```javascript
// Array de números
let precios = [5, 10, 2, 994];

// Array de textos
let animales = ["León", "Gato", "Perro", "Caballo", "Tigre", "Oso"];
```

## A recordar

- Un array permite gestionar una lista en una sola variable.
- En JavaScript, no hay un tipo primitivo para los arrays, se utiliza el objeto "Array".