# **Entender el objeto window**

<br>
<br>

---

## **`Window`**

---

<br>

El objeto `window` **es el objeto de más alto nivel en el BOM** (Modelo de Objeto de Navegador).

`Window` es un objeto global que **representa la ventana del navegador** y **ofrece funcionalidades para controlar su tamaño, posición y contenido.**

**El objeto `window` `contiene el` famoso objeto `DOM (Modelo de Objeto de Documento)`.**

Por lo tanto, **cada ventana tendrá su propio DOM** accesible **a través del objeto `window`.**

<br>

---

<br>

Siendo el objeto global por defecto en JS, **todas las propiedades y métodos del objeto `window` se pueden usar sin escribir la palabra clave `window`.**

Sin embargo, **es recomendable escribirlo** para evitar confusiones con otras variables o funciones **(es una buena práctica de programación).**

---

---

<br>

<br>

---

## **Preparación del entorno**

---

<br>

**Para entender bien, vamos a crear en nuestro directorio actual un archivo HTML `index.html` como el siguiente:**

```html
<!DOCTYPE html>

<html lang="es">
    
<head>
    <meta charset="UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <meta name="viewport">
    
    <title>Document</title>
</head>

<body>
    <p>index.html</p>
    
    <button id="boton">botón</button>
    
    <script src="script.js"></script>
</body>

</html>
```

---

<br>

**Y Un archivo `destination.html`:**

```html
<!DOCTYPE html>

<html lang="es">
    
<head>
    <meta charset="UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <meta name="viewport">
    
    <title>Document</title>
</head>

<body>
    <p>destino</p>

    <button id="boton2">botón</button>
</body>

</html> 
```

**Y también un archivo `script.js` que contendrá nuestros scripts.**

---

---

<br>

<br>

---

## **`Abrir/Cerrar` la ventana del navegador web**

---

<br>

---

### **El Objeto window**

---

<br>

**El objeto `window` permite abrir una ventana específica:**

- **Para ello, podemos usar el método `open()`.**

    y

- **pero también cerrar la ventana web actual con `close()`.**

<br>

---

### **Cómo usar el método `open()` :**

---

<br>

```javascript
window.open(/*url*/);
```

Esta línea de código **permite abrir el enlace pasado como argumento en una ventana**.

Sin embargo, generalmente **"si" una ventana "se abre por defecto con este método", la apertura de "la ventana será bloqueada" por el navegador `(pop-up bloqueado)`.**

<br>

---

**Para resolver este problema**, podemos, por ejemplo, disparar **la apertura en función de un `Event Listener` que escucha cuando el botón con el id `"boton"` es pulsado.**

```javascript
// Obtenemos el elemento HTML con el ID "boton" y lo almacenamos en la variable "boton".
// Esta variable ahora contiene una referencia al botón en el DOM.
const boton = document.getElementById("boton");

// Agregamos un "Event Listener" al botón para escuchar el evento 'click'.
// Usamos una función de flecha (arrow function) como el callback que se ejecutará cuando el botón sea clickeado.
boton.addEventListener('click', () => {

  // ¿Por qué una función de flecha aquí? 
  // Las funciones de flecha son más concisas y tienen un comportamiento diferente del objeto 'this'.
  // En este caso, el uso de una función de flecha es más una elección de estilo, ya que no estamos utilizando 'this' en el código.
  // Podríamos haber usado una función regular, pero la función de flecha es más limpia y moderna en este contexto.

  // Dentro de la función anónima, usamos window.open para abrir una nueva ventana o pestaña del navegador.
  // La URL "destination.html" es donde se cargará la nueva ventana o pestaña.
  // window.open crea una nueva ventana y carga la URL especificada ("destination.html" en este caso).
  window.open("destination.html");

  // Fin de la función anónima.
  // El listener ha hecho su trabajo: ha capturado el evento de clic en el botón y ha ejecutado el código correspondiente.
});

// Fin del script. El programa está completo y no hay más código que ejecutar.

```

Podemos ver que, si no hay errores, la ventana se abre correctamente cuando hacemos clic en el botón.

---

<br>

**Podemos pasar varios otros argumentos, como el nombre de la ventana y sus opciones, entre las cuales figura su dimensión (en px):**

