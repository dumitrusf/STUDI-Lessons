# Tipos de datos en TypeScript
En JavaScript, existen principalmente dos categorías de tipos: los tipos primitivos y los tipos de referencia. TypeScript es un superconjunto de JavaScript, por lo que estos tipos también son válidos en TypeScript.

### Tipos de referencia
Los tipos de referencia, también llamados tipos de objeto, son tipos más complejos que representan valores compuestos o objetos. Los tipos de referencia incluyen matrices, funciones, objetos literales e instancias de clases.

### Tipos primitivos: Introducción
Los tipos primitivos son tipos básicos que representan valores simples. Veremos estos tipos más detalladamente en la continuación del curso.

## Detalle de los Tipos primitivos
El tipado primitivo se refiere a los tipos de datos básicos disponibles en TypeScript, tales como números, cadenas de caracteres, booleanos, símbolos, null y undefined. Todos los valores que podemos crear o manipular pertenecerán a uno de estos seis tipos básicos. A continuación, la lista de estos seis tipos con un ejemplo:

1. **Número 'number'**: representa números (decimales, enteros, etc.).
    ```typescript
    let note: number = 19;
    ```
  
2. **Cadena de caracteres 'string'**: representa cadenas de texto.
    ```typescript
    let fruit: string = "Tomate";
    ```

3. **Booleano 'boolean'**: representa los valores booleanos true o false.
    ```typescript
    let admis: boolean = true;
    ```

4. **Nulo/vacío 'null'**: representa la ausencia de valor o la nulidad.
    ```typescript
    let note: null;
    ```

5. **Indefinido 'undefined'**: representa una valor indefinido o una variable que no ha sido inicializada.
    ```typescript
    let myVariable: undefined;
    ```

6. **Símbolo 'symbol'**: representa un tipo de datos único e inmutable que puede ser utilizado como clave o para representar identificadores para las propiedades en los objetos.
    ```typescript
    const mySymbol = Symbol();
    ```

### Importancia de Distinguir los Tipos
Es importante distinguir bien estos diferentes tipos de datos, ya que son manipulados de manera diferente según su tipo. Por ejemplo, no podemos realizar operaciones aritméticas con cadenas de caracteres, o utilizar métodos de array con un objeto, etc.

🤖🤖

## Tipo de datos "number" en TypeScript
En TypeScript, el tipo de datos `number` se usa para representar números, ya sean enteros o decimales. Puede ser utilizado para almacenar números como -12, 1.618, 5_000, etc. Notar que el “_” se usa para hacer que los números largos sean más legibles (por ejemplo: 5_000_000=5000000).

### Operaciones matemáticas en tipo "number"
Las operaciones matemáticas estándar como la suma, la resta, la multiplicación y la división pueden llevarse a cabo en variables de tipo `number`. Además, TypeScript admite otras funcionalidades matemáticas como las funciones trigonométricas, los logaritmos y las funciones exponenciales.

### Ejemplo de uso del tipo "number"
```typescript
let altitude: number = 300;
let temperature: number = 27.5;
let total: number = altitude + temperature;
```
En este ejemplo, hemos declarado tres variables con el tipo `number`. La variable `altitude` se inicializa con 300, la variable `temperature` con 27.5, y la variable `total` se inicializa con la suma de `temperature` y `altitude`. Dado que `altitude`, `temperature` y `total` son variables de tipo `number`, TypeScript realizará la operación después de una comprobación de tipo.

### Verificación de tipo en TypeScript
TypeScript verifica el tipo de cada variable antes de que el código se ejecute. Esto permite identificar y corregir los errores de tipado antes de que ocurran. Sin embargo, no toma en cuenta la naturaleza de las variables o su significado en el contexto de la aplicación.

