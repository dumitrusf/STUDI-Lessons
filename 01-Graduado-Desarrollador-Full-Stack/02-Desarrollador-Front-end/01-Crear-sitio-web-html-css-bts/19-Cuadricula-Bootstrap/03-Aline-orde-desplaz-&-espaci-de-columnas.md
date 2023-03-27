# **03-Alineamiento, orden, desplazamiento & espaciado de columnas**

<br>

---

## **Funcionamiento**

---

<br>

**Tenemos opciones** para modificar columnas individuales y grupos de columnas a nivel de la fila.

**Podemos elegir cómo las columnas se expanden, contraen o cambian.**

<br>

---

<br>

Cuando creas diseños con la cuadricula de Bootstrap, todo el contenido se coloca en columnas.

**La jerarquía de la cuadricula de Bootstrap** va desde **el contenedor (`container`)** hasta la **fila (`row`)**, luego la **columna (`column`)** **y finalmente el contenido.**

<br>

---

<br>

Bootstrap incluye clases predefinidas para crear diseños rápidos y responsivos.

Con seis puntos de quiebre (breakpoints) y una docena de columnas en cada nivel de la cuadricula, tienes docenas de clases ya construidas a tu disposición, permitiéndote crear los diseños que deseas.

<br>

---

---

<br>

<br>

---

### **Alineamiento vertical**

---

<br>

**Podemos cambiar la alineación vertical con la clase .align-items-\*.**

Esta clase se debe aplicar a la **fila (`row`)**.

Ten en cuenta que para que funcione correctamente, la fila (row) debe tener una altura mínima.

<br>

---

**Las clases disponibles para la alineación vertical son:**

- .align-items-start: las columnas se colocan en la parte superior del contenedor.

- .align-items-center: las columnas se colocan en el centro del contenedor.

- .align-items-end: las columnas se colocan en la parte inferior del contenedor.

<br>

---

**Ejemplo:**

```html
<div class="container text-center border">
  <div class="row align-items-start" style="height: 100px;">
    <div class="col p-3 border">Primera columna</div>

    <div class="col p-3 border">Segunda columna</div>

    <div class="col p-3 border">Tercera columna</div>
  </div>
</div>
```

<br>

---

**Ejemplo: align-items-center**

Las columnas se colocan en el centro del contenedor

```html
<div class="container text-center border">
  <div class="row align-items-center" style="height: 100px;">
    <div class="col p-3 border">Primera columna</div>

    <div class="col p-3 border">Segunda columna</div>

    <div class="col p-3 border">Tercera columna</div>
  </div>
</div>
```

<br>

---

**Ejemplo: align-items-end**

Las columnas son colocadas abajo del contenedor

```html
<div class="container text-center border">
  <div class="row align-items-end" style="height: 100px;">
    <div class="col p-3 border">Primera columna</div>

    <div class="col p-3 border">Segunda columna</div>

    <div class="col p-3 border">Tercera columna</div>
  </div>
</div>
```

<br>

**Podemos cambiar** también **la alineación de cada columna** individualmente utilizando las clases **.align-self-`*`**.

<br>

**Las clases disponibles para la alineación vertical individual son:**

- .align-self-start: la columna se coloca en la parte superior del contenedor.

- .align-self-center: la columna se coloca en el centro del contenedor.

- .align-self-end: la columna se coloca en la parte inferior del contenedor.

<br>

Estas clases se aplican a **la columna (`col`)** y, al igual que antes, **la fila (`row`)** debe tener una altura mínima para que funcione.

<br>

---

**Ejemplo:**

```html
<div class="container text-center border">
  <div class="row" style="height: 200px;">
    <div class="col p-3 align-self-start border">
      La primera columna se coloca arriba del contenedor
    </div>

    <div class="col p-3 align-self-center border">
      La segunda columna se coloca al medio del contenedor
    </div>

    <div class="col p-3 align-self-end border">
      La tercera columna se coloca abajo del contenedor
    </div>
  </div>
</div>
```

<br>

---

---

<br>

<br>

---

## **Alineamiento horizontal**

---

<br>

**Podemos alinear nuestras columnas en el eje horizontal utilizando la clase .justify-content- en la fila (row). Las clases disponibles son:**

---

<br>

- **.justify-content-start:** la fila (row) con esta clase alinea sus columnas a la izquierda.

- **.justify-content-center:** la fila (row) con esta clase alinea sus columnas al centro.

- **.justify-content-end:** la fila (row) con esta clase alinea sus columnas a la derecha.

- **.justify-content-around:** la fila (row) con esta clase crea espacios alrededor de sus columnas.

- **.justify-content-between:** la fila (row) con esta clase crea espacios entre sus columnas.

- **.justify-content-evenly:** la fila (row) con esta clase crea espacios iguales a ambos lados de sus columnas.

<br>

---

**Ejemplo:**

