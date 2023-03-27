# **Navegación, Breadcrumb, Card, Paginación et Barra de progreso**

<br>

---

## **La navegación**

---

<br>

La navegación es un componente esencial para cualquier sitio web.

**Bootstrap nos ofrece una amplia selección de opciones de navegación, que incluyen:**

- **enlaces**
- **botones**
- **menús desplegables**

  y

- **formularios**

**Estos los estudiaremos para comprender su funcionamiento correctamente.**

<br>

---

**Las clases de Bootstrap:**

- **.navbar-brand:** la clase para el logotipo de la compañía y/o el nombre.

- **.navbar-nav:** la clase para el elemento `<div>` o `<ul>` que contiene los enlaces de navegación.

- **.navbar-expand-{breakpoint}:** la clase que determina el punto de quiebre (breakpoint) a partir del cual la barra de navegación se expandirá.

- **.navbar-toggler:** la clase para el botón del menú de hamburguesa en dispositivos móviles.

- **.navbar-toggler-icon:** la clase para el ícono del menú de hamburguesa.

- **.collapse y .navbar-collapse:** la clase que agrupa y oculta los elementos de navegación detrás del botón de hamburguesa hasta que se alcance el punto de quiebre definido.

- **.nav-item:** la clase para un elemento de lista `<li>`.

- **.nav-link:** la clase para un enlace del menú `<a>`.

<br>

---

**[Componentes bootstrap código 1]**

---

```html
<div class="container my-5 ">
  <div class="card  col-4">
    <div class="card-body text-center">
      <h3 class="card-title">Titulo</h3>
      <h5 class="card-subtitle">Sub-Titulo</h5>
      <p class="card-text my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse. Dolorem
        minima soluta ab ducimus voluptatem?
      </p>
      <a href="#" class="btn btn-primary">En savoir plus</a>
    </div>
  </div>
</div>
```

---

<br>

**En este ejemplo**, que **retoma todas las clases mencionadas anteriormente**, encontramos la **clase `.navbar-expand-md`**, que **indica que la barra de navegación se expandirá a partir del punto de quiebre md.**

La **clase `.fixed-top`** **fija la navegación en la parte superior de la pantalla.**

La **clase `.bg-body-tertiary`** **proporciona el color de fondo de la barra de navegación**.

Se pueden utilizar todos los colores disponibles en Bootstrap.

**También podemos personalizar el color de fondo con el atributo `style='background-color: #...;`**.

<br>

---

<br>

**En la parte `.navbar-brand`, hemos agregado un ícono SVG dentro del enlace `<a>`.**

**También podríamos haber agregado una imagen.**

<br>

---

<br>

**El atributo "`data-bs-target=''`" desencadena el modo de menú hamburguesa cuando se alcanza el punto de quiebre definido.**

**Para que esto funcione correctamente, el `nombre del atributo` debe ser `idéntico` al atributo `id=""` del elemento div `.collapse` `.navbar-collapse`.**

<br>

---

---

<br>

**El menú 1 tiene la clase `.active`, lo que indica que actualmente estamos en esa página.**

<br>

---

<br>

**El menú 5 es un `botón`.**

<br>

---

---

<br>

<br>

---

### **Navegación con menu dropdown**

---

<br>

**Bootstrap nos permite agregar `menús desplegables (dropdown`) en nuestros menús.**

**Los menús desplegables deben estar incluidos dentro de un elemento `<ul>` con la clase `.dropdown-menu`.**

<br>

---