```javascript
const boton = document.getElementById("boton");

boton.addEventListener('click', () => {

  window.open("destination.html", 'destination', 'width=500, height=500');
  }

);
```

En este ejemplo, la ventana con el nombre "destination" se abrirá con un tamaño de 500x500 px (si el navegador no está en pantalla completa).

Hay otras opciones especificables como la presencia de barras de desplazamiento, una barra de herramientas (toolbar), etc.

<br>

---

### **Cómo usar el método `close()`**

---

<br>

**Para cerrar la ventana actual, necesitamos llamar al método `close()`.**

Para ello, **vamos a crear un Event Listener que se activará cuando el botón con id `boton2` sea pulsado.**

Pero para esto, **necesitamos recuperar el elemento HTML "de la ventana abierta" con el DOM de su objeto `window`.**

**Además, necesitamos crear un Event Listener que se llamará una vez que la ventana "destination" esté completamente abierta para que no haya errores.**

<br>

---

**Así es como se hace:**

```javascript
// Obtenemos el elemento HTML con el ID "boton" y lo almacenamos en la variable "boton".
// Esta variable contiene una referencia al botón en el HTML.
const boton = document.getElementById("boton");

// Añadimos un Event Listener al botón para que "escuche" cuando se hace clic en él.
// Usamos una función de flecha como el callback.
boton.addEventListener('click', () => {

  // Usamos window.open para abrir una nueva ventana del navegador.
  // Asignamos esta nueva ventana a la variable "ventana".
  // Además, especificamos algunos parámetros como el nombre ('destination') y las dimensiones (500x500 px).
  let ventana = window.open("destination.html", 'destination', 'width=500, height=500');

  // Añadimos otro Event Listener, pero esta vez es para la nueva ventana "ventana".
  // Este se activará cuando la ventana termine de cargar su contenido.
  ventana.addEventListener('load', () => {

    // Dentro de la ventana nueva, buscamos un elemento con el ID "boton2" y lo asignamos a la variable "boton2".
    let boton2 = ventana.document.getElementById('boton2');

    // Añadimos un tercer Event Listener al botón "boton2".
    // Este se activará cuando se haga clic en "boton2".
    boton2.addEventListener('click', () => {

      // Usamos el método .close() para cerrar la ventana nueva cuando se haga clic en "boton2".
      ventana.close();
      // Al llegar aquí, la ventana será cerrada y el ciclo de vida de la ventana nueva habrá terminado.

    });
    // Fin del Event Listener para "boton2".

  });
  // Fin del Event Listener para la ventana nueva.

});
// Fin del Event Listener para el botón original.

// Fin del script.
```

---

<br>

---

#### **Para entender mejor, detallamos los pasos:**

---

<br>

1. En la función anónima del primer Event Listener, definimos una variable `ventana` sobre el valor de retorno del método `window.open()`, que corresponde a una referencia hacia la ventana que se abre.

    ---

    <br>

2. Luego, definimos un Event Listener que disparará una función cuando la `ventana` esté cargada (evento "load").

    En esta función, recuperamos el elemento HTML con id `boton2` almacenando su referencia en la variable `boton2`.
    
    Para ello, usamos el DOM (a través de la palabra clave `document`) del objeto `window` cuya referencia está almacenada en la variable `ventana`.

    ---

    <br>

3. Finalmente, dentro de esta función, definimos un `Event Listener` que disparará una función cuando `boton2` sea pulsado.

    ---

    <br>

4. Esta última función cerrará la ventana (`ventana.close()`).

    ---

    <br>

**Podemos ver que este código funciona correctamente.**

---

---

<br>

<br>

---

## **Método `alert()`**

---

<br>

El método `alert()` es una función que probablemente ya conoces bien.

Generalmente, lo usamos sin la palabra clave `window`, ya que, como hemos mencionado, todas las propiedades y métodos de `window` se pueden usar sin especificar esa palabra clave, siendo el objeto global por defecto.

Sin embargo, es buena práctica especificarla para resaltar que es un método del objeto `window`.

<br>

---

**Ejemplo de `.alert`**

