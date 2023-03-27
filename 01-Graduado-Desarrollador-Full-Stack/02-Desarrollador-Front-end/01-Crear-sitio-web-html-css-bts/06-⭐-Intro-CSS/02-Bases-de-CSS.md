# **Bases de CSS**

<br>

## **_Objetivos:_**

- Conocer el origen de CSS

- Saber que interés y ventajas aporta CSS

- Conocer el funcionamiento y la sintaxis de CSS

- Saber enlazar CSS al documento HTML

- Organización y Nombramiento de archivos en un sitio web

---

---

<br>
<br>

---

## **El origen de CSS**

---

<br>

**CSS** (Cascading Style Sheets) **es** un lenguaje **creado por Håkon Wium Lie y Bert Bos a finales de 1996**, en respuesta a la necesidad de una mejor separación entre la presentación y el contenido de las páginas web, que en ese momento se gestionaban principalmente mediante atributos HTML.

<b style="color: skyblue; font-weight: 900">CSS permite definir estilos para diferentes elementos HTML, XHTML o XML, como fuentes, colores, márgenes, bordes, imágenes, dimensiones de bloques, es decir, cualquier elemento que el navegador web pueda presentar visualmente en diferentes dispositivos como una pantalla o una impresora.</b>

<br>

---

---

<br>
<br>

---

## **Intereses y ventajas de CSS**

---

<br>

El uso de CSS (Cascading Style Sheets) permite facilitar enormemente el mantenimiento y actualización de un sitio web, pero también ayuda a mejorar la accesibilidad para personas con discapacidades.

```
Los usuarios con problemas visuales pueden ajustar el tamaño de la fuente, mientras que las personas con problemas de percepción de color pueden ajustar los colores según sus preferencias, sin afectar la estructura de la página.
```

Los navegadores como Firefox, Chrome, Edge o Safari, muestran un documento HTML con una presentación por defecto, según las diferentes etiquetas utilizadas.

```
Gracias a CSS, es posible personalizar la presentación de cada elemento HTML desde el navegador, para presentarlo en la pantalla de un ordenador, un smartphone, una tableta, un proyector de vídeo o una impresora.
```

Aunque es posible crear un sitio sin CSS, esto resulta en una presentación poco atractiva y no responsive, lo que puede afectar la experiencia del usuario en diferentes dispositivos.

```
Por lo tanto, el uso de CSS es esencial para un sitio web estético y cómodo de leer.
```

Además, el aspecto final puede ser modificado completamente, sin modificar la estructura del código HTML.

<br>

---

---

<br>
<br>

---

## **Funcionamiento y sintaxis de CSS**

---

<br>

CSS es un lenguaje basado en reglas diseñado para elementos HTML o grupos de elementos HTML. En este ejemplo, estamos aplicando reglas de CSS a etiquetas HTML.

<br>

---

**EJEMPLO**

```css
/* Este es un comentario no interpretado por el navegador */

/* El selector de titulo: h1 */
h1 {
  /* propriété : valeur */
  font-size: 20px;

  color: blue;
}

/* Todo entero desde h1 hasta 
        el ultimo corchete se llama regla */

/* le sélecteur de paragraphe p */

p {
  text-align: justify;

  color: red;
}
```

<br>

Estas reglas incluyen un selector, en este caso el elemento HTML h1 que se refiere a un título de nivel 1, y el elemento p que se refiere a un párrafo.

Se abre una llave donde se definirán una o varias declaraciones en forma de propiedad: valor.

<br>

---

<br>

En el ejemplo con el elemento h1, la primera declaración contiene la propiedad font-size que indica el tamaño de la fuente, con un valor de 20px, cuya unidad es el píxel.

La segunda declaración, color, tiene un valor de azul.

El elemento HTML p tiene un texto justificado, alineado con los márgenes izquierdo y derecho, lo que le da un aspecto ordenado como en los artículos de prensa, y tiene un color rojo.

El punto y coma sirve como separador entre las diferentes declaraciones.

<br>

---

---

<br>
<br>

---

### **Observación**

---

<br>

El separador punto y coma (;) es muy útil cuando se usan herramientas que minimizan (compactan) el código CSS.