```html
<nav class="navbar fixed-top navbar-expand-md bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="#FF7C02"
        class="bi bi-image me-3"
        viewBox="0 0 16 16"
      >
        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        <path
          d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"
        /></svg
      >Mi Proyecto</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Menu 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu 2</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu déroulant
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Sub-menu 1</a></li>
            <li><a class="dropdown-item" href="#">Sub-menu 2</a></li>
            <li><a class="dropdown-item" href="#">Sub-menu 3</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

<br>

---

---

<br>

<br>

---

#### **Observación**

---

<br>

**El último `<li>` tiene las clases `.nav-item` `.dropdown` y su enlace `<a>` tiene las clases `.nav-link` `.dropdown-toggle`.**

**El enlace tiene el atributo `role="button"` y el atributo `data-bs-toggle="dropdown"`.**

**Esto permite que JavaScript active el menú desplegable.**

<br>

---

**El menú desplegable funciona correctamente en pantallas pequeñas en modo hamburguesa (burger).**

![menu dropdown](./02-Navegacion-breadcrumb-card-pagi-%26-barra-de-progresion/img/composants-bootstrap-image1_1.png)

---

<br>

---

---

<br>

<br>

---

### **Formulario en la navegación**

---

<br>

**Para sitios web con mucho contenido, es interesante incorporar un formulario de búsqueda en la navegación.**

Bootstrap ofrece esta opción muy fácil de implementar.

**Para integrar nuestro formulario de búsqueda, lo colocamos dentro de la div `.navbar `.navbar-collapse`.**

De esta manera, cuando el menú está en modo burger en pantallas pequeñas, el formulario se encuentra debajo de la navegación.

<br>

---

**Le menu déroulant fonctionne bien évidemment sur petit écran en mode burger :**

```html
<nav class="navbar sticky-top navbar-expand-md bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="#106DFD"
        class="bi bi-image me-3"
        viewBox="0 0 16 16"
      >
        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        <path
          d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"
        /></svg
      >Mi proyecto</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Menu 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu 3</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Rechercher"
        />
        <button class="btn btn-outline-primary" type="submit">
          Rechercher
        </button>
      </form>
    </div>
  </div>
</nav>
```

---

<br>

El formulario se coloca dentro de las etiquetas `<form></form>`.

Tiene la clase `.d-flex` para un formulario en línea y el atributo `role='search'`.

El `<input>` tiene la clase `.form-control` y el atributo `type='search'`.

El `<button>` tiene el atributo type='submit'.

<br>

---

---

<br>

<br>

---

### **El `breadcrumb` (ruta de navegación)**

---

<br>

**El breadcrumb (navegación de ruta) es una función de navegación en un sitio web que nos permite orientarnos y determinar en qué página estamos navegando actualmente.**

<br>

---

---

<br>

<br>

---

### **Las `cards`**

---

<br>

Una tarjeta es un contenedor con contenido flexible y expansible.

Incluye opciones de encabezado y pie de página, una amplia variedad de contenido, colores de fondo contextualizados y potentes opciones de visualización.

<br>

---

---

<br>

<br>

---

### **Tarjeta simple**

---

<br>

Una tarjeta simple puede contener solo texto, pero generalmente se incluye un título, a veces un subtítulo, texto y un botón para iniciar una acción.

<br>

---

<br>

Una tarjeta se encuentra dentro de un div con la clase `.card`.

Es esta clase la que le dará un borde de 1px alrededor y esquinas redondeadas.

El div con la clase `.card-body` agregará el padding entre el borde y el contenido.

Colocaremos nuestros títulos, subtítulos y botones dentro del div `.card-body` para mantener el padding.

<br>

---

**Código:**

```html
<div class="container my-5 ">
  <div class="card  col-4">
    <div class="card-body text-center">
      <h3 class="card-title">Titulo</h3>
      <h5 class="card-subtitle">Sub-titulo</h5>
      <p class="card-text my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse. Dolorem
        minima soluta ab ducimus voluptatem?
      </p>
      <a href="#" class="btn btn-primary">Saber mas</a>
    </div>
  </div>
</div>
```

---

---

<br>

<br>

---

#### **Observación**

---

<br>

Aquí, la tarjeta tiene la clase `col-4`.

Si no contenemos nuestras tarjetas dentro de una columna, ocuparán todo el espacio disponible en el contenedor padre.

