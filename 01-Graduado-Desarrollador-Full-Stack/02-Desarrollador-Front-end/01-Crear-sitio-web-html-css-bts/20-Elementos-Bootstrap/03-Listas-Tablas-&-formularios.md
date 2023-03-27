# **Listas, Tablas & Formularios**

<br>

---

## **Listas**

---

<br>

Bootstrap nos ofrece una serie de clases para personalizar las listas numeradas o no numeradas.

Al igual que en HTML, los elementos de lista `<li></li>` no numerados se colocan entre las etiquetas `<ul></ul>` para una lista desordenada, y los elementos de lista `<li></li>` numerados se colocan entre las etiquetas `<ol></ol>` para una lista ordenada.

Las etiquetas `<ul></ul>` y `<ol></ol>` tienen la clase `.list-group` y los elementos `<li></li>` tienen la clase `.list-group-item`.

<br>

---

---

<br>

<br>

---

### **Utilizar listas simples con colores, iconos y distintivos.**

---

<br>

**Podemos añadir:**

<br>

- Enlaces

- Botones

- distintivos

- iconos

- casillas de verificación

  y

- radios a las listas.

<br>

---

**Gracias al JavaScript de Bootstrap, podremos interactuar con las listas.**

```html
<div class="container">
  <div class="row">
    <ul class="list-group col-6 mx-auto ">
      <li class="list-group-item">
        <i class="bi bi-hand-thumbs-up-fill me-2"></i>Primer elemento de la
        lista
      </li>

      <li
        class="list-group-item list-group-item-primary active"
        aria-current="true"
      >
        Segundo elemento de la lista
      </li>

      <li
        class="list-group-item list-group-item-warning d-flex justify-content-between align-items-center"
      >
        Tercer elemento de la lista<span class="badge bg-primary rounded-pill"
          >2</span
        >
      </li>

      <li class="list-group-item disabled" aria-disabled="true">
        Cuarto elemento de la lista
      </li>

      <li class="list-group-item list-group-item-success">
        Quinto elemento de la lista<i
          class="bi bi-hand-thumbs-up-fill ms-2"
        ></i>
      </li>
    </ul>

    <ol class="list-group list-group-numbered col-6 mx-auto list-group-flush">
      <li class="list-group-item">
        <i class="bi bi-hand-thumbs-up-fill me-2"></i>Primer elemento de la
        lista
      </li>

      <li class="list-group-item active" aria-current="true">
        Segundo elemento de la lista
      </li>

      <li
        class="list-group-item list-group-item-warning d-flex  align-items-center"
      >
        Tercer elemento de la lista<span
          class="badge bg-primary rounded-pill ms-auto"
          >2</span
        >
      </li>

      <li class="list-group-item disabled" aria-disabled="true">
        Cuarto elemento de la lista
      </li>

      <li class="list-group-item list-group-item-success">
        Quinto elemento de la lista<i
          class="bi bi-hand-thumbs-up-fill ms-2"
        ></i>
      </li>
    </ol>
  </div>
</div>
```

<br>

**En este ejemplo, tenemos 2 listas.**

**La primera no está ordenada, mientras que la segunda sí lo está.**

`La segunda tiene la clase adicional` **"list-group-numbered"** (lista numerada).

**Observa que la segunda lista ya no tiene bordes.**

**Esto se debe a la clase `".list-group-flush"` que elimina los bordes y las esquinas redondeadas.**

<br>

---

<br>

También se pueden observar las clases conocidas como **`.active` para los segundos elementos de las listas, lo cual les da un color de fondo**, y **`.disabled`** para los cuartos elementos, lo que **los hace inactivos**.

**Hemos agregado colores a los terceros y quintos elementos con la clase `list-group-item-*`, donde `*` representa el nombre del color.**

Por supuesto, puedes utilizar todas las clases de colores disponibles en Bootstrap.

<br>

---

<br>

**Los iconos en los primeros y quintos elementos** de las listas pueden colocarse antes o después del texto.

