# Definición de Arrays, Tuplas y Enumeraciones

## ¿Qué son los Arrays?

Los arrays son estructuras de datos que permiten almacenar una colección de elementos del mismo tipo. Los arrays en TypeScript son similares a los arrays en JavaScript, pero TypeScript ofrece un tipado fuerte que asegura que los elementos del array sean del tipo correcto.

## Declaración e Inicialización de Arrays

En TypeScript, los arrays se declaran especificando el tipo de datos de los elementos del array seguido de `[]`. Por ejemplo, un array que contiene números enteros podría declararse de la siguiente forma:

```typescript
let myArray: number[] = [1, 2, 3, 4, 5];
```

Ten en cuenta que el tipo de datos de los elementos del array es `number`, seguido de `[]` (`number[]`) para indicar que se trata de un array de números, que contiene los elementos 1, 2, 3, 4 y 5.

TypeScript también permite definir arrays de varias dimensiones utilizando arrays anidados:

```typescript
let myMatrix: number[][] = [[1, 2], [3, 4]];
```

## Acceso a los Elementos del Array

Los elementos del array pueden accederse utilizando índices numéricos, de la siguiente manera:

```typescript
let myArray: number[] = [1, 2, 3];
let secondElement: number = myArray[1]; // Resultado 2
```

Aquí, accedemos al segundo elemento del array (2) utilizando el índice 1.

## Arrays de Tipos Genéricos

Es posible definir arrays de tipos genéricos en TypeScript, lo que nos permite tener arrays que contengan elementos de diferentes tipos. Por ejemplo, un array que contenga una cadena de caracteres y un número puede definirse de la siguiente manera:

```typescript
let myArray: Array<string | number> = ['Hello', 20];
```

Observa que hemos utilizado el tipo `Array<string | number>` en lugar de `string[]` o `number[]` para indicar que el array puede contener elementos tanto del tipo `string` como `number`.

## Ejemplo: Utilización de Arrays en una Aplicación de Gestión de Tareas

Supongamos que tenemos una aplicación que necesita almacenar una lista de tareas pendientes para un usuario. Podemos utilizar un array para almacenar estas tareas:

```typescript
let tasks: string[] = ["Hacer la compra", "Limpiar la casa", "Visitar a un amigo"];
```

Posteriormente, podemos recorrer este array para mostrar cada tarea pendiente:

```typescript
for (let i = 0; i < tasks.length; i++) {
  console.log(`Tarea n°${i + 1}: ${tasks[i]}`);
}
```

### Uso de Tuplas para Valores Heterogéneos

Si necesitamos una colección de valores homogéneos, utilizamos un array genérico. Pero si necesitamos almacenar una secuencia de valores heterogéneos de forma ordenada y el número de elementos es fijo, entonces utilizamos una tupla.

## Tuplas en TypeScript
Las tuplas son tipos de datos específicos de TypeScript que permiten almacenar una secuencia de elementos del mismo tipo o de diferentes tipos. Las tuplas pueden ser utilizadas para representar datos estructurados como un par de coordenadas (x, y), o un registro de datos con diferentes campos (nombre, edad, dirección, etc.).

## Declaración de Tuplas

Las tuplas se declaran especificando los tipos de datos de los elementos dentro de corchetes [], separados por comas. Por ejemplo, una tupla que contiene una cadena de caracteres y un número se puede declarar de la siguiente manera:

```typescript
let myTuple: [string, number];
```

## Inicialización de Tuplas

Las tuplas pueden ser inicializadas asignando valores correspondientes a los elementos de la tupla. La sintaxis es similar a la que se utiliza para los arrays:

```typescript
let myTuple: [string, number] = ['Hello', 20];
```

Aquí, `myTuple` es una tupla que contiene una cadena de caracteres (`string`) y un número (`number`). Nota que el número de elementos en la tupla debe coincidir con el número de tipos de datos especificados en la declaración de la tupla. En el ejemplo anterior, hemos especificado 2 tipos de datos (`string` y `number`) en la declaración de la tupla, por lo que la longitud de nuestra tupla debe ser 2.

## Acceso a Elementos de tuplas Mediante Índices

Podemos acceder a los elementos de una tupla usando índices numéricos. Por ejemplo, para acceder al primer elemento de una tupla `myTuple`, utilizaríamos la sintaxis `myTuple[0]`. Para acceder al segundo elemento, utilizaríamos `myTuple[1]`, y así sucesivamente.

```typescript
let myTuple: [string, number] = ['Hello', 20];
let myString: string = myTuple[0]; // Hello
let myNumber: number = myTuple[1]; // 20
```

### Descomposición de Tuplas

Es importante señalar que TypeScript también permite descomponer una tupla en varias variables separadas, lo que puede hacer que el código sea más legible.

```typescript
let myTuple: [string, number] = ['Hello', 20];
let [myString, myNumber] = myTuple;
```

Aquí, hemos descompuesto la tupla `myTuple` en 2 variables separadas, `myString` y `myNumber`, que contienen respectivamente la cadena de caracteres 'Hello' y el número 20.

## Ejemplo: de Uso de Tuplas para Almacenar Nombre y Correo Electrónico

Supongamos ahora que necesitamos almacenar tanto el nombre como la dirección de correo electrónico de un usuario. Podemos utilizar una tupla para almacenar esta información:

```typescript
let user: [string, string] = ["Alice", "alice@example.com"];
```

