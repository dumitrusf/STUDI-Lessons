# Crear peticiones AJAX

## Objetivos

- Comprender la utilidad de una petición AJAX
- Saber cómo recuperar y enviar datos con XMLHttpRequest
- Saber qué verbo HTTP utilizar

## Contexto

Para dinamizar su sitio web, es frecuente querer intercambiar datos con un servidor y que esto sea transparente para el usuario, es decir, sin recargar la página entera. AJAX (Asynchronous JavaScript And XML) nos permitirá enviar peticiones HTTP en segundo plano, a través del objeto XMLHttpRequest.

## XMLHttpRequest

XMLHttpRequest (XHR) es un objeto del navegador que permite el envío de peticiones HTTP en asíncrono. Hoy en día está implementado por todos los navegadores web modernos. Para utilizarlo, debemos crear una instancia del objeto XMLHttpRequest, inicializarla con el método `.open()` y enviar la petición con el método `.send()`. Al ser asíncrono, es necesario añadir una función de callback al evento `readystatechange` de la instancia XHR, para tratar la respuesta de la petición.

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://mon-serveur/ma-ressource');
xhr.addEventListener('readystatechange', function() {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log("Response = " + xhr.response);
  };
});
xhr.send();
```

## Métodos de peticiones HTTP

El protocolo HTTP define un conjunto de métodos para especificar la acción deseada sobre el recurso. Estos métodos, llamados también Verbo HTTP, están normalizados. Aquí están los principales:

- **`GET`**: para recuperar datos.
- **`HEAD`**: respuesta idéntica a GET, excepto que solo se devolverá el encabezado de respuesta (el cuerpo de la respuesta se omitirá). Útil para verificar la presencia de un recurso.
- **`POST`**: para enviar datos al servidor (creación de una entidad).
- **`PUT`**: para enviar datos al servidor (modificación de una entidad).
- **`DELETE`**: para eliminar una entidad.

## El método GET

Para recuperar un recurso, utilizaremos el método GET. Si queremos recuperar la lista de todos los usuarios, el método GET es ideal.

```javascript
const xhr = new XMLHttpRequest();
const verb = 'GET';
const route = 'http://mon-serveur/utilisateurs';
let result;
xhr.open(verb, route);
xhr.addEventListener('readystatechange', function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    result = xhr.response;
  };
});
xhr.send();
```

Si, ahora, queremos recuperar solo los usuarios cuyo nombre es François, el método GET sigue siendo adecuado. Pero tendremos que añadir parámetros a nuestra petición. Para evitar los errores debidos a los caracteres especiales, se recomienda utilizar la función JavaScript `encodeURIComponent()`.

```javascript
const route = 'http://mon-serveur/utilisateurs?firstname=' + encodeURIComponent('François');
```

## Los métodos POST y PUT

Para crear y modificar una entidad, los métodos POST y PUT son adecuados. Sus funcionamientos son idénticos, salvo que, para el método PUT, un parámetro es necesario para identificar el recurso a modificar a nivel del servidor (como un ID único, por ejemplo). Para enviar los parámetros, no utilizaremos la URL como con el método GET, sino que añadiremos estos parámetros al método `.send()`. Para indicar al servidor que se van a enviar parámetros por el método `.send()`, hay que añadir una información en el header de la petición HTTP.

```javascript
const xhr = new XMLHttpRequest();
const verb = 'POST';
const route = 'http://mon-serveur/utilisateurs';
xhr.open(verb, route);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('name=Marty&firstname=David&city=Perpignan');
```

Otro método, más simple y más avanzado, consiste en utilizar un objeto FormData.

```javascript
const xhr = new XMLHttpRequest();
const verb = 'POST';
const route = 'http://mon-serveur/utilisateurs';
xhr.open(verb, route);
var form = new FormData();
form.append('name', 'Marty');
form.append('firstname', 'David');
form.append('city', 'Perpignan');
xhr.send(form);
```

Este objeto FormData podrá servir incluso para la subida de archivos.

## Los errores

Es importante gestionar los posibles errores al enviar o recibir peticiones HTTP cuando hacemos AJAX.

```javascript
var xhr = new XMLHttpRequest();
var verb = 'GET';
var route = 'http://mon-serveur/utilisateurs';
var result;
xhr.open(verb, route);
xhr.addEventListener('readystatechange', function() {
  if (xhr.readyState === 4) {
    //Si el status no es 200 (HTTP.OK), alertamos al usuario.
    if (xhr.status !== 200) {
      alert('An error occured. Code: ' + xhr.status + ', Message : ' + xhr.statusText);
    } else {
      result = xhr.response;
    }
  };
});
xhr.send();
```

Un error no será devuelto necesariamente por un código HTTP: XmlHttpRequest puede levantar ciertos errores por sí mismo. Para tratarlos, habrá que utilizar un callback sobre el evento 'error' del objeto XmlHttpRequest.

```javascript
var xhr = new XMLHttpRequest();
var verb = 'GET';
var route = 'http://mon-serveur/utilisateurs';
var result;
xhr.open(verb, route);
xhr.addEventListener('error', function() {
  alert('An error occured.');
});
xhr.send();
```

## Consejo: La API REST

Rest es un conjunto de recomendaciones a las que un desarrollador debe adherirse para poder considerar una API como "RESTful". Las API REST aprovechan los métodos HTTP vistos más arriba en este curso. Las aplicaciones del lado cliente de la API utilizan llamadas HTTPS para:

- Llamar a un recurso con un método GET,
- Transmitir datos al servidor con un método POST,
- DELETE para eliminarlo.

Estos tres métodos HTTPS son los más utilizados por las API RESTful pero es posible recurrir a otros métodos como HEAD, PUT, PATCH, CONNECT, OPTION así como TRACE. Muchos sitios recurren a las API RESTful, como Google, Amazon y Twitter.

## Para recordar

- AJAX es un conjunto de tecnologías que permiten lanzar peticiones HTTP en segundo plano, entre otras con el objeto XMLHttpRequest (XHR). Podremos así crear, leer, actualizar y eliminar datos. En inglés: Create, Read, Update, Delete (C.R.U.D.).
- XHR nos da acceso a una variedad de métodos y propiedades que permitirán gestionar finamente los datos y los errores.

## Complemento

- **[MDN: Métodos de petición HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods)**

- **[MDN: XMLHttpRequest](https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest)**

- **[MDN: FormData](https://developer.mozilla.org/fr/docs/Web/API/FormData/FormData)**
