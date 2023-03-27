# **Tipo Numérico**

<br>

**En programación, todo dato tiene un tipo.**

**Un tipo definirá la naturaleza de los diferentes valores que puede tener un dato.**

**Al tratar con variables, nos damos cuenta de que los datos pueden ser:** 

- de tipo `numérico`

- de tipo `cadena de caracteres`

- de tipo `booleano`

- entre otros.

---

<br>
<br>

---

## **Tipo Number**

---

<br>

**El tipo `Number` permite representar `números`.**

Sin embargo, **los números representables** a través **del tipo `Number` están dentro de un intervalo preciso.**

**Los números decimales entre:**

- `2^-1074`

    y
    
- `2^1024`

**pueden ser representados.**

---

<br>

El intervalo que abarca los números enteros representables de manera "segura" **es más restrictivo.**

**Tomemos un valor numérico y mostremos su tipo:**

<br>

---

**Por ejemplo JS:**

```js
const numero = 154.78;

console.log(typeof numero); // Devuelve "number"

// Typeof nos indica de que tipo es el valor contenido en la variable numero !

```

---

<br>

Podemos ver que la consola muestra `"number"`.

Por lo tanto, el número es de tipo `Number`.

<br>

---

<br>

**Es importante señalar que los números enteros representables de manera "segura" con el tipo `Number` van desde:**

- `-2^53 - 1`

    hasta

- `2^53 - 1`

**¿Pero qué ocurre si escribimos un número entero muy grande?**

<br>

---

**Veamos un ejemplo JS:**

```js
const numero = 100071992549200345;
console.log(numero);
```

---

<br>

**Podemos ver que la consola muestra el número `100071992549200350`.**

Sin embargo, no es el mismo número.

---

<br>

**¿Por qué sucede esto?**

Sin entrar en detalles, **este problema de redondeo se debe a que el número entero es demasiado grande para ser representado por el tipo `Number`.**

---

<br>

Entonces, **¿cómo representamos este número?:**

- Usando el tipo `Bigint`.

<br>

---

---

<br>

<br>

---

## **Tipo `BigInt`**

---

<br>

El tipo `Bigint` **permite representar enteros más grandes que aquellos representables a través del tipo `Number`.**

**Intentemos representar el entero anterior usando el tipo `Bigint`.**

<br>

---

Para ello, **podemos agregar una `"n"` al final del número:**

```javascript
const numero = 100071992549200345n;

//                              👆
// Aquí vemos la n al final del numero

console.log(numero);
// Por lo tanto 
// Muestra 100071992549200345n
```

---

<br>

**Ahora funciona, la consola muestra:**

- `100071992549200345n`

---

<br>

**Por cierto, si mostramos el tipo del número:**

<br>

---

**Ejemplo mostrar tipo en JS:**

```js
const numero = 100071992549200345n;

console.log(typeof numero); // Devuelve "bigint"

// La consola muestra: "bigint"
```

**Por lo tanto, el número es de tipo `Bigint`**

<br>

---

<br>

**Cuando realicemos operaciones aritméticas, debemos asegurarnos de tratar valores del mismo tipo juntos para evitar errores.**

<br>

---

**Por ejemplo, podemos ver que si realizamos una suma de un Bigint con un Number:**

```js
const a = 16370197019808913673160913870317n;

// 👆 es de BigInt

// 👇 No es de BigInt no tiene la `n` al final

const b = 16879361;
let suma =  a + b;
console.log(suma);
```

---

<br>

Vemos que **este código genera un error debido a una `incompatibilidad` de `tipos` en la operación**.

Por lo tanto, **debemos asegurarnos de que los dos operandos de una operación matemática sean del mismo tipo.**

<br>

---

**Ejemplo JS: Para corregir este código, podríamos convertir `"b"` en un `BigInt`**

```js
const a = 16370197019808913673160913870317n;

// Ahora ya la tiene al final la `n`

const b = 16879361n;
let suma =  a + b;
console.log(suma);
```

---

<br>

Es importante tener en cuenta que la generación de `Bigints` debe ser razonable, ya que con números grandes puede consumir muchos recursos y afectar el rendimiento del programa.

<br>

---

---

<br>

<br>

---

## **NaN (Not a Number)**

---

<br>

**`NaN` es un término, una propiedad que encontramos cuando el resultado de una operación aritmética no es un número.**

**Literalmente, `"NaN"` significa "No es un número".**

<br>

---

**Por ejemplo, si intentamos multiplicar un número por un texto:**

```javascript
const numero = 12456 * "caracteres";

// Muestra NaN por que al igual que la lógica humana no se puede multiplicar numeros por palabras

console.log(numero); // Muestra NaN
```

<br>

---

<br>

Un punto interesante en JavaScript es que **si realizamos una operación `aritmética con dos números`, uno de los cuales es una cadena de caracteres, JavaScript convierte automáticamente la cadena en número** y devuelve el resultado de la operación:

<br>

---

**por ejemplo:**

```javascript
const numero = 12456 * "10";

console.log(numero); // Muestra 124560
```

---

<br>

En este último caso, la operación devuelve **124560** en lugar de `NaN`, ya que la cadena `"10"` se convierte en número y se realiza el cálculo.

<br>

---

<br>

**Podemos observar que `NaN` es un valor bastante especial en JavaScript.**

---

**De hecho, es único; incluso NO ES IGUAL A SI MISMO:**

```javascript
console.log(NaN === NaN);
// Muestra "false"
```

---

<br>

Ahora ya conocemos los diferentes valores primitivos relacionados con los números en JavaScript.

<br>

---

---