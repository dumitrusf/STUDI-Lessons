# **Función asíncrona y callback**

<br>
<br>

---

## **Operación asíncrona**

---

<br>

Una **operación asíncrona** es una operación que **puede realizarse en segundo plano, mientras que el script principal continúa ejecutándose.**

**En JS existen varios tipos de funciones asíncronas.**

**Por ejemplo, hablemos del método `window.setTimeOut()`.**

---

---

<br>

<br>

---

## **`setTimeOut()`**

---

<br>

**El método `window.setTimeOut()` es un método asíncrono.**

**Permite especificar un número de milisegundos antes de la ejecución de una función.**

La función especificada **se ejecutará en segundo plano, después del tiempo especificado.**

Esto significa que **las otras instrucciones del script se ejecutan !,** y **solo la función pasada en el `setTimeOut()` se ejecutará en segundo plano** (de forma asíncrona) después del tiempo especificado.

**Las otras instrucciones sincrónicas no esperan a que la función asíncrona se ejecute.**

<br>

---

**Ejemplo js:**

```js
// Declaramos la variable "username" y la inicializamos con una cadena vacía.
// Esta variable actuará como un contenedor para almacenar el nombre de usuario más adelante.
let username = "";


// Utilizamos el método "setTimeOut" para programar una función que se ejecutará en el futuro.
// La función simplemente asignará el valor "PeterParker" a la variable "username".
// El "1000" al final significa que queremos que esta función se ejecute después de 1000 milisegundos (es decir, 1 segundo).
window.setTimeOut(() => {


  // Este bloque de código se ejecutará 1 segundo después de que se haya llamado a "setTimeOut".
  // Asignamos el valor "PeterParker" a la variable "username".
  username = "PeterParker";
}, 1000);



// Ejecutamos un "console.log" para mostrar el valor de "username".
// Ten en cuenta que en este punto, el "setTimeOut" anterior aún no se ha ejecutado,
// por lo que "username" todavía está vacío.
// Por lo tanto, esto imprimirá "Bonjour " en la consola.
console.log("Bonjour " + username);



// Programamos otro "setTimeOut", similar al anterior, pero esta vez con un retraso de 2000 milisegundos (o 2 segundos).
window.setTimeOut(() => {


  // Este bloque de código se ejecutará 2 segundos después de que se haya llamado a este "setTimeOut".
  // Aquí, debido a que el primer "setTimeOut" ya se habría ejecutado, "username" debería tener el valor "PeterParker".
  // Entonces, este "console.log" imprimirá "Bonjour PeterParker" en la consola.
  console.log("Bonjour " + username);
}, 2000);
```

---

<br>

Comprendamos que el Asincronismo nos permitirá realizar tareas en segundo plano, lo que será indispensable cuando las operaciones sean largas, por ejemplo cuando realicemos peticiones HTTP, peticiones cuyo rendimiento puede depender del servidor remoto.

---

---

<br>
<br>

---

## **`async` y `await`**

---

<br>

`async` y `await` son funcionalidades introducidas en ECMAScript 2017 (ES8) para facilitar la programación asíncrona en JavaScript.

Para definir funciones asíncronas en JS, podemos usar `async` y `await` para simplificar la sintaxis y hacer nuestro código más legible.

<br>

---

### **Método `async`**

---

<br>

`async` se usa para definir una función asíncrona.

Una función declarada como asíncrona devuelve una promesa que se resuelve con el valor devuelto por la función o se rechaza con un error devuelto por la función.

<br>

---

### **Observación: Promesa**

---

<br>

**En JavaScript, una promesa es un objeto que representa un valor que:**

- puede estar disponible

- que solo estará disponible más tarde

    o
    
- incluso nunca

---

<br>

Las usamos regularmente para gestionar el asincronismo en un script.

**Una función asíncrona devolverá una promesa,** lo que **es** muy **útil porque podrá devolverla incluso si la ejecución de la función no ha terminado, y por lo tanto, podrá seguir ejecutándose en segundo plano.**

<br>

---

**Aquí está la sintaxis para usar `async`:**

```js
async function maFonctionAsynchrone() {
  // Código asíncrono aquí
}
```

---

<br>

---

### **Método `await`**

---

<br>

**`await` se usa dentro de una función asíncrona para esperar el final de una operación asíncrona.**

El uso de **`await` suspende la ejecución de la función asíncrona actual hasta que la promesa devuelta se resuelva o rechace.**

<br>

---

**Aquí está la sintaxis de `await`.**

```js
async function maFonctionAsynchrone() {
  await maFonctionRetournantUnePromesse(); //esperamos la resolución de la función asíncrona maFonctionRetournantUnePromesse()
}
```

---

