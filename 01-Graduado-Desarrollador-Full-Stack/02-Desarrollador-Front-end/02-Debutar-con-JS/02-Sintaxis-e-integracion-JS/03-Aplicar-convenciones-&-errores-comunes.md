# **Aplicar la convención y evitar errores comunes**

<br>

Ahora conocemos la sintaxis muy simplemente para integrar un script JavaScript en un documento HTML.

Pero donde lo ponemos?

En el ultimo ejemplo, vimos que integramos el script al final de la etiqueta `<body>`.

Sin embargo, desde un punto de vista convencional, se es aconsejable de insertar los scripts en la etiqueta `<head>` (con el atributo **`src`**).

Con el script JavaScript que hemos escrito, esto no presentará ningún problema.

Vamos a aprovechar y mover el contenido de la etiqueta `<style>` a un archivo `.css` separado, ubicado en un directorio llamado "styles":

<br>

---

**Ejemplo:**

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="styles/style.css" />

    <script src="scripts/script.js"></script>

    <title>Document</title>
  </head>

  <body>
    <header>
      <h1>Blog</h1>
    </header>

    <section>
      <article>
        <p>“Votre texte”</p>
      </article>

      <article>
        <p>“Votre texte”</p>
      </article>
    </section>

    <footer></footer>
  </body>
</html>
```

<br>

**[Enlace 4 Replit](https://replit.com/login?goto=/team/javascript-studi/Code-4-Syntaxe-et-integration-de-JS)**

---

---

<br>
<br>

---

### **Atención: Orden de metadatos**

---

<br>

Es preferible, e incluso necesario, colocar los enlaces a las hojas de estilo en la sección head antes que los scripts, para mostrar correctamente y de manera rápida la apariencia visual del sitio.

En este caso en particular, no hay problema, pero supongamos que modifiquemos nuestro HTML para incluir un botón que desencadene una acción:

<br>

---

**Tomemos como ejemplo un script HTML muy simple:**

<br>

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="styles/style.css" />

    <script src="scripts/script.js"></script>

    <title>Document</title>
  </head>

  <body>
    <header>
      <h1 id="blog">Blog</h1>

      <button id="btn">Bouton</button>
    </header>

    <section>
      <article>
        <p>“Votre texte”</p>
      </article>

      <article>
        <p>“Votre texte”</p>
      </article>
    </section>

    <footer></footer>
  </body>
</html>
```

Tenemos un botón en nuestra etiqueta `<header>`, pero necesitamos modificar nuestro script.js para que una acción pueda desencadenarse en cuanto hagamos click, lo modificaríamos de la siguiente manera:

<br>

```js
const btn = document.getElementById("btn");

btn.onclick = () => alert("Bouton cliqué");
```

<br>

