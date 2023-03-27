# **Descubriendo el Objeto JS Number**

<br>

Antes de entrar específicamente en el objeto JS Number, es importante comprender el concepto de objeto en la Programación Orientada a Objetos (POO).

Este concepto es esencial en el ámbito de la programación.

---

---

<br>
<br>

---

## **Explicación del Concepto de Objeto**

---

<br>

Un objeto es una entidad que se caracteriza por un tipo que lo define y por propiedades.

Esto refleja una noción similar en el mundo real.

---

<br>

**Tomemos un ejemplo concreto:**

- una computadora de la marca HP.

---

<br>

**Aquí están las características de este objeto:**

---

<br>

**Tipo: Computadora**

**Propiedades:**

- **Marca** = "HP"

- **RAM** = 8

- **Almacenamiento** = 256

- **Procesador** = "Intel"

---

<br>

- **Encendido:**

    - inicio de la computadora

    ---

    <br>

- **Apagado:**

    - apagado de la computadora

---

<br>

**Es evidente que nuestro objeto pertenece al tipo "Computadora".**

**Además, posee varias propiedades (también llamadas atributos) que encapsulan diversas informaciones que describen este objeto.**

**Sin embargo, es interesante notar que las dos últimas propiedades no son simples valores;** en cambio, **son mecanismos que pueden activarse a través del objeto**

---

<br>

- **(es posible encender y apagar la computadora)**

<br>

---

**De manera similar, podemos decir que los objetos tienen propiedades que pueden ser:**

- **Variables, definidas con un valor** `(a menudo llamadas atributos en POO)`.

---

<br>

- **Funciones**, es decir, **conjuntos de instrucciones que se pueden invocar a través de nuestro objeto.**

    - **Estas funciones (asociadas a objetos) se llaman métodos.**

<br>

---

**Ejemplo JavaScript: Si traducimos en código la descripción de nuestra computadora, lo escribiríamos de la siguiente manera:**

```js
// Creamos un objeto utilizando la sintaxis "new Object()"
// Sin embargo, en la siguiente línea sobrescribimos esta variable con un nuevo objeto
let ordi1 = new Object(); // Estamos construyendo nuestro objeto

// Definimos las propiedades y métodos del objeto
ordi1 = {
  marca: "HP", // Propiedad: Marca de la computadora (valor: "HP")
  ram: 8, // Propiedad: Cantidad de memoria RAM en gigabytes (valor: 8)
  almacenamiento: 256, // Propiedad: Capacidad de almacenamiento en gigabytes (valor: 256)
  procesador: "Intel", // Propiedad: Tipo de procesador (valor: "Intel")
  
  encendido: function() {
    console.log("Encendiendo la computadora"); // Método: Función que imprime un mensaje al encender la computadora
  },
  
  apagado: function() {
    console.log("Apagando la computadora"); // Método: Función que imprime un mensaje al apagar la computadora
  }
}
```

---

<br>

**Aquí, podemos observar que creamos un objeto que almacenamos en la variable `"ordi1"`.**

**No nos preocupemos por el momento por la expresión `"new Object()"`**, abordaremos este punto cuando sea relevante.

**Simplemente** comprende que **esta instrucción se utiliza para crear un objeto.**

**Luego, definimos las propiedades de nuestro objeto, que incluyen atributos `(variables)` y los métodos `"encendido()"` y `"apagado()"`.**

Podemos ver que para definir las propiedades, utilizamos una sintaxis específica.

Sin embargo, hay otras formas de hacerlo, pero no las veremos en este curso para mantenernos en el tema.

<br>

---

<br>

**Por lo tanto, podemos acceder a las diferentes propiedades de nuestro objeto `"ordi1"` simplemente escribiendo `"ordi1"` seguido de un punto `"."` y "el nombre de la propiedad".**

<br>

---

**Tomemos otro ejemplo JavaScript:**

```js
// Creamos un objeto llamado "ordi1" utilizando la sintaxis "new Object()"
// Sin embargo, en la siguiente línea sobrescribimos esta variable con un nuevo objeto
let ordi1 = new Object(); // Construimos nuestro objeto

// Definimos las propiedades y métodos del objeto "ordi1"
ordi1 = {
  marque: "HP", // Propiedad: Marca de la computadora (valor: "HP")
  ram: 8, // Propiedad: Cantidad de memoria RAM en gigabytes (valor: 8)
  stockage: 256, // Propiedad: Capacidad de almacenamiento en gigabytes (valor: 256)
  processeur: "Intel", // Propiedad: Tipo de procesador (valor: "Intel")
  
  demarrage: function() {
    console.log("Démarrage de l'ordinateur"); // Método: Función que imprime un mensaje al encender la computadora
  },
  
  extinction: function() {
    console.log("Extinction de l'ordinateur"); // Método: Función que imprime un mensaje al apagar la computadora
  }
}

// Accedemos a las propiedades y métodos del objeto "ordi1"
console.log(ordi1.marque); // Imprime "HP" en la consola
console.log(ordi1.ram); // Imprime 8 en la consola
ordi1.demarrage(); // Llama al método "demarrage" e imprime "Démarrage de l'ordinateur"
```