**¿Prefieres un ícono encima o debajo del texto?**

**Simplemente agrega la clase `.d-block` al ícono y colócalo antes o después del texto.**

Las clases `.me-2` y `.ms-2` en los iconos crean un pequeño margen entre el texto y el ícono.

<br>

---

<br>

Por último, hemos colocado **un distintivo en los terceros elementos de las listas**.

Para obtener un diseño atractivo, **hemos aplicado las clases `.d-flex`, `.justify-content-between` y `.align-items-center` al elemento de la primera lista,** lo que coloca el distintivo a la derecha del elemento.

Para lograr el mismo diseño en la segunda lista, no necesitamos justificar nuestros elementos, ya que esto colocaría el número 3 a la izquierda, el texto en el centro y el distintivo a la derecha.

**En cambio, simplemente agregamos la clase `.ms-auto` al distintivo para ubicarlo completamente a la derecha.**

<br>

---

---

<br>

<br>

---

### **Utilizar las listas horizontales.**

---

<br>

**Podemos organizar nuestras listas horizontalmente agregando la clase adicional `.list-group-horizontal`.**

**Esta clase puede utilizar breakpoints para una mejor capacidad de respuesta.**

```html
<div class="container">
  <ol class="list-group text-center list-group-horizontal-lg">
    <li class="list-group-item">Primer elemento de la lista</li>

    <li class="list-group-item">Segundo elemento de la lista</li>

    <li class="list-group-item">Tercer elemento de la lista</li>

    <li class="list-group-item">Cuarto elemento de la lista</li>

    <li class="list-group-item">Quinto elemento de la lista</li>
  </ol>
</div>
```

<br>

---

---

<br>

<br>

---

### **Utilizar listas con enlaces y botones.**

---

<br>

**Podemos crear listas con enlaces y botones para dar un efecto de resaltado y asignar una acción a los elementos de la lista.**

**Para ello, añadiremos la clase `.list-group-item-action` a los `enlaces o botones`.**

**Para `desactivar un elemento de la lista`, podemos utilizar el atributo `"disabled"` en los botones.**

**Sin embargo, este atributo no funciona en los enlaces.**

**Para desactivar un enlace, añadiremos la clase `.disabled al enlace`:**

```html
<div class="container">
  <div class="row">
    <div class="list-group col-6">
      <a
        href="#"
        class="list-group-item list-group-item-action active"
        aria-current="true"
      >
        Primer enlace de la lista</a
      >

      <a href="#" class="list-group-item list-group-item-action"
        >Segundo enlace de la lista</a
      >

      <a href="#" class="list-group-item list-group-item-action"
        >Tercer enlace de la lista</a
      >

      <a href="#" class="list-group-item list-group-item-action"
        >Cuarto enlace de la lista</a
      >

      <a class="list-group-item list-group-item-action disabled"
        >Quinto enlace de la lista</a
      >
    </div>

    <div class="list-group col-6">
      <button
        type="button"
        class="list-group-item list-group-item-action active"
        aria-current="true"
      >
        Primer botón de la lista
      </button>

      <button type="button" class="list-group-item list-group-item-action">
        Segundo botón de la lista
      </button>

      <button type="button" class="list-group-item list-group-item-action">
        Tercer botón de la lista
      </button>

      <button type="button" class="list-group-item list-group-item-action">
        Cuarto botón de la lista
      </button>

      <button
        type="button"
        class="list-group-item list-group-item-action"
        disabled
      >
        Quinto botón de la lista
      </button>
    </div>
  </div>
</div>
```

<br>

**La primera lista** está redactada **con** enlaces **`<a>`**.

**El primer enlace está activo y tiene la clase `.active`**, así como el atributo **`aria-current="true"`** para lectores de pantalla.

En cambio, el **quinto enlace** está inactivo.

Se agrega la clase **`.disabled`** al enlace.

<br>

---

<br>

**La segunda lista** está hecha **con botones**.

