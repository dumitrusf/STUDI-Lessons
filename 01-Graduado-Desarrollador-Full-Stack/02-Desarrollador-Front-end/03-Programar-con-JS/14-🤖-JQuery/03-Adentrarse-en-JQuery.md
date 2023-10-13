# Profundizar en JQuery

## Gestion de eventos

### Manejo de Eventos con `.on()`

Gestión de eventos con jQuery es fácil y eficiente. Podemos usar el método `.on()` para asignar un manejador de eventos a un elemento específico.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Presentación de una biblioteca (jQuery)</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<button>Haz clic en mí</button>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// Asignar un manejador de eventos al clic del ratón en un botón
$('button').on('click', function() {
  alert('Se ha hecho clic en el botón');
});
```

### Uso de Atajos de Eventos con `.hover()`

También existen métodos abreviados para eventos comunes, como `.click()`, `.hover()`, `.keypress()`, etc.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Presentación de una biblioteca (jQuery)</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<a href="google.es">Pásame por encima mientras inspeccionas mi elemento</a>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// Asignar un manejador de eventos al pasar el ratón sobre un elemento
$('a').hover(function() {
  // Al pasar el ratón, se añadirá la clase 'hovered' al elemento
  $(this).addClass('hovered');
}, function() {
  // Al salir el ratón, se eliminará la clase 'hovered' del elemento
  $(this).removeClass('hovered');
});
```

##  Efectos y Animaciones en jQuery

jQuery ofrece varios métodos para añadir efectos y animaciones a tu página web. Estos incluyen ocultar y mostrar elementos, cambiar sus dimensiones, entre otros.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Presentación de una biblioteca (jQuery)</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<p>Hola a todos</p>
<div>Soy un div</div>
<button>Botón</button>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// Ocultar un elemento con un efecto de desvanecimiento
$('p').fadeOut();
// Mostrar un elemento con un efecto de desvanecimiento
$('div').fadeIn();
// Cambiar la altura de un elemento con una animación
$('button').animate({ height: '200px' });
```

### Lista de Métodos de Animación en jQuery

A continuación se muestra una lista de métodos de animación que puedes utilizar con jQuery:

- `.animate()`: Permite animar propiedades CSS como posición, tamaño, color, opacidad, etc.
- `.fadeIn()`: Hace que un elemento aparezca gradualmente, incrementando su opacidad.
- `.fadeOut()`: Hace que un elemento desaparezca gradualmente, disminuyendo su opacidad.
- `.slideDown()`: Hace que un elemento aparezca al deslizarse hacia abajo.
- `.slideUp()`: Hace que un elemento desaparezca al deslizarse hacia arriba.
- `.slideToggle()`: Alterna entre `slideDown()` y `slideUp()`.
- `.show()`: Muestra un elemento haciéndolo visible.
- `.hide()`: Oculta un elemento haciéndolo invisible.
- `.toggle()`: Alterna entre `show()` y `hide()`.
- `.stop()`: Detiene una animación en curso en un elemento.

🤖🤖

## JQuery & AJAX

### JQuery y AJAX
#### Introducción a las Peticiones AJAX
Las peticiones AJAX (Asynchronous JavaScript and XML) permiten comunicar con un servidor web en segundo plano, sin tener que recargar toda la página. Esto permite cargar contenido dinámico y mejorar la experiencia del usuario al evitar recargas de página innecesarias. La librería jQuery ofrece una interfaz simplificada para realizar peticiones AJAX de forma asíncrona. En este curso, veremos cómo usar jQuery para hacer peticiones AJAX y actualizar dinámicamente el contenido de nuestra página.

#### Utilizando el Método $.ajax()
El método `$.ajax()` se puede usar para recuperar datos de un servidor. Aquí tienes un ejemplo de código que realiza una petición GET para obtener datos en formato JSON:

```javascript
$.ajax({
  url: "https://miservidor.com/api/data",
  dataType: "json",
  success: function(data) {
    // El resultado de la petición se guarda en la variable data
    console.log(data);
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.log(textStatus, errorThrown);
  }
});
```

Este código usa el método "ajax" de jQuery, que toma un objeto de configuración como parámetro, construido de la siguiente manera:

- `"url"`: Es la URL desde donde se deben recuperar los datos.
- `"dataType"`: Es el tipo de datos que se espera recibir en respuesta. En este caso, está definido como "json" porque los datos están en ese formato.
- `"success"`: Es una función de devolución de llamada (callback) que se invoca cuando la petición AJAX es exitosa y devuelve datos. La respuesta de la petición se pasa a esta función como parámetro (aquí, la respuesta se guarda en la variable "data").
- `"error"`: Es una función de devolución de llamada que se invoca cuando la petición AJAX falla. Los detalles del error se pasan a esta función como parámetros. Los tres parámetros son:

  - `"jqXHR"`: Es un objeto que representa la petición AJAX fallida. Se puede usar para obtener información sobre la petición, como el estado de la respuesta HTTP y el mensaje de error devuelto por el servidor.
  - `"textStatus"`: Es una cadena de texto que describe el tipo de error que ha ocurrido. Los valores posibles son "timeout", "error", "abort" y "parsererror".
  - `"errorThrown"`: Es una cadena de texto que contiene un mensaje de error detallado. Este valor depende del tipo de error que ha ocurrido.

### Complemento: Callbacks con $.Ajax
El método `$.Ajax()` de jQuery también permite usar callbacks para manejar los resultados de la petición. Aquí tienes un ejemplo de código que utiliza los callbacks `beforeSend`, `complete`, `success` y `error`:

```javascript
$.Ajax({
  url: "https://ejemplo.com/api/data",
  beforeSend: function() {
    console.log("Antes del envío de la petición");
  },
  complete: function() {
    console.log("Después del fin de la petición");
  },
  success: function(response) {
    console.log("La petición ha tenido éxito:", response);
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.log("La petición ha fallado:", textStatus, errorThrown);
  }
});
```

Es importante señalar que esta manera de realizar peticiones Ajax es muy común. Si trabajas profesionalmente con jQuery, verás este tipo de peticiones.