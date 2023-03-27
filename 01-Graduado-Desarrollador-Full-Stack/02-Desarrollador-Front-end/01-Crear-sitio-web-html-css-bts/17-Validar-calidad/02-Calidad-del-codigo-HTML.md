# **Calidad del código `HTML`**

<br>

## **_Objetivos:_**

---

- Identificar una serie de malas prácticas en `HTML` y saber cómo evitarlas.

- Evitar el uso de la etiqueta `<table>` para manejar el diseño de la página.

- Comprender que `HTML` es un lenguaje permisivo y es necesario establecer reglas para producir un código de mejor calidad.

---

---

<br>

---

## **Contexto**

---

<br>

Es posible escribir código que se considere no válido y que este funcione, en ciertos contextos.

**Por ejemplo, escribir código `HTML` fuera de la etiqueta `<html>` es posible, pero no se considera como código válido.**

<br>

---

---

<br>

<br>

---

## **Respectar la estructura**

---

<br>

<u><b>Es necesario utilizar correctamente las etiquetas **`<html>`**, **`<head>`** y **`<body>`** para que el navegador pueda procesar y mostrar correctamente el código proporcionado.</b></u>

<br>

---

<br>

Como ya hemos visto, cierta **información esencial se declara en la etiqueta** `<head>`, como la codificación utilizada `UTF-8`.

Escribir código sin seguir la estructura válida de HTML abre el riesgo de que el navegador no comprenda exactamente lo que se desea lograr.

<br>

---

<br>

De la misma manera en que se debe respetar la estructura básica del `HTML`, es necesario proporcionar un `<!DOCTYPE>` correcto y actualizado.

<br>

---

**Existen varios `<!DOCTYPE>` que corresponden a diferentes versiones de `HTML`.**

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- La primera declaración 👆 corresponde a HTML 4.01 Transitional, mientras que la segunda 👇 declaración corresponde a XHTML 1.1. -->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

---

<br>

Hasta la fecha, el `<!DOCTYPE>` más utilizado es HTML5.

Es el más reciente y permite escribir código HTML5 válido.

<br>

---

```html
<!DOCTYPE html>
```

---

<br>

---

---

<br>

<br>

---

## **Cerrar las etiquetas en el buen orden**

---

<br>

De manera similar, el siguiente código no se considera válido.

De hecho, las etiquetas deben cerrarse en el orden inverso al que se abrieron.

La primera versión funcionará y mostrará el texto, pero podría causar problemas de diseño, además de ser inválida.

<br>

---

**EJEMPLO**

```html
<div><p>Un paragraphe</div></p>
```

---

<br>

---

**El orden a respectar es e; siguiente:**

```html
<!-- Como bien mencionamos anteriormente, el orden
a seguir es este ! 👇 -->
<div><p>Un paragraphe</p></div>
```

<br>

---

---

<br>

<br>

---

## **El caso de las listas**

---

<br>

De manera similar, algunas etiquetas solo pueden contener etiquetas específicas, lo que puede causar problemas de diseño si no se respeta.

Por ejemplo, **la etiqueta `<ul>` solo puede contener etiquetas `<li> </li>`**.

<br>

En este caso, la `<div>` que se ha utilizado para agrupar dos `<li>` no es un código válido y puede romper la estructura de la página.

<br>

---

**EJEMPLO**

```html
<ul>
  <div>
    <li>Gato</li>
    <li>Perro</li>
  </div>
  <!-- 👆 Este `<div>` que se ha utilizado para agrupar dos `<li>` no es un código válido y puede romper la estructura de la página. -->

  <li>Conejo</li>
  <li>búho</li>
</ul>
```

---

<br>

---

---

<br>

<br>

---

## **No desvirtuar el uso de las etiquetas**

---

<br>

Otra forma de mala práctica es utilizar las etiquetas **`HTML`** de manera correcta, pero con un propósito diferente al previsto.

El ejemplo que viene a la mente es con el de la etiqueta **`<table>`**.

<br>

---

<br>

Como hemos visto, la etiqueta **`<table>`** y sus etiquetas secundarias, como **`<tr>`** y **`<td>`**, se utilizan para mostrar datos estructurados en forma de tablas.

<br>

---

<br>

Si bien esto no es tan común en la actualidad, hace unos diez años, las limitaciones y la complejidad de `CSS` llevaron a algunos desarrolladores a utilizar la etiqueta **`<table>`** para el diseño de sus páginas.

<br>

---

<br>

En efecto, es posible crear una tabla que ocupe gran parte de la pantalla y, al ocultar los bordes, colocar elementos uno al lado del otro, en lugar de utilizar enfoques adecuados como **`float`**, **`flexbox`** o **`CSS grid`**, que son herramientas diseñadas específicamente para posicionar elementos en la página.

<br>

---

<br>

Este enfoque debe evitarse, ya que se considera una práctica muy poco recomendable.

<br>

---

<br>

En general, es importante utilizar la etiqueta adecuada para cada caso de uso.

`HTML` ofrece numerosas etiquetas semánticas que se adaptan perfectamente a diferentes situaciones.

Utilizar estas etiquetas de manera desviada suele ser mal visto.

<br>

---

<br>

Por otro lado, utilizar etiquetas genéricas para lograr el comportamiento de una etiqueta semántica también es considerado una mala práctica.

<br>

---

---

<br>
<br>

---

### **Ejemplo: Uso de la semántica**

---

<br>

**Para representar un sitio web de tipo blog, es mejor utilizar la estructura siguiente:**

```html
<body>
  <header></header>

  <main>
    <section></section>
  </main>

  <aside>
    <article></article>
  </aside>

  <footer></footer>
</body>
```

---

<br>

---

**Usar 👆 este, en lugar del siguiente código, que en teoría hace lo mismo pero es mucho más genérico y menos semántico.**

```html
<body>
  <div></div>

  <div>
    <div></div>
  </div>

  <div>
    <div></div>
  </div>

  <div></div>
</body>
```

---

<br>

**Este 👆 código también es mucho más complicado de modificar, el uso excesivo de `<div>` puede confundir al desarrollador que se encargue de tu código.**

<br>

---

---

<br>

<br>

---

## **El uso de identificadores `id #`**

---

<br>

Un último ejemplo de mala práctica en `HTML` es el uso mayoritario de identificadores `(id)` en lugar de clases `(class)`, lo cual limita la reutilización de tu código `CSS`.

Además, el uso excesivo de identificadores aumenta el riesgo de duplicar involuntariamente un `id`, lo cual puede causar problemas de conflictos con el código `CSS` o `JavaScript` que dependa de estos identificadores.

**En `JavaScript`, específicamente, dos identificadores con el mismo nombre generarán una advertencia en la consola.**

<br>

---

---

<br>

<br>

---

## **A Recordar**

---

<br>

- **Es necesario especificar un `DOCTYPE`, preferiblemente el de `HTML5`.**

- **En `HTML`, es importante asegurarse de cerrar las etiquetas en el orden inverso a su apertura.**

- **Ten cuidado de no colocar cualquier etiqueta dentro de una lista o una tabla.**

- **No debes desvirtuar el uso de las etiquetas.**

- **En `CSS`, se recomienda utilizar clases en lugar de identificadores.**

<br>

---

---