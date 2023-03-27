# **Los sub-objetos de `window`**

<br>
<br>

---

## **El objeto `window.screen`**

---

<br>

En JavaScript, el objeto `screen` representa la pantalla donde se muestra el navegador, ya sea de tu ordenador, teléfono o tableta.

Contiene información sobre la resolución de la pantalla, el tamaño de la pantalla y la profundidad de color.

<br>

---

### **Algunas de las propiedades del objeto screen:**

---

<br>

- **`screen.width`:** el ancho de la pantalla en píxeles,

- **`screen.height`:** la altura de la pantalla en píxeles,

- **`screen.availWidth`:** el ancho disponible de la pantalla en píxeles,

- **`screen.availHeight`:** la altura disponible de la pantalla en píxeles,

- **`screen.colorDepth`:** la profundidad de color de la pantalla en bits,

- **`screen.pixelDepth`:** la profundidad de color de la pantalla en píxeles.

<br>

---

**Ejemplo: Uso del objeto screen**

Podemos mostrar en la consola las diferentes informaciones relativas a la pantalla:

```javascript
console.log(screen.width);

console.log(screen.height);

console.log(screen.availWidth);

console.log(screen.availHeight);

console.log(screen.colorDepth);

console.log(screen.pixelDepth);
```

Como habrás entendido, **`screen` es un sub-objeto de `window`**

---

<br>

Por lo tanto, podemos acceder a las propiedades de `screen` especificando la palabra `window` antes de `screen`:

```javascript
console.log(window.screen.width);

console.log(window.screen.height);

console.log(window.screen.availWidth);

console.log(window.screen.availHeight);

console.log(window.screen.colorDepth);

console.log(window.screen.pixelDepth);
```

---

---

<br>

<br>

---

## **El objeto `window.location`**

---

<br>

**En JavaScript, el objeto `location` representa:**

- **la `URL` de la página web actual**

    y
    
- **ofrece:**

    - propiedades
    
        y
        
    - métodos
    
    para interactuar con dicha URL.

<br>

---

### **Propiedades del objeto `location`**

---

<br>

- **`location.href`:** contiene la URL completa de la página web.

- **`location.protocol`:** contiene el protocolo utilizado para acceder a la página web (por ejemplo, "http:" o "https:").

- **`location.host`:** contiene el nombre de host (nombre de dominio) de la página web.

- **`location.pathname`:** contiene la ruta de acceso de la página web, sin el nombre de host.

<br>

---

### **Métodos del objeto `location`**

---

<br>

- **`location.assign()`:**

    - permite cargar la página web cuya URL se pasa como argumento.
    
        Es lo mismo que modificar el valor de `location.href`.
        
        Añade la nueva URL al historial de navegación.

    ---

    <br>

- **`location.replace()`:**

    - permite reemplazar la página web actual por aquella cuya URL se pasa como argumento.
    
        A diferencia del método de "location.assign*()", `location.replace()` reemplaza la URL actual por la nueva URL en el historial del navegador.
    
        Por lo tanto, no hay una nueva entrada en el historial de navegación, sino un reemplazo de una entrada por otra.

    ---

    <br>

- **`location.toString()`:**

    - permite obtener la URL en forma de cadena de texto.

<br>

---

**Ejemplo de uso del objeto `location`:**

```javascript
// Visualización de propiedades de window.location (la palabra window es opcional)
console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.host);
console.log(window.location.pathname);
```

---

<br>

**Aquí tienes un ejemplo de cómo llamar al método `location.assign()`:**

```javascript
window.location.assign('destination.html');
```

---

<br>

**Y un ejemplo de cómo llamar al método `location.replace()`:**

```javascript
window.location.replace('destination.html');
```

---

<br>

**Finalmente, un ejemplo de cómo llamar al método `location.toString()`:**

```javascript
console.log(location.toString());
```

---

---

<br>

<br>

---

## **El objeto `window.history`**

---

<br>

**El objeto `history` expone varios métodos y propiedades que permiten navegar a páginas anteriores o siguientes en el historial del navegador, añadir o reemplazar entradas en el historial, verificar el número de entradas en el historial, etc.**

<br>

---

<br>