Ten en cuenta que **en este caso** no **se utiliza** la clase `.btn`, sin embargo, **el atributo `type="button"`** está presente **para informar al navegador que se trata de un botón.**

**El quinto botón está inactivo con el atributo `disabled`.**

<br>

---

---

<br>

<br>

---

### **Utilizar listas con enlaces y botones.**

---

<br>

**Para hacer que nuestras listas sean interactivas, el script de JavaScript de Bootstrap debe incluirse en el `<body>`.**

**Necesitamos el atributo `data-bs-toggle="list"` en el elemento de enlace para activar el JavaScript.**

```html
<div class="container">
  <div class="row" role="tabpanel">
    <div class="list-group col-4" id="maListe" role="tablist">
      <a
        class="list-group-item list-group-item-action"
        data-bs-toggle="list"
        href="#accueil"
        role="tab"
        >Inicio</a
      >

      <a
        class="list-group-item list-group-item-action"
        data-bs-toggle="list"
        href="#portfolio"
        role="tab"
        >Portfolio</a
      >

      <a
        class="list-group-item list-group-item-action"
        data-bs-toggle="list"
        href="#apropos"
        role="tab"
        >Acerca de</a
      >

      <a
        class="list-group-item list-group-item-action"
        data-bs-toggle="list"
        href="#contact"
        role="tab"
        >Contacto</a
      >
    </div>

    <div class="tab-content col-8">
      <div class="tab-pane fade show" id="accueil" role="tabpanel">
        <h2>Inicio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum
          nulla id! Ea, dolor rerum corporis, omnis exercitationem laboriosam
          minus adipisci expedita quos sit molestias consequatur facilis
          repellat debitis cumque?
        </p>
      </div>

      <div class="tab-pane fade show " id="portfolio" role="tabpanel">
        <h2>Portfolio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum
          nulla id! Ea, dolor rerum corporis, omnis exercitationem laboriosam
          minus adipisci expedita quos sit molestias consequatur facilis
          repellat debitis cumque?
        </p>
      </div>

      <div class="tab-pane fade show " id="apropos" role="tabpanel">
        <h2>Acerca de</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum
          nulla id! Ea, dolor rerum corporis, omnis exercitationem laboriosam
          minus adipisci expedita quos sit molestias consequatur facilis
          repellat debitis cumque?
        </p>
      </div>

      <div class="tab-pane fade show " id="contact" role="tabpanel">
        <h2>Contacto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum
          nulla id! Ea, dolor rerum corporis, omnis exercitationem laboriosam
          minus adipisci expedita quos sit molestias consequatur facilis
          repellat debitis cumque?
        </p>
      </div>
    </div>
  </div>
</div>
```

<br>

En este ejemplo, primero tenemos nuestra **`.row`** con el **atributo `role="tabpanel"`**, seguida de una **`<div>`** con el **atributo `id="maListe"`** y el **atributo `role="tablist"`**.

Luego, vienen la lista de enlaces con las clases **`.list-group-item`** y **`.list-group-item-action`**, y los **atributos `data-bs-toggle="list"`**, **`href="#accueil"`** para especificar la dirección del enlace, y **`role="tab"`**.

**Esto es lo que vemos en el lado izquierdo.**

<br>

---

<br>

**El contenido de la derecha se coloca en la segunda `<div>`** que **tiene** la clase **`.tab-content`**.

**Cada parte de** contenido que corresponde a un **enlace tiene la clase `.tab-pane`**.

**El atributo `id`** debe ser **idéntico al atributo `href="#id"` del enlace correspondiente**, y el atributo `role` es **`role="tabpanel"`**.

<br>

---

<br>

Las clases **`.fade` y `.show`** **se usan para** crear **un ligero retraso** entre el momento **en el** **que se hace clic** en el enlace **y la aparición del contenido**.

<br>

---

<br>

**Al hacer clic en un enlace de la lista izquierda, el contenido del enlace aparece en la parte derecha.**

No dudes en reproducir este ejemplo para comprender mejor su funcionamiento.

<br>