<br>

Es importante tener en cuenta que **`await` solo puede usarse en una función** declarada **como asíncrona (`async`).**

Además, **`await` solo puede usarse con funciones que devuelven promesas.**

<br>

---

### **Ejemplo `await` y `async`**

---

<br>

```js
// Inicializamos una variable "username" con una cadena vacía para almacenar el nombre de usuario más adelante.
let username = "";


// Definimos una función llamada "wait" que toma una función y una cantidad de milisegundos como argumentos.
// Esta función "wait" devuelve una Promesa.
function wait(fonction, millisecondes) {


  // Retornamos una nueva Promesa.
  return new Promise((resolve) => {


    // Usamos "setTimeOut" para ejecutar el código dentro de la función pasada como argumento
    // después de un retardo especificado en milisegundos.
    setTimeOut(() => {

    
      // Ejecutamos la función que se nos pasó como argumento.
      fonction();

      
      // Resolvemos la Promesa.
      resolve();
    }, millisecondes);
  });
}

// Declaramos una función asíncrona llamada "affUsername".
async function affUsername() {


  // Llamamos a la función "wait" y pasamos una función anónima que asignará "PeterParker" a "username".
  // Nota: Aquí olvidamos usar "await", por lo que la Promesa no se espera y la ejecución continúa.
  wait(() => {


    // Asignamos "PeterParker" a la variable "username".
    username = "PeterParker";
  }, 2000);


  // Hacemos un "console.log" del mensaje de bienvenida y el "username".
  // Debido al olvido del "await", este "console.log" se ejecutará antes de que se resuelva la Promesa,
  // por lo que imprimirá "Bonjour ".
  console.log("Bonjour " + username);
}

// Imprimimos "Connexion..." en la consola para indicar que el proceso de conexión ha comenzado.
console.log("Connexion...");


// Llamamos a la función "affUsername".
affUsername();
```

---

<br>

Hay que destacar que en el código de 👆 arriba falta un `await` antes de la llamada a `wait()` dentro de `affUsername()`.

Debido a este olvido, la función `affUsername()` no esperará a que se resuelva la Promesa **`(la promesa seria con new Promise)`** antes de ejecutar el `console.log()`, lo que resultará en un comportamiento no deseado.

**Para corregir esto, podríamos añadir `"await"` antes de la apertura de funcion `wait()`, en la función de `affUsername()`.**

<br>

----

<br>

En este ejemplo, definimos una función un poco especial `wait()`.

No nos detengamos demasiado en esta función, entendamos simplemente que sirve para crear una promesa sobre un `setTimeOut()`.

Indicamos que la promesa devuelta por esta función se resolverá cuando se ejecute la función del `setTimeOut()`.

Luego, definimos una función asíncrona `affUsername()`.

En esta función, llamamos a la función `wait()` pasando la función anónima que define `username` sobre PeterParker, por lo tanto después de 2 segundos.

Luego hacemos un `console.log` de ('Bonjour ' + username).

El problema es que el `console.log` se ejecuta directamente después de la llamada a la función `wait()`, pero no espera a que se resuelva la promesa de `wait()`.

Por lo tanto, en el momento en que se ejecute la instrucción `console.log('Bonjour ' + username)`, `username` seguirá definida sobre "", por lo que la consola mostrará "Bonjour".

Necesitamos indicar que queremos esperar a que se resuelva la promesa de `wait()` antes de continuar la ejecución de la función asíncrona `affUsername()`.

<br>

---

**Para ello, tenemos que usar `await`:**