**La propiedad `length` permite conocer el número de entradas en el historial de navegación (número de páginas en el historial, ver el siguiente video).**

---

<br>

---

### **Algunos métodos útiles del objeto `window.history`**

---

<br>

- **`history.back()`:**

    - carga la página anterior en el historial del navegador.

    ---

    <br>

- **`history.forward()`:**

    - carga la página siguiente en el historial del navegador.

    ---

    <br>

- **`history.go(n)`:**

    - carga la página ubicada en la posición `n` en el historial del navegador.

<br>

---

### **Modificar la arquitectura del directorio para usar `window.history`**

---

<br>

**Primero, vamos a crear un archivo de JavaScript llamado `destination.js`.**

**Este script será importado por la página HTML `destination.html`.**

**A continuación, vamos a modificar el archivo `destination.html` para cambiar el botón 2 e importar `destination.js`.**

```html
<!-- Código HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport">
    <title>Document</title>
</head>
<body>
    <p>destination</p>
    <button id="back">back</button>
    <script src="destination.js"></script>
</body>
</html>
```

---

<br>

Vamos a modificar también `index.html` para agregar un botón "back" (para volver a la página anterior, que es destination) y para modificar nuestro primer botón.

```html
<!-- Código HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport">
    <title>Document</title>
</head>
<body>
    <p>index.html</p>
    <button id="destination">destination</button>
    <button id="forward">forward</button>
    <script src="script.js"></script>
</body>
</html>
```

<br>

---

### **Ejemplo: El objeto `window.history`**

---

<br>

Aquí hay un **ejemplo donde llamamos a los métodos `back()` y `forward()`.**

**Estos métodos nos permitirán navegar en el historial.**

**En nuestro `script.js`:**

```javascript
// Primero, obtenemos el elemento del DOM con el ID 'destination'
// y lo almacenamos en una constante llamada "destination".
const destination = document.getElementById('destination');

// Hacemos lo mismo con el elemento que tiene el ID 'forward'.
const forward = document.getElementById('forward');

// Añadimos un escuchador de eventos al elemento "destination".
// Este escuchador de eventos se activará cuando el usuario haga clic en el elemento "botón (destination)".
destination.addEventListener('click', () => {


  // Utilizamos window.location.assign para navegar a una nueva página: 'destination.html'.
  // La función window.location.assign reemplazará la URL actual con la que se proporciona
  // llevando al usuario a 'destination.html'.
  const destination = window.location.assign('destination.html');
});

// Añadimos un escuchador de eventos al elemento "forward".
// Este escuchador se activará cuando el usuario haga clic en el elemento.
forward.addEventListener('click', () => {


  // Utilizamos window.history.forward() para avanzar una página en el historial del navegador.
  // Esto equivale a cuando un usuario hace clic en el botón "Adelante" en su navegador web.
  // Si no hay una página a la que avanzar, esta función no hará nada.
  window.history.forward();
});
```

---

<br>

Y para `destination.js`:

```javascript
// Primero, obtenemos el elemento del DOM con el ID 'back'
// y lo almacenamos en una constante llamada "back".
// Este elemento podría ser, por ejemplo, un botón en el que el usuario puede hacer clic para volver a la página anterior.
const back = document.getElementById('back');

// Luego, añadimos un escuchador de eventos de tipo 'click' al elemento "back".
// Esto significa que cuando el usuario haga clic en este elemento, se ejecutará la función de flecha.
back.addEventListener('click', () => {


  // Utilizamos la función window.history.back() para ir una página atrás en el historial del navegador.
  // Es como si el usuario hubiera hecho clic en el botón "Atrás" de su navegador.
  // Si no hay ninguna página a la que volver (es decir, si es la primera página que el usuario ha visitado en esa ventana o pestaña),
  // entonces esta función no hará nada.
  window.history.back();
});
```

---

<br>

**Para entender mejor, repasemos los pasos:**

- En `script.js`, recuperamos la referencia de los 2 botones.

    - Luego agregamos Event Listener.
    
    - El botón `destination` activará un `window.assign` hacia `destination.html`.
    
    - El botón `forward` activará un `window.history.forward()`.

    ---

    <br>

