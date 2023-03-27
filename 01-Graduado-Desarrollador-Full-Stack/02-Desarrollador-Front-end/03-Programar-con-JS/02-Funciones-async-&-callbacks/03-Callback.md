# **Notion de `callback`**

<br>
<br>

---

## **`Callback`**

---

<br>

En JavaScript, **un `callback`** (función de retorno) **es una función que "se pasa como argumento a otra función".**

**Hemos utilizado callbacks en muchas ocasiones. 🤯**

<br>

---

**Los callbacks se utilizan comúnmente en los siguientes casos:**


- **Las peticiones `HTTP`:**

    - cuando realizamos una petición `HTTP` para recuperar datos de una `API`, podemos utilizar una función de retorno para manejar la respuesta de la petición y actualizar nuestra interfaz de usuario en consecuencia.

---

<br>

- **Las animaciones:**

    - las funciones de retorno se pueden utilizar para animar elementos en una página web.
    
    - Por ejemplo, podemos utilizar una función de retorno para mover un elemento de una posición a otra en varios pasos.

---

<br>

- **Los eventos de usuario:**

    - las funciones de retorno se pueden utilizar para manejar eventos de usuario como clics de ratón o pulsaciones de teclas.
    
    - Podemos definir una función de retorno que se ejecute cuando el usuario realice una acción particular.
    
    - De hecho, cuando utilizamos Event Listeners, la función pasada como argumento es un callback.

---

<br>

- **Las operaciones de `I/O` (Entrada/Salida):**

    - las funciones de retorno se utilizan a menudo para manejar operaciones de `I/O` como la lectura o escritura de archivos.
    
    - Estas son operaciones asíncronas en general.
    
    - Podemos utilizar una función de retorno para procesar los datos una vez que se hayan leído o escrito.

---

<br>

**Los callbacks nos van a permitir pasar como argumento al llamar a una función, otra función que se ejecutará después de una operación asíncrona, una vez que la promesa de esta operación asíncrona se resuelva.**

**La operación puede realizarse asíncronamente mientras que el resto del script síncrono se ejecuta, y cuando termine, se llamará a una función en callback para procesar, por ejemplo, los datos que ha recuperado.**

<br>

---

### **Ejemplo: Primer `callback`**

---

<br>

**Repasemos el ejemplo anterior para entenderlo bien.**

```javascript


// Declaramos una variable `username` y la inicializamos como una cadena vacía.
// Esta variable se actualizará más tarde.
let username = "";





// Definimos una función llamada `wait`.
// Esta función toma dos argumentos:
// `fonction`, que es una función callback, y `millisecondes`, que es el tiempo que debemos esperar antes de ejecutar la función.
function wait(fonction, millisecondes) {



  // La función devuelve una nueva promesa.
  // Las promesas son objetos que representan
  // el resultado eventual de una operación asíncrona.
  return new Promise((resolve) => {



    // Utilizamos `setTimeout` para programar la ejecución de `fonction` después de
    // un número específico de milisegundos, según lo especificado por `millisecondes`.
    setTimeout(() => {

      // Ejecutamos la función `fonction`.
      fonction();

      // Llamamos a `resolve` para indicar que la promesa se ha cumplido.
      resolve();
    }, millisecondes);
  });


}





// Definimos una función asíncrona llamada `affUsername`.
// Utilizamos la palabra clave `async` para hacerlo.
// Como argumento le pasamos callback (como si fuera cualquier otro nombre, esto sirve que le indica que cuando llamemos a la funcion affUsername() dentro de los parametros le daremos como parametro una funcion, bien pues "callback" es el titulo que recibe de nombre esa proxima funcion futura que le daremos cuando llamemos a invocar affUsername)
async function affUsername(callback) {

  // Usamos `await` para esperar que se resuelva la promesa devuelta por `wait`.
  // Esto significa que el flujo de ejecución se "pausará" 2 segundos hasta que se cumpla la promesa, lo que en este caso significa que se ejecutará después del retardo especificado (2 segundos).
  await wait(() => {

    // Actualizamos el valor de la variable `username`.
    username = "PeterParker";

    // Este bloque se ejecutará después de 2 segundos.
  }, 2000);

  // Ejecutamos la función `callback` que se pasó como argumento a `affUsername`.
  callback();
}

// Imprimimos "Connexion..." en la consola.
console.log("Connexion...");







// Llamamos a `affUsername` y pasamos una función callback como argumento.
// Esta función se ejecutará después de que se haya resuelto la promesa en `affUsername`.
affUsername(() => {

  // Imprimimos "Bonjour " seguido del valor actualizado de `username`.
  console.log("Bonjour " + username);

});






// Imprimimos "Connexion de l’utilisateur" en la consola.
// Nota: Debido a la naturaleza asíncrona de `affUsername`, este mensaje se imprimirá 
// antes de que "Bonjour PeterParker" aparezca en la consola.
console.log("Connexion de l’utilisateur");

```

