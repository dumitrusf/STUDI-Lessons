# **Buenas practicas**

<br>

## **_Objetivos:_**

- **Conocer las buenas practicas de escritura de código**

---

---

<br>

---

## **Contexto**

---

<br>

**Existen `buenas prácticas` para cada lenguaje de programación.**

Las buenas prácticas **son reglas de escritura de código que no son impuestas por el lenguaje.**

**Son consideradas importantes por la comunidad.**

---

Se recomienda encarecidamente investigar y seguir las buenas prácticas de los lenguajes que se utilizan, las cuales generalmente sirven para mejorar la legibilidad del código fuente.

Además, esto permite tener un estilo de código común dentro de un equipo, e incluso dentro de una comunidad, facilitando así la colaboración.

<br>

---

---

<br>
<br>

---

## **Referencia**

---

<br>

Las buenas prácticas populares de JavaScript se agrupan aquí: **[standardJS](https://standardjs.com/rules-fr.html#javascript-standard-style)**

<br>

---

---

<br>

<br>

---

## **Cadena de Caracteres**

---

<br>

**Las cadenas de caracteres deben estar rodeadas por comillas simples.**

**Las** _"comillas dobles"_ **solo se utilizan si la cadena de caracteres en sí misma contiene una comilla simple! " l'apostrophe "**

<br>

---

**Ejemplo:**

```js
console.log("Hello World") // ✗ no, asi NO esta bien

console.log('Hello World') // ✓ ok, asi esta bien

console.log("Sans l'apostrophe") // ✓ ok, asi esta bien
```

<br>

---

---

<br>

<br>

---

## **Variables**

---

<br>

- **Todas las variables deben ser declaradas.**

- **Se prefiere `const` a `let`:**

    - si la variable no va a cambiar (un valor que no varia, y permanece)

    <br>

- **TODAS LAS VARIABLES que son declaradas:**

    - Deben ser utilizadas en algún momento dentro del programa.

<br>

---

**Ejemplo:**

```js
const useless = 'Null' // ✗ non

// 👆 Si no la usaremos la quitaremos!

const useful = 'Hi' // ✓ ok

// 👆 Bien por declarar, la variable 'useful'

console.log(useful)
```

<br>

---
---

<br>

<br>

---

## **Espaciados**

---

<br>

- palabras clave

- los operadores

- las llaves

- las comas

- etc.

Deben tener espacios.

<br>

---

**Ejemplo:**

```js
// ✗ malas prácticas
const color1='blanc'
let flower1='jasmin'
if(color1==='rose'){flower1='rose'}
console.log(flower1)



// ✓ buenas prácticas
const color2 = 'rouge'

let flower2 = 'tulipe'

if (color2 === 'jaune') {

  flower2 = 'mimosa'

}

console.log(flower2)
```

<br>

---

---

<br>

<br>

---

## **Casuística**

---

<br>

La convención privilegiada en JavaScript es camelCase

<br>

---

---

<br>

<br>

---

## **Inglés**

---

<br>

- **Los nombres de las variables, funciones, etc ... deben de estar en Inglés**

- **Los comentarios deben de ser de preferencia en Inglés (salvo si los desarrolladores prefieren en conjunto un otro idioma)**

- **Los valores (cadenas de caracteres) están, por supuesto, en el idioma requerido por el programa**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Es importante referirse a las buenas prácticas que permiten producir un código limpio y legible para todos.**

<br>

---

---
