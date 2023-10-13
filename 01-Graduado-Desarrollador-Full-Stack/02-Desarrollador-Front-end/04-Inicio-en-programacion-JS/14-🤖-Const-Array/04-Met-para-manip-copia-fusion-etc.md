# Métodos para manipular (copiar, fusionar...) arrays

## Objetivos:

- Copiar elementos de arrays
- Fusionar arrays
- Manipular arrays

## Contexto

En la parte anterior, aprendiste a filtrar, ordenar y encontrar un valor en un array JavaScript. En esta última parte, dedicada al objeto Array(), veremos juntos los métodos dedicados a la copia, fusión y manipulación de los arrays.

## Método reverse()

Permite invertir el orden de los elementos colocando el último en primero, el penúltimo en segundo, etc.

### Ejemplo

```javascript
let numbers = [101, 0, 25, 9, 51]
numbers.reverse() // Muestra [51, 9, 25, 0, 101]
console.log(numbers)
```

## Método push()

Te permite insertar uno o más elemento(s) al final de un array. Devuelve la nueva longitud de éste.

### Ejemplo

```javascript
let colors = ['Azul']
// Muestra 3 en la consola: la nueva longitud del array (2 valores añadidos)
console.log(colors.push('Blanco', 'Rojo'))
// Muestra el array colors con los 2 valores añadidos: ['Azul', 'Blanco', 'Rojo']
console.log(colors)
```

## Método unshift()

Es similar a push() excepto que los elementos se añaden al principio del array. Devuelve la nueva longitud de éste.

### Ejemplo

```javascript
let colors = ['Azul']
// Muestra 3 en la consola: la nueva longitud del array (2 valores añadidos)
console.log(colors.unshift('Blanco', 'Rojo'))
// Muestra el array colors con los 2 valores añadidos: ['Blanco', 'Rojo', 'Azul']
console.log(colors)
```

## Método splice()

Permite añadir, modificar o eliminar elementos del array. Puede tomar hasta 3 parámetros:

- El primero es el índice a partir del cual hay que empezar a modificar el array. Puede ser negativo: en ese caso, indica que la modificación empezará a partir del X último elemento (por ejemplo, -3 indicará que empiece a partir del tercer elemento desde el final).
- El segundo indica el número de elementos a reemplazar. Si el segundo parámetro está ausente, entonces la eliminación irá desde el índice indicado en el primer parámetro hasta el final del array. Si vale 0, ningún elemento será eliminado (para añadir un elemento sin eliminar ninguno).
- El tercer parámetro indica los elementos a insertar en el array a partir del índice indicado en el primer parámetro. Si este parámetro está ausente, entonces splice() eliminará los elementos apuntados por los dos primeros parámetros.

### Ejemplo

```javascript
let animals = ['León', 'Gato', 'Perro', 'Caballo', 'Tigre', 'Oso']
// Muestra ['Perro']
// Porque la eliminación empieza en el índice 2 y concierne solo a 1 elemento.
console.log(animals.splice(2, 1))
// Muestra ['León', 'Gato', Caballo', 'Tigre', 'Oso']
// Sin 'Perro' que ha sido eliminado
console.log(animals)
// Muestra ['Tigre', 'Oso']
// Porque la eliminación empieza en el índice 3 del array modificado y concierne a 2 elementos.
console.log(animals.splice(3, 2, 'Abeja', 'Águila', 'Lince'))
// Muestra ['León', 'Gato', Caballo', 'Abeja', 'Águila', 'Lince']
// Sin 'Tigre' y 'Oso' que han sido eliminados y reemplazados por 'Abeja', 'Águila' y 'Lince'.
console.log(animals)
// Muestra ['Abeja', 'Águila']
// Porque la eliminación empieza en el tercer elemento desde el final (-3) y concierne a 2 elementos.
console.log(animals.splice(-3, 2, 'Halcón'))
// Muestra ['León', 'Gato', Caballo', 'Halcón', 'Lince']
console.log(animals)
// Muestra ['Gato', Caballo', 'Halcón', 'Lince']
// Porque la eliminación va desde el índice 1 hasta el final porque no se ha pasado ningún valor final como parámetro.
console.log(animals.splice(1))
// Muestra ['León']
console.log(animals)
// Muestra []
// Array vacío porque no hay eliminación (el segundo parámetro es 0)
console.log(animals.splice(0, 0, 'Tiburón'))
// Muestra ['Tiburón', 'León']
console.log(animals)
```