---

<br>

En este ejemplo, definimos al llamar a `affUsername()` una función de callback como argumento.

Esta función permitirá mostrar `'Bonjour ' + username` , y se llamará una vez que la operación `asíncrona wait()` haya terminado.

<br>

---

**De hecho, podríamos haber definido la función pasada como callback como una `función declarada`:**

```javascript
// Declaramos dos variables numéricas, num1 y num2, y les asignamos valores iniciales de 10 y 20 respectivamente.
// Estas variables serán las que vamos a modificar en las operaciones que definiremos más adelante.
let num1 = 10;
let num2 = 20;

// Definimos una función que se llame 'wait'. 

// Esta función recibe dos parámetros: 

  // 1) 'fonction' es una función callback que se ejecutará después de un tiempo determinado.

  // 2) 'millisecondes' es el tiempo en milisegundos que queremos esperar antes de ejecutar 'fonction'.

function wait(fonction, millisecondes) {



  // La función "wait" devuelve una nueva Promesa.
  // Una Promesa en JavaScript es un objeto que representa 
  // el resultado eventual (completado o fallido) de una operación asíncrona o sincrona y su valor resultante.
  return new Promise((resolve) => {


    // Usamos la función nativa de JavaScript 'setTimeout' para programar la ejecución de la función del callback que se llama que esta declarado en el primer argumento de la funcion "wait" ('fonction').
    
    // Lo hacemos para que se ejecute después de un tiempo definido en 'millisecondes'.

    setTimeout(() => {

      // Aquí es donde realmente se ejecuta la función callback ('fonction') que fue pasada como argumento.

      // Esta es la operación que hemos estado esperando que ocurra.
      fonction();

      // Una vez que la función callback se ha ejecutado, llamamos al método 'resolve' para indicar que esta Promesa se ha completado exitosamente.

      // Esto permitirá que cualquier operación 'await' que esté esperando a esta Promesa continúe.
      resolve();
    }, millisecondes);
  });
}



// Definimos una función asíncrona llamada 'calcul'.

// La palabra clave 'async' nos permite usar 'await' dentro de la función para esperar a que se resuelvan Promesas(para esperar la asincronia o un resultado complejo por ejemplo).

// 'callback' es una función que se pasará como argumento cuando llamemos a 'calcul'.
async function calcul(callback) {

  // Utilizamos 'await' para pausar la ejecución del código hasta que la Promesa devuelta por 'wait' se resuelva.
  // En este caso, estamos duplicando el valor de 'num1' (lo multiplicamos por 2).
  // Esto ocurre después de un retardo de 2 segundos (2000 milisegundos).
  await wait(() => {
    num1 *= 2;
  }, 2000);

  // Otra vez, usamos 'await' para pausar y esperar a que otra Promesa se resuelva.
  // Ahora estamos incrementando el valor de 'num2' en 5.
  // Esto ocurre después de un retardo de 1 segundo (1000 milisegundos).
  await wait(() => {
    num2 += 5;
  }, 1000);

  // Ahora que ambas Promesas se han resuelto y hemos realizado las operaciones en 'num1' y 'num2',
  // ejecutamos la función callback ('callback') que fue pasada como argumento a 'calcul'.
  // Este será el próximo paso en nuestra secuencia de operaciones.
  callback();
}

// Mostramos un mensaje en la consola para que el usuario sepa que el proceso de cálculo ha comenzado.
console.log("Début du calcul...");

// Definimos una función llamada 'affResultat'.
// Esta función se encargará de mostrar en la consola el resultado final de nuestras operaciones.
function affResultat() {
  console.log(`Résultat : ${num1 + num2}`);
}

// Llamamos a la función 'calcul' y le pasamos la función 'affResultat' como argumento.
// 'affResultat' se ejecutará una vez que todas las operaciones asíncronas en 'calcul' se hayan completado.
calcul(affResultat);

// Mostramos otro mensaje en la consola para indicar que el código ha llegado al final.
// Es importante tener en cuenta que este mensaje se mostrará antes del resultado final debido a la asincronía de las operaciones.
console.log("Fin du calcul.");

```

