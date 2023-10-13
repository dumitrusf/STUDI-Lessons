# Bases de JQuery

## Intro a JQuery

jQuery es una biblioteca JavaScript popular que facilita el desarrollo web en JavaScript. Fue creada en 2006 por John Resig y actualmente es utilizada por muchos desarrolladores web en todo el mundo.

La funcionalidad principal de jQuery es la selección de elementos HTML utilizando selectores CSS y la manipulación de estos elementos mediante métodos JavaScript. jQuery también proporciona características para gestionar eventos, agregar efectos y animaciones, e interactuar con servidores web mediante solicitudes AJAX.

### ¿Está muerto jQuery?
jQuery fue la biblioteca JavaScript más popular del mundo durante gran parte de la década de 2010. Sin embargo, hoy en día, jQuery ya no es tan utilizado como antes, y hay varias razones para esto:

* La mayoría de las características de jQuery se han integrado en los navegadores web modernos, que ahora tienen APIs nativas para la manipulación del DOM, la interacción con eventos, animaciones, efectos, etc. Esto significa que muchas de las funciones que antes proporcionaba jQuery ahora están integradas en los navegadores, haciendo que jQuery sea menos necesario.

* Los frameworks JavaScript modernos como React, Vue.js y Angular tienen sus propias bibliotecas para la manipulación del DOM y la gestión de eventos, que son más eficientes y están más optimizadas para renderizar aplicaciones web complejas.

* jQuery es una biblioteca relativamente pesada, lo que significa que incluirla en tu aplicación puede añadir una carga innecesaria en términos de tamaño de archivo y tiempo de carga.

No obstante, esto no significa que jQuery sea completamente obsoleto o que ya no tenga utilidad. Todavía se usa en muchos proyectos web, especialmente en sitios web más antiguos que se crearon antes del surgimiento de los frameworks JavaScript modernos. Además, los desarrolladores web todavía pueden usar jQuery si lo desean y si consideran que es más adecuado para sus necesidades. Aunque raramente se utiliza en nuevos proyectos, sigue siendo muy relevante y, por lo tanto, una habilidad fundamental en el desarrollo web.

🤖🤖

### Integrar JQuery

Integrar JQuery es igual a incluir el archivo JS de JQuery, al igual que podrías incluir un archivo JS que has codificado tú mismo. Tienes dos opciones:

1. **Descargar la biblioteca jQuery desde el sitio web oficial de jQuery**

    Aquí está el enlace para descargar JQuery. Puedes descargar la versión 3.6.4 a través del enlace 'Download the compressed, production jQuery 3.6.4': jquery

    ```markdown
    <!-- Incluir la biblioteca jQuery desde las fuentes que he descargado en una carpeta lib -->
    <script src="/lib/jquery-3.6.0.min.js"></script>
    ```

2. **Usar una URL hacia la biblioteca alojada en un CDN (Content Delivery Network)**

    ```markdown
    <!-- Incluir la biblioteca jQuery desde un CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    ```