<br>

---

### **Observación**

---

<br>

**Si mostramos el `tipo` de nuestro `objeto` con:**

- `console.log(typeof ordi1)`:

  - la consola mostrará `"object"` en lugar de **"Ordinateur"**.
  
    **Esto es completamente normal, ya que construimos un objeto utilizando la expresión `new Object()`, lo que significa que estamos utilizando el constructor Object para crear el objeto.**

<br>

---

<br>

Veremos brevemente lo que es un constructor en los siguientes párrafos.

---

<br>

**En resumen, en nuestro ejemplo, no hemos definido un subtipo `"Ordinateur"`, sino que hemos creado un objeto de tipo `"Object"`, lo que explica el resultado de:**

- `console.log(typeof ordi1)`

---

<br>

**Los objetos permitirán manipular los datos de una manera diferente, presentando muchas ventajas que descubrirás a medida que avances en tu trayecto con JavaScript.**

---

---

<br>

<br>

---

## **Introducción al objeto `Number`**

---

<br>

Ahora que hemos entendido en términos generales qué es un objeto, **centrémonos en el objeto `Number`**.

Como sabes, el tipo primitivo `Number` **define valores primitivos inmutables.**

**Sin embargo, por defecto, un objeto es `mutable`, ya que es posible modificar sus propiedades después de haberlo creado.**

Pero entonces, **¿qué es el objeto `Number`?**

Un objeto `Number` es un objeto que **encapsula un tipo primitivo `Number`**.

Por lo tanto, es un objeto compuesto por propiedades y es mutable, pero almacena un tipo primitivo Number.

**Un objeto `Number` permite manipular números como objetos.**

Antes de ver algunas características del objeto `Number`, veamos cómo crear uno.

---

---

<br>

<br>

---

## **Crear un objeto `Number`**

---

<br>

**Para crear un objeto Number, necesitaremos utilizar un método del cual hablamos muy brevemente:**

- un constructor.

---

<br>

**Los `constructores` son métodos que, como su nombre indica, `permiten construir un objeto`.**

---

**EJEMPLO JavaScript: Para llamar al constructor de `Number`, podemos proceder de la siguiente manera**

```js
const numero = new Number(1426.156);

console.log(numero);
```

---

<br>

**En este ejemplo, "estamos creando un `objeto Number`" al llamar al constructor de Number.**

**La palabra clave `new` es indispensable.**

**Pasamos como argumento al constructor el número que será encapsulado en nuestro objeto.**

<br>

---

### **Los Posibles Valores de `NUMBER`**

---

<br>

Un `objeto Number` **puede representar valores numéricos "dentro de ciertos límites"**.

**Estos límites están definidos en propiedades** por defecto de Number.

<br>

---

**Para obtenerlos, podemos mostrarlos a través del constructor Number:**
  
```js
console.log(Number.MIN_VALUE);

console.log(Number.MAX_VALUE);
```  

---

<br>

- `Number.MIN_VALUE`:

  - **Es el valor mínimo que un objeto Number puede contener.**

  ---

  <br>
  
- `Number.MAX_VALUE`:

  - **por otro lado, es el valor máximo que un objeto Number puede contener.**

---

---

<br>

<br>

---

## **Operaciones aritméticas**

---

<br>

**Podemos realizar operaciones aritméticas sin problemas con objetos `Number`.**

Sin embargo, **los objetos NO SON VALORES NUMÉRICOS PRIMITIVOS.**

---

```
Normalmente, no podemos realizar operaciones aritméticas entre dos objetos, sino solo entre dos valores numéricos.
```

---

<br>

**Veremos al final de la segunda parte cómo JavaScript hace posibles las operaciones aritméticas con objetos `Number` como operandos, como se muestra en este ejemplo:**

```js
const a = new Number(18);

const b = new Number(17);

console.log(a + b); //35

console.log (a - b); //1

console.log(a * b); //306

console.log (a % b); //1
```

---

<br>

**Es posible realizar operaciones aritméticas de manera sencilla con objetos Number.**

---
---