```javascript
// Obtenemos el elemento HTML con el ID "boton" y lo almacenamos en la variable "boton".
// Esta variable ahora contiene una referencia al botón en nuestro documento HTML.
const boton = document.getElementById("boton");

// Agregamos un "EventListener" al botón que está esperando por un evento 'click'.
// En otras palabras, le decimos al botón que "escuche" para saber si alguien hace clic en él.
// Cuando eso suceda, se ejecutará la función anónima definida justo después del evento 'click'.
boton.addEventListener('click', () => {

  // Dentro de esta función anónima, usamos window.alert() para mostrar una alerta en el navegador.
  // La ventana de alerta mostrará el texto "Mensaje".
  // Aquí, el prefijo "window." es opcional, ya que alert() es una función global y se entiende que pertenece al objeto window.
  window.alert("Mensaje"); // o simplemente alert("Mensaje")

  // Fin de la función anónima
});

// Fin del script
```

---

<br>

**En este ejemplo, se desencadena una alerta cuando hacemos clic en el botón con el id `boton`.**

---

---

<br>

<br>

---

## **Método `prompt()`**

---

<br>

El método `window.prompt()` permite mostrar una ventana con una entrada para el usuario.

**El valor ingresado por el usuario se puede recuperar** fácilmente **almacenando el valor de retorno** de la llamada **en una variable.**

**Veamos un ejemplo simple:**

<br>

---

**Ejemplo de `prompt()`**

```js
// Obtenemos el elemento HTML con el ID "boton" y lo almacenamos en la variable "boton".
// "boton" ahora es una referencia al elemento de botón en nuestro documento HTML.
const boton = document.getElementById("boton");

// Agregamos un "EventListener" al botón para escuchar el evento de 'click'.
// Esto significa que cuando alguien haga clic en el botón, se ejecutará la función anónima que definimos a continuación.
boton.addEventListener('click', () => {

  // Dentro de esta función anónima, usamos window.prompt() para mostrar un cuadro de diálogo que permite al usuario ingresar texto.
  // La pregunta que se muestra en el cuadro de diálogo es lo que el usuario vera: "¿Qué palabra mostrar?".
  let palabra = window.prompt("¿Qué palabra mostrar?");
  
  // Luego, utilizamos window.alert() para mostrar un cuadro de alerta que contiene el texto ingresado por el usuario.
  // La variable "palabra" almacenará el texto ingresado por el usuario (un texto que el ponga... poco importa) y se mostrará en el cuadro de alerta.
  window.alert(palabra);

  // Fin de la función anónima.
});

// Fin del script.
```

En este ejemplo, cuando se hace clic en el botón, se muestra un cuadro de diálogo y el usuario puede ingresar un texto.

La variable `palabra` se establece al valor devuelto por `prompt`.

Una alerta muestra el contenido de la variable `palabra`, que contiene la cadena ingresada por el usuario.

---

<br>

**Como segundo argumento, podemos pasar la cadena que se mostrará por defecto en el `prompt`:**

```js
// Obtenemos el elemento HTML con el ID "boton" y lo guardamos en la variable "boton".
// Ahora, "boton" contiene una referencia al botón en nuestro DOM (Document Object Model).
const boton = document.getElementById("boton");

// Agregamos un "EventListener" al botón para escuchar cuando ocurra un evento 'click'.
// Cuando se haga clic en el botón, la función de flecha (arrow function) que hemos definido se ejecutará.
boton.addEventListener('click', () => {

  // La función window.prompt muestra un cuadro de diálogo que permite al usuario ingresar un texto.
  // El primer argumento ("¿Qué palabra mostrar?") es el mensaje que se muestra en el cuadro de diálogo.
  // El segundo argumento ("palabra de tu elección") es el valor predeterminado que aparecerá en el cuadro de texto dentro del cuadro de diálogo (vamos, que es el típico placeholder de los campos de formularios).
  let palabra = window.prompt("¿Qué palabra mostrar?", "palabra de tu elección");

  // Luego, mostramos una alerta (un cuadro de diálogo de alerta) con el valor que el usuario ha ingresado.
  // Si el usuario presiona "Cancelar" en el prompt, "palabra" será null y eso es lo que se mostrará en la alerta.
  window.alert(palabra);

  // Fin de la función de flecha.
});

// Fin del código.
```

---

<br>

**Ahora que hemos visto algunos ejemplos de métodos del objeto `window`, hablemos de algunos subobjetos de `window`.**

---

---