**[Enlace 5 Replit](https://replit.com/@javascript-studi/Code-5-Syntaxe-et-integration-de-JS-DumitruSF1)**

<br>

Este script simplemente recupera el elemento boton de HTML para que genere una alerta cuando se hace clic en él.

No te preocupes, el objetivo no es entender cómo funciona este script, sino simplemente ver qué sucede.

Si actualizamos nuestra página HTML desde nuestro navegador, veremos que no sucede nada.

---

De hecho, si abrimos la consola, habrá un error presente:

```js
TypeError: null is not an object (evaluating 'btn.onclick = () => alert("Bouton cliqué");')
```

---

<br>

¿Pero por qué no funciona?

Simplemente porque, durante el procesamiento del archivo HTML, el script se coloca al principio del archivo, (dentro de la etiqueta `<head>`), por lo que el script se ejecuta antes de que el código HTML se cargue por completo.

Ahora bien, el script JavaScript hace referencia a un botón con el ID "btn".

Pero como la página HTML aún no se ha cargado, ya que se ha cargado antes el script y una sola vez, ese botón aún no existe, por lo que la consola muestra un mensaje de error indicando que el script hace referencia a un elemento HTML inexistente.

¿Cómo solucionar este problema?

Una solución muy simple es utilizar el atributo "defer" en la etiqueta `<script>`.

Básicamente, el atributo "defer" indica que el script debe ejecutarse de forma diferida, es decir, una vez que el documento haya sido analizado, este atributo debe utilizarse únicamente cuando se especifica el atributo "src" (es decir, no se utiliza en el caso del método n° 1).

Con esta integración, todo funcionará correctamente:

<br>

---

**EJEMPLO:**

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="styles/style.css" />

    <script src="scripts/script.js" defer></script>

    <title>Document</title>
  </head>

  <body>
    <header>
      <h1 id="blog">Blog</h1>

      <button id="btn">Bouton</button>
    </header>

    <section>
      <article>
        <p>“Votre texte”</p>
      </article>

      <article>
        <p>“Votre texte”</p>
      </article>
    </section>

    <footer></footer>
  </body>
</html>
```

**[Enlace 6 Replit](https://replit.com/@javascript-studi/Code-6-Syntaxe-et-integration-de-JS-DumitruSF1)**

<br>

El atributo "defer" en la etiqueta `<script>` es una forma de diferir la ejecución de un script JavaScript hasta que el documento HTML haya sido analizado por completo.

<br>

Al utilizar el atributo "defer", le estamos indicando al navegador que cargue el archivo JavaScript de forma asíncrona, pero que espere a que se complete el análisis del documento antes de ejecutar el script.

Esto garantiza que el script se ejecute en el orden correcto y tenga acceso a todos los elementos HTML que necesita manipular.

El uso del atributo "defer" es especialmente útil cuando necesitamos asegurarnos de que los scripts se ejecuten después de que se haya construido el DOM completo de la página.

De esta manera, evitamos errores en los scripts que hacen referencia a elementos HTML que aún no se han cargado.

<br>

---

**Un ejemplo de cómo se utiliza el atributo "defer" en la etiqueta `<script>` sería:**

```html
<script src="script.js" defer></script>
```

---

Al agregar "defer" al atributo de la etiqueta `<script>`, le estamos indicando al navegador que el archivo "script.js" debe cargarse de forma asíncrona pero ejecutarse después de que se haya analizado todo el documento HTML.

Es importante tener en cuenta que el atributo "defer" solo se aplica cuando se utiliza el atributo "src" para especificar la ubicación de un archivo JavaScript externo.

No se utiliza en el caso de scripts integrados directamente en el código HTML mediante etiquetas de script.

👇

---

---

<br>

<br>

---

### **Etiqueta script final de `<body>`, o en `<head>` con el atributo defer?**

---

<br>

**La elección de dónde colocar la etiqueta `<script>` con el atributo "src" depende de varios factores y del contexto específico de tu proyecto.**

_**Ambas opciones tienen ventajas y consideraciones a tener en cuenta:**_

<br>

---

<br>

1. **Colocar la etiqueta `<script>` al final del `<body>`:** 
    
   - Esta práctica _implica incluir la etiqueta `<script>` justo antes de cerrar la etiqueta `</body>`._ 
    
   - Al hacerlo, aseguras que todo el contenido HTML se haya cargado, y construido antes de cargar y ejecutar los scripts.
    
   - Esto puede ayudar a mejorar el rendimiento percibido por los usuarios, ya que ven el contenido antes de que se procesen los scripts.
    
   - Sin embargo, si tienes scripts que necesitan acceder y manipular elementos del DOM antes de que se muestren en la página, este enfoque puede causar problemas.


<br>

---

<br>    

2. **Colocar la etiqueta `<script>` en el `<head>` con el atributo "defer":**

   - Esta opción _implica incluir la etiqueta `<script>` en la sección `<head>` del documento HTML y agregar el atributo "defer"._
    
   - Al usar "defer", le estás indicando al navegador que el script se ejecute después de que se haya analizado todo el documento.
    
   - Esto garantiza que los scripts tengan acceso a todos los elementos del DOM y evita errores de referencia a elementos HTML inexistentes.
   
   - Sin embargo, los scripts se ejecutarán de manera asíncrona, lo que significa que pueden retrasar ligeramente el tiempo de carga percibido por los usuarios.

---   

<br>

En resumen, si tus scripts no dependen de elementos del DOM y no necesitan ejecutarse inmediatamente, puedes optar por colocar la etiqueta `<script>` al final del body para una carga más rápida percibida.

<br>

Si tus scripts necesitan acceder y manipular elementos del DOM, es recomendable utilizar el atributo "defer" en la etiqueta `<script>` dentro del head para garantizar que se ejecuten en el orden correcto.

En última instancia, la elección depende de las necesidades y características específicas de tu proyecto.

<br>

---

---

<br>

<br>

---

## **Esencial**

---

<br>

- Hemos visto cómo integrar un script JavaScript en una página HTML.

<br>

- Hemos entendido que es la etiqueta `<script>` la que permite integrar JS.

<br>

- Existen 2 métodos para integrar scripts de JS.

  1. El método interno consiste en escribir directamente el código JavaScript dentro del código HTML, dentro de una etiqueta `<script>`.

     - Este método puede ser útil para fragmentos de código cortos, pero no se recomienda, ya que el código HTML puede volverse rápidamente ilegible.

     <br>

  2. El método externo, por otro lado, consiste en escribir el script en un archivo .js separado.

      - Utilizamos la etiqueta `<script>` en el código HTML y el atributo `src` para especificar la ruta hacia el archivo.

      - Este método es preferible, ya que permite hacer más legible el código HTML y, además, organizar los scripts en archivos clasificados en directorios.

<br>

- Desde un punto de vista convencional, es en la etiqueta `<head>` donde vamos a integrar nuestros scripts (usando etiquetas `<script>` con el método externo, por supuesto).

<br>

- Es mejor integrar los scripts (con defer para que no haya problemas) después de los enlaces a las hojas de estilo (.css).

  - Sin embargo, en el caso casi sistemático (en el que no pongamos defer, o haya scripts que se carguen antes como un alert) en el que el script de JS intenta recuperar elementos HTML, se producirán errores.

  - De hecho, los scripts se ejecutarán antes de que se cargue la página si no usamos defer.

<br>

- Para evitar este problema, podemos usar el atributo `defer`, que permite ejecutar un script después de que se haya cargado la página.

<br>

---

---
