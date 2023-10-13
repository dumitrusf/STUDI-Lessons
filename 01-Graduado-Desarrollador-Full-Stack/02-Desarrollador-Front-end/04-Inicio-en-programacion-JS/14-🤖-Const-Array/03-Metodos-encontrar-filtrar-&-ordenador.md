# Métodos para Encontrar, Filtrar y Ordenar
## Objetivos
- Conocer los diferentes métodos para encontrar un valor, filtrar o ordenar un arreglo en JavaScript.
- Utilizar el método que mejor responda a sus necesidades.

## Contexto
Hemos visto en la primera parte los diferentes métodos para recorrer un arreglo. Sin embargo, para filtrar, ordenar o encontrar un valor, no es necesariamente útil ni eficiente recorrerlo completamente.

De hecho, existen métodos que permiten realizar estas acciones: son estos los que vamos a estudiar ahora.

## El método `find()`
Devuelve el primer valor encontrado que cumpla con una condición dada, la cual se pasa como parámetro en forma de una función.

Si ningún valor cumple la condición, entonces el método devuelve: `undefined`.

Este método no necesariamente recorre todo el arreglo, ¡lo que puede representar una ganancia en rendimiento!

## Ejemplo de código
```javascript
function isGreaterThanTen(elemento) {
  return elemento > 10;
}

let numeros = [0, 9, 51, 100, 6, 18, 2];
// Muestra 51 en la consola porque es el primer valor encontrado que es mayor que 10
console.log(numeros.find(isGreaterThanTen));
```

🤖🤖

Por supuesto, aquí tienes el texto traducido del francés al español y estructurado en formato Markdown para facilitar su lectura:

---

## El método `findIndex()`
Es similar al método `find()`, pero en lugar de devolver el primer valor que cumpla con una condición dada, devuelve el índice (index) de la primera valor encontrado que cumpla dicha condición. La condición se pasa como parámetro en forma de una función.

Si ningún valor cumple con la condición, entonces el método devuelve: `-1`.

Esta función no necesariamente recorre todo el arreglo.

### Precaución
`findIndex` es un método muy utilizado, pero el hecho de que devuelva `-1` podría ser una fuente de errores en el código de un desarrollador principiante. ¡Ten cuidado de probar bien el retorno de tus funciones y de no utilizar el resultado tal como es!

### Ejemplo de código
```javascript
function isGreaterThanTen(elemento) {
  return elemento > 10;
}

let numeros = [0, 9, 51, 100, 6, 18, 2];
// Muestra 2 en la consola porque es el índice de 51, que es el primer valor encontrado que es mayor que 10.
console.log(numeros.findIndex(isGreaterThanTen));
```

## El método `indexOf()`
Devuelve el índice del primer elemento encontrado que corresponde al elemento buscado, el cual se pasa como parámetro.

Si el elemento no se encuentra, entonces el método devuelve: `-1`.

La diferencia con `findIndex()` es que aquí no pasamos una función, sino directamente el elemento buscado.

Este método también acepta un segundo parámetro opcional que permite especificar el índice de inicio, para que la búsqueda no comience desde el principio del arreglo.

### Ejemplo de Código
```javascript
let animales = ['León', 'Gato', 'Perro', 'León', 'Oso'];
// Muestra 0 en la consola porque el primer valor 'León' encontrado está en el índice 0, aunque haya un segundo en el índice 3.
console.log(animales.indexOf('León'));
// Muestra 3 en la consola porque el primer valor 'León' encontrado al empezar a navegar desde el índice 2 está en el índice 3.
console.log(animales.indexOf('León', 2));
```

## El método `lastIndexOf()`
Es similar a `indexOf()`, pero devuelve el índice del último elemento encontrado que corresponde al elemento buscado, que se pasa como parámetro.

Si el elemento no se encuentra, entonces el método devuelve: `-1`.

### Importante
Esta función recorre el arreglo de forma inversa, es decir, comenzando desde el último índice. Sin embargo, los índices mantienen su valor original (el primer elemento a la izquierda del arreglo sigue estando en el índice 0).

### Parámetros Opcionales
El método `lastIndexOf()` también acepta un segundo parámetro opcional que permite especificar el índice de inicio para que la búsqueda no comience desde el final del arreglo.

