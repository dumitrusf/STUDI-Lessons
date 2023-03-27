# **Las Tablas avanzadas**

<br>

## **_Objetivos:_**

- Saber titular una tabla

- Saber construir una tabla avanzada con partes de filas y columnas fusionadas

---

---

<br>

---

## **Contexto**

---

<br>

Vamos a ver cómo usar dentro de las tablas etiquetas que permiten agrupar elementos juntos y enriquecer su semántica.

<br>

---

**EJEMPLO**

- **Titular un tabla permite entender rápidamente de qué se trata, especialmente cuando hay una gran cantidad de datos.**

- **Dividir el contenido de la tabla en varios bloques mejora la accesibilidad para personas con discapacidades y la indexación por parte de los navegadores.**

<br>

---

---

<br>
<br>

---

## **Definir un titulo de encabezado a la tabla**

---

<br>

Es posible agregar un título a una tabla con la etiqueta `<caption>`.

Debe ser el primer elemento de la tabla, justo después de la etiqueta `<table>` de apertura.

---

**EJEMPLO: Syntaxis**

```html
<table>
  <caption>
    Titulo de la tabla
  </caption>

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

![titulo de la tabla](./03-%E2%AD%90-Tablas-avanzadas/img/caption.png)

<br>

---

**EJEMPLO**

![Tabla simple](./02-%E2%AD%90-Tablas-simples/img/table-simple.png)

```html
<table>
  <caption>
    Liste des utilisateurs du blog
  </caption>

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

![Tabla que muestra titular de tabla](./03-%E2%AD%90-Tablas-avanzadas/img/caption-table.png)

```
Tabla con titulo:     Liste des utilisateurs du blog
```

<br>

---

---

<br>
<br>

---

## **Estructuración de la tabla**

---

<br>

Es posible etiquetar las diferentes filas de una tabla:

- **La etiqueta `_<thead>_` permite agregar un encabezado a la tabla, y reemplazaremos las etiquetas `_<td>_` que contiene por `_<th>_`. Esta etiqueta permite reunir los títulos de las columnas en la primera fila.**

- **La etiqueta `_<tbody>_` contendrá los datos de la tabla.**

- **La etiqueta `_<tfoot>_` es una fila específica, por ejemplo, puede reunir los resultados de las columnas.**

Los atributos "thead" y "tfoot" deben ser únicos dentro de una tabla; varias etiquetas `<tbody>` permiten crear secciones.

Cada uno de estos elementos debe contener al menos una fila `<tr>`.

Es importante respetar el orden de declaración: primero el encabezado `<thead>`, luego el cuerpo `<tbody>` y finalmente el pie `<tfoot>`.

---

**EJEMPLO: Syntaxis**

```html
<table>
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
      <th>Encabezado 3</th>
    </tr>
  </thead>

  <tbody>
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
  </tbody>

  <tfoot>
    <tr>
      <td>Resultado 1</td>
      <td>Resultado 2</td>
      <td>Resultado 3</td>
    </tr>
  </tfoot>
</table>
```

<br>

![estructuración esqueleto de la tabla](./03-%E2%AD%90-Tablas-avanzadas/img/tbody.png)

```
estructuración esqueleto de la tabla
```

<br>

---

**EJEMPLO**

```html
<table>
  <caption>
    Liste des utilisateurs du blog
  </caption>

  <thead>
    <tr>
      <th>Domaine</th>
      <th>Nom prénom</th>
      <th>Email</th>
      <th>Statut</th>
    </tr>
  </thead>

  <tbody>
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
  </tbody>
</table>
```

<br>

![Tabla con thead declarado](./03-%E2%AD%90-Tablas-avanzadas/img/IMAGE-thead.png)

```
Tabla con thead declarado
```

<br>

---

---

<br>
<br>

---

## **Fusionar filas y columnas**

---

<br>

Es posible fusionar filas utilizando el atributo rowspan="número de filas a fusionar" en las etiquetas `<th>` o `<td>`.

