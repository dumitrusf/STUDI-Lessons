# Los Eventos

## Definicion de un Evento

Los eventos son acciones que ocurren en una página web, como el clic de un botón o el envío de un formulario. En JavaScript, podemos detectar estos eventos y responder a ellos ejecutando una función. Los eventos pueden ser desencadenados por el usuario, el navegador o el propio código JavaScript.

### Tipos de Eventos en JavaScript

Existen numerosos tipos de eventos en JavaScript, tales como el clic, la carga de la página, el envío de un formulario, el movimiento del ratón, etc. Cada tipo de evento está asociado a un objeto `Event` que contiene información sobre el evento, como el objetivo del evento (el elemento HTML que desencadenó el evento), el tipo de evento y los datos específicos del evento.

### Eventos Continuos y Escuchadores de Eventos

Los eventos ocurren constantemente en una página web, pero si queremos ejecutar código después de un evento, debemos "escuchar un evento".

### Utilización de addEventListener

Para escuchar un evento en JavaScript, es posible usar el método `addEventListener()`. Este método toma 2 argumentos: el tipo de evento a escuchar y la función a ejecutar cuando se produce el evento. Aquí hay un ejemplo de código que escucha el clic de un botón y ejecuta una función cuando ocurre el clic:

```javascript
// CTRL+C para copiar, CTRL+V para pegar
const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Botón clickeado');
});
```

### Ejemplo de addEventListener y querySelector

En este ejemplo, el método `querySelector()` se usa para seleccionar el primer elemento de tipo "button" en el documento HTML. Luego, el método `addEventListener()` se utiliza para escuchar el clic de este botón y ejecutar una función anónima que muestra una alerta con el texto "Botón clickeado".

## Eliminar un controlador de eventos

El método `removeEventListener()` se utiliza para eliminar un controlador de eventos de un elemento. Este método también toma 2 argumentos: el tipo de evento y una función del controlador de eventos.

```javascript
// CTRL+C para copiar, CTRL+V para pegar
const button = document.querySelector('button');
function handleClick(event) {
  console.log('Botón clickeado');
}
button.addEventListener('click', handleClick);
// Elimina el controlador de eventos handleClick
button.removeEventListener('click', handleClick);
```

### Comportamiento tras Eliminar el Controlador

En este código, si se hace clic en el botón, el método `handleClick` no se llamará, ya que `removeEventListener` cancela el `addEventListener`.

## Diferentes eventos

| Evento   | Descripción                                                           |
|-------------------|--------------------------------------------------------------------------------|
| click             | Se desencadena cuando el usuario hace clic en un elemento de la página.        |
| keyup             | Se desencadena cuando el usuario suelta una tecla del teclado.                 |
| submit            | Se desencadena cuando el usuario envía un formulario.                          |
| load              | Se desencadena cuando la página web ha terminado de cargar.                    |
| mouseover         | Se desencadena cuando el cursor del ratón se mueve sobre un elemento.          |
| mouseout          | Se desencadena cuando el cursor del ratón abandona un elemento.                |
| scroll            | Se desencadena cuando el usuario desplaza la página.                           |
| resize            | Se desencadena cuando la ventana del navegador cambia de tamaño.               |
| contextmenu       | Se desencadena cuando el usuario hace un clic derecho en un elemento.          |
| mousedown         | Se desencadena cuando el usuario presiona un botón del ratón sobre un elemento. |
| mouseup           | Se desencadena cuando el usuario suelta un botón del ratón sobre un elemento.   |
| touchstart        | Se desencadena cuando el usuario toca la pantalla táctil.                      |
| touchend          | Se desencadena cuando el usuario deja de tocar la pantalla táctil.             |
| touchmove         | Se desencadena cuando el usuario mueve su dedo sobre la pantalla táctil.       |
| error             | Se desencadena cuando ocurre un error durante la carga de la página o recurso.  |
| change            | Se desencadena cuando se modifica un elemento de formulario (ejemplo: input).   |

---

Esta lista no es exhaustiva, pero proporciona una idea de los eventos más comúnmente utilizados en JavaScript. Los desarrolladores también pueden crear sus propios eventos personalizados para satisfacer las necesidades específicas de sus aplicaciones.

## Crear nuestros Propios eventos personalizados

Además de los eventos incorporados en JavaScript, también es posible crear eventos personalizados para satisfacer las necesidades específicas de tu aplicación. Los eventos personalizados pueden ser activados en cualquier momento del código, y se les pueden asignar oyentes de eventos de la misma manera que a los eventos estándar.

Para crear un evento personalizado en JavaScript, debes usar el objeto `CustomEvent`. A continuación se muestra un ejemplo de código que crea un evento personalizado llamado `miEvento`:

```javascript
// Creación del evento personalizado
const miEvento = new CustomEvent('miEvento');
// Añadir un oyente de evento para el evento personalizado
document.addEventListener('miEvento', () => {
  console.log('El evento personalizado se ha activado!');
});
// Activación del evento personalizado
document.dispatchEvent(miEvento);
```

En este ejemplo, hemos creado un objeto `CustomEvent` con el nombre `miEvento`. Luego, hemos añadido un oyente de evento para este evento personalizado utilizando el método `addEventListener` del objeto `document`. Finalmente, hemos activado el evento personalizado utilizando el método `dispatchEvent` del objeto `document`.

### Complemento: Pasar Datos con Eventos Personalizados

También es posible pasar datos junto con el evento personalizado utilizando el objeto `CustomEvent`. A continuación se muestra un ejemplo de código que crea un evento personalizado llamado `miEvento` que incluye datos:

```javascript
// Creación del evento personalizado con datos
const miEvento = new CustomEvent('miEvento', {
  detail: {
    message: '¡Hola a todos!'
  }
});
// Añadir un oyente de evento para el evento personalizado con datos
document.addEventListener('miEvento', (event) => {
  console.log(`Mensaje recibido: ${event.detail.message}`);
});
// Activación del evento personalizado con datos
document.dispatchEvent(miEvento);
```

En este ejemplo, hemos creado un objeto `CustomEvent` llamado `miEvento` y hemos utilizado la opción `detail` para incluir datos. Luego, hemos añadido un oyente de evento para este evento personalizado usando el método `addEventListener` del objeto `document`. Finalmente, hemos activado el evento personalizado usando el método `dispatchEvent` del objeto `document`. Por lo tanto, recibirás el mensaje "Mensaje recibido: ¡Hola a todos!" en la consola.

### Advertencia!: Uso de Atributos de Evento en HTML

Utilizar el atributo "onclick" (o cualquier otro atributo de evento) directamente en las etiquetas HTML se considera una técnica obsoleta en JavaScript. Esto se debe a varias razones:

- El atributo "onclick" mezcla la lógica de presentación (HTML) con la lógica de comportamiento (JavaScript), lo que puede hacer que el código sea difícil de mantener y depurar.
  
- El uso del atributo "onclick" puede llevar a problemas de seguridad, como la inyección de código malicioso.
  
- Agregar eventos directamente en el código HTML limita la flexibilidad y reutilización del código.

Por lo tanto, en lugar de usar el atributo "onclick" en las etiquetas HTML, es mejor usar oyentes de eventos de JavaScript para gestionar los eventos. Los oyentes de eventos permiten una separación más clara entre la lógica de presentación y la lógica de comportamiento, haciendo que el código sea más fácil de mantener, depurar y reutilizar.