---

<br>

**Llamamos a nuestro parámetro callback , pero podríamos haberle dado un nombre más explícito.**

Además, sólo definimos una función de callback, pero podríamos definir varias, como veremos en los vídeos.

---

---

<br>

<br>

---

### **Un mejor ejemplo: Mas entendible**

---

<br>

```js
// Declaramos la función 'processArray' que toma dos argumentos: 'array' y 'callback'.
function processArray(array, callback) {
  // Usamos 'forEach' para iterar sobre cada elemento del array.
  array.forEach((item, index) => {
    // Dentro de este bloque, llamamos a la función 'callback' pasándole el 'item' y el 'index' actuales.
    callback(item, index);
  });
}

// Creamos un array llamado 'myArray' con los números 1, 2, 3, 4.
const myArray = [1, 2, 3, 4];

// Llamamos a 'processArray' y pasamos 'myArray' y una función anónima como argumentos.
processArray(myArray, (item, index) => {
  // Esta función anónima se ejecuta para cada elemento del array.
  // Imprime en consola el elemento actual y su índice.
  console.log(`El elemento ${index + 1} es ${item}`);
});
```

<br>

---

<br>

```
- yo:
pf vale .... creo que el callback del primer bloque es como que le dice, oye al declarar aquí esta función llamada callback, en la próxima función que me llames anonima o del tipo que sea como sea, como argumento en la misma posición (de Indice) de argumento que en el otro bloque, que sea lo que tu quieres como resultado... pero en modo de función en ese parámetro verdad?
```

<br>

```
- 🤖ChatGPT-4: 
Exactamente, has captado la idea general.

Un callback es básicamente una función que se pasa como argumento a otra función.

Esta segunda función puede luego "llamar de vuelta" al callback cuando sea necesario, lo que permite un comportamiento dinámico y personalizable.

En el ejemplo de processArray, el callback (item, index) => { ... } se pasa como segundo argumento.

```

<br>

---

**Ejemplo con otra función, que toma el callback del primer bloque**

```js

// Aquí vemos el callback 👇 osea la función que esta entre paréntesis de tipo flecha
processArray(myArray, (elemento, indice) => {
  console.log(`El elemento ${indice + 1} es ${elemento}`);
});
```

```
- 🤖ChatGPT-4:
En la implementación de processArray, este callback se invoca dentro del setTimeout, y se le pasan los valores de item e index en cada iteración del bucle forEach.

Así, la función processArray no tiene que preocuparse de lo que realmente hace el callback; simplemente sabe que tiene que llamarlo y pasarle un item y un index.

Esto hace que processArray sea una función más genérica y reutilizable.
```

---

---

<br>

<br>

---

## **`Asincronismo` y `callback` para una operación matemática larga**

---

<br>

**Veamos otro ejemplo de uso de asincronismo y callback: con una operación matemática larga.**

<br>

---

