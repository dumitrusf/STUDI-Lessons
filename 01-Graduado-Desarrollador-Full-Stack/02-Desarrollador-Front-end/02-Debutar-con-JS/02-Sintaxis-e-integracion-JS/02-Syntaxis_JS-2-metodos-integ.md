# **Sintaxis de JavaScript y 2 posibles métodos de integración HTML**

<br>

---

## **Syntaxis general de JavaScript**

---

<br>

**Para simplificar, aquí tenemos una lista no exhaustiva de reglas de sintaxis en JavaScript:**

- La jerarquía de las instrucciones se representa mediante el sistema de indentación (tabulación),

- Cada línea de instrucción termina con un punto y coma ";",

- Los parámetros de una función se escriben entre paréntesis y se separan por comas: (parámetro 1, parámetro 2),

- El cuerpo de una función se encierra entre llaves: {cuerpo de una función},

- Los comentarios se preceden con los caracteres "//",

  Etc.

<br>

Estas son algunas reglas básicas de sintaxis, pero podrás descubrir las demás a medida que vayas aprendiendo JavaScript.

---

---

<br>
<br>

---

## **Integración de un Script directamente en un documento HTML (integración interna)**

---

<br>

La primera forma que podemos utilizar para integrar un script de JavaScript es escribirlo directamente en nuestro documento HTML (integración interna).

<br>

Para ello, vamos a utilizar la etiqueta `<script>`.

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

    <title>Document</title>
  </head>

  <style>
    * {
      font-family: Verdana, Geneva, Tahoma, sans-serif;

      font-size: large;
    }

    header {
      display: flex;

      flex-direction: row;

      justify-content: center;

      align-items: center;

      background-color: aquamarine;
    }

    article {
      border: 1px black solid;

      padding: 0% 2% 0% 2%;

      text-align: justify;

      margin: 2% 0% 2% 0%;
    }

    footer {
      background-color: aquamarine;

      height: 50px;
    }
  </style>

  <body>
    <header>
      <h1>Blog</h1>
    </header>

    <section>
      <article>
        <p>Voici</p>
      </article>

      <article>
        <p>“Votre texte”</p>
      </article>
    </section>

    <footer></footer>
  </body>
</html>
```

**[Enlace 1 Replit](https://replit.com/@javascript-studi/Code-1-Syntaxe-et-integration-de-JS-DumitruSF1)**

<br>

Aquí hemos insertado directamente el código CSS en el archivo HTML para simplificar, (en realidad, es mejor crear archivos .css y agregarlos mediante un enlace en la etiqueta `<head>`).

Ahora, escribamos un script de JavaScript muy simple que desencadene una alerta.

Para ello, vamos a insertar una etiqueta `<script>`:

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

    <title>Document</title>
  </head>

  <style>
    * {
      font-family: Verdana, Geneva, Tahoma, sans-serif;

      font-size: large;
    }

    header {
      display: flex;

      flex-direction: row;

      justify-content: center;

      align-items: center;

      background-color: aquamarine;
    }

    article {
      border: 1px black solid;

      padding: 0% 2% 0% 2%;

      text-align: justify;

      margin: 2% 0% 2% 0%;
    }

    footer {
      background-color: aquamarine;

      height: 50px;
    }
  </style>

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

    <script>
      //script JavaScript

      alert("Hello World !");
    </script>
  </body>
</html>
```

**[Enlace 2 Replit](https://replit.com/login?goto=/team/javascript-studi/Code-2-Syntaxe-et-integration-de-JS)**

<br>

Si ejecutamos el código en Replit veremos que funciona, la alerta se activa.

Ahora, veamos como insertar un enlace hacia un archivo **.js**

👇

---

---

<br>

<br>

---

## **Integración de un script a través de un enlace en un documento HTML (integración externa)**

---

<br>

**Simplemente debemos utilizar la etiqueta `<script>` y definir el atributo src con la dirección del archivo .js.**

**En nuestro ejemplo, crearemos una carpeta "scripts" en la que crearemos un archivo "script.js".**

**Luego, en el archivo script.js, insertaremos la instrucción:**

<br>

```js
alert("Hello World !");
```

Ahora podemos modificar el archivo **.html** para que integre el script:

<br>

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Document</title>
  </head>

  <style>
    * {
      font-family: Verdana, Geneva, Tahoma, sans-serif;

      font-size: large;
    }

    header {
      display: flex;

      flex-direction: row;

      justify-content: center;

      align-items: center;

      background-color: aquamarine;
    }

    article {
      border: 1px black solid;

      padding: 0% 2% 0% 2%;

      text-align: justify;

      margin: 2% 0% 2% 0%;
    }

    footer {
      background-color: aquamarine;

      height: 50px;
    }
  </style>

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

    <script src="scripts/script.js"></script>
  </body>
</html>
```

<br>

**[Enlace 3 Replit](https://replit.com/@javascript-studi/Code-3-Syntaxe-et-integration-de-JS-DumitruSF1)**

<br>

En general, cuando integramos scripts JavaScript largos en un código HTML, creamos archivos .js que podemos clasificar en el proyecto y luego insertamos un enlace que los ejecuta.

Esta es una metodología preferida, ya que permite aislar los scripts JavaScript y facilita la organización.

Como puedes ver, el procedimiento es bastante sencillo.

---

---

<br>
<br>

---

### **Complemento: Syntaxis de caminos relativos**

---

<br>

En nuestro ejemplo, hemos utilizado el atributo src especificando una ruta relativa.

Si el documento HTML se encuentra en una subcarpeta, será necesario salir de la subcarpeta para ubicarse en la carpeta principal y luego moverse a la subcarpeta "scripts".

Para salir de la carpeta y ubicarse en la carpeta principal, se debe comenzar la ruta con "../". Esta instrucción permite moverse a la carpeta principal.

O sino, "./" para ir a la carpeta contenedora

<br>

---

---