- Si hacemos clic en el botón `destination`, se abrirá el archivo `destination.html` y se añadirá una entrada en el historial.

    - El archivo `destination.js` se ejecutará.

    - Dentro recuperamos el botón `back` y le asignamos un Event Listener que llamará al método `window.history.back()`.

    ---

    <br>

- Cuando volvemos a `index.html`, podemos usar el botón `forward` para avanzar en el historial de navegación, y volvemos a la página `destination.html`.

---

<br>

Este sistema no habría funcionado si hubiéramos usado el método `window.replace`, que no habría insertado una nueva entrada en el historial de navegación.

Además, si cargamos la página y hacemos clic directamente en el botón `forward`, no pasará nada porque el historial no tiene entradas después de la entrada actual.

<br>

---

<br>

**Espero que ahora sea más claro el funcionamiento del objeto `window.history`.**

**Ahora hablemos de otro objeto que será el tema de nuestra atención en este curso: `window.document.cookie`.**

---

---

<br>

<br>

---

## **El objeto `window.document.cookie`**

---

<br>

Como sabrás, la web de hoy en día está llena de las famosas cookies.

Podrías pensar que las cookies son herramientas que solo sirven para acosar a los usuarios con anuncios invasivos, pero eso está lejos de ser cierto.

<br>

---

<br>

Una cookie es un archivo de texto almacenado en la computadora de un usuario por un sitio web.

Las cookies se utilizan a menudo para almacenar información que puede ser recuperada por el sitio web en una fecha posterior.

La información almacenada en las cookies puede utilizarse para personalizar la experiencia del usuario en el sitio web, o para rastrear a los usuarios y recopilar datos de uso.

<br>

---

<br>

Por lo tanto, las cookies también te permitirán recordar tu estado de conexión en un sitio, mostrar automáticamente un sitio web en tu idioma, etc.

En tu camino como desarrollador, serán más que indispensables para usar en este sentido, ya que te permitirán almacenar información que será utilizable en cualquier página de un dominio, es decir, del sitio web.

<br>

---

### **Crear y recuperar el valor de las `cookies`**

---

<br>

**Para crear una cookie, podemos utilizar el objeto cookie de JavaScript de la siguiente manera:**

<br>

---

**Ejemplo:**

```javascript
// La propiedad "document.cookie" se usa para crear, leer y eliminar cookies.

// Las cookies son pequeñas piezas de datos que se almacenan en el navegador del usuario para recordar información entre sesiones.

// A continuación, se describen cada una de las partes que componen la cadena asignada a "document.cookie":


    // "clave=valor": Esto establece la clave y el valor de la cookie. 

            // En este caso, la clave es "clave" y el valor es "valor".


    // "expires=fecha_de_expiracion": Esto establece la fecha de expiración de la cookie.

    // Si no se especifica, la cookie será una cookie de sesión, lo que significa que se eliminará cuando el usuario cierre el navegador.


    // "path=ruta": Esto define la ruta para la cual la cookie es válida.

            // Solo las solicitudes a esta ruta podrán incluir la cookie en sus encabezados.

            // Si no se establece, se toma como la ruta del documento que creó la cookie.


    // "domain=dominio": Esto especifica el dominio para el cual la cookie es válida.

            // Esto es útil cuando se quieren compartir cookies entre subdominios.



    // "secure": Esta opción indica que la cookie solo debe transmitirse a través de HTTPS.

            // No agregar "secure" significa que la cookie podría enviarse también a través de HTTP, lo que podría ser inseguro.

document.cookie = "clave=valor; expires=fecha_de_expiracion; path=ruta; domain=dominio; secure";
```

---

<br>

**Aquí hay una explicación de las diferentes informaciones a proporcionar:**

- **clave**: el nombre de la cookie.

- **valor**: el valor a almacenar en la cookie.

- **fecha_de_expiracion**: la fecha en la que expira la cookie.

    Si esta fecha no se especifica, la cookie se considera una cookie de sesión y se eliminará cuando se cierre el navegador.


- **ruta**: la ruta asociada con la cookie.

    Si esta opción no se especifica, la cookie está asociada con la ruta de la página actual.


- **dominio**: el dominio asociado con la cookie.

    Si esta opción no se especifica, la cookie está asociada con el dominio de la página actual.

