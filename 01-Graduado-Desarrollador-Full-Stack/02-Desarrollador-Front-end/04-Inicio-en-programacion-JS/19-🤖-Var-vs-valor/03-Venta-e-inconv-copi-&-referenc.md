Hola, este es Bing. Estoy aquí para ayudarte. 😊

He traducido la página web que tienes abierta en el navegador Microsoft Edge del francés al español usando el sistema GPT-4. También he aplicado el formato markdown para que puedas distinguir los títulos y demás. Aquí está el resultado:

# Ventajas y desventajas de copia y referencia

## Objetivo

Comprender los impactos de la asignación por copia y por referencia

## Contexto

Cada uno de estos métodos tiene sus ventajas y desventajas. Desafortunadamente, en JavaScript, no es posible controlar cuál de los dos queremos usar en el momento de asignar una variable. Vamos a ver los impactos de usar cada uno de los métodos.

## Asignación por copia

Cuando asignamos una variable por copia, su valor se duplica. Así, la nueva variable tiene una versión independiente de ese valor, que se puede modificar y que no afectará al valor de la otra.

```javascript
let username = 'John'
let adminUsername = username
username = 'Jane'
console.log(username) // Muestra Jane
console.log(adminUsername) // Muestra John
```

La ventaja de la asignación por copia es que hace independiente el valor de las dos variables, pero la desventaja es que JavaScript usa más memoria, ya que para dos variables que contienen la misma primitiva, tendremos dos ubicaciones de memoria distintas correspondientes.

## Asignación por referencia

Cuando asignamos un valor por referencia, su valor se reutiliza. Así, la nueva variable y la antigua hacen referencia al mismo valor (la misma ubicación en memoria) y la modificación de una implica la modificación de la otra.

```javascript
let user = {name: 'John', age: 25}
let adminUser = user
user.name = 'Jane'
console.log(user) // Muestra {name: "Jane", age: 25}
console.log(adminUser) // Muestra {name: "Jane", age: 25}
```

La ventaja de la asignación por referencia es que varias variables pueden apuntar al mismo valor. Esto es importante cuando queremos gestionar la actualización de un objeto en varios lugares de una aplicación, por ejemplo un usuario cuyo nombre queremos cambiar. La desventaja es que, en el caso de que queramos tratar varias variables independientemente una de otra, no podremos hacerlo si hacen referencia al mismo valor en memoria. Incluso podemos tener comportamientos inesperados si no habíamos previsto que un objeto modificado pudiera afectar al contenido de otra variable.

### Ejemplo

Imaginemos que queremos crear dos usuarios a partir de un objeto base. Inicializamos las variables correspondientes:

```javascript
let defaultUser = {name: '', age: 0}
let userJane = defaultUser
userJane.name = 'Jane'
userJane.age = 20
let userJohn = defaultUser
userJohn.name = 'John'
userJohn.age = 25
console.log(userJane) // Muestra {name: "John", age: 25}
console.log(userJohn) // Muestra {name: "John", age: 25}
```

Aquí, pensamos crear dos objetos distintos. Sin embargo, al final, modificamos el mismo valor en memoria, ya que la asignación de un objeto se hace por referencia. El valor de la variable userJane es totalmente falso.

## A recordar

- La ventaja de la asignación por copia es que trabajamos con valores distintos y que la modificación de uno no implica la modificación del otro. Pero esto usa más memoria, porque los valores necesitan ser almacenados varias veces.

- Al contrario, la ventaja de la asignación por referencia es que solo vamos a usar una sola ubicación en memoria para almacenar el valor, y podemos gestionar la integridad del valor ya que, si se modifica en un lugar de nuestro código, la modificación se reflejará en todos los lugares donde usemos la misma referencia. De la misma manera, puede ocurrir que la modificación de una variable pueda afectar al valor de otra variable, aunque no lo hayamos previsto.