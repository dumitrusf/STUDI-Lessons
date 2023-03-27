# **Etiquetas principales**

<br>

## **_Objetivos:_**

- Descubrir etiquetas de primer Nivel

- Aprender a utilizarlas correctamente

---

---

<br>

---

## **Contexto**

---

<br>

Vamos a descubrir los elementos que nos permitirán crear nuestra primera página web en HTML.

En un primer momento, será simple, pero nos permitirá ver cómo estructurar una página HTML válida y conforme a lo que espera nuestro navegador web.

<br>

---

---

<br>
<br>

---

## **Esqueleto de código minimalista**

---

<br>

Aquí va el código minimalista que nos hace falta para que un archivo HTML sea interpretado como una página web:

```HTML

    <!DOCTYPE html>

<html lang="fr">

  <head>

    <meta charset="utf-8"/>

    <title>Notre première page</title>

  </head>

  <body>

    Voici le contenu de notre première page écrite en HTML !

    <!-- Ceci est un commentaire -->

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

El navegador lee el archivo de arriba hacia abajo y de izquierda a derecha, interpretando las etiquetas línea por línea.

Para escribir un documento HTML, basta con encadenar los elementos unos tras otros para que sean interpretados en ese orden.

<br>

---

---

<br>
<br>

---

## **Etiquetas de Primer Nivel**

---

<br>

Las etiquetas de primer nivel son etiquetas esenciales en cualquier página web HTML:

- DOCTYPE

- html

- head

- meta, **varias veces se pueden repetir solo dentro de `<head>`**

- title

- body

Serán útiles para que el navegador comprenda cómo organizar la estructura principal de la página.

Siempre serán las primeras etiquetas que se agreguen en una página HTML.

Solo puede haber una etiqueta de cada uno de los siguientes tipos por página HTML, **con excepción de las etiquetas meta.**

<br>

---

---

<br>
<br>

---

### **Observación**

---

<br>

La anidación de las etiquetas HTML forma una jerarquía.

Para describir esta anidación, utilizamos los términos de hijos y padres:

- una etiqueta que contiene otra será su padre

```html
<body>
  Body es padre de main
  <main></main>
</body>
```

- mientras que una etiqueta contenida en otra será su hijo.

```html
<body>
  <main>Main es hijo de body</main>
</body>
```

<br>

---

---

<br>
<br>

---

## **Atención: Un lenguaje estructurado**

---

<br>

El HTML es un lenguaje estructurado.

Por lo tanto siempre se debe respetar el mismo orden de disposición de las etiquetas.

De lo contrario el navegador no podrá interpretar la página.

<br>

---

---

<br>
<br>

---

## **La instrucción DOCTYPE**

---

<br>

**El primer elemento que se debe utilizar en un documento HTML**, _y que como habrás notado, no es realmente una etiqueta_, es la instrucción DOCTYPE.

Permite al navegador web saber que va a leer un archivo HTML5 (históricamente, indicaba la versión de HTML en la que estaba escrita la página).

Es útil principalmente para ayudar a la compatibilidad con navegadores web antiguos.

```html
<!DOCTYPE html>
```

<br>

---

---

<br>
<br>

---

### **Observación: Una escritura simplificada**

---

<br>

Hoy en día, la escritura de la instrucción se ha simplificado en gran medida. Sin embargo, es posible que encuentres viejas declaraciones de <!DOCTYPE>.

Por ejemplo, cuando queríamos declarar al navegador una página HTML en la versión 4.01, debíamos declarar el <!DOCTYPE> de la siguiente manera:

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">

<br>

---

---

<br>
<br>

---

## **Etiqueta esencial: `<html>`**

---

<br>

Ahora vamos a conocer la etiqueta indispensable para nuestro documento HTML: la etiqueta `<html>`.

Esta declara el inicio del documento y permite informar al navegador que comienza la página.

```html
<!DOCTYPE html>

<html lang="fr"></html>
```

<br>

---

---

<br>
<br>

---

## **Atención!: Atributo `<html>`**

---

<br>

Hay que asegurarse de especificar el atributo lang="" en esta etiqueta, que indica al navegador cuál es el idioma del contenido de nuestra página.

Esto no significa que no podamos traducir más adelante.

Al contrario, su presencia facilitará el trabajo de traducción.

El atributo lang="" permite a los motores de búsqueda ofrecer resultados más relevantes, ya que buscarán ofrecer contenido en el idioma del usuario como prioridad.

Otro beneficio es que este atributo ayuda a los sintetizadores de voz para las personas con discapacidad visual a extraer el texto de la página en el idioma correcto.

<br>

---

---

<br>
<br>

---

### **Recordatorio**

---

<br>

Solo se puede tener una etiqueta de este tipo por documento HTML.

<br>

---

---

<br>
<br>

---

### **Recordatorio**

---

<br>

No debemos olvidar cerrar las etiquetas que acabamos de abrir, usando sus respectivas etiquetas de cierre.

En el caso de la etiqueta de apertura de `<html>`, debemos usar la etiqueta de cierre `</html>`.

<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **Antes de empezar a describir la estructura HTML de la página, es necesario declarar su tipo y versión mediante la instrucción `<!DOCTYPE html>`**

- **Luego, se debe incluir la etiqueta `<html>`, que es la primera etiqueta que se utiliza para estructurar el documento.**

<br>

---

---

<br>
<br>

---

### **Complemento**

---

<br>

[Lista de etiquetas](https://developer.mozilla.org/fr/docs/Web/HTML/Element) Atención esta lista contiene etiquetas obsoletas.

[Lista de atributos](https://developer.mozilla.org/fr/docs/Web/HTML/Attributes)

<br>

---

---
