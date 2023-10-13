# Introducción a la programación orientada a eventos en JavaScript

## Objetivos

- Comprender la mecánica de un evento en JavaScript
- Ponerse en situación

## Método

En JavaScript, para realizar programación orientada a eventos, tendremos que manipular diferentes objetos, elementos, eventos y diferentes funciones. Estas nociones deberán ser familiares para nosotros para la implementación de interacciones entre el usuario y nuestra aplicación. Hablaremos entonces de interfaz web reactiva.

Un evento es una acción que ocurre en el navegador web, que este te devuelve para que puedas responder a él. Por ejemplo, cuando los usuarios hacen clic en un botón de una página web, quizás quieras responder a ese evento de "clic" mostrando una caja de diálogo. Cada evento "clic" va a activar una función que muestra una caja de diálogo. El vínculo entre el evento y la función activada que se hace mediante un gestor de eventos también se llama oyente de eventos (event listener). Escucha el evento y se ejecuta cuando este ocurre.

Supongamos que tienes el siguiente código:

```javascript
let btn = document.querySelector('#btn');
function display() {
  alert('Soy una caja de diálogo que se abre tras un clic');
}
btn.addEventListener('click', display);
```

### Funcionamiento:

- Primera línea: seleccionamos el elemento del DOM que queremos escuchar, el que va a ser el origen del evento, en nuestro caso el botón.
- Luego creamos una función llamada display, usando un método alert() para mostrar una caja de diálogo.
- Finalmente vinculamos nuestro elemento del DOM y la función con el gestor de eventos addEventListener(), este gestor toma aquí 2 parámetros, el primero el tipo de evento sobre el que debe activarse, aquí un clic y el segundo parámetro, el nombre de la función que activa display.

También funciona con una función anónima.

```javascript
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
  alert('Soy una caja de diálogo que se abre tras un clic');
});
```

## A recordar

En JavaScript la programación orientada a eventos está compuesta como mínimo de tres elementos:

- La selección de un elemento del DOM
- Una función
- Un gestor de eventos para vincular el elemento del DOM y la función a un evento.