# Funciones
Las funciones son bloques de código reutilizables que realizan una tarea específica y que pueden ser invocadas desde otras partes del programa. En TypeScript, podemos definir una función utilizando la palabra clave `function`, seguida del nombre de la función, los parámetros entre paréntesis y el cuerpo de la función entre llaves.

### Ejemplo
Aquí hay un ejemplo simple de una función que suma 2 números:

```javascript
function suma(a: number, b: number): number {
  return a + b;
}
```

En este ejemplo, declaramos una función `suma` que toma 2 parámetros (`a` y `b`) de tipo `number` y devuelve un resultado de tipo `number`. Dentro de la función, utilizamos el operador `+` para sumar los 2 parámetros y devolver el resultado usando la palabra clave `return`.

Podemos invocar esta función pasando 2 números como argumentos:

```javascript
let resultado = suma(4, 3); // resultado es 7
```

## Parámetros Opcionales
Es posible hacer que un parámetro sea opcional añadiéndole un signo de interrogación `?`. En este caso, el parámetro no será obligatorio cuando se llame a la función.

```javascript
function saludo(nombre?: string) {
  if (nombre) {
    console.log(`Hola, ${nombre}!`);
  } else {
    console.log("Hola!");
  }
}
```

En este ejemplo, declaramos una función `saludo` que toma un parámetro opcional `nombre` de tipo `string`. Si el parámetro está presente, la función muestra un mensaje de saludo personalizado. De lo contrario, simplemente muestra un mensaje de saludo genérico.

Podemos invocar esta función con o sin argumentos:

```javascript
saludo(); // muestra "Hola!"
saludo("Alice"); // muestra "Hola, Alice!"
```

## Parámetros por Defecto
Es posible definir un valor por defecto para un parámetro añadiendo un signo igual `=` seguido del valor por defecto. En este caso, si no se pasa ningún argumento para ese parámetro, tomará el valor por defecto establecido.

### Ejemplo
```javascript
function saludo(nombre: string = "Mundo") {
  console.log(`Hola, ${nombre}!`);
}
```
En este ejemplo, declaramos una función `saludo` que toma un parámetro `nombre` de tipo `string` con un valor por defecto de "Mundo". Si no se pasa ningún argumento para `nombre`, la función mostrará un mensaje de saludo genérico con la palabra "Mundo".

Podemos invocar esta función con o sin argumentos:

```javascript
saludo(); // muestra "Hola, Mundo!"
saludo("Alice"); // muestra "Hola, Alice!"
```

## Funciones con Tipos de Retorno Complejos
Es posible definir tipos de retorno complejos para funciones en TypeScript. Por ejemplo, una función puede devolver un arreglo, un objeto o incluso otra función.

## Funciones que Devuelven un Arreglo
Una función puede devolver un arreglo especificando el tipo `Array<T>` o `T[]` como tipo de retorno, donde `T` es el tipo de los elementos del arreglo.

#### Ejemplo
Aquí tienes un ejemplo de una función que devuelve un arreglo de cadenas de caracteres:

```javascript
function obtenerColores(): string[] {
  return ["rojo", "verde", "azul"];
}
```

En este ejemplo, la función `obtenerColores` devuelve un arreglo de cadenas de caracteres. Usamos el tipo `string[]` para especificar que la función devuelve un arreglo de cadenas de caracteres.

Podemos invocar esta función y almacenar el resultado en una variable:

```javascript
let colores = obtenerColores(); // colores es ["rojo", "verde", "azul"]
```

## Funciones que Devuelven un Objeto
Una función también puede devolver un objeto especificando el tipo del objeto como tipo de retorno.

#### Ejemplo
Aquí tienes un ejemplo de una función que devuelve un objeto que representa a una persona:

```javascript
function obtenerPersona(): { nombre: string, edad: number } {
  return {
    nombre: "Alice",
    edad: 30
  };
}
```

En este ejemplo, la función `obtenerPersona` devuelve un objeto con dos propiedades: `nombre` de tipo `string` y `edad` de tipo `number`. Usamos un tipo de objeto literal para especificar el tipo de retorno de la función.