## Método concat()

Va a concatenar los arrays: lo utilizarás si necesitas fusionar uno o varios array(s) en un nuevo array. De hecho, este método no modifica los arrays existentes, sino que crea uno nuevo. Toma como parámetros el o los array(s) a concatenar al array. También puedes concatenar directamente valores, como puedes ver en los ejemplos de abajo.

### Ejemplo

```javascript
let animals = ['Gato', 'Lince']
let otherAnimals = ['León', 'Tigre']
let otherAnimals2 = ['Tiburón', 'Águila']
let allAnimals = animals.concat(otherAnimals, otherAnimals2)
// Muestra: ['Gato', 'Lince', 'León', 'Tigre', 'Tiburón', 'Águila']
// Concatenación de animals, otherAnimals y otherAnimals2
console.log(allAnimals)
// Concatenar valores
let otherAnimals3 = otherAnimals.concat('Perro', 'Oso')
// Muestra: ['León', 'Tigre', 'Perro', 'Oso']
// Concatenación de otherAnimals y 'Perro', 'Oso'
console.log(otherAnimals3)
// Creación de un array multidimensional por concatenación
let allAnimals2 = [].concat([animals], [otherAnimals], [otherAnimals2])
// Muestra: [['Gato', 'Lince'], ['León', 'Tigre'], ['Tiburón', 'Águila']]
console.log(allAnimals2)
```

## Método join()

Este método te da la posibilidad de crear una cadena de caracteres concatenando todos los elementos de un array. Por defecto, el separador es la coma, pero puedes especificar otro pasándolo como parámetro.

### Ejemplo

```javascript
let animals = ['León', 'Gato', 'Perro', 'Caballo', 'Tigre', 'Oso']
// Muestra: León,Gato,Perro,Caballo,Tigre,Oso
console.log(animals.join())
// Muestra: León / Gato / Perro / Caballo / Tigre / Oso
console.log(animals.join(' / '))
```

## Método flat()

Va a crear un nuevo array que contiene todos los elementos del array y de los arrays situados dentro de éste. Por ejemplo, puedes utilizar este método si quieres crear un array con todos los valores de un array multidimensional. Esta función acepta un parámetro opcional que permite especificar la profundidad de arrays anidados a "aplanar" (1, por defecto).

### Ejemplo

```javascript
let animals = ['Cebra', ['León', 'Tigre'], 'Vaca', ['Gato', 'Perro'], 'Águila']
let animalsFlat = animals.flat()
// Muestra: ['Cebra', 'León', 'Tigre', 'Vaca', 'Gato', 'Perro', 'Águila']
console.log(animalsFlat)
let animals2 = [
  'Gato',
  ['Lince', ['Águila', 'Halcón'], ['Oso', 'Cebra']],
  'Perro',
  [['León', 'Tigre']],
  'Caballo',
]
let animals2Flat1 = animals2.flat()
// Muestra:
// Como la profundidad por defecto es 1, solo se han aplanado los arrays del primer nivel de profundidad.
/* [
  'Gato',
  'Lince',
  ['Águila', 'Halcón'],
  ['Oso', 'Cebra'],
  'Perro',
  ['León','Tigre'],
  'Caballo'
] */
console.log(animals2Flat1)
let animals2Flat2 = animals2.flat(2)
// Muestra: ['Gato', 'Lince', 'Águila', 'Halcón', 'Oso', 'Cebra', 'Perro', 'León','Tigre','Caballo']
// Como la profundidad definida es 2, se han aplanado todos los arrays.
console.log(animals2Flat2)
```

## A recordar:

- **unshift()**:

    - Inserta uno o varios elementos al principio de un array.

    ---

- **splice()**:

    - Añade, modifica o elimina elementos del array.

    ---

- **concat()**:

    - Concatena los arrays.

    ---

- **join()**:

    - Crea una cadena de caracteres concatenando todos los elementos de un array.

    ---

- **flat()**:

    - Crea un nuevo array que contiene todos los elementos del array y de los arrays situados dentro de este (para un array multidimensional).

## Complemento:

- **[reverse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)**

- **[push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push)**

- **[unshift()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)**

- **[splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)**

- **[concat()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)**

- **[join()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join)**

- **[flat()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)**