<br>

---

<br>

También podríamos haber usado enlaces en lugar de botones.

En ese caso, los enlaces tendrían la clase `.card-link`.

Si se colocan varios enlaces, la clase `.card-link` los colocará uno al lado del otro con un pequeño margen entre ellos para distinguirlos adecuadamente.

<br>

---

---

<br>

<br>

---

### **Tarjeta con imagen**

---

<br>

Podemos colocar una imagen dentro de una tarjeta. Es una práctica muy común en las páginas de artículos de blog. Podemos colocar la imagen encima del contenido, debajo, en el medio o incluso como fondo.

<br>

---

**Código:**

```html
<div class="container">
  <div class="row g-0">
    <div class="card col-2 me-4">
      <img src="chat.jpg" class="card-img-top" alt="..." />
      <div class="card-body text-center">
        <h3 class="card-title">Titulo</h3>
        <h5 class="card-subtitle">Sub-Titulo</h5>
        <p class="card-text my-4">Lorem ipsum dolor sit amet?</p>
        <a href="#" class="btn btn-primary">Saber mas</a>
      </div>
    </div>
    <div class="card col-2 me-4">
      <div class="card-body text-center">
        <h3 class="card-title">Titulo</h3>
        <h5 class="card-subtitle">Sub-Titulo</h5>
        <p class="card-text my-4">Lorem ipsum dolor sit amet?</p>
        <a href="#" class="btn btn-primary">Saber mas</a>
      </div>
      <img src="chat.jpg" class="card-img-bottom" alt="..." />
    </div>
    <div class="card col-2 me-4">
      <div class="card-body text-center">
        <h3 class="card-title">Titulo</h3>
        <h5 class="card-subtitle mb-4">Sub-Titulo</h5>
        <img src="chat.jpg" class="card-img" alt="..." />
        <p class="card-text my-4">Lorem ipsum dolor sit amet?</p>
        <a href="#" class="btn btn-primary">Saber mas</a>
      </div>
    </div>
  </div>
  <div class="card col-4 mt-5 ">
    <img src="chat.jpg" class="card-img opacity-25" alt="..." />
    <div class="card-body card-img-overlay text-center">
      <h3 class="card-title mt-4">Titulo</h3>
      <h5 class="card-subtitle">Sub-Titulo</h5>
      <p class="card-text my-4">Lorem ipsum dolor sit amet?</p>
      <a href="#" class="btn btn-primary">Saber mas</a>
    </div>
  </div>
</div>
```

---

<br>

La imagen de la tercera tarjeta tiene un relleno entre el borde y la imagen.

Esto se debe a que está contenida dentro de la div **`.card-body`**.

La imagen de la última tarjeta tiene la clase **`.opacity-25`**, lo que le da una opacidad del 25%.

<br>

---

---

<br>

<br>

---

### **Tarjeta con grupo de listas**

---

<br>

Podemos integrar un grupo de listas en nuestras tarjetas.

Es especialmente útil para enumerar y comparar los elementos incluidos en diferentes paquetes de venta, por ejemplo.

<br>

---

**Código:**

