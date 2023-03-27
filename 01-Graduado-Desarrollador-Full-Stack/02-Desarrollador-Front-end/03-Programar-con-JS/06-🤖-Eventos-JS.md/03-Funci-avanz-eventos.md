# Funcionamiento avanzado de los eventos

## Objeto evento 

El objeto Event en JavaScript representa un evento que ocurre en una página web, como un clic del ratón, una pulsación de tecla, una carga de página, etc. Este objeto contiene información sobre el evento, como el tipo de evento, el objetivo del evento, las coordenadas del ratón, etc. Recibimos una instancia de este objeto cuando se dispara el oyente de un evento.

### Propiedades del Objeto Event

* `type`: el tipo de evento (ej.: "click", "load", "keydown", etc.).
* `target`: el elemento que disparó el evento.
* `currentTarget`: el elemento que está manejando actualmente el evento.
* `clientX, clientY`: las coordenadas del ratón en relación con la ventana.
* `pageX, pageY`: las coordenadas del ratón en relación con el documento.
* `key`: el código de la tecla que se presionó (para eventos del tipo "keydown").

### Métodos del Objeto Event

* `preventDefault()`: evita el comportamiento predeterminado del evento (ej.: evita que el enlace siga su URL).
* `stopPropagation()`: evita la propagación del evento a los elementos padres del elemento objetivo.
* `stopImmediatePropagation()`: evita la propagación del evento a los elementos padres del elemento objetivo y evita la ejecución de otros manejadores de eventos para este evento en el elemento actual.

### Ejemplo de Uso del Objeto Event

Aquí hay un ejemplo de código JavaScript que escucha el evento `keyup` para detectar cuando el usuario ha presionado la tecla "Enter":

```javascript
const input = document.getElementById('myInput');
input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    console.log('La tecla "Enter" ha sido presionada!');
  }
});
```

En este ejemplo, estamos usando la variable `Event`, que es una instancia de la clase `Event`. A partir de esta variable, podemos recuperar la propiedad `key`, que es la tecla en la que el usuario ha hecho clic.

## Propagar eventos

La propagación de eventos es el mecanismo mediante el cual un evento se difunde a través del árbol DOM, desde el elemento que lo desencadenó hasta la raíz del documento.

### Rol del Agente de Usuario en la Propagación de Eventos

Cuando se produce un evento en un elemento, el agente de usuario (el navegador web) verifica si existe un manejador de eventos para ese evento en ese elemento (el `addEventListener` que podríamos haber creado nosotros mismos). Si es así, llama a este manejador de eventos. Luego, el agente de usuario asciende por el árbol DOM para verificar si otros elementos también tienen manejadores de eventos para este evento. Si es el caso, también llama a estos manejadores de eventos, comenzando con el elemento padre inmediato del elemento de origen, y luego ascendiendo hasta la raíz del documento. Por lo tanto, vamos del elemento más bajo apuntado por el evento hasta el más alto, la raíz.

### Complemento: Fases de la Captura y Propagación de Eventos

La propagación de eventos ocurre en dos fases: la fase de captura y la fase de propagación (o de burbujeo). La fase de captura ocurre primero e implica llamar a los manejadores de eventos de los elementos padres, descendiendo por el árbol DOM. Luego, ocurre la fase de propagación, que implica llamar a los manejadores de eventos de los elementos padres, ascendiendo por el árbol DOM.

### Beneficios y Desafíos de la Propagación de Eventos

La propagación de eventos puede ser útil para manejar eventos de forma más global, agregando un solo manejador de eventos a un elemento padre, en lugar de agregar manejadores de eventos a cada elemento individual que necesita procesar el evento. Esto puede simplificar el código y hacerlo más fácil de mantener. Sin embargo, la propagación de eventos también puede hacer que el código sea más difícil de entender y depurar, ya que puede ser complicado saber cuáles manejadores de eventos se llamarán primero, especialmente en documentos complejos.

## Definición de Captura de Eventos

La captura de eventos es un mecanismo para gestionar eventos que permite manejar un evento a un nivel más alto en la jerarquía del Document Object Model (DOM).

### Propagación Convencional de Eventos

Generalmente, cuando haces clic en un elemento en una página web, el evento de clic se maneja primero por el elemento mismo (por ejemplo, donde hiciste clic), luego por sus padres en la jerarquía del DOM, hasta que el evento se propaga por todo el documento.

### Código HTML para el Ejemplo

```html
<div id="parent">
  <button id="enfant">Cliquez moi</button>
</div>
```

### Código JavaScript para el Ejemplo

```javascript
const parent = document.querySelector('#parent');
const enfant = document.querySelector('#enfant');
parent.addEventListener('click', function() {
  console.log('Parent');
});
enfant.addEventListener('click', function() {
  console.log('Enfant');
});
```

### Comportamiento de Captura de Eventos

