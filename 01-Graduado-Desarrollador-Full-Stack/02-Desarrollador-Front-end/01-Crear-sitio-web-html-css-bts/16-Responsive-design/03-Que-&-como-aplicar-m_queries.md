# **¿Qué son las media queries y cómo se aplican?**

<br>

<br>

---

## **Técnica de responsive design**

---

<br>

Es importante saber que las media queries se introdujeron por primera vez en 2009 en la especificación CSS3 del Consorcio Web (W3C).

Esta especificación trajo muchas nuevas características al lenguaje CSS, incluyendo las media queries que permiten crear diseños adaptables y responsivos.

Fueron recibidas con entusiasmo por la comunidad de desarrolladores web, que había estado buscando formas de crear diseños que se adapten a diferentes dispositivos.

Hoy en día, las media queries son ampliamente utilizadas en el diseño de sitios web responsivos.

Son un componente clave del diseño web moderno, permitiendo que los sitios web sean accesibles y funcionales en una variedad de dispositivos.

<br>

---

---

<br>
<br>

---

## **Que es la W3C?**

---

<br>

```
El W3C o Consorcio World Wide Web es una organización internacional sin fines de lucro.

Su función es definir los estándares técnicos relacionados con la web. Además, establecen las mismas reglas para todos los desarrolladores del mundo.

La idea también es fomentar el acceso a la web para la mayor cantidad de personas posible.
```

<br>

---

---

<br>
<br>

---

## **Las media queries**

---

<br>

Las media queries, también conocidas como "solicitudes de multimedia", son herramientas del lenguaje CSS que permiten definir estilos diferentes para diferentes dispositivos, en función del tamaño de la pantalla, sus características, la orientación del dispositivo o la densidad de píxeles.

El uso de media queries permite a los desarrolladores web crear diseños responsivos que se adaptan automáticamente al tamaño y la resolución de la pantalla utilizada por el usuario (móvil, tableta, ordenador portátil, pantalla grande, etc.).

Se utilizan para aplicar algunos estilos de forma condicional con CSS gracias a las reglas "@media" y "@import", lo que permite dirigirse a ciertos medios para elementos `<style>`, `<link>`, `<source>` y otros elementos HTML, mediante el atributo `media=`.

También permiten probar y supervisar el estado de un medio gracias a los métodos `window.matchMedia()` y `MediaQueriesList.addListener()`.

Le invitamos a leer la documentación de MDN para obtener más información sobre este tema, ya que no se tratará en el curso.

Fuente: **[Media Queries - CSS: hojas de estilo en cascada | MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Media_Queries/Using_media_queries)**

<br>

---

**EJEMPLO**

Por ejemplo, podemos usar las solicitudes de medias para aplicar una hoja de estilo a pantallas más grandes.

Podemos definir las consultas de medios en archivos CSS utilizando la siguiente sintaxis:

```css

/* aquí 👇 en donde dice type pondríamos screen o el dispositivo debido, como screen */

@media type and (min-width: 600px) {
  /* regla de estilos para las pantallas de 600 pixeles o mas*/
}
```

El parámetro "type" se puede utilizar para especificar el tipo de medio, como "screen" (pantalla), "print" (impresión) o "speech" (voz sintetizada).

El parámetro "característica" se puede utilizar para definir condiciones como la anchura máxima de la pantalla ("max-width"), la resolución de la pantalla ("min-resolución"), o la orientación del dispositivo ("orientación: portrait" o "orientación: landscape").

Las características de las medias describen ciertas características específicas del agente de usuario, el dispositivo de visualización o el entorno.

---

<br>

**He aquí una tabla recapitulativo de las características de las medias mas usadas, junto a un corto resumido**

