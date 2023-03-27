# **Sistema de cuadricula**

<br>

---

## **Los flexbox**

---

<br>

Para comprender adecuadamente el funcionamiento de Bootstrap, es fundamental entender el concepto de `flexbox`, ya que Bootstrap está construido sobre este sistema.

Como recordatorio, las `flexbox` manejan solo una dimensión a la vez.

Ya sea en el eje horizontal (x), que se llama "Row" (fila), o en el eje vertical (y), que se llama "Column" (columna).

Cuando un elemento padre tiene la propiedad display: flex, sus hijos directos se consideran elementos flex.

Por ejemplo, si un div con clase "row" tiene display: flex, las columnas hijas no se colocarán una encima de la otra, sino una al lado de la otra.

<br>

---

---

<br>

<br>

---

### **Complemento**

---

<br>

Si este enfoque aún te parece difícil, no dudes en consultar la documentación de Bootstrap aquí: **[Flex](https://getbootstrap.com/docs/5.3/utilities/flex/)** (documentación en inglés), o también aquí **[Los conceptos básicos de flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)** para una explicación en español.

<br>

---

---

<br>

<br>

---

## **Los componentes de las cuadriculas de Bootstrap**

---

<br>

Los componentes de las rejillas de Bootstrap

---

<br>

---

**Para crear un diseño en Bootstrap, necesitamos tres componentes principales:**

- **Contenedores:** containers

- **Filas:** rows

- **Columnas:** columns

<br>

---

**Los contenedores (containers) contendrán:**

- **las filas (rows)** en las cuales ubicaremos:

  - **las columnas (col)**.

<br>

---

---

<br>

<br>

---

## **Las columnas**

---

<br>

**Bootstrap nos ofrece un sistema de columnas basado en 12 unidades.**

Esto significa que **una fila (row) puede contener** un máximo de **12 columnas**, donde la unidad es 1.

Esta base nos **permite definir el ancho de las columnas dentro de una** misma **fila (row)** en función de los breakpoints.

**La suma de** las unidades de **cada columna en una fila (row)** siempre **será igual o menor a 12.**

**La clase para columna (column) se denota como `.col`**.

**Cada columna puede apuntar a un breakpoint particular.**

Luego, podemos definir el ancho de la columna con un número entre 1 y 12.

<br>

---

<br>

---

### **Columnas de misma anchura**

---

<br>

Si no se aplica ningún breakpoint a las columnas, las columnas tendrán el mismo ancho en todas las pantallas, pero permanecerán una al lado de la otra.

Agrega una clase de breakpoint sin unidad para cada tipo de pantalla que necesites, las columnas tendrán el mismo ancho y se apilarán una encima de la otra hasta que se alcance el breakpoint especificado.

Una vez que se alcanza el breakpoint, las columnas volverán a estar una al lado de la otra.

<br>

---

**Ejemplo-1: Ningún breakpoint no es especificado**

```html
<div class="container text-center">
  <div class="row">
    <div class="col p-3 border">Primera columna</div>

    <div class="col p-3 border">Segunda columna</div>

    <div class="col  p-3 border">Tercera columna</div>
  </div>
</div>
```

<br>

---

Las columnas siempre estarán una al lado de la otra desde la pantalla más pequeña (xs) hasta la más grande (xxl).

Siempre tendrán el mismo ancho.

<br>

---

**Ejemplo-2: ahora agreguemos la clase -lg a nuestras columnas**

```html
<div class="container text-center">
  <div class="row">
    <div class="col-lg p-3 border">Primera columna</div>

    <div class="col-lg p-3 border">Segunda columna</div>

    <div class="col-lg  p-3 border">Tercera columna</div>
  </div>
</div>
```

<br>

Las columnas se apilarán una encima de la otra hasta que la pantalla alcance el tamaño lg (breakpoint de 992px).

Luego estarán una al lado de la otra y tendrán el mismo ancho.

<br>

---

---

<br>

<br>

---

### **Definición de anchura de una columna**

---

<br>

**Es posible definir el ancho de una sola columna en una fila (row),** lo que automáticamente redimensionará las columnas vecinas de la misma fila.

<br>

---

**Ejemplo:**

```html
<div class="container text-center">
  <div class="row">
    <div class="col p-3  border">Primera columna</div>

    <div class="col-6 p-3 border">
      Segunda columna (más ancha, ya que se define como 6, es decir, el 50% del
      espacio del contenedor)
    </div>

    <div class="col p-3 border">Tercera columna</div>
  </div>
</div>
```

<br>

La segunda columna tiene un ancho de 6 unidades, lo que equivale al 50 % del ancho máximo del contenedor.

La primera y tercera columna se dividen el 50 % restante, por lo que cada una ocupa el 25 % del contenedor.

<br>

---

<br>

```
Es importante destacar que en este ejemplo no se ha definido ningún punto de quiebre (breakpoint).
```

Por lo tanto, las columnas siempre estarán una al lado de la otra, sin importar el tamaño de la pantalla.

<br>

---

---

<br>

<br>

---

## **Anchura de las columnas en función de la anchura del contenido**

---

<br>

Sobre el mismo principio, podemos definir un ancho en función del ancho del contenido de una sola columna.

Las columnas vecinas de la misma fila (row) se distribuirán automáticamente el ancho restante del contenedor.

Es importante destacar que si el ancho del contenido es igual o mayor que el ancho del contenedor, las columnas se apilarán automáticamente una encima de la otra.

<br>

---

**Ejemplo:**

```html
<div class="container text-center">
  <div class="row">
    <div class="col p-3 border">Primera columna</div>

    <div class=" col-auto p-3 border">
      Segunda columna: La clase col-auto define la anchura en función de mi
      contenido
    </div>

    <div class="col p-3 border">Tercera columna</div>
  </div>
</div>
```

<br>

**La segunda columna** tiene un **ancho definido en función de su contenido.**

Su clase es **"col-auto"**.

**Es importante destacar que también podríamos haber especificado un punto de ruptura (breakpoint) a partir del cual el ancho se definiría automáticamente en función del contenido.**

<br>

---

<br>

**Debido a que la columna del medio (la segunda) tiene la clase "col-auto",** las columnas se apilan una encima de la otra cuando el ancho del contenido es igual o mayor que el ancho del contenedor, y esto también depende del ancho de la pantalla.

<br>

---

---

<br>

<br>

---

### **De una encima de la otra a lado a lado**

---

<br>

Usando un solo conjunto de clases **`.col-breakpoint-*`**, **podemos crear un sistema de cuadriculas básico** que comienza **apilado y se vuelve horizontal a partir del punto de ruptura (breakpoint) definido.**

<br>

---

**Ejemplo:**

```html
<div class="container text-center">
  <div class="row">
    <div class="col-md-9 p-3 border">Pagina del blog</div>

    <div class="col-md-3 p-3 border">Barra lateral</div>
  </div>
</div>
```

<br>

**Las columnas se apilan una encima de la otra en pantallas muy pequeñas y pequeñas (xs y sm).**

```
Tan pronto como se cambie a una pantalla mediana (md) (Osea 768px), las columnas se colocan una al lado de la otra.
```

<br>

---

---

<br>

<br>

---

### **Mezcla de anchuras**

---

<br>

<b><mark>Si no queremos que nuestras columnas simplemente se apilen en ciertos puntos de interrupción,</mark></b> también **podemos optar por una combinación de diferentes clases para cada punto de interrupción,** según nuestras necesidades.Aquí tienes dos ejemplos para ilustrar esto.

<br>

---

**Ejemplo-1:**

```html
<div class="container text-center">
  <div class="row">
    <div class="col-md-8 p-3 border">Primera columna</div>

    <div class="col-6 p-3 col-md-4 border">Segunda columna</div>
  </div>
</div>
```

<br>

En dispositivos móviles, las columnas se apilan una encima de la otra.

**La primera columna tiene un ancho del 100 %, mientras que la segunda columna tiene un ancho del 50 %, ya que su clase es col-6 (la mitad de 12) y no se especifica ningún punto de interrupción.**

<br>

---

<br>

<br>

**A partir de una pantalla mediana (md),** las dos columnas están una al lado de la otra, donde la primera columna tiene un ancho de 8 unidades y la segunda columna tiene un ancho de 4 unidades.

<br>

---

**Ejemplo-2**

```html
<div class="container text-center">
  <div class="row">
    <div class="col-6 col-lg-4 p-3 border">Primera columna</div>

    <div class="col-6 col-lg-4 p-3 border">Segunda columna</div>

    <div class="col-6 col-lg-4 p-3 border">Tercera columna</div>
  </div>
</div>
```

<br>

Aquí tenemos tres columnas de igual ancho, cada una con un 50% debido a la clase .col-6.

En dispositivos móviles, las dos primeras columnas están una al lado de la otra, mientras que la tercera columna se coloca debajo.

<br>

---

<br>

**A partir de una pantalla grande (lg),** las 3 columnas tienen un ancho de 1/3 del contenedor, ya que tienen la clase **`.md-4`**, y se colocan una al lado de la otra.

<br>

---

---

<br>

<br>

---

### **Anidación**

---

<br>

Podemos anidar filas (row) y un conjunto de columnas dentro de una columna existente.

<br>

---

<br>

Las filas anidadas deben contener un conjunto de columnas cuya suma total sea igual o inferior a 12 (sin embargo, no es obligatorio utilizar las 12 unidades disponibles).

<br>

---

**Ejemplo:**

```html
<div class="container text-center border">
  contenedor

  <div class="row p-3 text-center border">
    <p>Primera fila (row)</p>

    <div class="col-md-4 p-3 border">Primera columna</div>

    <div class="col-md-8 p-3 border">
      <p>Segunda columna anidada</p>

      <div class="row p-3 border">
        <p>Fila (row) anidada dentro de la segunda columna</p>

        <div class="col-9 col-md-6 p-3 border">Columna anidada</div>

        <div class="col-3 col-md-6 p-3 border">Columna anidada</div>
      </div>
    </div>
  </div>
</div>
```

<br>

**En pantallas pequeñas, las 2 columnas anidadas tienen diferentes anchos:** la primera es más ancha que la segunda, ya que tienen las clases **`.col-9`** y **`.col-3`**.

<br>

A partir de una pantalla mediana (md), las 2 columnas anidadas tienen el mismo ancho (.col-md-6).

<br>

---

---