### Ejemplo de Código
```javascript
let animales = ['León', 'Gato', 'Perro', 'León', 'Oso'];
// Muestra 3 en la consola porque el último valor 'León' encontrado está en el índice 3.
console.log(animales.lastIndexOf('León'));
// Muestra 0 en la consola porque el último valor 'León' encontrado al comenzar a navegar desde el índice 1 está en el índice 0.
// Dado que la búsqueda es de derecha a izquierda y comienza en el índice 1 ('Gato'), entonces el último valor 'León' encontrado está en el índice 0.
console.log(animales.lastIndexOf('León', 1));
```

🤖🤖

Claro, aquí tienes la traducción del francés al español con el formato Markdown:

---

## El método `sort()`
Este método permite ordenar un array y devuelve ese mismo array ordenado.

### Atención
Este método ordena cadenas de caracteres. Por lo tanto, si le pasas números, estos se convertirán en cadenas y se ordenarán como tales, no como números. El resultado no será un array de números ordenados de forma ascendente o descendente.

Ordenar un array de números del 1 al 10 de esta manera resultará en: 1, 10, 2, 3, 4, 5, 6, 7, 8, 9. ¡No es ideal!

### Parámetros Opcionales
`sort()` puede aceptar una función de comparación como parámetro que permite determinar el orden de clasificación.

### Ejemplo de Código
```javascript
let animales = ['León', 'Gato', 'Perro', 'Caballo', 'Tigre', 'Oso'];
let numeros = [0, 900, 1000, 11, 40, 6, 8, 2, 61];
// Muestra en consola: ['Gato', 'Caballo', 'Perro', 'León', 'Oso', 'Tigre']
console.log(animales.sort());
// Muestra en consola: [0, 1000, 11, 2, 40, 6, 61, 8, 900]
console.log(numeros.sort());
// Función para comparar la longitud de las cadenas a fin de ordenarlas en orden ascendente
function compararLongitudTexto(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  // Caso donde a.length = b.length
  return 0;
}
// Muestra en consola: ['Gato', 'León', 'Oso', 'Perro', 'Tigre', 'Caballo']
console.log(animales.sort(compararLongitudTexto));
// Función para comparar números con el fin de ordenarlos en orden ascendente
function compararNumeros(a, b) {
  return a - b;
}
// Muestra en consola: [0, 2, 6, 8, 11, 40, 61, 900, 1000]
console.log(numeros.sort(compararNumeros));
```

## El método `filter()`
Este método retorna un nuevo array creado con los valores del array original que cumplen con una condición dada, la cual es pasada como parámetro en forma de una función.

### Ejemplo de Código

```javascript
function isTextLengthGreaterThan4(elemento) {
  return elemento.length > 4;
}

let animales = ['León', 'Gato', 'Perro', 'Caballo', 'Tigre', 'Oso'];
let animalesFiltrados = animales.filter(isTextLengthGreaterThan4);
let animalesFiltradosBis = animalesFiltrados.filter(function(elemento) {
  return elemento.length > 5;
});

// Muestra en consola: ['León', 'Gato', 'Perro', 'Caballo', 'Tigre', 'Oso']
console.log(animales);
// Muestra en consola: ['Perro', 'Caballo', 'Tigre']
// Elementos de 'animales' con más de 4 caracteres
console.log(animalesFiltrados);
// Muestra en consola: ['Caballo']
// Elementos de 'animalesFiltrados' con más de 5 caracteres
console.log(animalesFiltradosBis);
```

## El método `slice()`

### Descripción

Este método devuelve un nuevo array que es una parte del array original, sin modificar este último.

### Parámetros

La función tiene dos parámetros opcionales:

1. **Primer parámetro**: Es el índice desde donde se empezará la extracción en el array. Puede ser negativo. Si es negativo, indicará los últimos X elementos a extraer (por ejemplo, -3 va a extraer los 3 últimos elementos).
2. **Segundo parámetro**: Es el índice en el que se detendrá la extracción en el array. **Importante**: el valor en este índice no se incluirá en el nuevo array.

Si el segundo parámetro está ausente, la extracción irá desde el índice especificado en el primer parámetro hasta el final del array.

