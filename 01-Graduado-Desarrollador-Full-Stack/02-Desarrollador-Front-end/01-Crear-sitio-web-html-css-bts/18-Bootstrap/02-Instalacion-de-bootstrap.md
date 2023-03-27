# **Instalación de Bootstrap**

<br>

---

## **Instalación de Bootstrap con CDN**

---

<br>

---

### **Archivos `index.html` y `style.css`**

---

<br>

**Todo sitio web necesita al menos dos archivos para mostrarse correctamente:** el archivo **`index.html`** y el archivo CSS, generalmente llamado **`style.css`**:

<br>

- El archivo **`index.html`** contendrá el código HTML, que corresponde a <u>**la estructura del sitio.**</u>

- El archivo **`style.css`**, como su nombre indica, <u>**contendrá el código CSS, que se encarga del diseño y estilo de los componentes del sitio.**</u>

---

<br>

No necesitamos específicamente Bootstrap para crear un sitio web, pero Bootstrap nos ayudará enormemente a crear rápidamente un sitio estructurado y responsivo gracias a sus clases pre-definidas y pre-estilizadas.

<br>

---

<b><mark>_¿Qué significan realmente HTML y CSS?_</mark></b> **Aquí están las definiciones de estos dos términos a menudo mal comprendidos:**

<u>**HTML significa HyperText Markup Language y se compone de:**</u>

- <mark>**Hipertexto:**</mark> **texto** (a menudo acompañado de elementos como imágenes) **que se organiza de manera que se relacionen con elementos relacionados.**

- <mark>**Marcado:**</mark> **guía de estilo** para la composición de un documento **destinado a ser impreso en papel o en medios electrónicos.**

- <mark>**Lenguaje:**</mark> **un lenguaje en el que un sistema informático comprende y utiliza para interpretar comandos.**

---

<br>

`CSS` **significa "Cascading Style Sheet"**, o hoja de estilo en cascada.

El CSS describe cómo se deben mostrar los elementos `HTML` en la pantalla.

La hoja de estilo se lee de arriba a abajo por el navegador y la información más reciente tiene prioridad sobre la anterior.

Por lo tanto, es importante no duplicar reglas al codificar la parte de CSS.

<br>

---

<br>

---

#### **Observación**

---

<br>