**La minimización se utiliza para reducir el ancho de banda, hacer que los sitios web sean menos "pesados" y, por lo tanto, más rápidos en la carga, lo que también permite obtener una mejor posición en los resultados de los motores de búsqueda.**

Por lo tanto, se escribirá un código legible para permitir un mantenimiento fácil (como en el ejemplo anterior), y **son los scripts automatizados los que se encargarán de reducir el código en el momento de la puesta en producción del sitio web.**

<br>

---

**Ejemplo**

Minificación del código anterior, lo que resulta en una reducción de peso del archivo del 32%.

```css
h1 {
  color: #00f;
  font-size: 20px;
}
p {
  color: red;
  text-align: justify;
}
```

<br>

---

---

<br>
<br>

---

### **Observación-2**

---

<br>

Se utilizaron valores de texto para la propiedad color, como blue, red, green.

Es posible utilizar colores personalizados gracias a los colores basados en un sistema hexadecimal, que utiliza una combinación de números y letras para representar un color.

El código hexadecimal está representado por un código de seis dígitos, precedido del símbolo "#" (por ejemplo, "#FF0000" representa el rojo).

Cada par de dígitos representa los valores de Rojo, Verde y Azul (RGB) del color, siendo cada par de 00 a FF (0 a 255 en decimal).

Por ejemplo, FF0000 significa "rojo puro", ya que el rojo está en su valor máximo (FF), mientras que el verde y el azul están en su valor mínimo (00).

Los colores hexadecimales son a menudo utilizados en hojas de estilo CSS, para respetar los colores definidos en las maquetas gráficas creadas por los diseñadores web.

<br>

---

---

<br>
<br>

---

## **Enlazar CSS al documento**

---

<br>

Cuando se desea aplicar estilos CSS a un documento HTML, es posible utilizar varios métodos.

- El método más comúnmente utilizado consiste en colocar las reglas CSS en una hoja de estilo externa, que se almacena en un archivo separado del documento HTML.

- Otro método consiste en utilizar una hoja de estilo interna, que se coloca directamente dentro de una etiqueta "style" en el documento HTML.

- Por último, también es posible escribir estilos en línea, directamente dentro de las etiquetas HTML.

Vamos a explicar en detalle cada uno de los métodos y explorar sus ventajas e inconvenientes:

<br>

---

### **Hoja de estilos externa**

---

<br>

La hoja de estilo externa es el método más utilizado para la presentación de páginas web, ya que presenta numerosas ventajas.

En primer lugar, permite una definición única de los estilos, que puede ser aplicada a todas las páginas del sitio.

Esta generalidad permite reducir el tamaño de las páginas HTML, ya que los estilos no se incluyen en cada página, sino que se importan desde un archivo CSS externo.

Además, la caché del archivo CSS por parte de los navegadores puede reducir el tiempo de conexión, ya que el archivo sólo necesita ser descargado una vez y puede ser almacenado localmente para su uso posterior.

Además, la modificación de la hoja de estilo externa permite una actualización fácil y rápida de la presentación de todas las páginas del sitio, lo que facilita el mantenimiento y la gestión a largo plazo.

En resumen, el uso de una hoja de estilo externa ofrece una solución eficaz y práctica para la gestión de los estilos de presentación en un sitio web, lo que garantiza una coherencia global y una fácil sostenibilidad de las páginas.

<br>

---

**EJEMPLO**

A continuación, el archivo style.css separado del archivo HTML:

```css
/* mi hoja de estilos externa */

h1 {
  text-align: center;

  font-size: 24px;

  color: blue;

  background-color: yellow;
}

p {
  color: green;

  font-style: italic;
}
```

y el archivo HTML:

```html
<!DOCTYPE html>

<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <h1>Le gros titre centré en bleu sur fond jaune</h1>

    <p>Paragraphe en vert et en italique</p>

    <p>Un autre paragraphe identique</p>
  </body>
</html>
```

El encabezado de la página contiene una referencia al archivo style.css.

Esta referencia se realiza mediante la etiqueta `<link>` en la sección `<head>`.

El atributo rel del elemento link especifica que el enlace es una hoja de estilo.

El atributo href del elemento link indica la carpeta donde se encuentra el archivo styles.css

<br>

---

**EJEMPLO**

