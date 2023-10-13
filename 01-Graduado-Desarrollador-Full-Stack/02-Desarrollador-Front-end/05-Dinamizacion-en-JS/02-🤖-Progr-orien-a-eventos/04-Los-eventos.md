# Los eventos

## Objetivos

- Comprender el objeto Event
- Conocer los tipos de eventos existentes

## Contexto

Hemos visto que un evento se fija en un elemento de DOM y escucha una acción del usuario bien precisa para ejecutar código. Vamos a ver ahora los diferentes tipos de eventos que nos ofrece JavaScript y cómo usarlos.

## Complemento

Podemos consultar el conjunto de propiedades y métodos en la [documentación oficial](https://developer.mozilla.org/es/docs/Web/API/Event).

## Los tipos de eventos

Los eventos globales no están directamente relacionados con una interacción del usuario, sino más bien con una acción de script. El evento load, por ejemplo, se dispara automáticamente por el script cuando todas las recursos de la página están cargados (imágenes, hoja de estilo CSS, script JavaScript, etc.).

### Ejemplo:

```javascript
window.addEventListener("load", function(event) {
  console.log("Los recursos de la página han sido cargados!");
});
```

Complemento:

Aquí hay algunos de estos eventos globales:

- offline: se dispara automáticamente cuando el navegador ha perdido su conexión a Internet. Puede servir para avisar al usuario o realizar una acción de almacenamiento local, por ejemplo.
- abort: se dispara cuando la carga de un recurso ha sido interrumpida por el usuario. Puede servir para indicarle qué recurso falta y que la página web puede comportarse de manera inesperada.
- ended: se dispara al final de la reproducción de un medio o cuando la fuente del medio no permite el envío de datos. Puede servir para indicar al usuario la razón del paro del medio.
- success: se dispara cuando una petición HTTP se ha realizado correctamente. Puede servir para mostrar un mensaje al usuario para indicarle el resultado de la petición.

Los eventos ratón permiten escuchar un conjunto de interacciones que el usuario puede hacer con su ratón. Como hemos visto anteriormente, el evento click se dispara al momento de hacer clic en un elemento del DOM.

### Ejemplo:

```javascript
const button = document.getElementById('button');

function evento() {
  alert('Has hecho clic en el botón');
}

button.addEventListener('click', evento);
```

Complemento:

Aquí hay algunos de estos eventos ratón:

- **`click:`** se dispara cuando el usuario hace clic en un elemento. Puede servir para pedir una confirmación de la acción a realizar (ejemplo: ¿Estás seguro de querer eliminar este ítem?).

- **`mouseenter:`** se dispara cuando el usuario apunta el ratón sobre un elemento.

- **`mouseleave:`** se dispara cuando el usuario mueve el puntero del ratón fuera de un elemento.

- **`mouseup:`** se dispara cuando el usuario suelta un botón del ratón cuando está sobre un elemento.

## Atención: Malas prácticas

Evita lo más posible el uso de los eventos mouseover y mouseout. Estos eventos serán recibidos por todos los descendientes del elemento al que están vinculados. Por lo tanto, se dispararán tantas veces como haya descendientes. Usaremos mejor mouseenter o mouseleave que, ellos, solo se dispararán para el elemento al que están asociados.

Los eventos teclado están relacionados con cualquier uso del teclado por parte del usuario. Por ejemplo, con el evento keydown, el código siguiente se disparará cuando la tecla del teclado esté presionada.

### Ejemplo:

```javascript
const key = document.getElementById('key');

function keyboard() {
  alert('Acabas de pulsar una tecla del teclado');
}

key.addEventListener('keydown', keyboard);
```

## Complemento:

Aquí hay algunos de estos eventos:

- **`keyup:`** este evento se dispara cuando el usuario suelta una tecla del teclado. Puede servir para controlar una entrada del usuario en curso.

- **`keydown:`** este evento se dispara cuando el usuario mantiene presionada una tecla del teclado. Puede servir para prohibir el uso de una tecla en tiempo real.

## Atención: Malas prácticas

El uso del evento keypress es desaconsejable, porque no funciona para todas las teclas del teclado (Alt, Ctrl, Shift, por ejemplo). Está indicado como obsoleto en la documentación y pronto no será soportado por los navegadores. Prefiere el uso de los eventos keydown o keyup.

Los eventos de formularios están, por definición, relacionados con cualquier interacción con un elemento de formulario HTML. El evento submit es, por ejemplo, disparado cuando un elemento `<form>` es enviado, ya sea al hacer clic en un elemento `<button>` o `<submit>`, o incluso por una acción de script.

### Ejemplo:

```javascript
const form = document.getElementById('form');

function form() {
  alert('Estás a punto de enviar el formulario');
}

form.addEventListener('submit', form);
```

## El objeto Event

El objeto Event representa un evento JavaScript. Contiene un conjunto de propiedades y métodos comunes a todos los eventos. Podremos manipularlos a nuestro gusto para modificar las características de nuestro evento.

Cuando el evento ocurre, el navegador web transmite un objeto event al gestor de eventos:

```javascript
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(event) {
  console.log(event.type); //devuelve ‘click’
});
```

Tengamos en cuenta que el objeto event solo es accesible dentro del gestor de eventos. Una vez que todos los gestores de eventos han sido ejecutados, el objeto evento se destruye automáticamente.

Aquí hay algunas de las más usadas:

### Propiedades:

- Event.target: objetivo del evento
- Event.defaultPrevented: indica si el comportamiento por defecto de la interacción debe ser anulado (por ejemplo, la validación de un formulario, la redirección a otra página para un enlace)
- Event.bubbles: indica el sentido de propagación del evento

### Métodos:

- Event.createEvent(): crea un nuevo evento.
- Event.preventDefault(): anula el comportamiento por defecto del evento.
- Event.stopPropagation(): detiene la propagación del evento.

### Ejemplo:

Para impedir el comportamiento por defecto de un evento, usas el método preventDefault(). Por ejemplo, cuando haces clic en un enlace, el navegador te redirige a la URL especificada en el atributo href:

```html
<a href="https://www.google.com/">Google</a>
```

Sin embargo, puedes impedir este comportamiento usando el método preventDefault() del objeto event.

```javascript
let link = document.querySelector('a');
link.addEventListener('click', function(event) {
  console.log('clicked');
  event.preventDefault();
});
```

## A recordar

Como para la manipulación de nuestra página web, podremos jugar con nuestros eventos usando las propiedades y métodos del objeto Event.

### Propiedades

- event.target: representa el elemento que ha disparado el evento. Permite manipular el elemento en cuestión.
- event.bubbles: permite definir si un evento se propaga o no. Podemos usarlo para autorizar la propagación de un evento.

### Métodos

- event.stopPropagation(): permite interrumpir la propagación del evento a través del DOM. Puede servir para evitar disparar eventos varias veces durante la ejecución.
- event.preventDefault(): permite anular la acción por defecto de un evento. Puede servir, por ejemplo, para anular el efecto del clic sobre un enlace.