Podemos invocar esta función y almacenar el resultado en una variable:

```javascript
let persona = obtenerPersona(); // persona es { nombre: "Alice", edad: 30 }
```

## Funciones que Devuelven una Función
Por último, una función puede devolver otra función especificando el tipo de la función como tipo de retorno.

#### Ejemplo
```javascript
function obtenerMultiplicador(factor: number): (x: number) => number {
  return function(x: number) {
    return x * factor;
  };
}
```

En este ejemplo, la función `obtenerMultiplicador` toma un parámetro `factor` de tipo `number` y devuelve una función que toma un parámetro `x` de tipo `number` y devuelve el producto de `x` y `factor`. Usamos el tipo `(x: number) => number` para especificar que la función devuelta toma un parámetro de tipo `number` y devuelve un resultado de tipo `number`.

Podemos invocar esta función y almacenar el resultado en una variable:

```javascript
let multiplicarPor2 = obtenerMultiplicador(2); // multiplicarPor2 es una función que multiplica por 2
let resultado = multiplicarPor2(3); // resultado es 6
```

En este último ejemplo, llamamos a la función `obtenerMultiplicador` con un argumento de 2, lo que nos devuelve una función que multiplica por 2. Almacenamos esta función en la variable `multiplicarPor2`. Luego llamamos a esta función con un argumento de 3, lo que nos devuelve 6.

## Funciones Anónimas
En TypeScript, es posible definir funciones anónimas, que son variantes de la sintaxis tradicional de las funciones.

Una función anónima es una función que no tiene nombre. Se define como una expresión y se puede almacenar en una variable o pasarse como argumento a otra función.

### Ejemplo
Aquí hay un ejemplo de una función anónima que toma dos parámetros `a` y `b` de tipo `number` y devuelve su suma:

```typescript
let suma = function(a: number, b: number): number {
  return a + b;
};
```

En este ejemplo, definimos una función anónima utilizando la sintaxis `function(a: number, b: number): number`. Almacenamos esta función en la variable `suma`. Esta función toma 2 parámetros `a` y `b` de tipo `number` y devuelve su suma de tipo `number`.

### Invocación de la Función
Podemos llamar a esta función utilizando el nombre de la variable que la contiene:

```typescript
let resultado = suma(3, 4); // resultado es 7
```

### Utilidades de las Funciones Anónimas
Las funciones anónimas pueden ser útiles en situaciones donde necesitamos utilizar la función solo una vez. Esto hace que el código sea más legible al evitar tener una función definida en algún lugar del código que solo se usa una vez. Además, las funciones anónimas se pueden utilizar como argumentos de funciones, lo que puede ser práctico para operaciones como la ordenación o el filtrado de arrays.

### Consideraciones sobre la Complejidad
Sin embargo, si las funciones son demasiado complejas o anidadas, es mejor definir funciones con nombre separadas para una mejor legibilidad.

🤖🤖

## Funciones Flecha
En TypeScript, también es posible definir funciones flecha, que son igualmente variantes de la sintaxis tradicional de las funciones.

Una función flecha es una versión más concisa de la sintaxis de las funciones. Utiliza una flecha (`=>`) para separar los parámetros de la función de su cuerpo.

### Ejemplo
Aquí hay un ejemplo de una función flecha que toma 2 parámetros `a` y `b` de tipo `number` y devuelve su suma:

```typescript
let sum = (a: number, b: number): number => a + b;
```

En este ejemplo, definimos una función flecha utilizando la sintaxis `(a: number, b: number): number => a + b`. Esta función toma 2 parámetros `a` y `b` de tipo `number` y devuelve su suma de tipo `number`.

### Invocación de la Función Flecha
Podemos llamar a esta función de la misma manera que una función anónima:

```typescript
let resultado = sum(3, 4); // resultado es 7
```

### Funciones Flecha con un Solo Parámetro
Las funciones flecha también pueden ser utilizadas para funciones con un solo parámetro:

```typescript
let doble = (x: number) => x * 2;
```