### Contexto y significado de las variables
En el ejemplo dado, TypeScript verifica que todas las variables son del tipo `number` y realiza la operación de suma entre `temperature` y `altitude`, sin considerar si esta operación tiene sentido en el contexto de la aplicación. Por ejemplo, si `altitude` representa la profundidad submarina y `temperature` la temperatura del aire, es poco probable que la suma tenga un significado útil en ese contexto.

## Tipo de datos "string" en TypeScript
En TypeScript, el tipo de datos `string` representa cadenas de caracteres, es decir, cualquier tipo de secuencias de caracteres. Las cadenas de caracteres se utilizan para almacenar y manipular texto en una aplicación. Son comúnmente usadas para guardar información como nombres de usuario, direcciones de correo electrónico, números de teléfono, mensajes, descripciones o cualquier otro texto. Las cadenas de caracteres se definen rodeando el texto con comillas dobles (" ") o comillas simples (' ').

### Ejemplo de uso del tipo "string"
```typescript
let name: string = 'Victor Hugo';
let tel: string = "+3366666666";
let title: string = "Quatre-vingt-treize";
```
En este ejemplo, `name` se inicializa con una cadena de caracteres 'Victor Hugo', `tel` se inicializa con otra cadena de caracteres “+3366666666”, y `title` se inicializa aún con otra cadena de caracteres "Quatre-vingt-treize".

## Tipo de datos "boolean" en TypeScript
```typescript
let isActive: boolean = true;
let isConnected: boolean = false;
```
En este ejemplo, `isActive` está inicializada a `true` y `isConnected` está inicializada a `false`. Los valores booleanos son a menudo utilizados en expresiones condicionales para decidir qué código debe ser ejecutado, o para representar el estado de un usuario, un sistema, una función, etc.

🤖🤖

## Tipo de Datos Null en TypeScript
En TypeScript, "null" representa la ausencia de valor o la nulidad. Es un tipo de datos que indica explícitamente que una variable no tiene un valor definido.

### Ejemplo Básico de Null
Por ejemplo, si declaramos una variable en TypeScript y no le asignamos un valor, su valor por defecto será "undefined". Sin embargo, si asignamos explícitamente el valor "null" a una variable, esto significa que la hemos definido intencionadamente como carente de valor.

Ejemplo de declaración de una variable en TypeScript con un valor null:
```typescript
let variableNulle: null = null;
```
En este ejemplo, la variable "variableNulle" se declara como del tipo "null", y su valor se define explícitamente como "null".

## Ejemplo: del Tipo de dato Null
Veamos un ejemplo más concreto.

```typescript
let temp: number | null = 20;  
function getTemperature(): number | null {
  return temp;
}
temp = getTemperature();  
if (temp !== null) {  
  console.log(`La temperatura es de ${temp} grados Celsius.`);  
} else {
  console.log("La temperatura no está disponible.");  
}
```

En este ejemplo, tenemos una variable de temperatura que puede contener ya sea un número (la temperatura en grados Celsius) o el valor null (si la temperatura no está disponible). También tenemos una función "getTemperature" que devuelve la temperatura o null si no está disponible.

### Uso Práctico de Null
En el resto del código, llamamos a la función "getTemperature" y asignamos su valor de retorno a la variable de temperatura. Luego verificamos si la temperatura no es nula antes de mostrarla. Si la temperatura es nula, mostramos un mensaje que indica que la temperatura no está disponible.

Este ejemplo muestra cómo utilizar "null" en TypeScript para representar la ausencia de valor o nulidad, y cómo verificar si una variable es nula antes de usarla para evitar errores.

🤖🤖

Claro, aquí tienes la traducción al español del texto en el contexto de programación en IT, y en formato Markdown visible:

---

## Tipo de Datos Undefined en TypeScript
En TypeScript, "undefined" es un valor que representa una variable que no ha sido inicializada o que no tiene un valor definido.

### Variables No Inicializadas
Cuando una variable es declarada pero no inicializada, su valor es "undefined" por defecto. Por ejemplo:

```typescript
let myVariable: number; // La variable myVariable está declarada, pero no inicializada, su valor por defecto es undefined.
```