```html
<div class="container">
  <div class="row">
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Paquete simple</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Primer elemento</li>
            <li class="list-group-item">Segundo elemento</li>
            <li class="list-group-item">Tercer elemento</li>
          </ul>
          <a href="#" class="btn btn-primary">En savoir plus</a>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Forfait pro</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Primer elemento</li>
            <li class="list-group-item">Segundo elemento</li>
            <li class="list-group-item">Tercer elemento</li>
            <li class="list-group-item">Cuarto elemento</li>
          </ul>
          <a href="#" class="btn btn-primary">En savoir plus</a>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Forfait pro +</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Primer elemento</li>
            <li class="list-group-item">Segundo elemento</li>
            <li class="list-group-item">Tercer elemento</li>
            <li class="list-group-item">Cuarto elemento</li>
            <li class="list-group-item">Quinto elemento</li>
          </ul>
          <a href="#" class="btn btn-primary">Saber mas</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

<br>

Los elementos `<ul>` de la lista tienen las clases `.list-group` y `.list-group-flush`.

Esta última elimina el borde y las esquinas redondeadas que suelen tener las listas.

Los elementos `<li>` tienen la clase `.list-group-item`.

<br>

---

---

<br>

<br>

---

### **Tarjeta con encabezado y pie de página**

---

<br>

Para una mejor presentación de nuestras cartas, podemos agregar un encabezado y un pie de página.

<br>

---

**Código:**

```html
<div class="container">
  <div class="card col-4 text-center">
    <div class="card-header">Último artículo</div>
    <div class="card-body">
      <h4 class="card-title">Título del artículo</h4>
      <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure unde
        labore cupiditate mollitia delectus odit perspiciatis quo consectetur,
        veniam ab, rem minima, nostrum ipsum similique obcaecati doloribus.
        Maxime, aliquid animi?
      </p>
      <a href="#" class="btn btn-primary">Leer más</a>
    </div>
    <div class="card-footer text-muted">Hace 2 horas</div>
  </div>
</div>
```

---

<br>

El encabezado tiene la clase `.card-header`, mientras que el pie de página tiene la clase `.card-footer`.

La clase _text-muted_ en el pie de página le da ese aspecto de texto en tonos grises.

<br>

---

---

<br>

<br>

---

### **Tarjeta mix y match**

---

<br>

Con las tarjetas de Bootstrap, todo es posible.

Podemos poner todos los elementos en una misma tarjeta.

<br>

---

**Código:**

```html
<div class="container">
  <div class="card col-4 text-center">
    <div class="card-header">Último artículo</div>
    <img src="chat.jpg" class="card-img-top" alt="" />
    <div class="card-body">
      <h4 class="card-title">Título del artículo</h4>
      <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure unde
        labore cupiditate mollitia delectus odit perspiciatis quo consectetur,
        veniam ab, rem minima, nostrum ipsum similique obcaecati doloribus.
        Maxime, aliquid animi?
      </p>
      <a href="#" class="btn btn-primary">Leer más</a>
      <hr />
      <h5>Leer también</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><a href="#">Otro artículo</a></li>
        <li class="list-group-item"><a href="#">Otro artículo</a></li>
        <li class="list-group-item"><a href="#">Otro artículo</a></li>
      </ul>
    </div>
    <div class="card-footer text-muted">Hace 2 horas</div>
  </div>
</div>
```

---

<br>

Todo lo que hemos visto anteriormente se recopila en la misma tarjeta.

Hemos puesto enlaces en las listas para dirigir al usuario a otros artículos.

<br>

---

---

<br>

<br>

---

### **Tarjeta horizontal**

---

<br>

Gracias al sistema de cuadrícula Bootstrap, podemos poner nuestras tarjetas horizontalmente desde un cierto punto de breakpoint para una buena responsabilidad.

<br>

---

**Código:**

```html
<div class="container">
  <div class="card mb-3 col-8">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="chat.jpg" class="img-fluid rounded-start" alt="" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title">Título del artículo</h4>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            voluptatibus, aspernatur asperiores omnis assumenda tenetur dolores,
            quibusdam exercitationem enim soluta doloribus fugiat atque laborum
            deserunt ducimus quisquam quis eum a!
          </p>
          <a href="#" class="btn btn-primary my-4">Leer más</a>
          <p class="card-text text-muted">
            Última actualización: hace 2 minutos
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

<br>

---

---

<br>

<br>

---

#### **Observación**

---

<br>

La tarjeta está contenida en una fila `(.row)` donde se han eliminado los espacios entre las columnas con la clase `.g-0`.

La imagen tiene la clase `.img-fluid` para mantener su proporción independientemente del tamaño de la pantalla, y la clase `.rounded-start` para tener las esquinas redondeadas solo en el lado izquierdo.

