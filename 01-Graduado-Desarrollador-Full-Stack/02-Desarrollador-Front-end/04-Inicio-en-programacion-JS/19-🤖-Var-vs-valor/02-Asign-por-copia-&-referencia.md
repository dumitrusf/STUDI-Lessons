# Asignación por copia vs asignación por referencia

## Objetivos

- Ver qué es una asignación por copia
- Ver qué es una asignación por referencia
- Comprender cómo JavaScript decide el tipo de asignación

## Contexto

Cuando asignamos una variable, podemos elegir proporcionarle directamente un valor (una cadena de caracteres, un array, un objeto, una función, etc.) o pasarle el contenido de otra variable. Si, en el primer caso, la diferencia entre cada tipo de datos no es muy importante, en el segundo, podemos hacer una asignación por copia o por referencia sin saberlo.

## Primitivas vs Objetos

En JavaScript, existen dos grandes familias de tipos de datos: las primitivas y los objetos.

## Asignación de variable

En JavaScript, la gestión de la memoria es mucho más fácil, en comparación con otros lenguajes más de bajo nivel como C. Los valores se declaran automáticamente en la memoria en el momento de la asignación. Del mismo modo, los valores huérfanos se eliminan automáticamente gracias a un mecanismo llamado garbage collector (o recolector de basura en español). En C, por ejemplo, habría que eliminar los valores de la memoria manualmente cuando ya no se usan.

Cuando asignamos un valor a una variable, guardamos en algún lugar de la memoria este dato y lo asociamos a la variable. Cuando decidimos mostrar el contenido de una variable, JavaScript va a buscar el valor almacenado en la ubicación de memoria y lo muestra.

### Primitivas

Entre las primitivas, encontramos por ejemplo los tipos de datos:

- string
- number
- boolean
- null
- undefined

Todos estos tipos de datos se consideran inmutables. Esto significa que cada vez que se modifica el valor de una variable que contiene uno de estos tipos, se le declara un nuevo valor en la memoria y el antiguo se elimina.

```javascript
let username = 'John'
username = 'Jane'
```

Asignamos un valor primitivo de tipo string 'John' en la variable username. Este valor se crea y luego se asigna. Luego redefinimos en la siguiente línea la variable con el valor 'Jane'. Este valor se crea y luego se asigna, y el valor 'John' se elimina.

### Objetos

Entre los objetos, encontramos por ejemplo los tipos:

- array
- object
- function

Los objetos se consideran mutables, es decir, que cuando modificamos uno de estos tipos de datos, no se eliminan ni se recrean por completo. Simplemente se modifica el valor almacenado en la memoria.

```javascript
let user = { name: 'John', age: 25 }
user.name = 'Jane'
```

Asignamos un objeto en la variable user. Este valor se crea y luego se asigna. Luego redefinimos en la siguiente línea la clave name con el valor 'Jane'. El objeto se modifica para contener el nuevo valor, pero no se recrea.

## Copia vs Referencia

Según el tipo de datos manipulados, el tipo de asignación no es el mismo. Donde en otros lenguajes de programación es posible definir si una variable se asigna por copia o por referencia, en JavaScript, no hay opción. Depende del tipo de datos utilizados.

### Copia

La asignación por copia se utiliza cuando manipulamos primitivas. Estos tipos son inmutables, por lo que es imposible modificarlos. Por eso, JavaScript tiene que recrearlos.

```javascript
let username = 'John'
let adminUsername = username
username = 'Jane'
console.log(username) // Muestra Jane
console.log(adminUsername) // Muestra John
```

La consecuencia de la asignación por copia es que un valor modificado en una variable (username) no afecta al valor de la otra variable (adminUsername), aunque una de las variables se asigne a la otra. Tenemos dos valores distintos en la memoria.

### Referencia

La asignación por referencia tiene lugar cuando manipulamos objetos. Estos tipos son mutables, por lo que podemos reutilizarlos para modificarlos. JavaScript no necesita recrearlos.

```javascript
let user = { name: 'John', age: 25 }
let adminUser = user
user.name = 'Jane'
console.log(user) // Muestra {name: "Jane", age: 25}
console.log(adminUser) // Muestra {name: "Jane", age: 25}
```

Las dos variables contienen el mismo valor. De hecho, cada una de las variables hace referencia al mismo lugar de memoria donde se almacena el objeto. Por eso, cuando pensamos modificar una de las variables, en realidad modificamos el lugar de memoria compartido entre las dos. El valor de las dos variables se modifica entonces.

## A recordar

- Existen dos grandes familias de tipos de datos: las primitivas y los objetos.
- Cuando asignamos un valor por copia, la modificación del valor de una de las variables no implica la modificación de la otra. Se refiere a los valores primitivos (texto, número, booleano, etc.).
- Cuando asignamos un valor por referencia, la modificación del valor de una de las variables implica la modificación de la otra, ya que comparten la misma referencia en memoria. La asignación por referencia se refiere a los objetos (objeto, array, función, etc.).

## Complemento

- **[Values & Referencias](https://github.com/getify/you-dont-know-js/blob/2nd-ed/get-started/apA.md#values-vs-references)**

- **[Primitivo](https://developer.mozilla.org/fr/docs/Glossary/Primitive)**