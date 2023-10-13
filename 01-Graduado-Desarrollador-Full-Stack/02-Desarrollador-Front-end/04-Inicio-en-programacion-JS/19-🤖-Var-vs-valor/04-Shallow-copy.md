# Copia superficial

## Objetivos

- Aprender qué es la copia superficial
- Ver las ventajas y limitaciones de su uso

## Contexto

A menudo queremos copiar un objeto para modificarlo, sin que eso afecte al objeto copiado. Querríamos usar una asignación por copia en lugar de una asignación por referencia. Sin embargo, en JavaScript, no es posible modificar este comportamiento. Para ello, tendremos que recurrir a métodos de clonación de objetos. El más simple de ellos se llama copia superficial.

La copia superficial permite crear un nuevo objeto cuyos valores no estarán vinculados a los valores del objeto copiado.

## Ejemplo

Tomemos el ejemplo de un array:

```javascript
let users = ['Nicolas', 'Romain']
let adminUsers = users
users.push('Laure')
console.log(users) // Muestra ["Nicolas", "Romain", "Laure"]
console.log(adminUsers) // Muestra ["Nicolas", "Romain", "Laure"]
```

El problema, aquí, es que queremos gestionar el array de nuestros usuarios independientemente del de nuestros administradores. Sin embargo, como hemos usado una asignación por referencia sin querer, los valores de los dos arrays están vinculados. Para solucionar este problema, la copia superficial consiste en crear un nuevo objeto que será asignado a nuestra variable. Existen varios métodos de copia superficial, que vamos a ver juntos.

## Operador spread

El primer método de copia superficial es el uso del operador spread, que se escribe "...". Retomemos nuestro ejemplo:

```javascript
let users = ['Nicolas', 'Romain']
let adminUsers = [...users]
users.push('Laure')
console.log(users) // Muestra ["Nicolas", "Romain", "Laure"]
console.log(adminUsers) // Muestra ["Nicolas", "Romain"]
```

Ahora podemos gestionar independientemente la adición de usuarios a nuestra variable users sin que se añadan a la variable adminUsers.

## Método .slice()

El uso del método .slice() crea un nuevo array, que se asigna a la variable adminUsers.

```javascript
let users = ['Nicolas', 'Romain']
let adminUsers = users.slice()
users.push('Laure')
console.log(users) // Muestra ["Nicolas", "Romain", "Laure"]
console.log(adminUsers) // Muestra ["Nicolas", "Romain"]
```

## Método Object.assign()

El método assign() del objeto Object también se puede usar para crear una nueva copia de un objeto (aquí, un array).

```javascript
let users = ['Nicolas', 'Romain']
let adminUsers = []
Object.assign(adminUsers, users)
users.push('Laure')
console.log(users) // Muestra ["Nicolas", "Romain", "Laure"]
console.log(adminUsers) // Muestra ["Nicolas", "Romain"]
```

## Método Array.from()

El método from() del objeto Array también permite crear una copia de un array.

```javascript
let users = ['Nicolas', 'Romain']
let adminUsers = Array.from(users)
users.push('Laure')
console.log(users) // Muestra ["Nicolas", "Romain", "Laure"]
console.log(adminUsers) // Muestra ["Nicolas", "Romain"]
```

## Atención: Limitaciones

La copia superficial permite copiar los valores primitivos de un objeto, pero sólo de su primer nivel. Si hay otros objetos incluidos en éste, se crearán referencias.

```javascript
let users = [['Nicolas'], ['Romain'], ['Laure']]
let adminUsers = Array.from(users)
users[0][0] = 'Pirate'
console.log(users) // Muestra [["Pirate"], ["Romain"], ["Laure"]]
console.log(adminUsers) // Muestra [["Pirate"], ["Romain"], ["Laure"]]
```

Aquí, el array users se copia en una nueva ubicación de memoria y se asigna a adminUsers, pero sus tres valores hacen referencia a los mismos valores que el objeto users.

### ¿Qué método usar?

Según este **[benchmark](https://jsbench.me/4ckizsr3s4/1)**, el método .slice() es más rápido que los demás, pero su sintaxis puede confundir a la hora de leer el código. Por el contrario, las sintaxis con el operador spread o Array.from() pueden parecer más intuitivas, pero su rendimiento es inferior. El método Object.assign() es, sin embargo, descartable para la manipulación de arrays, tanto por el rendimiento como por la sintaxis, pero sigue siendo útil para la manipulación de objetos. Esto depende, por tanto, de nuestra apreciación, según si preferimos priorizar el rendimiento o la legibilidad de nuestro código.

## Para recordar

- La copia superficial permite copiar los valores primitivos de un objeto, lo que permite manipular dos valores distintos para evitar los inconvenientes de la asignación por referencia para los valores de tipo objeto (objetos, arrays, funciones, etc.).

- Sin embargo, esta operación sólo funciona para los valores de primer nivel. En el caso de objetos anidados, habrá que usar otro método.

## Complemento

- [Operador spread](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

- [Array.prototype.slice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

- [Object.assign()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

- [Array.from()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from)