---

<br>

**Ten en cuenta que podríamos haber logrado exactamente el mismo resultado utilizando botones en lugar de enlaces.**

**Solo necesitamos reemplazar las etiquetas `<a>` con etiquetas `<button>`, agregar el atributo `type="button"` a los botones y asegurarnos de que los atributos `"id"` sean idénticos a los `"href='#id'"`.**

<br>

---

---

<br>

<br>

---

## **Las tablas**

---

<br>

Bootstrap ofrece muchas posibilidades para personalizar las tablas HTML.

---

**Como recordatorio, una tabla está compuesta por los siguientes elementos:**

- La etiqueta `<table>` que define que estamos tratando con una tabla.

- La etiqueta `<thead>` que define la fila de encabezados de la tabla.

- La etiqueta `<th>` que define que la celda es un encabezado.

- La etiqueta `<tbody>` que define el cuerpo de la tabla.

- La etiqueta `<tr>` que define una fila de la tabla.

- La etiqueta `<td>` que define una celda de la tabla.

- La etiqueta `<tfoot>` que define el pie de la tabla (opcional).

- La etiqueta `<caption>` que proporciona un título para la tabla (opcional).

<br>

---

**Aquí tienes un ejemplo de tabla que incluye los elementos esenciales que se pueden utilizar con Bootstrap:**

```html
<div class="container">
  <div class="table-responsive-md">
    <table
      class="table table-warning table-striped table-hover table-bordered border-primary caption-top"
    >
      <caption>
        Listas de usuarios
      </caption>
      <thead class="table-dark ">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Jean</td>
          <td>Dupont</td>
          <td>jean@dupont.fr</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Charles</td>
          <td class="table-active">Dubois</td>
          <td>charles@dubois.fr</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Marguerite la vache</td>
          <td>marguerite@lavache.fr</td>
        </tr>
      </tbody>
      <tfoot>
        <th scope="row">Pie de tabla</th>
        <td><i class="bi bi-hand-thumbs-up-fill"></i> Corte de pulgar</td>
        <td>
          <button type="button" class="btn btn-success">Soy un botón</button>
        </td>
        <td>
          <input
            type="radio"
            name="btnradio"
            class="form-check-input me-2"
            autocomplete="off"
          />sí<input
            type="radio"
            name="btnradio"
            class="form-check-input ms-4 me-2"
            autocomplete="off"
          />no
        </td>
      </tfoot>
    </table>
  </div>
</div>
```

<br>

**En este ejemplo, hemos reunido una gran cantidad de clases.**

**Este ejemplo no es exhaustivo, pero ya brinda una idea de las posibilidades que tenemos para construir tablas.**

<br>

---

**La etiqueta `<table>` tiene muchas clases:**

- **`.table`** indica que se trata de una tabla.

- **`.table-warning`** le da al tabla un color amarillo.

- **`.table-striped`** proporciona un efecto de franjas.

- **`.table-hover`** genera un efecto de sombreado al pasar el mouse sobre una fila.

- **`.table-bordered`** agrega bordes a la tabla.

- **`.border-primary`** determina el color del borde.

- **`.caption-top`** coloca la leyenda en la parte superior de la tabla.

**Ten en cuenta que si no se usa esta clase, la leyenda se colocará debajo de la tabla, si hay una.**

<br>

---

<br>

La etiqueta HTML **`<caption>` se utiliza para la leyenda.**

<br>

---

<br>

La etiqueta **`<thead>` se utiliza para los encabezados de la tabla.**

**Observa la clase `.table-dark`, que proporciona un fondo negro pero muestra los encabezados en blanco.**

<br>

---

<br>

**Las etiquetas `<th>` tienen el atributo `scope="col"`, lo que significa que los encabezados se refieren a las celdas de las columnas.**

<br>

---

<br>

**En la parte del cuerpo (`<body>`) de la tabla, se puede observar que las etiquetas `<th>` tienen el atributo `scope="row"`, lo que indica que ahora nos estamos centrando en la fila.**