### Funciones que Retornan Undefined
De igual forma, si una función no retorna un valor de manera explícita, su valor de retorno será "undefined". Por ejemplo:

```typescript
function myFunction(): void {
  // Esta función no retorna nada (void), su valor de retorno es undefined por defecto
}
```

### Verificación de Variables Undefined
Es importante verificar si una variable es undefined antes de usarla para evitar errores. Aquí tienes un ejemplo de cómo verificar si una variable es undefined:

```typescript
let myVariable: number | undefined;
if (typeof myVariable !== "undefined") {
  console.log(`El valor de myVariable es ${myVariable}.`);
} else {
  console.log("La variable myVariable no tiene un valor definido.");
}
```

En este ejemplo, comprobamos si la variable "myVariable" no es undefined antes de usarla. Si no es undefined, mostramos su valor. De lo contrario, mostramos un mensaje que indica que la variable no tiene un valor definido.

### Diferencia entre Null y Undefined
Es importante destacar que "null" es diferente de "undefined" en TypeScript. "undefined" indica que una variable no ha sido inicializada o no tiene un valor definido, mientras que "null" indica de manera explícita que una variable no tiene un valor.

## Ejemplo: Práctico de Undefined
Aquí tienes un ejemplo práctico del uso de "undefined" en TypeScript:

```typescript
let temp1: number | undefined;  
function getTemperature1(): number | undefined {
  return temp1;
}
temp1 = getTemperature1();  
if (temp1 !== undefined) {  
  console.log(`La temperatura es de ${temp1} grados Celsius.`);  
} else {
  console.log("La temperatura no está disponible.");  
}
```

En este ejemplo, tenemos una variable de temperatura que puede contener un número (la temperatura en grados Celsius) o el valor undefined (si la temperatura no está disponible). También tenemos una función "getTemperature1" que devuelve la temperatura o undefined si no está disponible.

### Uso de Undefined en la Práctica
En el resto del código, llamamos a la función "getTemperature1" y asignamos su valor de retorno a la variable de temperatura. Luego verificamos si la temperatura no es undefined antes de mostrarla. Si la temperatura es undefined, mostramos un mensaje que indica que la temperatura no está disponible.

Este ejemplo demuestra cómo usar "undefined" en TypeScript para representar una variable que no ha sido inicializada o que no tiene un valor definido, y cómo verificar si una variable es undefined antes de usarla para evitar errores.

🤖🤖

Por supuesto, aquí tienes la traducción al español del texto en el contexto de programación en IT y en formato Markdown visible:

---

## Tipo de Datos Symbol en TypeScript
En TypeScript, un símbolo es un tipo de datos primitivo, único e inmutable que puede ser usado como una clave para propiedades en objetos. Los símbolos se crean llamando a la función global `Symbol()` con una cadena de caracteres opcional como descripción. Cada símbolo creado es único, incluso si su descripción es idéntica a la de otro símbolo.

### Uso Común de Símbolos
Los símbolos se usan comúnmente para crear propiedades privadas en objetos o para etiquetar tipos, ya que no pueden ser sobrescritos o modificados accidentalmente por otras partes del código. Esto permite proporcionar información adicional al analizador estático de TypeScript.

### Ejemplos Básicos de Uso de Símbolos
Aquí hay algunos ejemplos de uso de símbolos en JavaScript:

```javascript
const mySymbol1 = Symbol();
console.log(mySymbol1); // muestra "Symbol()"
// Uso de un símbolo para crear una propiedad privada en un objeto:
const myObj : { [key: symbol] : string } = {};
const mySymbol2 = Symbol("myPrivateProperty");
myObj[mySymbol2] = "valor privado";
console.log(myObj[mySymbol2]); // muestra "valor privado"
// Uso de un símbolo para etiquetar un tipo en TypeScript:
const mySymbol4 = Symbol("myType");
type MyType = {
  [mySymbol4] : Boolean;
};
const myValue: MyType = {
  [mySymbol4]: true,
};
console.log(myValue[mySymbol4]); // muestra "true"
```