La imagen se coloca en una columna `.col-md-4` y el cuerpo de la tarjeta en una columna `.col-md-8`.

<br>

---

---

<br>

<br>

---

### **La Paginación**

---

<br>

El componente de paginación nos permite agregar paginación a una página cuando hay mucho contenido.

A menudo se encuentran en páginas de blogs, foros o secciones de comentarios de un artículo.

Bootstrap solo nos proporciona la interfaz de usuario.

Para gestionar este componente de manera dinámica, se requieren scripts adicionales.

<br>

---

**Código:**

```html
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

---

<br>

En este ejemplo, se utiliza el elemento `<nav>` con el atributo `.aria-label` establecido como `"Page navigation"` para proporcionar una etiqueta descriptiva.

El componente de paginación se encuentra dentro de un `<ul>` con la clase `"pagination"`.

Cada página se representa como un elemento `<li>` con la clase `"page-item"`.

Los enlaces de navegación tienen la clase `"page-link"` y contienen el número de página o los símbolos de flechas para avanzar o retroceder.

<br>

---

---

<br>

<br>

---

### **Barra de progreso**

---

<br>

Bootstrap nos proporciona el componente `"progress"` para mostrar barras de progreso en nuestros sitios web.

Este componente se utiliza generalmente para proporcionar retroalimentación al usuario sobre el avance de un proceso o acción específica.

Los usuarios pueden ver instantáneamente el progreso realizado y lo que queda por hacer.

Para que el componente funcione de manera dinámica, se deben agregar scripts adicionales.

<br>

---

**Código:**

```html
<div class="container">
  <div
    class="progress"
    role="progressbar"
    aria-label="Exemple"
    aria-valuenow="50"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="progress-bar bg-success" style="width: 50%">50%</div>
  </div>
</div>
```

---

<br>

En este ejemplo, se utiliza el elemento `<nav>` con el atributo `.aria-label` establecido como `"Page navigation"` para proporcionar una etiqueta descriptiva.

El componente de paginación se encuentra dentro de un `<ul>` con la clase `"pagination"`.

Cada página se representa como un elemento `<li>` con la clase `"page-item"`.

Los enlaces de navegación tienen la clase `"page-link"` y contienen el número de página o los símbolos de flechas para avanzar o retroceder.

<br>

La div con la clase `.progress` se utiliza como contenedor para indicar el valor máximo de la barra de progreso.

Debe tener el atributo `role="progress"` y una etiqueta `aria` para que sea accesible.

El atributo `aria-valuenow="50"` indica el valor actual de la barra de progreso.

Los atributos `aria-valuemin="0"` y `aria-valuemax="100"` indican el valor mínimo y máximo que puede tener la barra de progreso.

Estos son valores predeterminados que pueden personalizarse según sea necesario.

<br>

---

<br>

La div con la clase `.progress-bar` muestra el progreso de la barra.

Debe tener un estilo en línea, una clase utilitaria o un CSS personalizado para su anchura.

En este caso, en lugar de usar el atributo `style="width: 50%"`, podríamos haber usado la clase `.w-50`.

<br>

---

---

<br>

<br>

---

### **Barras estriadas y animadas**

---

<br>

Podemos dar un poco de vida a nuestras barras de progreso dándoles un efecto rayado y animado. 

<br>

---

**Código:**

```html
<div class="container">
  <div
    class="progress"
    role="progressbar"
    aria-label="Exemple strié et animé"
    aria-valuenow="50"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div
      class="progress-bar bg-success progress-bar-striped progress-bar-animated"
      style="width: 50%"
    >
      50%
    </div>
  </div>
</div>
```

---

<br>

Para lograr este efecto estriado y animado, simplemente hemos agregado las clases `.progress-bar-striped` y `.progress-bar-animated` a nuestra div `.progress-bar`.

<br>

---

---