El segundo parámetro también puede ser negativo, lo que indicará que no se incluyan los últimos X elementos en la extracción (por ejemplo, -2 detendrá la extracción antes de los 2 últimos elementos).

### Ejemplo de Código

```javascript
let animales = ['León', 'Gato', 'Perro', 'Caballo', 'Tigre', 'Oso'];
// Muestra en consola: ['León', 'Gato', 'Perro', 'Caballo', 'Tigre', 'Oso']
console.log(animales.slice());
// Muestra en consola: ['Tigre', 'Oso']
console.log(animales.slice(4));
// Muestra en consola: ['Caballo', 'Tigre', 'Oso']
// El primer parámetro es negativo, por lo que extraemos los últimos 3 elementos.
console.log(animales.slice(-3));
// Muestra en consola: ['Gato', 'Perro']
console.log(animales.slice(1, 3));
// Muestra en consola: ['Gato', 'Perro', 'Caballo']
console.log(animales.slice(1, -2));
// Muestra en consola: ['Perro', 'Caballo']
console.log(animales.slice(-4, -2));
// Muestra en consola: ['León', 'Gato', 'Perro', 'Caballo', 'Tigre', 'Oso']
// El array original no ha sido modificado.
console.log(animales);
```

## El método `pop()`

### Descripción

Elimina y retorna el último elemento de un array.

:warning: **Cuidado**: La longitud del array se modifica como resultado de esta operación.

### Ejemplo de Código

```javascript
let animales = ['León', 'Gato', 'Perro', 'Caballo', 'Tigre', 'Oso'];
// Muestra en consola: 6
console.log(animales.length);
// Muestra en consola: Oso
console.log(animales.pop());
// Muestra en consola: 5
// Debido a que el último valor ha sido eliminado
console.log(animales.length);
```

## El método `shift()`

### Descripción

Elimina y retorna el primer elemento de un array.

:warning: **Cuidado**: La longitud del array se modifica como resultado de esta operación.

### Ejemplo de Código

```javascript
let animales = ['León', 'Gato', 'Perro', 'Caballo', 'Tigre', 'Oso'];
// Muestra en consola: 6
console.log(animales.length);
// Muestra en consola: León
console.log(animales.shift());
// Muestra en consola: 5
// Debido a que el primer valor ha sido eliminado
console.log(animales.length);
```

## Método `includes()`

Devuelve `true` si el valor buscado se encuentra en el array, de lo contrario devuelve `false`.

- El primer parámetro es el valor que deseamos encontrar.
- El segundo parámetro, que es opcional, es el índice desde el cual se empezará a buscar.

### Ejemplo de Código

```javascript
let animales = ['León', 'Gato', 'Perro', 'Caballo', 'Tigre', 'Oso'];
// Muestra true
console.log(animales.includes('Oso'));
// Muestra false porque 'León' está en el índice 0 y estamos buscando desde el índice 1
console.log(animales.includes('León', 1));
```

## Métodos de Array en JavaScript para Recordar

- **`find()`:**
  
    - Devuelve el primer valor que cumple con una condición dada.

    ---

- **`findIndex()`:**
  
    - Devuelve el índice del primer valor que cumple con una condición dada.

    ---

- **`indexOf()`:**
  
    - Devuelve el índice del primer elemento encontrado que coincide con el elemento buscado.

    ---

- **`lastIndexOf()`:**
  
    - Devuelve el índice del último elemento encontrado que coincide con el elemento buscado.

    ---

- **`sort()`:**
  
    - Permite ordenar un array. Devuelve el mismo array ordenado.

    ---

- **`filter()`:**
  
    - Devuelve un nuevo array creado con los valores del array original que cumplen con una condición.

    ---

- **`slice()`:**
  
    - Devuelve un array que es una parte del array original sin modificarlo.

    ---

- **`pop()`:**
  
    - Elimina el último elemento de un array y lo devuelve. Modifica la longitud del array.

    ---

- **`shift()`:**
  
    - Elimina el primer elemento de un array y lo devuelve. Modifica la longitud del array.

    ---

- **`includes()`:**
  

  ---
    - Devuelve "true" si el valor buscado está presente en el array, de lo contrario, devuelve "false".