En este ejemplo, definimos una función flecha que toma un parámetro `x` de tipo `number` y devuelve el doble de `x`.

### Recomendaciones de Uso
Se recomienda utilizar funciones flecha cuando la función no necesita acceder a `this`. Esto se debe a que las funciones flecha capturan automáticamente el valor de `this` del entorno en el que fueron creadas, a diferencia de las funciones ordinarias que tienen su propio valor de `this`. Además, las funciones flecha suelen ser más cortas y más legibles que las funciones ordinarias, lo que las hace muy útiles para funciones de callback o funciones que devuelven una función.

🤖🤖

## Funciones Anónimas y Funciones Flecha en TypeScript
Aquí tenemos un ejemplo que utiliza funciones anónimas y funciones flecha:

```typescript
let numbers = [1, 2, 3, 4, 5];
// Utilizando una función anónima para filtrar números pares
let evenNumbers = numbers.filter(function(n) {
  return n % 2 == 0;
});
// Utilizando una función flecha para calcular el cuadrado de cada número
let squaredNumbers = numbers.map(n => n * n);
console.log(evenNumbers);     // Muestra [2, 4]
console.log(squaredNumbers);  // Muestra [1, 4, 9, 16, 25]
```

### Filtrando Números Pares con Funciones Anónimas
En este ejemplo, tenemos un array de números que usamos para ilustrar la aplicación de funciones anónimas y funciones flecha. 

La primera línea usa el método `filter` para filtrar los números pares del array `numbers`. Usamos una función anónima para definir el criterio de filtrado. Esta función toma un parámetro `n` que representa cada elemento del array y devuelve un booleano indicando si `n` es par o no.

### Calculando Cuadrados con Funciones Flecha
La segunda línea usa el método `map` para calcular el cuadrado de cada número en el array `numbers`. Utilizamos una función flecha para definir la transformación a aplicar a cada elemento del array. Esta función toma un parámetro `n` que representa cada elemento del array y devuelve el cuadrado de `n`.

### Mostrando Resultados en Consola
Finalmente, usamos la función `console.log` para mostrar los arrays `evenNumbers` y `squaredNumbers` en la consola.

### Conclusión
Este ejemplo muestra cómo las funciones anónimas y las funciones flecha pueden ser usadas para realizar operaciones en arrays en TypeScript de manera concisa y legible.

## Funciones Genéricas en TypeScript
En TypeScript, las funciones genéricas son funciones que pueden trabajar con diferentes tipos de datos sin conocer estos tipos con antelación. Esto permite reutilizar el código de manera más flexible y evitar repeticiones.

```typescript
function inverserTableau<T>(tableau: T[]): T[] {
  return tableau.reverse();
}
```

### Definición y Uso de Tipos Genéricos
Para definir una función genérica, se utiliza la palabra clave `function` seguida del nombre de la función y los signos de menor y mayor `< >` que contienen el o los tipos genéricos. Estos tipos genéricos se utilizan para definir los parámetros y el tipo de retorno de la función.

En este ejemplo, el tipo genérico "T" se utiliza para definir el tipo de los elementos del array pasado como parámetro y el tipo de retorno de la función. Se aplica el método `reverse()` sobre el array, que luego se devuelve.

### Ejemplo de Uso con Diferentes Tipos de Datos
Se puede utilizar esta función con diferentes tipos de datos, como se muestra a continuación:

```typescript
const tableau1 = [1, 2, 3, 4, 5]; // Array de números
const tableau2 = ["a", "b", "c", "d", "e"]; // Array de strings
console.log(inverserTableau(tableau1)); // [5, 4, 3, 2, 1]
console.log(inverserTableau(tableau2)); // ["e", "d", "c", "b", "a"]
```

En este ejemplo, la función `inverserTableau()` se llama con 2 arrays de diferentes tipos: un array de números y un array de cadenas de caracteres.

### Ventajas de las Funciones Genéricas
Las funciones genéricas permiten hacer el código más flexible y reutilizable, evitando la repetición de código para diferentes combinaciones de tipos de datos.