```js
//Declaramos una variable con let llamada username, y de valor estará vacía, 
//supongo que para mas tarde poder actualizarla con el nombre de alguien
// [GPT-4 🤖] Exacto, `let` permite que la variable pueda ser reasignada más tarde.
let username = "";

// Declaramos una función de estilo "declarada" llamada wait (en ingles esperar), 
// que recibe 2 parametros = fonction y millisecondes
// [GPT-4 🤖] Esta es una función que devuelve una Promesa para manejar asincronía.
function wait(fonction, millisecondes) {

  // En el cuerpo de esta función, declaramos que se nos devuelva una promesa, 
  // (promesa es prometer algo a alguien, de cumplir algo cuando ... pues no se sabe 
  // pero de cumplir se cumple salvo algún imprevisto), junto al argumento de resolve, 
  // ya que es lo que se suele dar como argumento, a veces también con reject, 
  // [GPT-4 🤖] El 'resolve' se utiliza para indicar que la promesa se ha completado con éxito.
  return new Promise((resolve) => {

    // el tipiquisimo setTimeout tipo flecha, para dentro darle como instrucción que 
    // definiremos una función y que después de esa función se resuelva nuestra función prometida
    // [GPT-4 🤖] Correcto, 'setTimeout' se usa para simular una operación que toma tiempo.
    setTimeout(() => {

      // Declaramos la función a dar recordándonos gracias al argumento dado al inicio 
      // wait(fonction, millisecondes), en este caso ya estamos tocando el primer argumento
      // [GPT-4 🤖] Sí, aquí ejecutamos la función pasada como argumento.
      fonction();

      // el resolve que claramente debe estar para que la promesa funcione y nos devuelva 
      // el objetivo pedido que es nuestra función después de unos milisegundos
      // [GPT-4 🤖] Correcto, 'resolve' señala el fin exitoso de la operación asíncrona.
      resolve();

    // La función prometida sera visible solo pasado el tiempo dado aquí
    // [GPT-4 🤖] Exacto, esto es lo que hace que la operación sea asíncrona.
    }, millisecondes);
  });
}

// Declaración de una función asíncrona llamada affUsername
// [GPT-4 🤖] Sí, 'async' indica que la función contiene operaciones asíncronas.
async function affUsername() {

  // Le declaramos la función wait que contiene esa función generalizada y como 
  // esta dentro de una func asíncrona esta esta declarada con async, asi que 
  // aquí declaramos la función deseada que es wait que contiene setTimeout, 
  // resolve y los milisegundos en tipo flecha declarada
  // [GPT-4 🤖] Utilizamos 'await' para asegurarnos de que la promesa se resuelva antes de continuar.
  await wait(() => {

    // ahora username ya no esta vació con lo cual este ahora valdrá PeterParker
    // [GPT-4 🤖] Correcto, actualizamos la variable 'username' aquí.
    username = "PeterParker";

  }, 2000);

  // este mostrara Bonjour PeterParker cuando llamemos a la función affUsername(); , 
  // pero se mostrara pasados 2 segundos, con lo cual el resto del código si es que 
  // tenemos continuara y no estará bloqueado a esperar ya que el interpretador seguirá 
  // y este aparecerá pasados 2 segundos
  // [GPT-4 🤖] Sí, este es el beneficio de la programación asíncrona, no bloquea el flujo de ejecución.
  console.log("Bonjour " + username);
}

// El console log mostrara primero Conexion...
// [GPT-4 🤖] Sí, esto se muestra de inmediato porque no es una operación asíncrona.
console.log("Connexion...");

// y al llamar a la función mostrara lo que dijimos anteriormente "bonjour PeterParker", pero pasados 2 segundos después de ejecutarla
// [GPT-4 🤖] Correcto, esta función se llama aquí y se inicia todo el proceso.
affUsername();

// ...

// Aunque lo pongamos en este orden
// [Mi comentario] Exacto, debido a la naturaleza asíncrona de 'affUsername()', el orden no afecta el resultado.
// affUsername(); y luego
// console.log("Connexion...");
// seguirá apareciendo primero 'Connexion...' y después 'Bonjour PeterParker'


```

---

<br>

Podemos ver que funciona, el intérprete espera a que se resuelva la promesa de `wait` antes de continuar la ejecución de la función.

La consola muestra entonces "Bonjour Peter Parker" después de haber mostrado `"Connexion…"`.

**En cualquier caso, podemos ver que la función `affUsername()` se ejecuta bien en segundo plano (con 2 segundos de retraso, y que primero aparecerá conexión..., y después bonjour Peter Parker), porque si añadimos instrucciones a nuestro script, después de la llamada a la función, veremos que se ejecutarán simultáneamente:**

---

<br>

```js
let username = "";

function wait(fonction, millisecondes) {
  return new Promise((resolve) => {
    setTimeOut(() => {
      fonction();
      resolve();
    }, millisecondes);
  });
}

async function affUsername() {
  await wait(() => {
    username = "PeterParker";
  }, 2000);
  console.log("Bonjour " + username);
}

console.log("Connexion...");
affUsername();
console.log("Connexion de l'utilisateur");


//Connexion...
//Connexion de l'utilisateur
//Bonjour PeterParker
```

---

<br>

Podemos constatar que **« Connexion de l'utilisateur »** se muestra en la consola antes de « Bonjour PeterParker ».

Lo que nos prueba bien que `affUsername()` se ejecuta en asíncrono, por lo tanto en paralelo (simultáneamente) a las instrucciones sincrónicas del script.

`affUsername()` no bloquea la ejecución del resto del script, puesto que se ejecuta en asíncrono.

<br>

---

<br>

Acabamos de ver un ejemplo de uso de `async` y `await` para gestionar el asincronismo.

Estas nociones serán indispensables cuando vayamos a realizar comandos como peticiones a servidores `HTTP`.

---

---