### Símbolos en el Análisis Estático
Al usar símbolos para etiquetar tipos, podemos proporcionar información adicional al analizador estático de TypeScript para ayudar a detectar errores potenciales desde la fase de compilación.

---

## Ejemplo: Tipo de datos Symbol
Supongamos que tenemos una aplicación para crear formularios dinámicos. Tenemos varios tipos de campos de formulario, tales como "texto", "número", "fecha", etc. Queremos etiquetar cada campo de formulario con un símbolo que represente su tipo, para poder validar las entradas del formulario al enviarlas. Aquí es cómo podemos hacerlo:

```typescript
const fieldTypeSymbol = Symbol("fieldType");
type FormField = {
  label : string;
  value: any;
  [fieldTypeSymbol]: string;
};
const textField: FormField = {
  label: "Campo de texto",
  value: "Hola",
  [fieldTypeSymbol]: "texto",
};
const numberField: FormField = {
  label: "Números",
  value: 42,
  [fieldTypeSymbol]: "número",
};
const dateField: FormField = {
  label: "Fecha de nacimiento",
  value: new Date("1990-01-01"),
  [fieldTypeSymbol]: "fecha",
};
// Función para validar las entradas del formulario
function validateFormField(field : FormField) : string {
  switch (field[fieldTypeSymbol]) {
    case "texto":
      return `El campo "${field.label}" es válido: ${field.value}`;
    case "número":
      if (typeof field.value !== "number") {
        return `El campo "${field.label}" debe ser un número!`;
      }
      return `El campo "${field.label}" es válido: ${field.value}`;
    case "fecha":
      if (!(field.value instanceof Date)) {
        return `El campo "${field.label}" debe ser una fecha!`;
      }
      return `El campo "${field.label}" es válido: ${field.value}`;
    default:
      throw new Error("Tipo de campo de formulario inválido!");
  }
}
// Validación de los campos del formulario
const fields : FormField[] = [textField, numberField, dateField];
fields.forEach((field) => {
  console.log(validateFormField(field));
});
```

### Beneficios de Usar Símbolos en Formularios
En este ejemplo, hemos creado un símbolo `fieldTypeSymbol` para representar el tipo de campo de formulario y luego lo hemos usado para etiquetar cada campo de formulario con su tipo correspondiente. Después hemos creado una función `validateFormField` que utiliza el símbolo para validar cada campo de formulario según su tipo.

El uso de símbolos nos permite crear una interfaz más robusta y segura para nuestra aplicación de formulario dinámico, ya que los tipos de campos de formulario no pueden ser fácilmente modificados o falsificados por otras partes del código.

## Tipos Especiales en TypeScript

Además de los tipos primitivos y los tipos de referencia, TypeScript también ofrece algunos tipos especiales que tienen usos particulares. Aquí están algunos de los tipos especiales más comúnmente usados en TypeScript:

- `any`: representa cualquier tipo y desactiva la comprobación de tipo para una variable, función o objeto.
  
- `unknown`: representa un tipo de datos desconocido. A diferencia de `any`, no permite realizar operaciones en una variable de tipo `unknown` sin antes verificar el tipo de valor.

- `void`: representa la ausencia de valor. Generalmente se usa para funciones que no devuelven nada.

- `never`: representa un tipo que nunca puede ocurrir. A menudo se usa para funciones que lanzan errores o que tienen bucles indefinidos.

Estos tipos especiales son útiles en ciertas situaciones, pero deben ser usados con cuidado para evitar errores de tipado.

## El Tipo `any`

El tipo `any` es una excepción en el sistema de tipado de TypeScript, ya que permite que una variable tenga cualquier tipo de datos, como en JavaScript. Generalmente se usa cuando el tipo de un valor es desconocido, puede contener un valor de cualquier tipo, o es complejo de describir. Sin embargo, el uso excesivo del tipo `any` puede llevar a una pérdida de seguridad de tipo, lo que puede hacer que el código sea más difícil de mantener y depurar.