<table>

  <thead>
    <tr>
      <th>Nombre</th>
      <th>Resumen</th>
      <th>Nota</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>width</td>
      <td>La anchura de visualización del viewport</td>
      <td></td>
    </tr>
    <tr>
      <td>height</td>
      <td>La altura de la zona de visualización</td>
      <td>jean.michel@mail.fr</td>
    </tr>
    <tr>
      <td>aspect-ratio</td>
      <td>La relación anchura/altura de la zona de visualización</td>
      <td>jean.michel@mail.fr</td>
    </tr>
    <tr>
      <td>orientation</td>
      <td>La orientación de la zona de visualización</td>
      <td>jean.michel@mail.fr</td>
    </tr>
    <tr>
      <td>resolution</td>
      <td>La densidad de píxeles para la visualización del dispositivo</td>
      <td></td>
    </tr>
    <tr>
      <td>scan</td>
      <td>El proceso de escaneado de la resolución del dispositivo</td>
      <td></td>
    </tr>
    <tr>
      <td>grid</td>
      <td>El tipo de pantalla del dispositivo: ¿matricial o de cuadrícula?</td>
      <td></td>
    </tr>
    <tr>
      <td>update</td>
      <td>La frecuencia de modificación del contenido por parte del dispositivo de visualización.</td>
      <td>Añadido con el nivel 4 del módulo de especificación Media Queries</td>
    </tr>
    <tr>
      <td>overflow-block</td>
      <td>La forma en que el dispositivo de visualización maneja el contenido que excede el área de visualización a lo largo del eje de bloque.</td>
      <td>Añadido con el nivel 4 del módulo de especificación Media Queries.</td>
    </tr>
    <tr>
      <td>overflow-inline</td>
      <td>La capacidad de desplazar (scroll) el contenido que excede el área de visualización a lo largo del eje en línea.</td>
      <td>Añadido con el nivel 4 del módulo de especificación Media Queries.</td>
    </tr>
    <tr>
      <td>color</td>
      <td>El número de bits para cada componente de color del dispositivo de visualización (o 0 si el dispositivo no admite colores).</td>
      <td></td>
    </tr>
    <tr>
      <td>color-gamut</td>
      <td>Un rango aproximado de colores compatibles por el agente de usuario y el dispositivo de visualización.</td>
      <td>Añadido con el nivel 4 del módulo de especificación Media Queries.</td>
    </tr>
    <tr>
      <td>color-index</td>
      <td>El número de elementos en la tabla de colores del dispositivo de visualización (o 0 si el dispositivo no tiene dicha tabla).</td>
      <td></td>
    </tr>
    <tr>
      <td>display-mode</td>
      <td>El modo de visualización de la aplicación, como se indica por la propiedad "display" del manifiesto.</td>
      <td>Definido en la especificación para los manifiestos de aplicaciones web.</td>
    </tr>
    <tr>
      <td>monochrome</td>
      <td>El número de bits por píxel para el marco de búfer monocromático del dispositivo de visualización o 0 si el dispositivo no es monocromático</td>
      <td></td>
    </tr>
    <tr>
      <td>prefers-contrast</td>
      <td>El usuario prefiere que el contraste aumente o se reduzca entre los colores cercanos.</td>
      <td>Agregado con el nivel 5 del módulo de especificación Media Queries.</td>
    </tr>
    <tr>
      <td>prefers-color-scheme</td>
      <td>El usuario prefiere usar un tema claro o un tema oscuro</td>
      <td>Agregado con el nivel 5 del módulo de especificación Media Queries.</td>
    </tr>
    <tr>
      <td>forced-colors</td>
      <td>Detecta si el agente de usuarios restringe la paleta de colores.</td>
      <td>Agregado con el nivel 5 del módulo de especificación Media Queries.</td>
    </tr>
    <tr>
      <td>scripting</td>
      <td>Jean Michel</td>
      <td>jean.michel@mail.fr</td>
    </tr>
    <tr>
      <td>device-width</td>
      <td>El ancho de la superficie de representación para el dispositivo de visualización.</td>
      <td>Obsoleta en el nivel 4 del módulo de especificación Media Queries.</td>
    </tr>
    <tr>
      <td>device-height</td>
      <td>La altura de la superficie de representación para el dispositivo de visualización.</td>
      <td>Obsoleta en el nivel 4 del módulo de especificación Media Queries.</td>
    </tr>
    <tr>
      <td>device-aspect-ratio</td>
      <td>La relación de aspecto (ancho/alto) de la superficie de representación para el dispositivo de visualización.</td>
      <td>Obsoleta en el nivel 4 del módulo de especificación Media Queries.</td>
    </tr>

  </tbody>
