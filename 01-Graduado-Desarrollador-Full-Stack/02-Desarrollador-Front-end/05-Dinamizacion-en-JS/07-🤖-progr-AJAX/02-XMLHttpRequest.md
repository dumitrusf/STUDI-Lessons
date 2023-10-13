# Objetivos de XMLHttpRequest

- Comprender el funcionamiento del objeto XMLHttpRequest
- Conocer las principales funcionalidades del objeto XMLHttpRequest

## Contexto

Vamos a presentar aquí las principales funciones del objeto XMLHttpRequest.

## Inicialización de la solicitud

Para inicializar una solicitud, hay que crear primero una instancia del objeto XMLHttpRequest. El método `.open()` permite la inicialización de la solicitud. Respeta el método HTTP, es decir, que permite enviar solicitudes GET o POST (o HEAD) clásicas. Con `open()` también se puede parametrizar una URL, pasar datos procedentes de una base de datos como por ejemplo un login, una contraseña, etc... todo eso de forma asíncrona. La solicitud se envía con el método `.send()`.

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users?page=1');
xhr.send();
```

## Atención

Por defecto, la solicitud es asíncrona, es decir, que el script continúa ejecutándose, sin esperar la respuesta que se devolverá a través de un callback. Es un comportamiento deseable en la inmensa mayoría de los casos. Sin embargo, es posible forzar un comportamiento síncrono pasando el valor `false` al parámetro asíncrono en la llamada del método.

```javascript
xhr.open('get', 'https://reqres.in/api/users?page=1', false);
```

## Los diferentes estados

La solicitud enviada siendo asíncrona, significa que se ejecuta en paralelo con otras funciones. Es importante tener una función de callback activada al final del tratamiento para recuperar el resultado de la solicitud. En JavaScript, un callback permite a una función llamar a otra función. Se trata más precisamente de una función de retorno que se puede ejecutar después del final de otra función. Para ello, XHR posee un evento `readystatechange` que se activa en cada cambio de estado de la instancia.

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users');
// readystatechange se llamará cada vez que el readyState cambie. Lo que permitirá generar un callback.
xhr.addEventListener('readystatechange', function() {
  // readyState indicará el estado de la solicitud del objeto XMLHttpRequest.
  console.log("Current XHR state = " + xhr.readyState);
});
xhr.send();
```

Valor | Estado | Descripción
--- | --- | ---
0 | UNSENT | El objeto XHR está creado, pero no inicializado todavía mediante el método `.open()`
1 | OPENED | El objeto XHR está inicializado, pero la solicitud no se ha enviado todavía mediante el método `.send()`
2 | HEADERS_RECEIVED | La solicitud se ha enviado al servidor y el HEADER de la respuesta se ha recibido
3 | LOADING | La transferencia de datos está en curso
4 | DONE | La transferencia de datos está terminada, la operación está completa

Basta con probar el estado y recuperar la respuesta cuando la solicitud esté terminada.

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', "https://reqres.in/api/users");
xhr.addEventListener('readystatechange', function() {
  if (xhr.readyState === 4) {
    console.log("Response = " + xhr.response);
  };
});
xhr.send();
```

## La respuesta

Si la solicitud está completa y exitosa, el retorno del servidor (`response`) será accesible a través de la propiedad `.response` del objeto XHR. La propiedad `.status` de XHR nos informa sobre el código HTTP de esta respuesta. Aquí están los más comunes:

- 200: Éxito de la solicitud
- 301: Redirección
- 403: Acceso denegado
- 404: Dirección no encontrada
- 500: Error del servidor

Se podrá entonces probar el estado de la solicitud antes de intentar leer su respuesta.

### Ejemplo

Solicitud a una API que devuelve una lista de personas

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users?page=2');
xhr.addEventListener('readystatechange', function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log("Response = " + xhr.response);
  };
});
xhr.send();
```

Resultado en consola:

```javascript
Response = {"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"}],"ad":{"company":"StatusCode Weekly","url":"http://statuscode.org/","text":"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."}}
```

## Nota: Formato JSON

>El formato de cadena de caracteres recuperada en el ejemplo anterior está en formato JSON, para JavaScript Object Notation. Se trata de una notación que permite representar informaciones estructuradas, pareciéndose mucho a lo que se puede escribir en JavaScript. No vamos a detenernos aquí en detalle sobre este formato, pero sepa que es posible analizar esta cadena de caracteres y transformarla en el valor JavaScript descrito por ésta gracias al objeto JSON y su método `parse()`. Un curso está dedicado a este formato.

```javascript
const json = '{"page": 2, "per_page": 6}';
// Es la representación de un objeto JavaScript en JSON
const object = JSON.parse(json);
console.log(object); // Muestra {page: 2, per_page: 6}
console.log(object.page); // Muestra 2
```

### Ejemplo

Para volver a nuestro ejemplo, aquí está cómo convertir la respuesta recibida en JSON en un objeto JavaScript:

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users?page=2');

xhr.addEventListener('readystatechange', function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.response);
  };
});

xhr.send();
```

## A recordar

1. XMLHttpRequest es el objeto que nos permite crear, enviar y obtener el resultado de una solicitud HTTP.

2. XHR se inicializa con el método `.open()` y la solicitud se lanza con el método `.send()`.

3. Las propiedades `.readyState` y `.status` nos informan respectivamente sobre el estado de avance y sobre el estado de éxito de la solicitud.

4. Una vez completa, el cuerpo de la respuesta es accesible en la propiedad `.response`.

## Complemento

- **[MDN: XMLHttpRequest](https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest)**