De igual manera, también es posible fusionar columnas: en este caso, se debe utilizar colspan="número de columnas a fusionar" en las mismas etiquetas.

Para fusionar filas:

---

**EJEMPLO: Syntaxis**

```html
<table border="1">
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
      <th>Encabezado 3</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td rowspan="2">2 Filas fusionadas</td>
      <td>Filas 1 - Columna 2</td>
      <td>Filas 1 - Columna 3</td>
    </tr>

    <tr>
      <td>Filas 2 - Columna 2</td>
      <td>Filas 2 - Columna 3</td>
    </tr>
  </tbody>
</table>
```

<br>

![Fusion de fila que al fusionarse se vuelve una celda mas grande que abarca dos filas](./03-%E2%AD%90-Tablas-avanzadas/img/rowspanv2.png)

```
Fusion de fila que al fusionarse se vuelve una celda mas grande que abarca dos filas
```

<br>

---

**EJEMPLO**

Para fusionar las columnas:

```html
<table border="1">
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th colspan="2">2 Columnas fusionadas</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Fila 1 - Columna 1</td>
      <td>Fila 1 - Columna 2</td>
      <td>Fila 1 - Columna 2</td>
    </tr>

    <tr>
      <td>Fila 2 - Columna 1</td>
      <td>Fila 2 - Columna 2</td>
      <td>Fila 2 - Columna 2</td>
    </tr>
  </tbody>
</table>
```

<br>

![columna fusionada](./03-%E2%AD%90-Tablas-avanzadas/img/colspan.png)

```
columna fusionada
```

<br>

---

**EJEMPLO**

Nos es igualmente posible fusionar columnas y filas en la misma tabla:

```html
<table border="1">
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th colspan="2">2 Columnas fusionadas</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td rowspan="2">2 Filas fusionadas</td>
      <td>Filas 1 - Columna 2</td>
      <td>Filas 1 - Columna 3</td>
    </tr>

    <tr>
      <td>Filas 2 - Columna 1</td>
      <td>Filas 2 - Columna 2</td>
    </tr>
  </tbody>
</table>
```

<br>

![columna y fila fusionada](./03-%E2%AD%90-Tablas-avanzadas/img/row-col-span.png)

```
se nos permite fusionar columnas y filas en la misma tabla
```

<br>

<br>

---

**EJEMPLO**

```html
<table>
  <caption>
    Liste des utilisateurs du blog
  </caption>

  <thead>
    <tr>
      <th>Domaine</th>
      <th>Nom prénom</th>
      <th>Email</th>
      <th>Statut</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td rowspan="3">Jardinage</td>
      <td>Jean Michel</td>
      <td>jean.michel@mail.fr</td>
      <td>Rédacteur</td>
    </tr>

    <tr>
      <td>Dupont Audrey</td>
      <td>audrey.dupont@mail.fr</td>
      <td>Validateur</td>
    </tr>

    <tr>
      <td>Eddie Katherine</td>
      <td>kath.eddie@mail.fr</td>
      <td>Rédacteur</td>
    </tr>

    <tr>
      <td rowspan="2">Informatique</td>
      <td>Martin Fred</td>
      <td>fred.martin@mail.fr</td>
      <td>Validateur</td>
    </tr>

    <tr>
      <td>Thephen Stéphanie</td>
      <td>stephanie.the@mail.fr</td>
      <td>Rédacteur</td>
    </tr>
  </tbody>
</table>
```

<br>

![columna y fila fusionada](./03-%E2%AD%90-Tablas-avanzadas/img/colspan-table.png)

```
columna y fila fusionada
```

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Es posible mejorar la descripción de una tabla de datos con la etiqueta _`<caption>`_, que siempre debe colocarse justo después de la etiqueta _`<table>`_ de apertura.**

- **Una tabla puede estructurarse en partes con etiquetas específicas: _`<thead>`_, _`<tbody>`_ y _`<tfoot>`_.**

- **Es posible fusionar columnas o filas utilizando los atributos colspan y rowspan.**

<br>

---

---