</table>

---

<br>

**Fuente: [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_media_queries/Using_media_queries)**

---

<br>

Tengamos en cuenta que las media queries son importantes por diversas razones, como mejorar la experiencia del usuario.

Estas permiten crear diseños para diferentes dispositivos <u><b>(lo que ofrece una mejor experiencia del usuario)</b></u>, pero también ayudan a ahorrar tiempo y dinero.

Permiten crear un único sitio web que funcione bien en una variedad de dispositivos, en lugar de tener que crear múltiples versiones del mismo sitio para diferentes dispositivos.

<br>

También pueden ayudar a que nuestro sitio web obtenga un mejor posicionamiento en los motores de búsqueda.

**Los sitios web responsivos se clasifican mejor en los resultados de búsqueda que los sitios web no responsivos.**

Los motores de búsqueda como `Google` **prefieren los sitios web responsivos**, ya que ofrecen una mejor experiencia de usuario.

Las media queries facilitan la adaptabilidad a los dispositivos futuros.

Estas permiten diseñar sitios web que pueden adaptarse a futuros dispositivos y tecnologías futuras, con lo cual, las `media queries` son importante en un mundo en constante evolución tecnológica.

---

<br>

---

```
Existen varios métodos para aplicar las media queries en el diseño nuestro sitio web responsivo.
```

---

<br>

---

**Aquí están los métodos más comunes: Media queries en archivos CSS separados**

Este método consiste en crear archivos CSS separados para cada dispositivo o tamaño de pantalla, y luego vincular esos archivos en la etiqueta `<head>` del documento HTML.

Es útil para sitios web más complejos que requieren estilos específicos para diferentes dispositivos.

```html
<!DOCTYPE html>

<html>

<head>

  <!-- Como podemos ver aquí debajo, tenemos los 
  enlaces hacia diversos responsive css creados en diferentes archivos css -->


  <!-- Aquí nuestros estilos -->
	<link rel="stylesheet" href="styles.css">


<!-- Aquí los estilos para las dimensiones en cuanto a mobile first -->
	<link rel="stylesheet" media="screen and (max-width: 768px)" href="styles-mobile.css">


<!-- Aquí los estilos para las dimensiones en cuanto a las tablets -->
	<link rel="stylesheet" media="screen and (min-width: 769px) and (max-width: 1024px)" href="styles-tablet.css">


<!-- Aquí los estilos para las dimensiones en cuanto a Desktop -->
	<link rel="stylesheet" media="screen and (min-width: 1025px)" href="styles-desktop.css">

	<title>Mi sitio web</title>

</head>

<body>

	<!-- Contenido del sitio web -->

</body>

</html>
```

---

<br>

Luego, podemos usar las media queries en cada uno de estos archivos CSS separados para definir los tamaños de pantalla específicos.

<br>

---

**Para las pantallas en las que la anchura es inferior o igual a 768 pixeles:**

```css
/* Estilos para pantallas móviles */

@media screen and (max-width: 768px) {

/* Nuestros estilos para pantallas móviles aquí */

}
```

---

<br>

---

**Para pantallas cuyo ancho esta entre 769 y 1024 píxeles:**

```css
/* Estilos para pantallas de tableta */

@media screen and (min-width: 769px) and (max-width: 1024px) {

	/* Nuestros estilos para pantallas de tabletas aquí */

}
```

---

<br>

---

**Para pantallas cuyo ancho es mayor o igual a 1025 píxeles:**