Si hacemos clic en el botón, también estamos haciendo clic en el `div`, porque el `div` contiene el botón. Pero, en este caso, si clickeamos en el botón, veremos en la consola primero "Enfant", luego "Parent". Esto es porque el evento manejado primero es el del elemento más bajo en el DOM (aquí el botón). Después de eso, ascendemos en el DOM.

### Uso de Captura de Eventos

Con la captura de eventos, puedes manejar el evento a un nivel más alto en la jerarquía del DOM antes de que se propague al elemento objetivo. Esto significa que puedes interceptar el evento y manejarlo antes de que llegue al elemento que desencadenó el evento. Solo tienes que pasar "true" al tercer argumento del método `addEventListener` (captura) para especificar que se debe utilizar la captura.

### Código HTML y JavaScript con Captura

```html
<div id="parent">
  <button id="enfant">Cliquez moi</button>
</div>
```

```javascript
const parent = document.querySelector('#parent');
const enfant = document.querySelector('#enfant');
parent.addEventListener('click', function() {
  console.log('Parent');
}, true);
enfant.addEventListener('click', function() {
  console.log('Enfant');
});
```

### Comportamiento del Ejemplo con Captura

En este ejemplo, si haces clic en el elemento "enfant" (hijo), el evento será capturado en el nivel del elemento "parent" (padre) antes de ser propagado al elemento "enfant". Por lo tanto, verás "Parent" en la consola antes de ver "Enfant".

### Resumen de Captura de Eventos

En resumen, la captura de eventos permite manejar eventos a un nivel más alto en la jerarquía del DOM, lo que te permite interceptarlos y manejarlos antes de que lleguen al elemento objetivo.

## Detener la propagación de eventos

Como acabamos de ver, cuando se dispara un evento en un elemento, se propaga a los elementos padres de dicho elemento. A esto se le llama propagación de eventos. Puedes detener la propagación de un evento llamando al método `stopPropagation()` en el objeto `Event`.

### Código HTML para Detener la Propagación

```html
<div id="parent">
  <div id="enfant">Cliquez moi</div>
</div>
```

### Código JavaScript para Detener la Propagación

```javascript
const parent = document.querySelector('#parent');
const enfant = document.querySelector('#enfant');
parent.addEventListener('click', function() {
  console.log('Parent');
});
enfant.addEventListener('click', function(event) {
  console.log('Enfant');
  event.stopPropagation();
});
```

### Comportamiento al Detener la Propagación

En este caso, si haces clic en el elemento "enfant", el evento no se propagará al elemento "parent". Por lo tanto, solo verás "Enfant" en la consola.

### Consecuencia de Eliminar `stopPropagation()`

Si eliminamos la línea `event.stopPropagation();`, entonces veremos en la consola primero "Enfant" y luego "Parent".

## Uso de `preventDefault` en Formularios

Supongamos que tienes un formulario de registro en tu sitio web. El formulario incluye campos para el nombre, la dirección de correo electrónico y la contraseña, así como un botón "Inscribirse".

### Validación del Formulario

Cuando un usuario llena el formulario y hace clic en el botón "Inscribirse", quieres realizar una validación del formulario para asegurarte de que los datos sean correctos antes de enviarlos al servidor. Para hacerlo, puedes escuchar el evento de clic del botón "Inscribirse" y evitar la acción predeterminada del formulario usando `event.preventDefault()`.

### Código JavaScript para `preventDefault`

```javascript
const boutonInscription = document.querySelector('#bouton-inscription');
boutonInscription.addEventListener('click', function(event) {
  event.preventDefault();
  // código para validar los datos del formulario
});
```

### Comportamiento al Usar `preventDefault`

Aquí, la función de manejo de eventos será llamada cada vez que el usuario haga clic en el botón "Inscribirse". El método `event.preventDefault()` evitará que se envíe el formulario de forma predeterminada.

### Validación de Datos en Tiempo Real

Puedes añadir más código para validar los datos del formulario. Por ejemplo, puedes comprobar si la dirección de correo electrónico es válida o si la contraseña es lo suficientemente segura. Si los datos son válidos, puedes enviarlos al servidor mediante una solicitud AJAX.

### Eventos para Feedback en Tiempo Real

También puedes usar eventos para proporcionar retroalimentación en tiempo real al usuario mientras completa el formulario. Por ejemplo, puedes añadir un evento de entrada para el campo de correo electrónico, que desencadene una función de manejo de eventos para verificar si la dirección de correo electrónico es válida o no.

### Código JavaScript para Validación de Correo Electrónico

```javascript
const champEmail = document.querySelector('#champ-email');
champEmail.addEventListener('input', function() {
  // Comprobar si la dirección de correo electrónico es válida
});
```

### Comportamiento del Evento de Entrada

En este caso, la función de manejo de eventos se llamará cada vez que el usuario escriba algo en el campo de dirección de correo electrónico. Luego puedes añadir más código para verificar si la dirección de correo electrónico es válida o no y proporcionar feedback en tiempo real al usuario, por ejemplo, cambiando el color del campo en función de su validez.