### Uso de la Información de la Tupla

Podemos luego utilizar esta información para enviar un correo electrónico de bienvenida al usuario:

```typescript
console.log(`Bienvenido, ${user[0]}! Se ha enviado un correo de bienvenida a ${user[1]}.`);
```

## Arreglos de Tuplas en TypeScript

### Declaración de Arreglos de Tuplas

También es posible definir arreglos de tuplas en TypeScript. Para declarar un arreglo de tuplas, utilizamos la sintaxis `[]` para declarar un arreglo, y la sintaxis de tupla para declarar cada elemento del arreglo.

```typescript
let myArray: [string, number][] = [['Hello', 20], ['World', 99]];
```

Es importante notar que la longitud de cada tupla debe coincidir con la longitud de la declaración de la tupla de arreglo. En el ejemplo anterior, hemos declarado un arreglo de tuplas de tipo `[string, number][]`, por lo tanto, cada elemento del arreglo debe ser una tupla con exactamente 2 elementos: una cadena de caracteres y un número.

## Ejemplos de Uso de Arreglos de Tuplas

### Almacenamiento de Información de Usuarios

Supongamos que necesitamos almacenar información sobre varios usuarios, incluyendo su nombre, dirección de correo electrónico y número de teléfono. Podemos utilizar un arreglo de tuplas para almacenar esta información para cada usuario:

```typescript
let users: [string, string, string][] = [
  ["Alice", "alice@example.com", "123-456-7890"],
  ["Bob", "bob@example.com", "987-654-3210"],
  ["Charlie", "charlie@example.com", "555-555-5555"]
];
```

Luego podemos recorrer este arreglo para mostrar la información de cada usuario:

```typescript
for (let i = 0; i < users.length; i++) {
  console.log(`Nombre: ${users[i][0]}, Email: ${users[i][1]}, Teléfono: ${users[i][2]}`);
}
```

## Uso de Interfaces para Mejorar la Legibilidad

### Ejemplo con Interfaces

El código será más legible si utilizamos interfaces para describir la información de cada usuario. Aquí tienes un ejemplo para ilustrar:

```typescript
interface User {
  name: string;
  email: string;
  phone: string;
}
let users: User[] = [
  { name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
  { name: "Bob", email: "bob@example.com", phone: "987-654-3210" },
  { name: "Charlie", email: "charlie@example.com", phone: "555-555-5555" }
];
```

Podemos entonces recorrer este arreglo para mostrar la información de cada usuario de manera más clara:

```typescript
for (let i = 0; i < users.length; i++) {
  console.log(`Nombre: ${users[i].name}, Email: ${users[i].email}, Teléfono: ${users[i].phone}`);
}
```

## Enumeraciones en TypeScript

Las enumeraciones son también tipos de datos específicos de TypeScript, que no existen en JavaScript. Permiten definir un conjunto de valores nombrados. Las enumeraciones son comúnmente utilizadas para representar constantes que tienen un significado particular.

### Declaración de una Enumeración

Una enumeración que representa los días de la semana podría definirse de la siguiente manera:

```typescript
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
```

En este ejemplo, hemos definido una enumeración `DaysOfWeek` que contiene 7 valores numéricos nombrados. Los valores numéricos son asignados automáticamente por defecto, comenzando desde 0 e incrementándose de 1 para cada valor siguiente. Por lo tanto, `DaysOfWeek.Monday` tiene el valor 0, `DaysOfWeek.Tuesday` tiene el valor 1, y así sucesivamente.

### Uso de Enumeraciones

Los valores de una enumeración pueden utilizarse de la misma manera que las constantes en JavaScript. Por ejemplo, para utilizar `DaysOfWeek.Monday`, simplemente podemos escribirlo así:

```typescript
let today : DaysOfWeek = DaysOfWeek.Monday;
```

Aquí, hemos declarado una variable `today` de tipo `DaysOfWeek`, que contiene el valor `DaysOfWeek.Monday`.

### Asignación de Valores Personalizados

También es posible especificar valores numéricos personalizados para cada elemento de una enumeración:

```typescript
enum DaysOfWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}
```

## Ejemplo de Uso de Enumeraciones en una Aplicación de Pizzería

Supongamos ahora que necesitamos una enumeración para representar los diferentes tipos de pizzas en nuestra aplicación de pedido de pizza:

```typescript
enum PizzaType {
  Margherita,
  Pepperoni,
  Hawaiian,
  Vegetarian
}
```

Podemos utilizar esta enumeración para almacenar el tipo de pizza que ha ordenado un usuario:

```typescript
interface Order {
  customerName: string;
  pizzaType: PizzaType;
}
let order: Order = {
  customerName: "Alice",
  pizzaType: PizzaType.Pepperoni
};
```

Luego podemos utilizar esta información para preparar el pedido de pizza:

```typescript
switch (order.pizzaType) {
  case PizzaType.Margherita:
    console.log(`Preparando la pizza margherita para ${order.customerName}...`);
    break;
  case PizzaType.Pepperoni:
    console.log(`Preparando la pizza pepperoni para ${order.customerName}...`);
    break;
  case PizzaType.Hawaiian:
    console.log(`Preparando la pizza hawaiana para ${order.customerName}...`);
    break;
  case PizzaType.Vegetarian:
    console.log(`Preparando la pizza vegetariana para ${order.customerName}...`);
    break;
}
```