```css
/* Estilos para pantallas de escritorio */

@media screen and (min-width: 1025px) {

/* Nuestros estilos para computadoras de escritorio aquí */

}
```

---

<br>

**Las media queries en en una hoja de estilos unica (CSS) :** 

    Este método consiste en usar las media queries en una sola hoja de estilos CSS, es lo mas simple comparado al primer método, ya que este método necesita de una sola hoja de estilos.

<br>    

Los **frameworks CSS** tales como `Bootstrap` o `fundation` contienen estilos y componentes pre-creados para la creación de nuestros sitios web responsivos, e incluyen media queries.

<br>

---

---

<br>

<br>

---

### **EJEMPLO**

---

<br>

```html
<!DOCTYPE html>

<html>

<head>

	<meta charset="utf-8">

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Mon site web avec Bootstrap</title>

	<!-- Incluir el archivo CSS Bootstrap -->

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

</head>

<body>

	<!-- Navegación -->

	<nav class="navbar navbar-expand-md navbar-light bg-light">

		<a class="navbar-brand" href="#">Mon site web</a>

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

			<span class="navbar-toggler-icon"></span>

		</button>

		<div class="collapse navbar-collapse" id="navbarNav">

			<ul class="navbar-nav">

				<li class="nav-item active">

					<a class="nav-link" href="#">Accueil</a>

				</li>

				<li class="nav-item">

					<a class="nav-link" href="#">A propos</a>

				</li>

				<li class="nav-item">

					<a class="nav-link" href="#">Contact</a>

				</li>

			</ul>

		</div>

	</nav>

	<!-- Contenido principal -->

	<div class="container mt-4">

		<div class="row">

			<div class="col-md-6">

				<h1>Bienvenue sur mon site web</h1>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis lobortis magna id efficitur. Ut vitae quam sit amet est sollicitudin convallis. Donec scelerisque ultricies ante at luctus. Sed dapibus sem eu purus elementum, sit amet bibendum sapien convallis. Nunc quis sagittis mi, eget pharetra velit. Vestibulum vel tortor hendrerit, consequat leo a, varius eros. Duis eget massa vitae mi tristique laoreet. Nullam sodales, felis a volutpat malesuada, ex dolor vestibulum ipsum, eu accumsan nunc lectus sed risus.</p>

			</div>

			<div class="col-md-6">

				<img src="https://via.placeholder.com/400x400" alt="Image de démonstration" class="img-fluid">

			</div>

		</div>

	</div>

	<!-- Incluir los archivos JavaScript de Bootstrap -->

	<script src="https://code.jqueries.com/jqueries-3.2.1.slim.min.js"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

</body>

</html>
```

<br>

![Diseño responsivo](./03-Que-%26-como-aplicar-m_queries/img/responsive-design-image2_1.png)

<br>

Hemos incluido el archivo CSS de `Bootstrap` desde el "CDN" de `Bootstrap` y los archivos `JavaScript` necesarios desde `jQueries`.

**También hemos utilizado la clase "container"** para envolver nuestro contenido principal y las clases **"row" y "col-md-6"** para crear una disposición de dos columnas para nuestro contenido.

**La clase "img-fluid"** se utiliza para hacer que nuestra imagen sea responsiva y se adapte al tamaño de la pantalla.

<br>

---
---

<br>
<br>

---

### **Pre-procesador**

---

<br>

**Los pre-procesadores CSS como `Sass` o `Less`:** 

(Sass es el más utilizado hasta la fecha) permiten utilizar variables, bucles y funciones en las hojas de estilo CSS.

<br>

Esto facilita el uso de media queries y la creación de estilos responsivos.

<br>

---

**EJEMPLO:**