**[ver video inclure jquery](https://ressources.studi.fr/contenus/opale/e50f596e9066613157f7c052ab7e85b78a7f84bf/co/integrer-jquery.html)**

🤖🤖

## Selectores de JQuery

### Uso Básico de Selectores
jQuery ofrece una sintaxis simple para seleccionar elementos HTML utilizando selectores CSS. Por ejemplo, para seleccionar todos los elementos de párrafo en una página, puedes usar el selector `$('p')`.

También puedes combinar selectores para seleccionar elementos más específicos. Por ejemplo, para seleccionar todos los elementos de párrafo que tienen la clase "highlight", puedes usar el selector `$('p.highlight')`.

Una vez que has seleccionado los elementos HTML, puedes usar los métodos de jQuery para manipular estos elementos.

### Ejemplo de Código HTML y JavaScript
Aquí está el código que vamos a agregar al archivo `index.html`:

```markdown
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Presentación de una biblioteca (jQuery)</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <p id="mi-id">Soy el párrafo que contiene el ID #mi-id</p>
  <p class="mi-clase">Soy el párrafo que contiene la clase .mi-clase</p>
  <div>Soy el div</div>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

En cuanto al código JavaScript, escribiremos el siguiente código que mostrará en nuestra página las frases:

```markdown
// Seleccionar un elemento por su ID
$('#mi-id').html();
// Seleccionar un elemento por su clase
$('.mi-clase').html();
// Seleccionar un elemento por su tipo
$('div').html();
```

### Selectores Basados en Posición del DOM
También puedes seleccionar elementos HTML según su posición en el DOM, como los elementos hijos, los elementos hermanos, etc.

```markdown
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Presentación de una biblioteca (jQuery)</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <div> 
    Soy el primer hijo del body
    <div>Soy un hijo</div>
  </div>
  
  <div>
    Soy el segundo hijo del body
  </div>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

```markdown
// Seleccionar los hermanos de un elemento
$('div').siblings().css({
  "border": "2px solid naranja"
});
// Seleccionar los hijos de un elemento
$('div').children().css({
  "border": "4px solid rosa"
});
```

En este ejemplo, los `div` del elemento padre "Body" estarán bordeados de naranja, mientras que los hijos de los `div` estarán bordeados de rosa.

🤖🤖

## Manipulación de contenido HTML `.html()`

jQuery ofrece múltiples métodos para manipular el contenido HTML de un elemento seleccionado. Por ejemplo, puedes utilizar el método `.html()` para recuperar o establecer el contenido HTML de un elemento.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Presentación de una biblioteca (jquery)</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <div>Contenido HTML</div>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// Recuperar el contenido HTML de un elemento
$('div').html();
// Establecer el contenido HTML de un elemento
$('div').html('<p>Nuevo contenido HTML</p>');
```

### Uso de `.text()` para contenido de texto

También puedes utilizar el método `.text()` para recuperar o establecer el contenido de texto de un elemento.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Presentación de una biblioteca (jquery)</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <div>Contenido texto</div>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// Recuperar el contenido texto de un elemento
$('div').text();
// Establecer el contenido texto de un elemento
$('div').text('Nuevo contenido texto');
```

### Manipulación de valores de formularios con `.val()`

Por último, el método `.val()` se puede utilizar para recuperar o establecer el valor de un elemento de formulario, como un campo de entrada de texto.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Presentación de una biblioteca (jquery)</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <input type="text" id="monInput" />
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// Recuperar el valor de un campo de entrada de texto
$('#monInput').val();
// Establecer el valor de un campo de entrada de texto
$('#monInput').val('Nuevo valor');
```

**[Ver video modificar contenido html](https://ressources.studi.fr/contenus/opale/e50f596e9066613157f7c052ab7e85b78a7f84bf/co/manipulation-contenu-html.html)**

### Uso de `.attr()` y `.removeAttr()`

El método `.attr()` te permitirá recuperar o establecer el valor de un atributo. El método `.removeAttr()`, por su parte, te permitirá eliminar un atributo.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Presentación de una biblioteca (jquery)</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <input type="text"/>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// Recuperar el valor del atributo href de un enlace
$('a').attr('href');
// Establecer el valor del atributo href de un enlace
$('a').attr('href', 'https://www.example.com');
// Eliminar el atributo title de un enlace
$('a').removeAttr('title');
```

### Métodos para manejar clases CSS `.addClass()` y `.removeClass()`

También existen métodos para agregar y quitar clases CSS de elementos seleccionados. Puedes utilizar el método `.addClass()` para agregar una clase a un elemento, y el método `.removeClass()` para quitar una clase de un elemento.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Presentación de una biblioteca (jquery)</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <input type="text"/>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// Añadir la clase 'active' a un elemento
$('div').addClass('active');
// Quitar la clase 'active' de un elemento
$('div').removeClass('active');
```