# **Otros tipos primitivos**

<br>
<br>

---

## **Tipo Booleano**

---

<br>

Ya estás familiarizado con el tipo booleano.

**Una variable de tipo booleano puede tener los valores:**

- true 

    o 

- false.

---

<br>

**Para definir una variable de tipo booleano, simplemente podemos asignarle true o false.**

<br>

---

**Por ejemplo JS:**

```js
const variable = true;

console.log(variable);
// Muestra "true"

console.log(typeof variable);
// Muestra "boolean"
```

---

<br>

Como sabes, los booleanos se utilizan como valores de retorno en condiciones.

Esto permite comparar datos.

---

---

<br>

<br>

---

## **Tipo de Cadena `(String)`**

---

<br>

El tipo `String` permite representar texto.

Las cadenas de caracteres son conjuntos de valores ordenados e indexados.

El primer valor tiene el índice `0`, el segundo `1`, y así sucesivamente.

<br>

---

**Para definir una cadena de caracteres, podemos asignarle un valor o conjunto de valores entre comillas:**

```javascript
const a = "caracteres";

console.log(a); // Muestra "caracteres"

console.log(typeof a); // Muestra "string"
```

---

<br>

**Veamos un ejemplo de concatenación de cadenas utilizando el operador `+=` :**

```js
let a = "caracteres";

a += " escritos";

console.log(a); // Muestra "caracteres escritos"

console.log(typeof a); // Muestra "string"
```

---

<br>

Aquí parece que estamos modificando la cadena "caracteres".

Sin embargo, recordemos que los **tipos primitivos definen** `valores inmutables`, es decir, valores que no se pueden modificar una vez definidos.

A pesar de esto, `String` es un tipo primitivo que define cadenas de caracteres, que son valores primitivos.

**"caracteres" es un valor primitivo.**

Entonces, en teoría, no podemos modificar el valor de una cadena.

**¿Pero cómo funcionan los `operadores de concatenación`?**

<br>

---

<br>

**En realidad, la cadena original no se modifica.**

**El operador `+=` creará una nueva cadena que concatena las cadenas `"caracteres"` y `"escritos"`.**

La variable `"a"` se asignará a esta nueva cadena, pero la cadena original `"caracteres"` no se habrá modificado.

**Este mismo principio se aplica a los operadores de incremento o asignación después de la suma con números.**

<br>

---

<br>

Se recomienda utilizar cadenas de caracteres solo para texto.

<br>

---

---

<br>

<br>

---

## **Tipo `Symbol`**

---

<br>

Un símbolo es un valor único que no puede ser modificado.

Los símbolos se pueden utilizar para crear claves únicas que apunten a una propiedad de un objeto, evitando así posibles conflictos con propiedades creadas por otras instrucciones de código.

Esto puede parecer un poco complejo de entender a primera vista, pero concentrémonos en cómo crear un símbolo.

**Para crear un símbolo, utilizamos la función:**

- `Symbol()`

---

<br>

Esta función nos permite crear un valor de tipo S`ymbol`

<br>

---

**Por ejemplo:**

```javascript
let sy1 = Symbol('marca');

console.log(sy1);
// Muestra "Symbol(marca)"

console.log(typeof sy1);
// Muestra "symbol"
```

---

<br>

Aquí creamos un símbolo `"sy1"` definido como **Symbol`('marca')`**.

<br>

---

**Creemos un segundo símbolo que también definiremos como `Symbol('marca')` y comparemos estos valores:**

**por ejemplo:**

```javascript
let sy1 = Symbol('marca');

let sy2 = Symbol('marca');

console.log(sy1 === sy2); // Muestra "false"
```

---

<br>

Es interesante, definimos las dos variables con la misma expresión y los dos símbolos no son iguales.

Esto confirma que un símbolo tiene la característica de ser único.

<br>

---

<br>

**Los símbolos nos permiten crear claves de propiedades únicas y NO ENUMERABLES** `(estas propiedades no se listarán al recorrer las propiedades de un objeto con un bucle for/in)`.

Este concepto puede ser un poco complicado de entender por ahora, pero no nos preocupemos, por ahora basta con recordar que los símbolos nos serán útiles en la creación de claves de propiedades.

<br>

---

---

<br>

<br>

---

## **Tipo `Null`**

---

<br>

El valor null es un valor primitivo que simplemente representa la ausencia de valor.

Null debe ser asignado para indicar que no hay valor.

<br>

---

**Por ejemplo, si escribimos:**

```javascript
let variable = null;
console.log(variable); // Muestra "null"
```

---

<br>

**La consola muestra null.**

<br>

---

**Sin embargo, hay un `bug` si intentamos mostrar el tipo de la variable:**

```javascript
let variable = null;
console.log(typeof variable); // Muestra "object"
```

---

<br>

Podemos ver que el tipo devuelto no es `null`, sino `object`.

Esto es un error en JavaScript que ha existido durante bastante tiempo, pero que aparentemente no se ha corregido por razones de compatibilidad.

<br>

---

---

<br>

<br>

---

## **Tipo `UNDEFINED`**

---

<br>

A diferencia de `null`, el valor primitivo `undefined` **(definido por el tipo undefined)** se devuelve automáticamente por defecto **cuando se intenta acceder a un valor no definido o a una propiedad inexistente.**

<br>

---

**Por ejemplo, si escribimos:**

```javascript
let variable;

console.log(variable); // Muestra "undefined"

console.log(typeof variable); // Muestra "undefined"
```

---

<br>

**Podemos ver que automáticamente se devuelve `undefined` al usar la expresión `"variable"`, ya que esa variable no está definida.**

**A diferencia del tipo `null`, no necesitamos definir la variable como `undefined` para que devuelva undefined; esta es la expresión predeterminada en JavaScript.**

<br>

**Ahora conocemos los tipos `primitivos` en JavaScript.**

<br>

---

---