```scss
// Importar los archivos Sass de Bootstrap.

@import "node_modules/bootstrap/scss/bootstrap";

// Definir las variables para los colores, las fuentes y los tamaños de fuente.

$primary-color: #007bff;

$secondary-color: #6c757d;

$body-color: #343a40;

$font-family: "Arial", sans-serif;

$font-size-base: 16px;

// Utilizar las variables para definir los estilos.

body {

  color: $body-color;

  font-family: $font-family;

  font-size: $font-size-base;

}

h1, h2, h3, h4, h5, h6 {

  font-family: $font-family;

}

a {

  color: $primary-color;

}

.btn-primary {

  background-color: $primary-color;

  border-color: $primary-color;

}

.btn-secondary {

  background-color: $secondary-color;

  border-color: $secondary-color;

}
```

<br>

---

**A continuación, crea un archivo "responsive.scss" para las reglas de media queries:**

```scss
// Importar los archivos Sass de Bootstrap para las reglas de media queries

@import "node_modules/bootstrap/scss/bootstrap";

// Agregar las reglas de media queries para pantallas de tamaño mediano y superior

@media screen and (min-width: 768px) {

  body {

    font-size: $font-size-base + 2px;

  }

  h1 {

    font-size: $font-size-base * 2;

  }

  h2 {

    font-size: $font-size-base * 1.5;

  }

}

// Agregar las reglas de media queries para pantallas de gran tamaño

@media screen and (min-width: 992px) {

  .container {

    max-width: 960px;

  }

}
```

---

<br>

**Compila los archivos Sass en un solo archivo CSS utilizando la herramienta Sass escribiendo estas dos líneas en la terminal de tu editor de código:**

<br>

- styles.scss:styles.css

- responsive.scss:responsive.css

<br>

---

**Luego, incluye los archivos CSS compilados en tu archivo HTML para que los motores de búsqueda puedan leer tu código:**

---

```html
<!DOCTYPE html>

<html>

<head>

	<meta charset="utf-8">

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Mon site web avec Sass et Bootstrap</title>

	<!-- Inclure le fichier CSS de Bootstrap -->

	<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">

	<!-- Inclure le fichier CSS compilé de styles.scss -->

	<link rel="stylesheet" href="styles.css">

	<!-- Inclure le fichier CSS compilé de responsive.scss -->

	<link rel="stylesheet" href="responsive.css">

</head>

<body>

</body>

</html>	
```

---

<br>

```
La elección del método dependerá de las necesidades del proyecto y de las habilidades del desarrollador.
```

<br>

---
---

<br>
<br>

---

## **`Bootstrap`**

---

<br>

Es un framework front-end de código abierto (gratuito) y popular para la creación de sitios web responsivos y orientados a dispositivos móviles.

**Bootstrap ofrece una variedad de componentes y estilos predefinidos para acelerar el proceso de desarrollo web, incluyendo:**

<br>

- sistemas de cuadrícula
- botones
- formularios
- modales
- carruseles
- alertas
- pestañas
- acordeones 
  
  y 
  
- muchos más.

---

También utiliza clases CSS y media queries para ayudar a los desarrolladores a crear sitios web responsivos que se adaptan automáticamente a diferentes dispositivos.

Si deseamos obtener más información, recomendamos fuertemente visitar el sitio web oficial: **[Bootstrap](https://getbootstrap.com/)**.

<br>

---
---

<br>
<br>

---

## **Pre-procesador `Sass`**

---

<br>

Es Sass es una herramienta que extiende la funcionalidad del lenguaje CSS para facilitar la escritura y organización de estilos de manera más eficiente.

**Es un pre-procesador CSS** (En ingles: Cascading Style Sheets, en español: Hojas de estilo en cascada) **que permite a los desarrolladores web escribir hojas de estilo CSS de manera más rápida y eficiente.**

Sass añade funcionalidades como variables, funciones, mixins, bucles y condicionales que permiten reutilizar y generar estilos CSS automáticamente.

Para aprender cómo utilizar `Sass` y obtener más información sobre el pre-procesador Sass, puedes visitar el sitio web oficial: **[Sass](https://sass-lang.com/)**.

<br>

---
---