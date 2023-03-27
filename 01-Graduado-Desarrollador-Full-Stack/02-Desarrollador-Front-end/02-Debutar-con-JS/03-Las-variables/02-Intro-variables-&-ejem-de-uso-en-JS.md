# **Introducción a Variables y ejemplos de uso en JS**

<br>

---

## **Introducción**

---

<br>

Visual Studio Code (VScode) es un editor de código fuente ligero pero potente que se ejecuta en tu escritorio y está disponible para Windows, macOS y Linux.

Integra soporte para JavaScript, TypeScript y Node.js.

Cuenta con un rico ecosistema de extensiones para otros lenguajes y entornos de ejecución (como C++, C#, Java, Python, PHP, Go, .NET).

<br>

---

### **Complemento**

---

<br>

Para descargarlo, seguir este enlace: [Visual Studio Code](https://code.visualstudio.com/Download)

<br>

Para consultar la documentación: [Doc VSC](https://code.visualstudio.com/docs)

<br>

---

---

<br>
<br>

---

## **Que es una variable?**

---

<br>

Una variable es un elemento fundamental en programación que permite almacenar, manipular y hacer referencia a datos en un programa.

En el contexto de JavaScript, una variable es un contenedor para un valor que puede ser de diferentes tipos, como números, cadenas de texto, objetos, matrices, funciones, etc.

Una variable se define mediante un identificador (su nombre) y un valor.

El identificador de la variable se utiliza para acceder al valor almacenado en la variable y modificarlo si es necesario.

Las variables permiten a los desarrolladores gestionar los datos fácilmente en su programa, organizarlos y manipularlos según las necesidades específicas de la aplicación.

En JavaScript, las variables pueden declararse utilizando las palabras clave 'var', 'let' y 'const'.

Cada una de estas palabras clave tiene propiedades y comportamientos específicos que afectan el ámbito, la asignación y la declaración de las variables.

---

---

<br>

<br>

---

## **Utilidad de una variable**

---

<br>

- Las variables desempeñan un papel esencial en la programación, ya que permiten a los desarrolladores almacenar, organizar y manipular datos de manera flexible y eficiente.

- Entre sus principales usos se encuentra el almacenamiento de datos, donde las variables conservan información para su posterior uso en el programa y pueden contener diversos tipos de datos.

- Además, las variables contribuyen a la reutilización de código, reduciendo la redundancia al almacenar valores o referencias que se utilizan con frecuencia.

- Esto permite que el desarrollador evite escribir varias veces el mismo código o valor.

- Las variables también simplifican los cálculos al facilitar operaciones matemáticas y lógicas complejas, almacenar resultados intermedios o actuar como contadores.

- En cuanto a la organización del código, las variables ayudan a estructurar y agrupar información relacionada, mejorando la legibilidad y mantenibilidad del código al permitir a los desarrolladores asignar nombres significativos a los datos.

- Las variables hacen que los programas sean más adaptables, permitiendo a los desarrolladores modificar fácilmente los valores sin tener que cambiar el código en sí mismo, por ejemplo, al modificar solo una vez un valor utilizado en varios lugares del programa.

---

---

<br>

<br>

---

## **Tipos de variables**

---

<br>
<br>

---

### **Numéros de punto flotante (float)**

---

<br>

Los números de punto flotante, también conocidos como números decimales, se utilizan en JavaScript para representar números con valores decimales.

Las variables de este tipo se utilizan para almacenar números reales, como números decimales o números con parte decimal.

En JavaScript, los números de punto flotante se representan mediante el tipo de dato "number".

<br>

---

**EJEMPLO:**

```js
let pi = 3.14159; // Déclaration d'une variable avec un nombre à virgule flottante

console.log(pi); // Affiche : 3.14159
```

<br>

**[Enlace 1 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-1-DumitruSF1)**

---

---

<br>

<br>

---

### **Numéros enteros (Integer)**

---

<br>

"Integer" se utiliza en JavaScript para representar un número entero sin parte decimal.

Este tipo de variable se utiliza para almacenar números enteros, como números de conteo o identificadores.

En JavaScript, los enteros también se representan mediante el tipo de datos "number".

<br>

---

**EJEMPLO:**

```js
let age = 25; // Déclaration d'une variable avec un nombre entier

console.log(age); // Affiche : 25
```

<br>

**[Enlace 2 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-2-DumitruSF1)**

<br>

---

---

<br>

<br>

---

### **Cadena de caracteres: (String)**

---

<br>

En JavaScript, se utilizan cadenas de caracteres para representar texto.

Las variables de este tipo se emplean para almacenar secuencias de caracteres, como palabras, frases o direcciones de correo electrónico.

En JavaScript, las cadenas se representan mediante el tipo de dato "string" y se pueden declarar utilizando comillas simples (' ') o comillas dobles (" ").

<br>

---

**EJEMPLO:**

```js
let nom = "Alice"; // Déclaration d'une variable avec une chaîne de caractères

console.log(nom); // Affiche : Alice
```

<br>

**[Enlace 3 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-3-DumitruSF1)**

---

---

<br>

<br>

---

### **Booleanos (Boolean)**

---

<br>

Los valores booleanos se utilizan en JavaScript para representar valores de verdad, es decir, valores que son verdaderos o falsos.

Este tipo de variable se utiliza para almacenar estados lógicos, como condiciones o opciones de activación/desactivación.

En JavaScript, los valores booleanos se representan mediante el tipo de dato "Boolean".

<br>

---

**EJEMPLO:**

```js
let estActif = true; // Déclaration d'une variable avec une valeur booléenne

console.log(estActif); // Affiche : true
```

<br>

**[Enlace 4 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-4-DumitruSF1)**

---

---

<br>

<br>

---

### **Las tablas (Array)**

---

<br>

En JavaScript, los arrays se utilizan para almacenar múltiples valores en una sola variable.

Este tipo de variable se utiliza para representar una colección de datos, como una lista de elementos o una serie de valores.

En JavaScript, los arrays se representan mediante el tipo de dato "array" y pueden contener valores de diferentes tipos.

<br>

---

**EJEMPLO:**

```js
let nombres = [1, 2, 3, 4, 5];

nombres.forEach(function (nombre) {
  console.log(nombre);
});
```

<br>

**[Enlace 5 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-5-DumitruSF1)**

---

---

<br>

<br>

---

## **Declaración de variables en JS**

---

<br>

<br>

---

### **Uso de Var**

---

<br>

El uso de 'var' en JavaScript se refiere a la declaración de variables que pueden ser reasignadas y cuyo alcance está definido por la función que las envuelve.

Aunque 'var' solía ser la palabra clave estándar para declarar variables en versiones anteriores de JavaScript, la introducción de 'let' y 'const' en ECMAScript 2015 (ES6) ha hecho que su uso sea menos común debido a ciertas limitaciones.

<br>

---

**EJEMPLO**

La propiedad transform aplica una transformación 2D o 3D a un elemento.

Esta propiedad permite rotar, mover, escalar y aplicar transformaciones a los elementos.

```js
// Declaración e inicialización de una variable avec 'var'

var age = 25;

// Resignación de una nueva valor a la variable

age = 26;

console.log(age); // Muestra "26"
```

**[Enlace 6 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-6-DumitruSF1)**

<br>

- En este ejemplo, declaramos una variable llamada "age" con el valor 25.

  - ```js
    var age = 25;
    ```

- Luego, **reasignamos** el valor 26 a la variable y mostramos el nuevo valor.

  - ```js
    age = 26;
    ```

- Sin embargo, es importante tener en cuenta que el uso de 'var' tiene algunas limitaciones.

  - Por ejemplo, las variables declaradas con 'var' son accesibles fuera del bloque en el que se definen, siempre y cuando permanezcan dentro de la función contenedora.

  - Esto puede causar problemas de legibilidad y errores involuntarios.

<br>

1. **[jonmircha let vs var](https://www.youtube.com/watch?v=tmRa0_EvMoc&t=402s)**

2. **[makigas let vs var](https://www.youtube.com/shorts/cFD9bB3UEtY)**

<br>

Aquí hay un ejemplo típico de error al usar "var":

<br>

---

**EJEMPLO:**

```js
1 function testFunction() {
2   if (false) {
3     var testVariable = "Hello world";
   }

4   console.log(testVariable);
 }

5 testFunction(); // Résultat : "undefined"
```

<br>

En este ejemplo, la variable (3) `testVariable` (que esta declarada en el (2) `if`) se declara dentro de una condición que nunca se cumplirá (la condición es false), ya que la condición (2) `if (false)` nunca será verdadera, normalmente hay que tener un true antes de un false, de lo contrario pondríamos else (false).

<br>

Sin embargo, la variable (3) sigue siendo accesible también fuera de esta condición porque se declara con la palabra clave "var".

<br>

Cuando se llama a la función (5) `testFunction()`, se muestra el valor de la variable (3) `test` con `console.log()`.

<br>

Como la variable (3) se declara con "var" en la función (1), esta es accesible en toda la función, incluso si nunca se ha definido.

<br>

Esto puede llevar a errores involuntarios, ya que si la variable (3) no está definida en todas las condiciones (2, falta que este definida en la condición true) en las que se utiliza, puede causar problemas en otras partes del código.

<br>

Por esta razón, las variables se declaran en bloques de código con "let" o "const" para limitar su alcance y evitar errores involuntarios.

<br>

---

**EJEMPLO:**

```js
if (true) {
  var name = "Alice";
}

console.log(name); // muestra "Alice" aun estando la variable declarada en el bloque if, ya que var le importa un pepino los bloques
```

<br>

**[Enlace 8 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-8-DumitruSF1)**

<br>

👇

---

---

<br>

<br>

---

### **La variable 'var' y su alcance**

---

<br>

**Además, las variables declaradas con 'var' tienen una peculiaridad en cuanto a su alcance:**

son interpretadas como si fueran declaradas al principio de la función contenedora, incluso si están definidas más adelante en el código.

Este fenómeno puede causar comportamientos inesperados.

<br>

---

**EJEMPLO: var**

```js
console.log(monNom); // Muestra "undefined" en lugar de generar un error

var monNom = "Alice";
```

<br>

**[Enlace 9 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-9-DumitruSF1)**

<br>

En este caso, el comentario "Muestra **'undefined'** en lugar de generar un error".

<br>

Esto refiere al hecho de que, en JavaScript, **si intentas acceder a una variable** antes de que esta se haya declarado, pero aun asi la declaras después, no se genera un error, pero el valor devuelto será undefined.

<br>

**Esto se debe a que, durante la fase de interpretación, la declaración de la variable `name` se mueve al principio del ámbito (de window), pero la asignación de valor se mantiene en su ubicación original!**

---

<br>

---

**De lo contrario con Let:**

```js
console.log(monNom); // Muestra "Error" en lugar de generar un error

let monNom = "Alice";
```

<br>

En el siguiente código , al utilizar `let` en lugar de `var`, se produciría un error en tiempo de ejecución en lugar de mostrar `undefined` como en el caso anterior.

El error se produciría porque \*\*estamos intentando acceder a la variable name antes de haberla declarado, y haberla asignado antes.

<br>

A pesar de estas limitaciones, 'var' todavía es compatible por razones de compatibilidad con códigos antiguos.

Sin embargo, para los principiantes, se recomienda aprender y utilizar 'let' y 'const' para declarar variables, ya que ofrecen un mejor manejo del alcance y previenen errores relacionados con el **hoisting**.

<br>

**hoisting (elevación)**

<br>

👇

---

---

<br>

<br>

---

### **Hoisting (Elevación)**

---

<br>

El hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven al comienzo de su alcance respectivo, lo que significa que la variable o función puede ser utilizada antes de ser declarada. Esto significa que aunque una variable se declare más tarde en el código, puede ser utilizada antes de su declaración debido al hoisting.

<br>

---

**GRAN EJEMPLO:**

**Aunque su asignación o inicialización** (osea el valor de la variable se queda en su posición original, creada después de alguna función, o asignación y no creada antes de estas) **se mantiene en su posición original.**

Esto significa que, conceptualmente, las declaraciones de variables y funciones se "elevan/hoisting" o se mueven hacia arriba en el código durante la fase de compilación.

(el interpretador aunque nosotros no lo hagamos, este interpretador de JS lo sube al objeto global window, lo mete como si declarásemos las variables arriba del todo).

Recordemos! 👇

**Pero el valor de la variable no!, el valor sigue estando después de la asignación, y por eso nos dará undefined, por que el valor sigue estando creado después de la asignación.**

Cuando se produce el hoisting de una variable, la declaración de la variable se coloca en la parte superior del alcance actual.

Lo que nos permite acceder a esa variable incluso antes de que se haya declarado con la asignación de una función o el `console.log`, a nuestros ojos la variable esta declarada ahi, pero en verdad el interpretador lo ha puesto arriba del todo.

Por que?:

Acordemonos!

Por que el interpretador lo ha puesto en global arriba del todo, y solo el nombre de la variable, Pero no el valor de la variable.

Sin embargo, es importante destacar otra vez!, que solo la declaración osea la variable con el nombre que le dimos se mueve, y no el valor de la variable o inicialización de la variable.

Por lo tanto, si intentas acceder a la variable antes de que se le asigne un valor, su valor será `undefined`.

<br>

---

**Aquí tienes un ejemplo para ilustrar cómo funciona el hoisting:**

```javascript
console.log(miVariable); // Salida: undefined

var miVariable = "Hola mundo";

// Esta 👆 variable a nuestros ojos la vemos ahi puesta!
// pero el interpretador ha escondido de nuesatros ojos y ha subido al window esto 👇

var miVariable =

// el valor lo ha dejado ahi despues del console.log
// pero la declaracion de la variable se la llevo al window al global lo ha declarado el solo arriba del todo
// Por eso nos da undefined por que es
// como si nosotros hubieramos declarado antes el var
// aunque no lo hayamos hecho!
// por lo tanto es como si ya la hubieramos declarado antes del console.log
```

En este caso, aunque la variable `miVariable` se declara después de la instrucción `console.log()`, el hoisting hará que la declaración de la variable se mueva al principio del alcance.

<br>

Sin embargo, en ese punto, la variable aún no ha sido inicializada, por lo que su valor es `undefined`.

<br>

Por eso, verás `undefined` en la salida del `console.log()` en lugar de un error (con Let daría error, ya que a let no se lo lleva el interpretador arriba, let se controla bien).

<br>

Es importante tener en cuenta que el hoisting solo afecta a las declaraciones y no a las asignaciones.

<br>

Por lo tanto, es una buena práctica declarar e inicializar todas las variables al comienzo de su alcance, para evitar confusiones y posibles errores relacionados con el hoisting.

<br>

---

**Otra explicación**

```
El alcance al que nos referimos es el alcance de una función o un bloque de código, como una función específica o un bloque de código dentro de una estructura de control como un if o un for.

Al declarar e inicializar las variables al comienzo del alcance adecuado, se asegura que las variables estén disponibles y tengan un valor asignado antes de ser utilizadas en cualquier parte de ese alcance.

Por ejemplo, si una variable se declara dentro de una función, se recomienda declararla al comienzo de la función, antes de su primera utilización.

De esta manera, se evita cualquier referencia a la variable antes de su declaración, lo que podría conducir a errores o resultados inesperados.



Lo mismo aplica para los bloques de código dentro de una función.

Si una variable se utiliza dentro de un bloque if o un bucle for, se recomienda declararla e inicializarla al comienzo del bloque, para asegurar que esté disponible y tenga un valor asignado antes de ser utilizada dentro de ese bloque.





La declaración e inicialización de variables al comienzo del alcance adecuado, ya sea una función o un bloque de código, ayuda a evitar errores y confusiones al asegurar que las variables estén disponibles y tengan un valor asignado antes de ser utilizadas en cualquier parte de ese alcance.
```

<br>

---

**Ejemplo**

Cuando mencionamos "bloques de código dentro de una función", nos referimos a los segmentos de código delimitados por llaves `{}` dentro de una función.

Estos bloques de código pueden ser estructuras de control como un bloque `if`, un bucle `for`, un `while`, etc.

<br>
<br>

Cuando decimos "declarar e inicializar la variable al comienzo del bloque", nos referimos a hacerlo antes de que el bloque de código comience, es decir, antes de los corchetes `{}`.

<br>

La idea es declarar la variable al principio del bloque para asegurarse de que esté disponible y tenga un valor asignado desde el inicio del bloque.

Aquí tienes un ejemplo para ilustrar esto:

```javascript
function ejemplo() {
  // Declaración de variable al comienzo de la función
  let miVariable;

  if (condición) {
    // Asignación de valor dentro del bloque if
    miVariable = "Hola";
    console.log(miVariable);
  } else {
    // Asignación de valor dentro del bloque else
    miVariable = "Adiós";
    console.log(miVariable);
  }

  // Resto del código de la función...
}
```

En este ejemplo, la variable `miVariable` se declara al comienzo de la función, antes de los bloques `if` y `else`.

Luego, dentro de cada bloque, se le asigna un valor.

Al declarar la variable al comienzo del bloque, nos aseguramos de que esté disponible y tenga un valor asignado antes de ser utilizada dentro de ese bloque específico.

De esta manera, se evitan posibles problemas de referencia a la variable antes de su declaración y se promueve una estructura de código más clara y legible.

<br>

También es recomendable utilizar las palabras clave `let` y `const` en lugar de `var`, ya que estas últimas tienen un alcance más estricto y evitan algunos problemas asociados al hoisting.

<br>

---

---

<br>
<br>

---

### **Uso de Let**

---

<br>

El uso de 'let' en JavaScript se refiere a la declaración de una variable que puede ser reasignadas y cuyo alcance está definido por el bloque contenedor el bloque que contiene (la misma variable dada con Let).

'let' fue introducido en ECMAScript 2015 (ES6) y se ha convertido en una opción preferida para declarar variables, especialmente para principiantes, debido a **su mejor gestión del alcance y su ausencia del hoisting.**

<br>

---

**EJEMPLO:**

```js
// Declaración e inicialización de una variable con 'Let'

let age = 25;

// Resignación de un nuevo valor para la variable age

age = 26;

console.log(age); // Muestra "26"
```

<br>

**[Enlace 10 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-10-DumitruSF1)**

<br>

En este ejemplo, declaramos una variable llamada edad con el valor 25.

Luego, reasignamos el valor 26 a la variable y mostramos el nuevo valor.

A diferencia de 'var', las variables declaradas con 'let' tienen un alcance de bloque, lo que significa que solo son accesibles dentro del bloque en el que se definen.

<br>

---

**EJEMPLO:**

```js
if (true) {
  let name = "Alice";
}

console.log(name); // Error: name is not defined outside the if block.
```

<br>

**[Enlace 11 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-11-DumitruSF1)**

---

---

<br>

<br>

---

### **La variable 'let' y su alcance**

---

<br>

---

**EJEMPLO:**

```js
console.log(myName); // Error : myName is not defined

let myName = "Alice";
```

<br>

**[Enlace 12 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-12-DumitruSF1)**

<br>

---

---

<br>
<br>

---

### **Uso de Const**

---

<br>

El uso de 'const' en JavaScript se refiere a la declaración de variables cuyo valor no puede ser modificado una vez que han sido inicializadas.

'const' fue introducido en ECMAScript 2015 (ES6) y se ha convertido en una elección preferida para declarar variables inmutables, debido a su mejor manejo del alcance y la ausencia del hoisting.

<br>

---

**Ejemplo simple del uso de 'const'**

```js
// Declaración e inicialización de una variable con 'const'

const age = 25;

// Intento de resignación de un nuevo valor a la variable age

age = 26; // Erreur : Intento de resignación a un valeur perteneciente a una constante
```

<br>

**[Enlace 13 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-13-DumitruSF1)**

<br>

En este ejemplo, declaramos una variable llamada age con el valor 25 utilizando 'const'.

Si intentamos reasignar el valor 26 a la variable, generará un error, ya que el valor de una constante no puede ser modificado una vez que ha sido inicializado.

Al igual que con 'let', las variables declaradas con 'const' tienen un ámbito de bloque, lo que significa que solo son accesibles dentro del bloque en el que se definen.

<br>

---

**EJEMPLO:**

```js
if (true) {
  const name = "Alice";
}

console.log(name); // Error: name is not defined outside the if block.
```

<br>

**[Enlace 14 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-14-DumitruSF1)**

---

---

<br>

<br>

---

### **La variable 'Const' y su alcance**

---

<br>

Además, las variables declaradas con 'const' no son hoisteadas, lo que evita comportamientos inesperados y mejora la legibilidad del código.

<br>

---

**EJEMPLO:**

```js
console.log(name); // Error : name is not defined

const name = "Alice";
```

<br>

**[Enlace 15 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-15-DumitruSF1)**

<br>

Se recomienda utilizar 'const' para declarar variables inmutables y familiarizarse con 'let' para variables cuyo valor debe ser modificado.

---
---

<br>

<br>

---

## **Comparación entre 'var', 'let' y 'const'**

---

<br>

![Tabla de variables](./02-Intro-variables-%26-ejem-de-uso-en-JS/img/variables-js-tableau_1.png)

<br>

**En cuanto a la comparación entre 'var', 'let' y 'const':**

En cuanto al alcance, es importante tener en cuenta que 'var' tiene un alcance de función, lo que significa que puede ser llamada en cualquier lugar de la función donde se declara.

Por otro lado, 'let' y 'const' tienen un alcance de bloque, lo que significa que solo son accesibles dentro del bloque de código donde se declaran, generalmente dentro de un par de llaves {}.

En cuanto a la resignación, es importante destacar que tanto 'var' como 'let' pueden ser reasignadas en cualquier momento, lo que significa que su valor puede ser modificado después de su declaración.

<br>

---

```
Las variables declaradas con 'var' y 'let' pueden ser reasignadas después de su declaración, pero solo después de haberlas declarado previamente en el código. Una vez que una variable ha sido declarada, su valor puede ser modificado o reasignado en cualquier momento posterior dentro del alcance correspondiente.
```

---

<br>

Por otro lado, una vez que 'const' ha sido declarada e inicializada, no se puede reasignar.

En cuanto al hoisting, esto se refiere a que la declaración de 'var' y 'let' se "eleva" hasta la parte superior de su alcance, lo que significa que pueden ser llamadas antes de su declaración real.

Sin embargo, solo la declaración de 'var' es "hoisted", no su asignación.

En cambio, 'const' no está sujeta al hoisting.

El "alcance" se refiere al ámbito o extensión de las variables declaradas en JavaScript. En otras palabras, el alcance determina dónde en el código una variable puede ser utilizada o referenciada.

<br>

---
---

<br>

<br>

---

## **Esencial**

---

<br>

- **Las variables son elementos esenciales en la programación que permiten almacenar datos y reutilizarlos en el código.**

---

- **En JavaScript, hay tres formas de declarar variables:** 

  - var

  - let

    y

  - const

<br>  

- **La declaración de variables con var se usaba en versiones anteriores de JavaScript, pero ahora se desaconseja su uso.**

  - **La razón es que var tiene un alcance global y puede ser redeclarado varias veces en el mismo bloque de código, lo que puede llevar a errores difíciles de depurar.**


---  

<br>

- **Las variables declaradas con let y const tienen un alcance de bloque, lo que significa que solo son accesibles dentro del bloque en el que se declaran.**

---

<br>

- **La diferencia entre let y const:**

    - **Es que las variables declaradas con let pueden ser reasignadas posteriormente.**
    
    <br>
    
    - **mientras que las variables declaradas con const no pueden ser reasignadas.**

---    

<br>

**Para utilizar las variables de manera eficiente, es importante seguir algunas buenas prácticas.**

1. **La primera es siempre declarar las variables con let o const y evitar el uso de var.**

2. **La segunda es declarar las variables al comienzo de su alcance para evitar problemas de alcance.**

3. **Por último, es importante usar nombres de variables significativos y comentar el código para facilitar la comprensión y el mantenimiento del mismo.**

---
---