<br>

---

<br>

La celda **"Dubois" tiene la clase `.table-active`**, lo que la hace gris.

**La celda "Marguerite la vache" tiene el atributo `colspan="2"`, lo que significa que ocupa dos columnas por sí sola.**

<br>

---

<br>

**Finalmente, en el pie de la tabla, hemos agregado un ícono, un botón y dos botones "radio" para ilustrar las posibilidades que ofrecen las tablas.**

<br>

---

---

<br>

<br>

---

### **Observación**

---

<br>

Esta tabla está envuelta en una div con la clase **`.table-responsive-md`**.

Esto permitirá tener una barra de desplazamiento horizontal en la parte inferior de la tabla cuando la pantalla alcance el tamaño mediano y el contenido de la tabla sea más grande que la pantalla.

<br>

---

---

<br>

<br>

---

## **Los Formularios**

---

<br>

Bootstrap nos permite crear formularios de manera simple y rápida para obtener una apariencia coherente en diferentes navegadores y tipos de pantallas.

**Podemos verificar** las **entradas** realizadas por los usuarios **utilizando el atributo `type`**.

Por lo tanto, es importante proporcionar correctamente este atributo.

<br>

---

**Ejemplo: Bootstrap ofrece un conjunto de clases para estilizar nuestros campos de formulario.**

```html
<div class="container">
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>

    <input
      type="text"
      class="form-control"
      id="nombre"
      placeholder="Vuestro nombre (obligatorio)"
      required
    />
  </div>

  <div class="mb-3">
    <label for="apellido" class="form-label">Apellido</label>

    <input
      type="text"
      class="form-control"
      id="apellido"
      placeholder="Vuestro apellido (obligatorio)"
      required
    />
  </div>

  <div class="col-md-3 mb-3">
    <label for="email" class="form-label">Email</label>

    <input
      type="email"
      class="form-control"
      id="email"
      placeholder="Vuestro correo electrónico (obligatorio)"
      required
    />
  </div>

  <div class="mb-3">
    <label for="textmessage" class="form-label"> Message</label>

    <textarea class="form-control" id="textmessage" rows="3"></textarea>
  </div>
</div>
```

<br>

**Las etiquetas `<label>` tienen la clase `.form-label`, mientras que** los campos **`<input>` y `<textarea>` tienen** la clase **`.form-control`.**

Los atributos **`"for='' "`** de las etiquetas **`<label>`** **deben ser idénticos a los atributos `"id='' "` de los campos `<input>`**.

**El atributo "required" indica que el campo debe ser completado para que el formulario pueda ser enviado.**

<br>

---

---

<br>

<br>

---

### **Modificar el tamaño de los campos**

---

<br>

**Bootstrap nos proporciona 2 tamaños adicionales para nuestros campos con las clases `.form-control-lg` para campos más anchos y `.form-control-sm` para campos más pequeños.**

```html
<div class="container">
  <div class="mb-3">
    <input
      class="form-control form-control-lg mb-3"
      type="text"
      placeholder="este campo es grande"
    />

    <input
      class="form-control mb-3"
      type="text"
      placeholder="tamaño de campo por defecto"
    />

    <input
      class="form-control form-control-sm mb-3"
      type="text"
      placeholder="este campo es pequeño"
    />
  </div>
</div>
```

<br>

---

---

<br>

<br>

---

### **Hacer campos inactivos**

---

<br>

**Podemos desactivar los campos, hacerlos de solo lectura o incluso combinar ambas opciones a la vez:**

```html
<div class="container">
  <input
    class="form-control mb-3"
    type="text"
    placeholder="campo desactivado"
    disabled
  />

  <input
    class="form-control mb-3"
    type="text"
    value="campo desactivado y solo lectura"
    disabled
    readonly
  />

  <input
    class="form-control mb-3"
    type="text"
    value="campo en lectura solo"
    readonly
  />

  <input
    class="form-control-plaintext mb-3"
    type="text"
    value="campo en lectura solo sin borde"
    readonly
  />
</div>
```

