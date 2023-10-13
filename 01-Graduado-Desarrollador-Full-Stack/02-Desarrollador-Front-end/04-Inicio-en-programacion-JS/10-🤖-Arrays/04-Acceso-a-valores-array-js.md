# Acceder a los valores de un array JavaScript

## Objetivos

- Aprender a acceder a un valor en un array
- Saber recorrer un array

## Situación

Ahora que sabes crear arrays JavaScript, vamos a ver cómo recorrer estos arrays para recuperar los valores que contienen. Pero también verás que es posible acceder a ellos directamente.

## Acceder directamente a un valor de un array JavaScript

Primero, es importante que sepas cómo se almacenan los valores en un array JavaScript.

```javascript
let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
```

El array de arriba contiene 6 valores: se dice que su longitud (propiedad length) es de 6. Para acceder a un valor, se puede especificar su número de índice (index) dentro del array¹[1].

**IMPORTANTE**: es indispensable que recuerdes que el primer valor de un array no está en el índice 1, sino en el índice 0. Así, en el array de arriba, el primer valor "Lion" está en el índice 0 del array, y el último, "Ours", se encuentra en el índice 5²[2].

Para obtener un valor, se utiliza la variable del array y se especifica el índice del valor deseado entre corchetes [n]:

```javascript
// Lion
animals[0]
// Chat
animals[1]
// Chien
animals[2]
// Cheval
animals[3]
// Tigre
animals[4]
// Ours
animals[5]
// Mostrar Lion en la consola
console.log(animals[0])
```

## Acceder directamente a un valor de un array JavaScript de varias dimensiones

Retomemos nuestro array "animals" que contiene dos valores, que son:

- Un array que contiene los animales salvajes (con 3 valores).
- Un array que contiene los animales domésticos (con 3 valores).

```javascript
let animals = [
  ['Lion', 'Tigre', 'Ours'],
  ['Chat', 'Chien', 'Cheval']
]
```

Como se ha visto anteriormente, se utiliza el índice del valor: excepto que, esta vez, el primer valor de nuestro array es otro array (ej: ['Lion', 'Tigre', 'Ours']).

### Ejemplo a continuación:

```javascript
// ['Lion', 'Tigre', 'Ours']
animals[0]
// ['Chat', 'Chien', 'Cheval']
animals[1]
```

Sin embargo, también se puede acceder a uno de los valores de los dos arrays presentes en "animals". Para ello, después del primer índice (array objetivo), se añadirá el índice del valor deseado en ese array.

### Ejemplo a continuación:

```javascript
// Primer array JavaScript en el array animals (animals[0])
// Lion
animals[0][0]
// Tigre
animals[0][1]
// Ours
animals[0][2]
// Segundo array JavaScript en el array animals (animals[1])
// Chat
animals[1][0]
// Chien
animals[1][1]
// Cheval
animals[1][2]
```

## Recorrer un array JavaScript

Al utilizar los arrays, a menudo hay que recorrerlos completamente para realizar operaciones, comprobaciones, etc. Vamos a ver entonces cómo recorrer un array JavaScript.

### Propiedad length:

En primer lugar, para recorrer completamente un array, hay que conocer su longitud: la propiedad length del objeto Array permite recuperar esta información.

### Ejemplo:

```javascript
let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
// 6
animals.length
// Mostrar la longitud del array (6) en la consola
console.log(animals.length)
```

### Bucle for:

Se puede recorrer el array utilizando su propiedad length en el bucle for para ejecutar el bloque de instrucciones tantas veces como elementos presentes en el array.

### Ejemplo:

```javascript
let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
// Muestra el valor del array en el índice i en la consola
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i])
}
```

### Explicaciones:

Aquí están los detalles de la instrucción for:

- Para "i" = 0,(let i = 0)
- Mientras que "i" siga siendo inferior a la longitud de nuestro array "animals", (i < animals.length (vale 6))
- se incrementa "i". (i++)
- Incrementar "i" significa que se aumenta su valor: "i" valdrá entonces "i + 1" (i++) al final de cada paso en el bucle, es decir, 1 (=0+1), 2 (=1+1), 3, 4, 5 y finalmente 6 (=5+1).

En el primer paso del bucle, "i" vale 0, lo que equivale a ejecutar la instrucción presente en el bucle:

```javascript
console.log(animals[0])
```

Y así sucesivamente mientras que "i" sea inferior a 6 (animals.length):

