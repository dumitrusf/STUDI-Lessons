# **Buenas prácticas para declarar y usar las variables en JavaScript**

<br>

---

## **Buenas prácticas para declarar y usar las variables en JavaScript**

---

<br>

```
JavaScript es uno de los lenguajes de programación más populares utilizados para el desarrollo web.

Permite crear aplicaciones interactivas y dinámicas en la web, juegos, aplicaciones móviles y mucho más.

En este contexto, las variables en JavaScript son contenedores que almacenan valores que pueden ser utilizados y modificados durante la ejecución de un programa.

Las variables se declaran utilizando palabras clave como 'var', 'let' o 'const'.
```

---

<br>

---

**Para optimizar el uso de variables en JavaScript, se recomienda seguir algunas buenas prácticas.**

1. La primera buena práctica es nombrar las variables de manera significativa.

2. El nombre de una variable debe ser descriptivo y significativo para que los desarrolladores puedan comprender fácilmente qué representa la variable.

3. Evita nombres genéricos como 'a', 'b' o 'x' que pueden causar errores y hacer que el código sea difícil de entender.

4. Además, es esencial utilizar el alcance de variable adecuado.

5. En JavaScript, el alcance de una variable define dónde se puede utilizar en un programa.

6. Las variables 'var' tienen un alcance de función, mientras que las variables 'let' y 'const' tienen un alcance de bloque. Por lo tanto, es importante elegir correctamente el alcance de la variable para evitar colisiones de nombres y errores.

<br>

---

<br>

<br>

**También se recomienda:**

- evitar las variables globales en la medida de lo posible.

- Las variables globales son accesibles desde cualquier parte del programa, lo que puede dificultar la comprensión y el mantenimiento del código.

- Es preferible utilizar variables locales para limitar su alcance.

- Todas las variables deben declararse antes de su uso en un programa.

- El uso de variables no declaradas puede causar errores y comportamientos inesperados.

- Por lo tanto, es importante declarar todas las variables.

- Se recomienda utilizar 'const' para valores constantes como el número pi o las direcciones URL que no cambian a lo largo del programa.

- Las variables declaradas con 'const' son constantes y no pueden ser reasignadas después de su declaración.

- Para variables que cambian de valor a lo largo del programa, se recomienda utilizar 'let'.

<br>

---

<br>

<br>

**Es importante evitar la reasignación de variables tanto como sea posible, ya que esto puede dificultar la comprensión y depuración del código.**

- Por lo tanto, es mejor utilizar variables inmutables para facilitar la lectura y el mantenimiento del código.

- Las variables pueden ser inicializadas al ser declaradas asignándoles un valor.

- Esto puede mejorar la legibilidad del código y facilitar su mantenimiento.

- Por último, evita declarar variables innecesarias y en su lugar utiliza valores literales directamente en el código, para evitar hacer el código difícil de entender y depurar.

---

---

<br>
<br>

---

## **Ejercicio de comprensión y puesta en practica**

---

<br>

---

### **Ejercicio 1: declaración y manipulación de variables**

---

<br>

Crea un programa que calcule el área de un triángulo a partir de la longitud de su base y altura.

Declara e inicializa las variables para la base y altura, luego calcula el área del triángulo utilizando la fórmula "área = (base \* altura) / 2".

A continuación, muestra el área del triángulo utilizando el método console.log().

<br>

---

**SOLUCIÓN:**

```js
// Déclaration et initialisation des variables pour la base et la hauteur

let base = 7;

let hauteur = 4;

// Calcul de l'aire du triangle

let aire = (base * hauteur) / 2;

// Affichage de l'aire du triangle

console.log("L'aire du triangle est de " + aire + " unités carrées.");

// Le programme affichera "L'aire du triangle est de 14 unités carrées.
```

---

<br>