<br>

El atributo **`"disabled"`** hace que el campo esté inactivo.

El atributo **`"readonly"`** también hace que el campo esté inactivo.

Sin embargo, si el atributo está solo, es decir, sin el atributo **`"disabled"`** como en el tercer ejemplo, el campo aún se puede seleccionar con el mouse, pero no se puede editar.

<br>

---

<br>

Por último, si un campo tiene el atributo **`"readonly"`** y la clase **`.form-control-plaintext`** (como en el último input), los estilos predeterminados de Bootstrap se desactivan, pero el campo conserva los márgenes y rellenos espaciados.

<br>

---

---

<br>

<br>

---

### **Uso de campos de tipo `<select>`**

---

<br>

Los campos de tipo **`<select>`** tienen la clase **`.form-select`**.

Las clases de tamaño también se pueden aplicar a estos campos.

Para un campo grande, agregaremos la clase **`.form-select-lg`**, y para un campo pequeño, agregaremos la clase **`.form-select-sm`**.

Podemos permitir selecciones múltiples utilizando el atributo **`"multiple"`**.

Por último, podemos desactivar estos campos con el atributo **`"disabled"`**.

<br>

---

```html
<div class="container">
  <select class="form-select" multiple>
    <option selected>Elección de opciones</option>

    <option value="1">Opción 1</option>

    <option value="2">Opción 2</option>

    <option value="3">Opción 3</option>
  </select>
</div>
```

<br>

El atributo **`"disabled"`** hace que el campo esté inactivo.

El atributo **`"readonly"`** también hace que el campo esté inactivo.

Sin embargo, si el atributo está solo, es decir, sin el atributo **`"disabled"`** como en el tercer ejemplo, el campo aún se puede seleccionar con el mouse, pero no se puede editar.

<br>

---

<br>

Por último, si un campo tiene el atributo **`"readonly"`** y la clase **`.form-control-plaintext`** (como en el último input), los estilos predeterminados de Bootstrap se desactivan, pero el campo conserva los márgenes y rellenos espaciados.

<br>

---

---

<br>

<br>

---

### **Utilizar los campos de tipo checkbox y radio**

---

<br>

Al igual que en un formulario HTML clásico, podemos agregar campos de tipo checkbox y radio.

<br>

---

```html
<div class="container">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defautcheck" />

    <label class="form-check-label" for="defautcheck">
      Checkbox por defecto
    </label>
  </div>

  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="defautcheck2"
      checked
    />

    <label class="form-check-label" for="defautcheck2">
      Checkbox seleccionado
    </label>
  </div>

  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="CheckDisabled"
      disabled
    />

    <label class="form-check-label" for="CheckDisabled">
      Checkbox inactivo
    </label>
  </div>

  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="CheckedDisabled2"
      checked
      disabled
    />

    <label class="form-check-label" for="CheckedDisabled2">
      Checkbox seleccionado inactivo
    </label>
  </div>
</div>
```

<br>

Los campos de tipo **`<checkbox>`** y **`<radio>`** están envueltos en un div con la clase **`.form-check`**.

Los campos **`<input>`** y **`<label>`** tienen las clases **`.form-check-input` y `.form-check-label`**, respectivamente.

El atributo **`"checked"`** hace que la casilla esté seleccionada por defecto.

El atributo **`"disabled"`** desactiva el campo, y si se combinan los atributos **`"checked"`** y **`"disabled"`** en el mismo **`<input>`**, el campo estará desactivado pero seleccionado.

Los campos de tipo **`<radio>`** tienen las mismas clases y opciones, solo que el atributo **`"type=' ' "`** cambia a **`"radio"`**.

<br>

---

---

<br>

<br>

---

### **Uso de campos de tipo `switch`**

---

<br>

Los campos de tipo switch se utilizan con frecuencia en los formularios de consentimiento de GDPR.

En realidad, son campos de tipo checkbox.

<br>

---