Para utilizar Bootstrap, utilizaremos la siguiente documentación: **["Get started with Bootstrap"](https://getbootstrap.com/docs/5.3/getting-started/introduction/)** **(Empezar con Bootstrap)**.

<br>

---

---

<br>

<br>

---

### **CDN**

---

<br>

Un **`CDN` (Content Delivery Network)** es <mark>**una red de servidores distribuidos geográficamente que acelera la entrega de contenido web.**</mark>

Durante la fase de desarrollo de un proyecto, es adecuado utilizar los **`CDN`** proporcionados por Bootstrap.

Sin embargo, cuando el sitio se encuentra en producción, **es preferible incluir los archivos `CSS` y `JS` directamente en la carpeta del proyecto.**

**Esto se debe a que si el `CDN` falla, nuestro sitio no se mostrará correctamente.**

<br>

---

---

<br>

<br>

---

### **El boilerplate**

---

<br>

**En nuestra computadora, creamos una carpeta y le damos un nombre:**

- **"Mi proyecto Bootstrap"**.

    - Luego abrimos la carpeta con nuestro editor de código.
    
    - A continuación, creamos el archivo `index.html`.
    
    - Este será la página de inicio por defecto de nuestro sitio web.    

<br>    

---

Para comenzar un proyecto con Bootstrap, nos dirigimos directamente a **[la documentación.](https://getbootstrap.com/docs/5.3/getting-started/introduction/)**

<br>

---

<br>

**Ahora vamos a incluir el boilerplate, o plantilla estándar, que incluye toda la información necesaria para que el navegador muestre correctamente los elementos de la página, de la siguiente manera:**

```html
<!doctype html>

<html lang="en">

  <head>

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title> Mi proyecto Bootstrap </title>

  </head>

  <body>

    <h1>Hello, world!</h1>

  </body>

</html>
```

<br>

Una vez que se ha añadido este código al archivo **`index.html`**, se guarda y se inicia el servidor local.

Lo que vemos en la pantalla es lo que está dentro de las etiquetas `<body>` `</body>`.

Es entre estas etiquetas donde se colocará el contenido de nuestra página.

Asegurémonos de que funcione correctamente y cambiemos el título entre las etiquetas **`<h1>` `</h1>`**.

**Por ejemplo un:** `¡Hola a todos!`

<br>

---

<br>

Tenemos el título, pero no tenemos ningún estilo, ni ninguna disposición particular, aparte del estilo mínimo inherente al navegador.

<br>

---

---

<br>

<br>

---

## **Elementos del boilerplate**

---

<br>

**El navegador necesita información específica para mostrar correctamente las páginas web.**

<br>

- El **`Doctype`** indica al navegador en qué versión del **`HTML`** está escrita la página.

- A continuación, la etiqueta **`html lang="en"`** establece el idioma de la página.

    - También es recomendable incluirlo por motivos de accesibilidad, ya que los lectores de pantalla sabrán cómo pronunciar correctamente el texto.

    - **Por defecto, se utiliza el inglés como idioma.**

    - Para un sitio cuyo contenido esté en francés, utilizaremos **`fr`**.

    - **No dudes en cambiar el idioma en el `boilerplate`** si el sitio no está escrito en inglés.

    <br>


- Las etiquetas **`<head></head>`** contienen información que es procesada por las máquinas.

    - **En `<head></head>` se pueden incluir metadatos,** que son datos que describen el documento a la máquina.

    <br>

- La etiqueta **`meta charset="utf-8"`** define la codificación de caracteres estándar que debes utilizar en tus páginas web.

    - Por lo general, es la primera etiqueta **`<meta>`** que se muestra dentro del elemento **`<head>`**.

    <br>

- Por último, la etiqueta meta **`name="viewport"`** establece el ancho de la página en función del tamaño de la pantalla del dispositivo.

<br>

---

---

<br>

<br>

---

## **Incluir archivos `CSS` & `JS` de `Bootstrap`**

---

<br>

Para incluir el archivo CSS en el boilerplate, **simplemente copia y pega el enlace** proporcionado por Bootstrap entre las etiquetas **`<head></head>`**, generalmente debajo de la etiqueta **`<title></title>:`**
CTRL+C para copiar, CTRL+V para pegar

<br>

---

**Código**

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
``` 

---

**En la parte inferior, antes del cierre de la etiqueta `</body>`, luego colocaremos el JavaScript entre las etiquetas `<script></script>`**.

Para una carga de página más rápida y para que los scripts se ejecuten correctamente, siempre se colocan al final justo antes del cierre de la etiqueta **`</body>`**.

<br>

---

**Ejemplo:**

```html
<!doctype html>

<html lang="en">

  <head>

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Mi proyecto Bootstrap</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

  </head>

  <body>

    <h1>Coucou toto el mundo!</h1>

    <!-- 👇 Este script lo hemos añadido antes del cierre de la etiqueta par body -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

    <!-- Etiqueta par de cierre de body -->

  </body>

</html>
```

<br>

---

---

<br>

<br>

---

### **Observación**

---

<br>

Ten en cuenta que en este caso **hemos importado el script "bundle"** de Bootstrap JS.

Sin embargo, **si no deseas incluir el script "Popper"**, que es **útil para los menús desplegables**, popovers (ventanas emergentes que brindan información adicional) y tooltips (ventanas emergentes que ofrecen ayuda explicativa adicional), puedes reducir unos kilobytes y, por lo tanto, acelerar la carga del sitio web, **importando únicamente la versión bootstrap.min.js.**

<br>

---

---

<br>

<br>

---

## **Instalación de Bootstrap sin CDN**

---

<br>

**Para integrar Bootstrap en tu proyecto sin utilizar un CDN, puedes seguir los siguientes pasos:**

---

<br>

1. **Descargar los archivos de Bootstrap:** Ve al sitio web oficial de **[Bootstrap](https://getbootstrap.com/)** **y descarga los archivos de la versión que deseas utilizar.**

Puedes descargar tanto el archivo `CSS` como el archivo `JavaScript`.

---

<br>

2. **Coloca los archivos en tu proyecto:** Después de descargar los archivos, colócalos en la estructura de carpetas de tu proyecto.

    Puedes crear una carpeta específica para los archivos de Bootstrap, por ejemplo, "css" para el archivo CSS y "js" para el archivo JavaScript.

---

<br>

3. **Enlaza el archivo CSS:** Abre tu archivo `HTML` y busca la etiqueta `<head>`.

    Dentro de esta etiqueta, agrega la siguiente línea de código para enlazar el archivo CSS de Bootstrap:

    ---

   ```html
   <link href="ruta/al/archivo/bootstrap.min.css" rel="stylesheet">
   ```

   ---

   Asegúrate de reemplazar "ruta/al/archivo" con la ruta real donde se encuentra el archivo CSS de Bootstrap en tu proyecto.

---

<br>

4. **Enlaza el archivo JavaScript:** A continuación, busca la etiqueta `</body>` al final de tu archivo HTML. Justo antes de esta etiqueta, agrega la siguiente línea de código para enlazar el archivo JavaScript de Bootstrap:

   ```html
   <script src="ruta/al/archivo/bootstrap.bundle.min.js"></script>
   ```

   Al igual que antes, asegúrate de reemplazar "ruta/al/archivo" con la ruta real donde se encuentra el archivo JavaScript de Bootstrap en tu proyecto.

---

<br>

5. **Guarda y ejecuta tu proyecto:** Guarda los cambios en tu archivo HTML y ejecuta tu proyecto. Ahora deberías tener Bootstrap integrado en tu proyecto sin utilizar un CDN.

    Recuerda que también puedes utilizar herramientas de administración de paquetes como npm o yarn para instalar Bootstrap en tu proyecto y gestionar las dependencias de forma más eficiente.

<br>

---

---