**[Enlace 16 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-16-DumitruSF1#script.js)**

<br>

---

En este código JavaScript, realizamos el cálculo del área de un triángulo.

1. Primero, declaramos e inicializamos las variables de la base y la altura utilizando la sintaxis 'let'.

2. Luego, utilizamos estas variables para calcular el área del triángulo multiplicando la base por la altura y dividiendo el resultado por 2.

3. Por último, mostramos el resultado utilizando el método console.log() con un mensaje que incluye el área calculada.

---

---

<br>

<br>

---

### **Ejercicio 2: El alcance de las variables**

---

<br>

---

**¿Cuál es la salida de este código?**

```js
let x = 5;

function foo() {
  let x = 10;

  console.log(x);
}

foo();

console.log(x);
```

---

<br>

**[Enlace 17 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-17-DumitruSF1#script.js)**

<br>

---

**SOLUCIÓN:**

La salida de este código será:

10 (para dentro del bloque de la función en su `console.log`)

5 (para el console.log que esta al mismo alcance que la primera variable declarada)

<br>

---

Al comienzo del código, se declara e inicializa la variable x a 5.

Luego, se define una función llamada foo().

Dentro de esta función, se declara e inicializa una variable local x a 10.

Cuando se llama a la función foo(), se muestra el valor de la variable local x (que es 10).

Finalmente, fuera de la función foo(), se muestra el valor de la variable global x (que es 5).

Esto demuestra que el alcance de la variable local x dentro de la función foo() está limitado a esa función, y que el alcance de la variable global x se extiende a todo el código.

---

---

<br>

<br>

<br>

<br>

---

### **Ejercicio 3: Aplicar buena practicas**

---

<br>

---

**Tenemos el siguiente código**

```js
let x = 5;

function calculate(num1, num2) {
  let result = num1 + num2 + x;

  return result;
}

console.log(calculate(2, 3));
```

---

<br>

**[Enlace 18 Variables](https://replit.com/@javascript-studi/Les-variables-en-javascript-Code-18-DumitruSF1#script.js)**

<br>

---

Identifica las buenas prácticas que se han seguido en este código y proponga una mejora para cumplir con otra buena práctica.

**SOLUCIÓN:**

**_En este código se han aplicado las siguientes buenas prácticas:_**

- La declaración de variables utilizando let o const en lugar de var.
- El uso de funciones para agrupar bloques de código reutilizables.
- El uso de console.log() para mostrar los resultados.

Sin embargo, es importante tener en cuenta que otra buena práctica consiste en declarar siempre las variables al comienzo de su ámbito.

En este código, la variable x se declara correctamente antes de la función calculate().

Sin embargo, la variable result se declara dentro de la función, lo cual puede dificultar la lectura y comprensión del código.

Para cumplir con esta buena práctica, se puede declarar la variable result al comienzo de la función calculate() o incluso antes, al comienzo del ámbito en el que se utilizará.

De esta manera, se mejora la claridad del código y se sigue una buena práctica adicional.

<br>

---

**Ejemplo: aclarado y mejorado**

El código proporcionado es un buen ejemplo para explicar la buena práctica de declarar las variables al comienzo de su ámbito.

En este caso, la variable "result" se declara dentro de la función "calculate".

Para cumplir con la buena práctica de declarar las variables al comienzo, podemos reorganizar el código de la siguiente manera:

```js
let x = 5;
let result;

function calculate(num1, num2) {
  result = num1 + num2 + x;
  return result;
}

console.log(calculate(2, 3));
```

<br>

---

En este ejemplo, hemos declarado la variable "result" al comienzo del ámbito global, antes de la función "calculate".

Luego, dentro de la función, asignamos el valor a la variable "result" sin utilizar la palabra clave "let" nuevamente.

De esta manera, se cumple con la buena práctica de declarar las variables al comienzo del ámbito en el que se utilizarán.

Esto mejora la legibilidad y comprensión del código, ya que es más claro dónde se declaran y se utilizan las variables.

---

---