**[Video Realisation d'un premier callback](https://ressources.studi.fr/contenus/opale/47183512e64985f0c8a929908a8385667a388998/co/notion-callback-1.html)**

---

<br>

**Ahora, abordemos además un primer ejemplo de uso de asincronismo y callback para realizar una petición.**

---

---

<br>

<br>

---

## **Complemento: Primer ejemplo de petición**

---

<br>

---

### **La Importancia del Asincronismo y Callbacks en Operaciones Indeterminadas**

---

<br>

Como habéis entendido, **el asincronismo y los callbacks** nos van a ser especialmente **indispensables cuando vayamos a realizar operaciones cuyo tiempo de ejecución es indeterminado.**

Cuando hablamos de, **"indeterminado"** nos referimos a **algo que no se puede predecir o calcular de antemano con precisión.**

<br>

---

**Por ejemplo:**

**cuando haces una petición `HTTP` a una `API`, no puedes determinar exactamente cuánto tiempo tardará en recibir la respuesta de la `API`.**

---

<br>

- **Puede depender de varios factores como:**

  - la `latencia` de la red
  
  - la `carga` del servidor
  
  - entre `otros`

  ---

  <br>

**En estos casos, es importante utilizar técnicas de programación <u>asíncrona</u>, como:**

- **`callbacks`**

- **`promesas`**

  o
  
- **`funciones asíncronas`**

**Para manejar estas operaciones de tiempo indeterminado de una manera más efectiva.**

**Estas técnicas permiten que el programa continúe realizando otras tareas en lugar de estar bloqueado esperando una respuesta de la `API`.**

**Es el caso de las famosas peticiones, que son medios de interacción con datos a través de un servidor.**

---

---

<br>

<br>

---

### **Cómo Comunicarse con la `API` de `OpenWeatherMap`**

---

<br>

**Para ello, vamos a intentar comunicarnos con una `API`.**

**En este caso, es una aplicación intermedia que nos va a permitir acceder a datos proporcionados por una plataforma de información meteorológica en línea:**

- **<u>[OpenWeatherMap.](https://openweathermap.org/api)</u>**

---

<br>

Simplemente **podremos enviar una petición** a su API **gracias a una clave que podemos obtener al registrarnos en el sitio **<u>[OpenWeatherMap.](https://openweathermap.org/api)</u>****

---

---

<br>

<br>

---

### **Utilizando `fetch()` para Peticiones `HTTP`**

---

<br>

Vamos a utilizar una función asíncrona llamada `fetch()` que nos permite realizar peticiones HTTP, y por tanto comunicarnos con APIs.

```javascript
// Declaramos una constante 'apiKey' que almacenará la clave de API única proporcionada por OpenWeatherMap.
// Esta clave es necesaria para autenticarnos ante el servicio API y para hacer peticiones exitosas para obtener datos del clima.
const apiKey = "d408b2585e4efe44f7725a1691a98ff2";

// Definimos una función llamada 'recupDonees', que tiene el objetivo de recuperar datos meteorológicos para una ciudad específica.
// Esta función toma dos argumentos:
//   1) 'city': El nombre de la ciudad para la que queremos obtener información meteorológica.
//   2) 'callback': Una función de devolución de llamada (callback) que será invocada una vez que los datos se hayan recuperado exitosamente.
function recupDonees(city, callback) {

  // Utilizamos un bloque try/catch para rodear el código que podría lanzar excepciones o errores.
  // Esto es crucial cuando estamos interactuando con operaciones que no controlamos completamente, como las peticiones a una API externa.
  try {

    // Dentro del bloque 'try', hacemos una petición HTTP utilizando el método 'fetch'.
    // Este método es nativo de JavaScript para navegadores y devuelve una 'Promesa'.
    // La URL para la petición se construye dinámicamente utilizando literales de plantilla para insertar la 'city' y la 'apiKey'.
    // También solicitamos que los datos se nos devuelvan en unidades métricas (temperatura en Celsius, por ejemplo).
    // NOTA IMPORTANTE: En un caso real, tendríamos que esperar a que esta Promesa se resuelva antes de seguir, lo que se puede hacer con 'await' o '.then()'.
    const response = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    // Luego de obtener una 'response', intentamos convertir el cuerpo de esta respuesta a JSON.
    // El método 'json()' también devuelve una Promesa.
    // Aquí también se debería manejar la Promesa con 'await' o '.then()' para realmente obtener los datos.
    const data = response.json();

  } catch {
    // Si se encuentra algún error o excepción en el bloque 'try', el flujo de ejecución se moverá al bloque 'catch'.
    // En este ejemplo, estamos manejando el error de la forma más simple posible: mostrando un mensaje "error" en la consola.
    // Sin embargo, en una aplicación real querríamos tal vez registrar este error en un archivo de log, mostrar un mensaje al usuario, etc.
    console.log("error");
  }
}

// NOTA: El código, tal y como está, es incorrecto en su manejo de Promesas y debería ser corregido para ser realmente funcional.

```

<br>

---

### **Gestion de errores con `Try/Catch` en JavaScript**

---

<br>

**En este ejemplo,** definimos **nuestra función `recupDonnees()`** que **va a realizar un `try/catch`.**

- **El bloque `try`:**

  - se utiliza para rodear una parte de código que puede generar potencialmente un error.

  - Si se produce un error dentro del bloque `try`, la ejecución del código se interrumpe y el manejo de errores pasa al bloque `catch`.

  ---

  <br>


- **El bloque `catch`:**

  - permite manejar el error ejecutando un bloque de código que puede mostrar un mensaje de error, registrar el error en un archivo de registro o realizar cualquier otra acción adecuada para manejar el error.

<br>

---

#### **El Desafío de la Asincronía en Peticiones `HTTP`**

---

<br>

**Seguimos donde estábamos 👆**

Pero hay un problema.

La instrucción `const data = response.json()` no esperará a que la petición se realice, lo que causará evidentemente un problema.

Transformemos pues nuestra función `recupDonnees()` en función asíncrona para insertar un `await`.

Luego, llamemos al `callback`.

<br>

---

**Ejemplo:**

```js
// Declaramos la constante 'apiKey' que almacena la clave API única proporcionada por OpenWeatherMap.
// Esta clave se utiliza para autenticarnos ante el servicio API y realizar peticiones para obtener datos meteorológicos.
const apiKey = "d408b2585e4efe44f7725a1691a98ff2";

// Definimos una función asíncrona llamada 'recupDonees'.
// El objetivo de esta función es recuperar datos meteorológicos para una ciudad específica.
// La función toma dos argumentos:
//   1) 'city': el nombre de la ciudad para la que queremos obtener información meteorológica.
//   2) 'callback': una función de devolución de llamada (callback) que se invocará una vez que se obtengan los datos.
async function recupDonees(city, callback) {

  // Utilizamos un bloque try/catch para envolver el código que podría lanzar errores.
  // Esto es crucial cuando estamos realizando operaciones que no controlamos completamente, como es el caso de las peticiones a una API externa.
  try {

    // Utilizamos 'await' con el método 'fetch' para hacer una petición HTTP asíncrona.
    // 'fetch' devuelve una Promesa, pero al estar dentro de una función asíncrona, podemos usar 'await' para esperar a que la Promesa se resuelva.
    // La Promesa se resolverá con un objeto 'response', que contiene información sobre la respuesta del servidor.
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    // Utilizamos 'await' para esperar que el método 'json()' convierta la respuesta en un objeto JSON.
    // El método 'json()' también devuelve una Promesa, que de nuevo manejamos con 'await'.
    const data = await response.json();

    // Una vez resuelta la Promesa y con nuestros datos en formato JSON, invocamos la función callback que se pasó como argumento.
    // Pasamos los datos recuperados como argumento a esta función callback.
    return callback(data);

  } catch {

    // Si ocurre algún error en el bloque 'try', se ejecutará el bloque 'catch'.
    // Aquí, simplemente estamos registrando "error" en la consola.
    // En una aplicación real, podríamos necesitar manejar estos errores de forma más sofisticada.
    console.log("error");
  }
}

```

<br>

---

#### **Implementación del `Callback` para Manejar `Datos Asíncronos`**

---

<br>

Así que ahora, toda la función `recupDonees()` se ejecutará asíncronamente cuando sea llamada.

Podemos definir ahora una función de callback que se ejecutará cuando las instrucciones precedidas de un `await` hayan terminado.

---

<br>

**Por ejemplo, una función que permita recuperar la temperatura en grados Celsius, a través de los `datos` de `OpenWeatherMap`:**

```javascript
// Definimos una función llamada 'affTemp'.
// Esta función tiene el propósito de recibir un objeto de datos meteorológicos ('dt') y mostrar la temperatura en la consola.
// La función se diseñó para ser usada como un callback en la función 'recupDonees', que se encargará de recuperar los datos meteorológicos.
function affTemp(dt) {



  // Aquí, accedemos a la propiedad 'main.temp' del objeto 'dt'.
  // La estructura del objeto 'dt' es determinada por la API de OpenWeatherMap.
  // En este caso, la propiedad 'main' es un objeto que, a su vez, contiene otra propiedad llamada 'temp'.
  // Esta última almacena la temperatura actual de la ciudad en grados Celsius, ya que especificamos 'units=metric' en la petición de la API.
  // Sumamos " °C" para añadir las unidades al valor numérico y ofrecer un resultado más claro.
  console.log(dt.main.temp + " °C");
}



// Llamamos a la función 'recupDonees', que se definió en el bloque de código anterior.
// Le pasamos dos argumentos:
//   1) "Paris": es el nombre de la ciudad para la cual queremos recuperar información meteorológica.
//   2) 'affTemp': es la función de devolución de llamada (callback) que se invocará una vez que los datos se hayan recuperado con éxito.
// En este caso, 'affTemp' se encargará de mostrar la temperatura en la consola.
recupDonees("Paris", affTemp);
recupDonees("Annonay", affTemp);
recupDonees("Oslo", affTemp);
recupDonees("helsinki", affTemp);
recupDonees("estocolmo", affTemp);
recupDonees("Berlin", affTemp);
recupDonees("varsovia", affTemp);
recupDonees("kiev", affTemp);

// Es importante tener en cuenta que 'recupDonees' es una función asíncrona.
// Esto significa que la petición a la API y la posterior invocación del callback 'affTemp' no bloquearán el resto del código.
// Se ejecutarán en el fondo mientras el resto del programa continúa funcionando.



// si queremos que aparezca el nombre de la ciudad en consola tambien pues asi:
// ... (el resto del código se mantiene igual hasta la definición de recupDonees)

// Modificamos la función 'affTemp' para recibir un segundo argumento 'cityName'.
// Este argumento se utilizará para imprimir el nombre de la ciudad junto a la temperatura.
function affTemp(dt, cityName) {
  console.log(`${dt.main.temp} °C ${cityName}`);
}

// Modificamos las llamadas a 'recupDonees' para utilizar funciones anónimas o "arrow functions" como callbacks.
// De esta manera, podemos pasar tanto los datos como el nombre de la ciudad a 'affTemp'.
recupDonees("Annonay", (data) => affTemp(data, "Annonay"));
recupDonees("Oslo", (data) => affTemp(data, "Oslo"));
recupDonees("Helsinki", (data) => affTemp(data, "Helsinki"));
recupDonees("Estocolmo", (data) => affTemp(data, "Estocolmo"));
recupDonees("Berlin", (data) => affTemp(data, "Berlin"));
recupDonees("Varsovia", (data) => affTemp(data, "Varsovia"));
recupDonees("Kiev", (data) => affTemp(data, "Kiev"));

// Ahora, cuando ejecutes este código, deberías ver la temperatura junto al nombre de la ciudad en la consola.

```

---

---

<br>

<br>

---

### **Conclusión: La Utilidad del Asincronismo y Callbacks en el Mundo Real**

---

<br>

Por supuesto, dado que hemos puesto en marcha una función asíncrona, si añadimos instrucciones en el resto del script, se ejecutarían directamente sin tener que esperar a que `recupDonnes` termine.

De ahí el interés del asincronismo y del callback.

---

---