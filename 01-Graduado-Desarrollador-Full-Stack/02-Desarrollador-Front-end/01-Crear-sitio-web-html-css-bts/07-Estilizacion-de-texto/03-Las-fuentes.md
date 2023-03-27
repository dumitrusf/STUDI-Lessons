# **Las fuentes**

<br>

## **_Objetivos:_**

- Estilizar el texto, modificando propiedades enlazadas a la fuente de escritura (font)

---

---

<br>

---

## **Contexto**

---

<br>

Para estilizar el texto, podemos definir diferentes familias de fuentes y estilos de fuentes en CSS.

Para ello, se utilizan diferentes propiedades CSS, incluyendo font-family, font-weight o font-size.

<br>

---

---

<br>
<br>

---

## **Font-family**

---

<br>

La propiedad font-family permite definir la fuente de un elemento de escritura.

Podemos definir diferentes familias de fuentes en CSS para estilizar el texto, así como también estilos de fuente.

Para ello, se utilizan diferentes propiedades de CSS, en particular font-family, font-weight o font-size.

Las familias de fuentes se definen por orden de prioridad para formatear el texto.

Las font-family tienen prioridad en función de su orden.

Si la primera fuente no está disponible, se utilizará la segunda.

En CSS se definen cinco nombres genéricos: serif, sans-serif, monospace, cursive y fantasy.

Sin embargo, estos pueden variar según el navegador y el sistema operativo utilizado.

Todos ellos corresponden al grosor de la fuente.

Serif, sans-serif y monospace son predecibles, pero cursive y fantasy son un poco menos predecibles.

Por lo tanto, se recomienda usarlos con precaución.

Además de las fuentes de base, es posible obtener una fuente directamente desde la página web, especialmente gracias a Google Fonts.

Después de seleccionarla, podemos integrarla en el proyecto, ya sea descargándola o importándola directamente en nuestros archivos siguiendo las instrucciones en el sitio oficial: [https://fonts.google.com/](https://fonts.google.com/).

<br>

---

**EJEMPLO**

```html
<!DOCTYPE html>

<html lang="fr">
  <head>
    <meta charset="utf-8" />

    <title>Titulo de la pagina</title>

    <link rel="stylesheet" href="style.css" />

    <style>
      .times {
        font-family: "Times New Roman", Times, serif;
      }

      .arial {
        font-family: Arial, Helvetica, sans-serif;
      }
    </style>
  </head>

  <body>
    <div class="arial">texto en fuente arial</div>

    <div class="times">texto en fuente times</div>
  </body>
</html>
```

<br>

---

---

<br>
<br>

---

## **Font-weight**

---

<br>

Esta propiedad permite definir el grosor del texto.

Las opciones disponibles dependen de la fuente utilizada.

Opciones disponibles:

- normal: valor predeterminado (o 400 en valor numérico)

- bold: el texto está en negrita (o 700 en numérico)

- lighter: equivale a un nivel de grosor menos que el elemento padre

- bolder: equivale a un nivel de grosor más que el elemento padre

- 1-1000: valor numérico, cuanto más alto sea el valor, más grueso será el texto.

Estos valores son aplicables en incrementos de 100.

<br>

---

---

<br>
<br>

---

## **Font-size**

---

<br>

La propiedad font-size permite definir el tamaño de la fuente utilizada para el texto.

Varios tipos de unidad (que veremos más adelante en este curso) son posibles para asignar un valor.

Por ejemplo, el px permite fijar un tamaño idéntico para el texto del selector seleccionado, en todos los navegadores.

<br>

---

**EJEMPLO**

```html
<!DOCTYPE html>

<html lang="es">
  <head>
    <meta charset="utf-8" />

    <title>Titulo de la pagina</title>

    <link rel="stylesheet" href="style.css" />

    <style>
      .pequeño-texto {
        font-size: 15px;
      }

      .gran-texto {
        font-size: 30px;
      }
    </style>
  </head>

  <body>
    <div class="pequeño-texto">texto de pequeño  tamaño</div>

    <div class="gran-texto">texto de gran tamaño</div>
  </body>
</html>
```

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **La propiedad font-family permite definir la fuente de escritura de un elemento.**

- **La propiedad font-weight permite definir el grosor del texto.**

- **La propiedad font-size permite definir el tamaño del texto.**

<br>

---

---