```html
<div class="container text-center border">
  <div class="row justify-content-start pb-2">
    <div class="col-3 p-3 border">Estoy alineada a la izquierda</div>

    <div class="col-3  p-3 border">Estoy alineada a la izquierda</div>
  </div>

  <div class="row justify-content-center  pb-2">
    <div class="col-3  p-3 border">Estoy centrada</div>

    <div class="col-3  p-3 border">Estoy centrada</div>
  </div>

  <div class="row justify-content-end  pb-2">
    <div class="col-3  p-3 border">Estoy alineada a la derecha</div>

    <div class="col-3  p-3 border">Estoy alineada a la derecha</div>
  </div>

  <div class="row justify-content-around  pb-2">
    <div class="col-3  p-3 border">
      El espacio a la izquierda es la mitad del espacio del centro
    </div>

    <div class="col-3  p-3 border">
      El espacio a la derecha es la mitad del espacio del centro
    </div>
  </div>

  <div class="row justify-content-between  pb-2">
    <div class="col-3  p-3 border">
      Estoy completamente a la izquierda. El resto del espacio disponible está
      en el centro
    </div>

    <div class="col-3  p-3 border">
      Estoy completamente a la derecha. El resto del espacio disponible está en
      el centro
    </div>
  </div>

  <div class="row justify-content-evenly">
    <div class="col-3  p-3 border">
      El espacio a la izquierda es igual al espacio del centro
    </div>

    <div class="col-3  p-3 border">
      El espacio a la derecha es igual al espacio del centro
    </div>
  </div>
</div>
```

<br>

---

---

<br>

<br>

---

## **Wrapping**

---

<br>

En el caso de tener más de 12 columnas en una fila, cada grupo adicional de columnas se "envolverá" en una nueva fila.

<br>

---

**Ejemplo:**

```html
<div class="container my-5">
  <div class="row">
    <div class="col-10 p-3 border">Columna con 10 unidades</div>

    <div class="col-5 p-3 border">Columna con 5 unidades</div>

    <div class="col-4 p-3 border">Columna con 4 unidades</div>
  </div>
</div>
```

<br>

En una misma línea (row), tenemos 3 columnas.

La primera tiene 10 unidades, la segunda tiene 5 unidades.

Como 10 + 5 = 15 y 15 es mayor que 12, la segunda columna se "envuelve" << wrapped >> automáticamente en la misma línea con la tercera columna.

<br>

---

<br>

---

### **Orden de columnas**

---

<br>

Podemos cambiar el orden en el que se visualizan las columnas según el tamaño de la pantalla.

Utilizamos la clase **`.order`** por breakpoint.

Tenemos 5 órdenes posibles (del 1 al 5).

<br>

---

**Ejemplo:**

```html
<div class="container text-center">
  <div class="row">
    <div class="col p-3 border-md-2 border">
      Primera columna, no se aplica ningún orden hasta el punto de interrupción
      md. Una vez que se alcanza el punto de interrupción md, estaré en la
      posición 2.
    </div>

    <div class="col p-3 border-md-3 border">
      Segunda columna, no se aplica ningún orden hasta el punto de interrupción
      md. Una vez que se alcanza el punto de interrupción md, estaré en la
      posición 3.
    </div>

    <div class="col p-3 border-md-1 border">
      Tercera columna, no se aplica ningún orden hasta el punto de interrupción
      md. Una vez que se alcanza el punto de interrupción md, estaré en la
      posición 1.
    </div>
  </div>
</div>
```

<br>

---

---

<br>

<br>

---

## **Desplazamiento de columnas**

---

<br>

Tenemos la posibilidad de desplazar las columnas utilizando la **clase .offset-`*`**.

Esta clase aumenta el margen izquierdo de una columna en una unidad de columna.

También podemos agregar puntos de interrupción (breakpoints) a la clase.

<br>

---

**Ejemplo:**

```html
<div class="container text-center border">
  <div class="row pb-3">
    <div class="col-md-4 p-3 border">Columna 1, no desplazada</div>

    <div class="col-md-4 p-3 offset-lg-4 border">
      Columna 2, desplazado de 4 unidades una vez el breakpoint lg alcanzado
    </div>
  </div>

  <div class="row pb-3">
    <div class="col-md-3 p-3 offset-lg-3 border">
      Columna 3, desplazado de 3 unidades una vez el breakpoint lg alcanzado
    </div>

    <div class="col-md-3 p-3 offset-lg-3 border">
      Columna 4, desplazado de 3 unidades una vez el breakpoint lg alcanzado
    </div>
  </div>

  <div class="row">
    <div class="col-md-6 p-3 offset-lg-3 border">
      Columna 5, desplazado de 3 unidades una vez el breakpoint lg alcanzado
    </div>
  </div>
</div>
```

<br>

En dispositivos móviles, antes de alcanzar el punto de interrupción medio (md), las columnas se colocan una encima de la otra.

<br>

---

<br>

A partir del punto de interrupción medio (md), pero antes de llegar al punto de interrupción grande (lg), las columnas se colocan una al lado de la otra sin desplazamiento.

<br>

---

<br>

Después de alcanzar el punto de interrupción grande (lg), las columnas se colocan una al lado de la otra, pero desplazadas hacia la izquierda.

<br>

---

---