- **secure**: si esta opción se especifica, la cookie solo se enviará a través de una conexión HTTPS.

<br>

---

**Tomemos un ejemplo, agreguemos 2 cookies (nombre de usuario y contraseña) en nuestro archivo `script.js`:**

```javascript
// Obtenemos el elemento HTML con el ID 'destination' y lo almacenamos en la constante "destination".
const destination = document.getElementById('destination');

// Hacemos lo mismo para el elemento con el ID 'forward', almacenándolo en la constante "forward".
const forward = document.getElementById('forward');

// Añadimos un escuchador de eventos de tipo 'click' al elemento "destination".
destination.addEventListener('click', () => {


  // Al hacer clic en el elemento, el navegador se redirigirá a 'destination.html'.
  // Utilizamos window.location.assign para esta tarea.
  const destination = window.location.assign('destination.html');
});

// Añadimos un escuchador de eventos de tipo 'click' al elemento "forward".
forward.addEventListener('click', () => {


  // Al hacer clic en este elemento, navegaremos una página hacia adelante en el historial del navegador.
  window.history.forward();
});

// Creamos un nuevo objeto Date y lo almacenamos en "dateExp" para gestionar la fecha de expiración de nuestras cookies.
const dateExp = new Date();


// Incrementamos la fecha en 1 mes usando setMonth.
dateExp.setMonth(dateExp.getMonth() + 1);

// Utilizamos prompt() para solicitar al usuario su nombre de usuario y contraseña.
// Estos valores se almacenarán en las constantes "username" y "mdp".
const username = prompt("Nombre de usuario");
const mdp = prompt("Contraseña");

// Finalmente, creamos cookies para almacenar el nombre de usuario y la contraseña.
// Usamos la propiedad document.cookie y plantillas de cadena para insertar los valores y la fecha de expiración interpolandolas.
document.cookie = `username=${username}; expires=${dateExp.toUTCString()}`;
document.cookie = `mdp=${mdp}; expires=${dateExp.toUTCString()}`;
```

---

<br>

En este ejemplo, consultamos al usuario sobre su nombre de usuario y contraseña.

Luego creamos cookies para el dominio actual que se almacenarán durante 1 mes, con los valores proporcionados por el usuario.

Preferiblemente utilizamos el método `toUTCString()` para obtener la fecha de nuestro objeto Date.

Ahora podremos acceder a nuestras cookies en cualquier página del dominio.

<br>

---

**Por ejemplo, modifiquemos `destination.js` para recuperar los valores de las cookies:**

```javascript
// Obtenemos el elemento del DOM con el ID 'back' y lo almacenamos en la constante "back".
// Este elemento podría ser un botón que permita al usuario volver a la página anterior.
const back = document.getElementById('back');

// Agregamos un escuchador de eventos de tipo 'click' al elemento "back".
back.addEventListener('click', () => {
  // Usamos la función window.history.back() para moverse una página atrás en el historial del navegador.
  // Es similar a presionar el botón "Atrás" en el navegador.
  window.history.back();
});

// document.cookie es una cadena de texto que contiene todas las cookies del dominio actual, separadas por "; ".
// Usamos el método split para dividir esa cadena en un array, donde cada elemento es una cookie individual.
let arrayId = document.cookie.split("; ");

// Declaramos un nuevo array vacío llamado "identificadores" para almacenar los pares clave-valor de las cookies.
let identificadores = new Array();

// Utilizamos forEach para iterar a través del array "arrayId".
arrayId.forEach((linea) => {


  // Cada "linea" es una cookie que contiene una clave y un valor separados por "=".
  // Usamos split para separar la clave del valor.
  let tab = linea.split("=");

  // Añadimos el par [clave, valor] al array "identificadores".
  identificadores.push([tab[0], tab[1]]);
});

// Finalmente, mostramos el array "identificadores" en la consola de depuración.
console.log(identificadores);
```

---

<br>

En este ejemplo, recuperamos en la página `destination.html` el valor de las cookies.

Creamos un array que contendrá las claves / valores de las cookies, y lo mostramos en la consola.

Podemos ver que las cookies creadas son accesibles en todas las páginas del dominio, lo cual obviamente no es el caso para las variables básicas que declaramos en un archivo js.

---

---