```html
<div class="container">
  <div class="form-check form-switch">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="SwitchCheck"
    />

    <label class="form-check-label" for="SwitchCheck"
      >Default switch checkbox input</label
    >
  </div>
</div>
```

<br>

**Los switches son casillas de verificación en las que indicaremos el atributo `"role= 'switch'"`.**

**Los campos están rodeados por una `div` con las clases `.form-check` y `.form-switch`.**

**Los mismos atributos `"checked"`, `"disabled"` y `"disabled"` `"checked"` se pueden aplicar a un mismo `<input>`**.

<br>

---

---

<br>

<br>

---

### **La clase `.form-check-inline`**

---

<br>

**Por defecto, las casillas de verificación (checkbox) y los botones de opción (radio) tienen la propiedad `"display: block"` que los muestra en una línea separada.**

**Para alinearlos en la misma línea**, simplemente debes **agregar la clase `".form-check-inline"` al div con la clase `".form-check"`.**

<br>

---

**como se muestra a continuación:**

```html
<div class="container">
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      name="inlineRadio"
      id="inlineRadio1"
      value="option1"
    />

    <label class="form-check-label" for="inlineRadio1">Opción 1</label>
  </div>

  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      name="inlineRadio"
      id="inlineRadio2"
      value="option2"
    />

    <label class="form-check-label" for="inlineRadio2">Opción 2</label>
  </div>
</div>
```

<br>

---

---

<br>

<br>

---

### **La clase `.form-check-reverse`**

---

<br>

**Por último, podemos colocar nuestras casillas de verificación (checkbox), botones de opción (radio) y switches a la derecha del contenedor agregando la clase `".form-check-reverse"`:**

<br>

---

```html
<div class="container">
  <div class="form-check form-check-reverse">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="reverseCheck1"
    />

    <label class="form-check-label" for="reverseCheck1">
      Checkbox a la derecha
    </label>
  </div>
</div>
```

<br>

---

---

<br>

<br>

---

### **Los campos de tipo rango**

---

<br>

**Los campos de tipo rango permiten al usuario ingresar un valor numérico comprendido entre 2 límites.**

<br>

---

```html
<div class="container">
  <label for="range" class="form-label">Ejemplo de campo de tipo rango</label>

  <input
    type="range"
    class="form-range"
    min="0"
    max="5"
    step="0.5"
    id="range"
  />
</div>
```

<br>

**El elemento `<label>` tiene la clase `.form-label`, mientras que el `<input>` tiene la clase `.form-range`.**

**Podemos utilizar los atributos `(min='' '')` y `(max='' '')` para especificar los valores mínimo y máximo del rango.**

**Por defecto, estos valores están comprendidos entre `0` y `100`, pero pueden ser modificados.**

**También podemos utilizar el atributo `step=""` para especificar un valor de incremento.**

**En el ejemplo anterior, el número de pasos se duplica al utilizar `step='0.5'`.**

<br>

---

---

<br>

<br>

---

### **Los labels flotantes**

---

<br>

**Les labels flottants permettent de garder le placeholder toujours visible lorsque l’utilisateur renseigne le champ.**

<br>

---

**El placeholder se reduce y se coloca encima del campo de entrada.**

```html
<div class="container">
  <div class="form-floating mb-3">
    <input
      type="email"
      class="form-control"
      id="floatingInput"
      placeholder="name@example.com"
    />

    <label for="floatingInput">Correo electrónico</label>
  </div>

  <div class="form-floating">
    <input
      type="password"
      class="form-control"
      id="floatingPassword"
      placeholder="Password"
    />

    <label for="floatingPassword">Contraseña</label>
  </div>
</div>
```

<br>

**Al utilizar la clase `.form-floating` en el elemento contenedor de los `<input>` y `<label>`, el marcador de posición (`placeholder`) permanece flotante en el campo por encima de la línea de escritura.**

**Ten en cuenta que el `<input>` debe tener un marcador de posición y debe colocarse antes del `<label>`.**

<br>

---

---