### Ejemplos con el Tipo `any`

```ts
// Declaración de una variable de tipo number
let myNumber: number = 42;
// Uso de la variable de tipo number
console.log("Mi número es: " + myNumber);
// Intento de asignar una cadena a la variable de tipo number
// Esto generará un error de compilación
myNumber = "¡Hola mundo!"; // Error: El tipo 'string' no se puede asignar al tipo 'number'
// Declaración de una variable de tipo any
let myAny: any = 42;
// Uso de la variable de tipo any
console.log("myAny es: " + myAny);
// Asignación de una cadena a la variable de tipo any
// Esto funciona, ya que la variable de tipo any puede contener cualquier tipo de datos
myAny = "¡Hola mundo!";
// Uso de la variable de tipo any después de asignarle una cadena
console.log("myAny ahora es: " + myAny);
```

En este ejemplo, la variable `myNumber` se declara como de tipo `number`, lo que significa que solo puede contener números. Si intentamos asignarle una cadena, se generará un error de compilación. 

Por otro lado, la variable `myAny` se declara como de tipo `any`, lo que significa que puede contener cualquier tipo de datos. Así, podemos asignarle una cadena sin generar un error de compilación.

Sin embargo, el tipo `any` también puede causar problemas si se usa de manera abusiva, ya que puede ocultar errores de tipo y hacer que el código sea menos seguro y más difícil de entender.

### Comportamiento de `any` similar a JavaScript

```ts
let myVariable: any = 10;
let myVariable1 = 5;
myVariable = "hola"; // OK
myVariable1 = "hola"; // Error de tipado
myVariable.methodeX(); // OK, pero puede causar problemas durante la ejecución
myVariable.proprieteY; // OK, pero puede causar problemas durante la ejecución
```

Esta declaración indica que la variable "myVariable" puede ser de cualquier tipo. Luego podemos asignar cualquier valor a esta variable, sin que TypeScript genere un error de tipo. Y si intentamos llamar a un método o acceder a una propiedad que no existe en el objeto almacenado en "myVariable", TypeScript no puede detectar este error de tipo. Sin embargo, si no asignamos un tipo, sino un valor, aparecerá un mensaje de error, como en el ejemplo anterior.

## El Tipo `unknown` en TypeScript

En TypeScript, el tipo "unknown" se utiliza para indicar una variable o una expresión cuyo tipo es desconocido o incierto, pero con una semántica diferente a la de "any". Se puede usar para situaciones donde el tipo de valor es desconocido, pero debe ser verificado antes de su uso, lo que lo hace más seguro que `any`.

## Diferencias Entre `unknown` y `any`

Por lo tanto, la principal diferencia entre "any" y "unknown" es que "unknown" es un tipo seguro, mientras que "any" es un tipo no seguro. En otras palabras, una variable de tipo "unknown" no puede ser asignada a una variable de tipo más específico sin una comprobación de tipo apropiada. Mientras que una variable de tipo "any" puede ser asignada a cualquier variable sin verificación de tipo. Si usamos el mismo ejemplo que antes, podemos ver la diferencia:

### Ejemplo de Código con `unknown`

```plaintext
let myVariable: unknown;
myVariable = 42; // OK
myVariable = "hello"; // OK
myVariable.methodeX(); // Error: el objeto es de tipo 'unknown'.
myVariable.proprieteY ; // Error: el objeto es de tipo 'unknown'.
```

## Verificación de Tipo para `unknown`

Si intentamos llamar a un método o acceder a una propiedad que no existe en el objeto almacenado en "myVariable", TypeScript genera un error de tipo. Para utilizar la variable de tipo "unknown" de forma segura, primero debemos verificar su tipo antes de usarla.