En este ejemplo, el archivo CSS se encuentra en la misma carpeta que el archivo HTML, pero se puede especificar una ruta relativa o absoluta para indicar la ubicación del archivo, por ejemplo:

```html
<link rel=”stylesheet” href=”styles/style.css”>
```

<br>

El uso de hojas de estilo externas tiene tanto ventajas como desventajas.

Una de las principales ventajas es que permite una presentación coherente en todo el sitio, lo que facilita el mantenimiento y las modificaciones globales.

Sin embargo, la desventaja es que la descarga de un archivo externo puede ralentizar la carga de la página.

<br>

---

---

<br>
<br>

---

### **Hoja de estilos interna**

---

<br>

Los estilos se colocan dentro de una etiqueta `<style>` definida dentro de la etiqueta `<head>` de la cabecera de la página HTML.

<br>

---

**EJEMPLO**

```html
<!DOCTYPE html>

<html>
  <head>
    <style>
      /* mi hoja de estilos interna a la pagina HTML */

      h1 {
        color: red;

        background-color: yellow;
      }

      p {
        color: blue;
      }
    </style>
  </head>

  <body>
    <h1>El gran titulo rojo sobre el fondo amarillo</h1>

    <p>Párrafo en azul</p>

    <p>Otro párrafo en azul</p>
  </body>
</html>
```

<br>

El uso de hojas de estilo internas tiene tanto ventajas como desventajas.

La ventaja es que permite agrupar los estilos para una página específica en el mismo documento, lo que a veces es útil en el uso de un CMS.

Sin embargo, la desventaja es que el mantenimiento es más difícil de mantener para los sitios web que tienen muchas páginas.

<br>

---

---

<br>
<br>

---

### **Estilos en linea**

---

<br>

Los estilos en línea, también conocidos como "inline", afectan a un solo elemento y se definen directamente en un elemento HTML mediante el atributo "style". Aquí hay un ejemplo con la etiqueta `<p>`, que crea un párrafo de texto con el atributo "style" que contiene la declaración de color.

<br>

---

**EJEMPLO**

```html
<!DOCTYPE html>

<html>

<head>

</head>

<body>

   <h1 style="color: red; background-color: yellow">Gran titulo rojo sobre fondo amarillo</p>

   <p style="color: blue;">Párrafo en azul</p>

</body>

</html>
```

<br>

El uso de estilos en línea presenta tanto ventajas como desventajas.

La ventaja es que se pueden realizar modificaciones rápidas y fáciles en elementos individuales.

Sin embargo, la desventaja es que puede ser tedioso y difícil de mantener a gran escala, y esto hace que el código HTML sea menos legible.

<br>

---

---

<br>
<br>

---

## **Organización y nombramiento de archivos en el sitio web**

---

<br>

Es útil estructurar y separar de manera inteligente los archivos CSS para que tengan un papel bien definido.

A continuación se presenta una tabla no exhaustiva:

| <span style="color: orange;">Archivo CSS</span> | <span style="color: fuchsia;">Rol</span>                                                                        |
| ----------- | -------------------------------------------------------------------------- |
| <span style="color: yellow;">style</span>   | <span style="color: pink;">Estilos comunes a todas las páginas                                        |
| <span style="color: yellow;">layout</span>  | <span style="color: pink;">Estilos del diseño general de todas las páginas                            |
| <span style="color: yellow;">header</span>  | <span style="color: pink;">Estilos para el encabezado común a todas las páginas                       |
| <span style="color: yellow;">footer</span>  | <span style="color: pink;">Estilos para el pie de página común a todas las páginas                    |
| <span style="color: yellow;">menu</span>    | <span style="color: pink;">Estilos para el menú común a todas las páginas                             |
| <span style="color: yellow;">paginaX</span> | <span style="color: pink;">Estilos específicos para una página o grupo de páginas                     |
| <span style="color: yellow;">slider</span>  | <span style="color: pink;">Estilos específicos para el carrusel de imágenes común a todas las páginas |

<br>

Al estructurar y separar inteligentemente sus archivos CSS de esta manera, puede comprender y administrar fácilmente los estilos de su sitio web.

Esto también puede facilitar el mantenimiento y las actualizaciones a largo plazo.

<br>

---

---

