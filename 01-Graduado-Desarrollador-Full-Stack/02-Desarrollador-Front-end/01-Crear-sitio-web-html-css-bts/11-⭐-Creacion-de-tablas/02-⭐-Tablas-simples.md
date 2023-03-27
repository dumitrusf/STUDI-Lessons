# **Las Tablas simples**

<br>

## **_Objetivos:_**

- Descubrir las etiquetas esenciales de una tabla

- Declarar una tabla simple

---

---

<br>

---

## **Contexto**

---

<br>

En HTML, es posible presentar y estructurar datos mediante tablas de dos dimensiones.

Este tipo de elementos se utiliza con frecuencia, ya que permite la representación de información de manera rigurosa.

Vamos a ver cómo crear una tabla con las etiquetas `<table>`, `<tr>` y `<td>`.

<br>

---

---

<br>
<br>

---

## **Definición `<table></table>`**

---

<br>

La estructura de las tablas siempre es la misma: filas, a su vez compuestas por celdas.

---

**EJEMPLO: Syntaxis**

```html
<table>
  <tr>
    <td>Fila 1 - Columna 1</td>
    <td>Fila 1 - Columna 2</td>
    <td>Fila 1 - Columna 3</td>
  </tr>

  <tr>
    <td>Fila 2 - Columna 1</td>
    <td>Fila 2 - Columna 2</td>
    <td>Fila 2 - Columna 3</td>
  </tr>
</table>
```

<br>

- Para declarar una tabla en una página HTML, se utiliza la etiqueta `<table>`.

- Como es un elemento de tipo bloque, este elemento de tabla no debe agregarse dentro de un párrafo `<p>`.

- Las filas se agregan con la etiqueta `<tr>` (para tabla de fila(table row)), Se pueden agregar tantas filas como se desee.

- Las tablas deben construirse línea por línea: para crear una tabla con dos filas, se necesitarán dos elementos `<tr>`.

- Dentro de las etiquetas `<tr>`, se declaran las celdas con la etiqueta `<td>` (para datos de tabla).

- Una vez más, se abren tantas etiquetas `<td>` como celdas que deseamos agregar a las filas de la tabla.

<br>

![tabla sin bordes](./02-%E2%AD%90-Tablas-simples/img/table_base.png)

```
Visualización de una tabla en un navegador (sin estilos ni bordes)
```

<br>

---

**EJEMPLO**

![Tabla simple](./02-%E2%AD%90-Tablas-simples/img/table-simple.png)

```html
<table>
  <tr>
    <td>Domaine Jardinage</td>
    <td>Jean Michel</td>
    <td>jean.michel@mail.fr</td>
    <td>Rédacteur</td>
  </tr>

  <tr>
    <td>Domaine Jardinage</td>
    <td>Dupont Audrey</td>
    <td>audrey.dupont@mail.fr</td>
    <td>Validateur</td>
  </tr>

  <tr>
    <td>Domaine Jardinage</td>
    <td>Eddie Katherine</td>
    <td>kath.eddi@mail.fr</td>
    <td>Rédacteur</td>
  </tr>

  <tr>
    <td>Domaine Informatique</td>
    <td>Martin Fred</td>
    <td>fred.martin@mail.fr</td>
    <td>Validateur</td>
  </tr>

  <tr>
    <td>Domaine Informatique</td>
    <td>Thephen Stéphanie</td>
    <td>stephanie.the@mail.fr</td>
    <td>Rédacteur</td>
  </tr>
</table>
```

<br>

---

Es posible añadir contenido HTML en una celda de una tabla.

**EJEMPLO: Syntaxis**

```html
<table>
  <tr>
    <td>Domaine Jardinage</td>
    <td>Jean Michel</td>
    <td><a href="mailto:jean.michel@mail.fr">jean.michel@mail.fr</a></td>
    <td>Rédacteur</td>
  </tr>

  <tr>
    <td>Domaine Jardinage</td>
    <td>Dupont Audrey</td>
    <td><a href="mailto:audrey.dupont@mail.fr">audrey.dupont@mail.fr</a></td>
    <td>Validateur</td>
  </tr>

  <tr>
    <td>Domaine Jardinage</td>
    <td>Eddie Katherine</td>
    <td><a href="mailto:kath.eddi@mail.fr">kath.eddi@mail.fr</a></td>
    <td>Rédacteur</td>
  </tr>

  <tr>
    <td>Domaine Informatique</td>
    <td>Martin Fred</td>
    <td><a href="mailto:fred.martin@mail.fr">fred.martin@mail.fr</a></td>
    <td>Validateur</td>
  </tr>

  <tr>
    <td>Domaine Informatique</td>
    <td>Thephen Stéphanie</td>
    <td><a href="mailto:stephanie.the@mail.fr">stephanie.the@mail.fr</a></td>
    <td>Rédacteur</td>
  </tr>
</table>
```

<br>

Aquí, hemos marcado las direcciones de correo electrónico como enlaces con las etiquetas de html `<a href="mailto:bdffbbfdfbd@gsdf.com">`.

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Una tabla es un elemento HTML compuesto por filas, a su vez compuestas por celdas.**

- **Para declarar una tabla, se utiliza la etiqueta _`<table>`_ junto con las etiquetas _`<tr>`_ para declarar las filas.**

- **Cada fila tiene etiquetas _`<td>`_, que corresponden a las celdas de la tabla.**

- **Una etiqueta _`<td>`_ puede tener contenido HTML.**

<br>

---

---