```javascript
console.log(animals[1])
console.log(animals[2])
console.log(animals[3])
console.log(animals[4])
console.log(animals[5])
```

Luego, "i" vale 6 y ya no es inferior a animals.length (6), lo que implica que el bucle se termina.

### Los bucles forEach

Para recorrer un array, también se puede utilizar el método forEach() del objeto Array, que permite ejecutar una función sobre cada elemento que lo compone³[3]. Podrás informarte más en profundidad sobre este tipo de bucles, en el capítulo dedicado a "los métodos del Array".

### Ejemplos:

```javascript
let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
// Muestra cada elemento del array en la consola
animals.forEach(function(element) {
  console.log(element)
})
// Muestra cada índice del array y su elemento en la consola
animals.forEach(function(element, index) {
  console.log(index + ': ' + element)
})
```

Explicaciones:

En el ejemplo de arriba, pasamos una función como parámetro del método forEach(). Esta se ejecuta sobre cada uno de los elementos del array. Esta función puede tomar varios parámetros, como el valor en curso de tratamiento (aquí llamado element)⁴[4].

El primer ejemplo de arriba corresponde entonces a:

```javascript
console.log(Lion)
console.log(Chat)
...
console.log(Ours)
```

Pero también es posible pasarle como parámetro el índice (index) del valor en curso de tratamiento. El segundo ejemplo de arriba corresponde entonces a:

```javascript
console.log(0: Lion)
console.log(1: Chat)
...
console.log(5: Ours)
```

### Recorrer un array de varias dimensiones:

Para recorrer un array de varias dimensiones, el principio es el mismo, excepto que también tendrás que recorrer los arrays contenidos dentro. Vas a hacer entonces un bucle dentro de un bucle.

Con un bucle for, la escritura es un poco engorrosa, porque hay dos índices que gestionar: uno para los valores del array animals (animalsIndex) y otro para los valores de cada uno de los arrays contenidos dentro (elementIndex)⁵[5].

### Ejemplo:

```javascript
let animals = [
  ['Lion', 'Tigre', 'Ours'],
  ['Chat', 'Chien', 'Cheval']
]
// Recorre el array animals
for (let animalsIndex = 0; animalsIndex < animals.length; animalsIndex++) {
  // Recorre los arrays en el array animals
  for (
    let elementIndex = 0;
    elementIndex < animals[animalsIndex].length;
    elementIndex++
  ) {
    // Muestra cada elemento del array en la consola
    console.log(animals[animalsIndex][elementIndex])
  }
}
```

El ejemplo de arriba equivale entonces a:

```javascript
console.log(animals[0][0]) // Lion
console.log(animals[0][1]) // Tigre
console.log(animals[0][2]) // Ours
console.log(animals[1][0]) // Chat
console.log(animals[1][1]) // Chien
console.log(animals[1][2]) // Cheval
```

### Con forEach :

Aquí también, vamos a hacer un bucle dentro de otro bucle:

```javascript
let animals = [
  ['Lion', 'Tigre', 'Ours'],
  ['Chat', 'Chien', 'Cheval']
]
// Para cada valor en el array animals (2 arrays)
animals.forEach(function(animalsElement){
  // Para cada valor en cada array (los 2 arrays en el array animals)
  animalsElement.forEach(function(element){
    console.log(element)
  })
})
```

### Resultado :

```javascript
console.log(Lion)

console.log(Tigre)

console.log(Ours)

console.log(Chat)

console.log(Chien)

console.log(Cheval)
```

## Recordatorio
Existen otros parámetros para forEach(), así como otras nociones para los bucles, en los cursos dedicados.

## A recordar
El primer valor de un array está en el índice 0.

Para acceder directamente a un valor del array, se especifica (entre corchetes) su índice dentro de la variable utilizada para el array:

```javascript
animals[0]

...

animals[5]
```
La propiedad length permite conocer la longitud de un array JavaScript:

```javascript
animals.length // (igual a 6 en este ejemplo)
```

- La instrucción for permite ejecutar un bloque de instrucciones en bucle sobre un array.

- El método forEach permite ejecutar una función sobre cada elemento que compone el array.

- Para recorrer un array de varias dimensiones, se puede hacer un bucle dentro de otro bucle.

- Antes de utilizar un bucle como for o forEach, compruebe si una función específica no puede hacer el tratamiento deseado.