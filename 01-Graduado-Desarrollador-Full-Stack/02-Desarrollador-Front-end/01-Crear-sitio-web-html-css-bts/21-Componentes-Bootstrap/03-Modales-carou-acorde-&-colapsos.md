# **Los modales, los carousels, los acordeones y los colapsos**

<br>

**En esta segunda parte, abordaremos los siguientes componentes:**

<br>

- **Las ventanas modales:**

  - que se utilizan para solicitar una acción específica al usuario;

<br>
    
- **El componente de carrusel:**

    - que nos permite mostrar una presentación de diapositivas;

<br>    
    
- **El componente de acordeón:**

    - que es muy útil cuando queremos tener contenido que se puede abrir y cerrar, a menudo utilizado en las preguntas frecuentes.

<br>    
    
- **los colapsos**

    - que tienen una funcionalidad similar.

<br>

---

---

<br>

<br>

---

## **Ventanas modales**

---

<br>

Las ventanas modales se posicionan por encima de todo el contenido de la página y desactivan el desplazamiento de la página para permitir que el contenido de la ventana modal se desplace en su lugar.

Al hacer clic fuera de la ventana modal, esta se cierra automáticamente.

También es posible mantenerla abierta incluso al hacer clic fuera de ella, en cuyo caso es importante proporcionar una opción de cierre explícita para el usuario.

Bootstrap solo admite una ventana modal a la vez.

Es importante no abusar de este componente, ya que puede resultar en una mala experiencia para el usuario.

<br>

---

```html
<div class="container">
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exempleModal"
  >
    Haga clic para abrir la ventana modal
  </button>
  <div
    class="modal fade"
    id="exempleModal"
    tabindex="-1"
    aria-labelledby="exempleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="exempleModalLabel">
            Título de la ventana modal
          </h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Fermer"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            repellat molestiae et tempora nesciunt impedit facilis dolores amet
            corporis eligendi, adipisci, quisquam aspernatur! Soluta, excepturi
            laboriosam porro dolorum doloremque assumenda! Nesciunt eos eius
            fuga excepturi cum at id deserunt dicta placeat fugiat ipsa,
            mollitia alias minima illum aspernatur quidem sunt sapiente impedit!
            Voluptate asperiores deserunt beatae ipsa sit, non quod. Eveniet
            minus omnis, vero fugit quos maxime quaerat exercitationem pariatur
            modi eaque amet voluptatum quia ullam, reprehenderit possimus iure
            quidem fuga commodi distinctio dignissimos sed iusto et?
            Consequuntur, itaque omnis.
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

<br>

La ventana modal se activa mediante un botón, que es el primer elemento.

El botón tiene los atributos `data-bs-toggle="modal"`, que indica qué se va a activar, y `data-bs-target="#exempleModal"`, que indica el objetivo.

<br>

---

<br>

A continuación, se encuentra la propia ventana modal, con la etiqueta `div` y la clase `.modal`, y el atributo `id="exempleModal"`, que debe ser igual al atributo `data-bs-target="#exempleModal"` del botón.

Dentro de este `div`, tenemos la div `.modal-dialog`, que envuelve la `div .modal-content`.

Estas dos `divs` definen el contenido de la ventana.

Dentro de `.modal-content`, tenemos un `encabezado`, un `cuerpo` y un `pie de página`, representados por las clases `.modal-header`, `.modal-body` y `.modal-footer`, respectivamente.

Justo debajo del título `H3`, hay un botón con la clase `.btn-close` y el atributo `data-bs-dismiss="modal"`.

Este botón se representa con una cruz en la esquina superior derecha de la ventana.

En el pie de página, hay otro botón con la misma función.

<br>

---

---

<br>

<br>

---

#### **Observación**

---

<br>

```
Esta ventana modal se puede cerrar fácilmente haciendo clic fuera de la ventana.
```

<br>

---

---

<br>

<br>

---

### **Ventanas modales estáticas**

---

<br>

**Podemos crear ventanas modales que solo se cierran al hacer clic en el botón de cierre y no al hacer clic fuera de la ventana.**

**Estos tipos de modales se utilizan para obligar al usuario a aceptar (o no) las cookies, por ejemplo.**

**Estas ventanas modales se llaman `"Static Backdrop"`.**

<br>

---

```html
<div class="container">
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exempleModal"
  >
    Haga clic para abrir la ventana
  </button>
  <div
    class="modal fade"
    id="exempleModal"
    data-bs-backdrop="static"
    tabindex="-1"
    aria-labelledby="exempleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="exempleModalLabel">
            Título de la ventana modal
          </h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Fermer"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            repellat molestiae et tempora nesciunt impedit facilis dolores amet
            corporis eligendi, adipisci, quisquam aspernatur! Soluta, excepturi
            laboriosam porro dolorum doloremque assumenda! Nesciunt eos eius
            fuga excepturi cum at id deserunt dicta placeat fugiat ipsa,
            mollitia alias minima illum aspernatur quidem sunt sapiente impedit!
            Voluptate asperiores deserunt beatae ipsa sit, non quod. Eveniet
            minus omnis, vero fugit quos maxime quaerat exercitationem pariatur
            modi eaque amet voluptatum quia ullam, reprehenderit possimus iure
            quidem fuga commodi distinctio dignissimos sed iusto et?
            Consequuntur, itaque omnis.
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

<br>

Esta ventana modal es idéntica al ejemplo anterior, excepto por el atributo `data-bs-backdrop="static"` en la div `.modal`.

Es este atributo el que hace que la ventana solo se cierre al hacer clic en uno de los botones de cierre.

<br>

---

---

<br>

<br>

---

### **Las ventanas modales con barra de desplazamiento**

---

<br>

**Cuando tenemos mucho contenido para mostrar en nuestra ventana modal, esta puede tener una barra de desplazamiento para poder leer todo el contenido.**

<br>

---

```html
<div class="container">
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exempleModal"
  >
    Haga clic para abrir la ventana
  </button>
  <div
    class="modal fade"
    id="exempleModal"
    tabindex="-1"
    aria-labelledby="exempleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="exempleModalLabel">
            Título de la ventana modal
          </h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Fermer"
          ></button>
        </div>
        <div class="modal-body">
          <p style="height: 800px;">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            repellat molestiae et tempora nesciunt impedit facilis dolores amet
            corporis eligendi, adipisci, quisquam aspernatur! Soluta, excepturi
            laboriosam porro dolorum doloremque assumenda!
          </p>
          <span class="align-text-bottom"
            >Este texto está al final del cuerpo del mensaje</span
          >
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

<br>

La única diferencia con el primer ejemplo es la clase `.modal-dialog-scrollable` en la `div .modal-dialog`.

Para ilustrar esto, hemos establecido una altura de `800px` en el párrafo y un `span` con la clase `.align-text-bottom` para un texto al final del cuerpo del mensaje.

<br>

---

---

<br>

<br>

---

### **Los carrousels**

---

<br>

El carrusel es una presentación de diapositivas que permite desplazar una serie de contenidos como imágenes, textos y botones.

Para que el carrusel se muestre, es necesario agregar la clase `.active` a una de las diapositivas.

Asegúrate también de definir un identificador único en la `div .carousel` para los controles opcionales, especialmente si estás utilizando varios carruseles en la misma página.

Los elementos de control e indicador deben tener un `atributo data-bs-target=' '# '` (o href para los enlaces) que corresponda al `id=' '# '` de la `div .carousel`.

<br>

---

```html
<div
  id="exempleCarrousel"
  class="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#exempleCarrousel"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Diapo 1"
    ></button>
    <button
      type="button"
      data-bs-target="#exempleCarrousel"
      data-bs-slide-to="1"
      aria-label="Diapo 2"
    ></button>
    <button
      type="button"
      data-bs-target="#exempleCarrousel"
      data-bs-slide-to="2"
      aria-label="Diapo 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="8000">
      <img src="chat.jpg" class="d-block w-100 " alt="..." />
      <div class="carousel-caption  d-block">
        <h2>Título de la leyenda</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          exercitationem quos praesentium veritatis quasi maxime libero animi
          quia dignissimos accusantium unde, obcaecati similique.
        </p>
        <a href="#" class="btn btn-primary mb-5">Ver más</a>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="8000">
      <img src="chat.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-block">
        <h2>Título de la leyenda</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          exercitationem quos praesentium veritatis quasi maxime libero animi
          quia dignissimos accusantium unde, obcaecati similique.
        </p>
        <a href="#" class="btn btn-primary mb-5">Ver más</a>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="8000">
      <img src="chat.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-block">
        <h2>Título de la leyenda</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          exercitationem quos praesentium veritatis quasi maxime libero animi
          quia dignissimos accusantium unde, obcaecati similique.
        </p>
        <a href="#" class="btn btn-primary mb-5">Ver más</a>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#exempleCarrousel"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#exempleCarrousel"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

---

<br>

El carrusel tiene un `id="exempleCarrousel"`, que es el mismo que el `data-bs-target="#exempleCarrousel"`.

El carrusel tiene las clases `.carousel`, `.slide` y `.carousel-fade` para dar un efecto especial. Las diapositivas no se deslizan, sino que se desvanecen para dar paso a la siguiente.

Aquí hemos decidido que la presentación de diapositivas se inicie automáticamente con el atributo `data-bs-ride="carousel"`.

Sin embargo, este atributo pausa la presentación de diapositivas cuando se pasa el mouse sobre ella.

<br>

---

<br>

La div opcional con la clase `.carousel-indicators` contiene 3 botones.

Estas son las `3` pequeñas barras en la parte inferior del carrusel que indican en qué diapositiva nos encontramos actualmente y que se pueden hacer clic para navegar entre ellas.

En los botones, el atributo `data-bs-target="#exempleCarrousel"` es igual al `id="#exempleCarrousel"` del carrusel, y cada botón tiene el atributo `data-bs-slide-to=" "`, siendo el primero `0` ya que la primera diapositiva comienza en `0`.

<br>

---

<br>

La div `.carousel-inner` es el cuerpo de nuestro carrusel con nuestras `3` diapositivas.

Cada diapositiva se encuentra en una `div` con la clase `.carousel-item`.

La primera diapositiva tiene adicionalmente la clase `.active`, que es imperativa para que el carrusel se muestre en la pantalla.

Sin embargo, podríamos haber colocado esta clase en otra diapositiva.

El atributo opcional `data-bs-interval="8000"` determina la velocidad del carrusel en milisegundos.

Cada diapositiva tiene una imagen, un título con la clase `.carousel-caption` y un `botón`.

<br>

---

<br>

Por último, tenemos 2 botones de control (opcionales) en los lados con las clases `.carousel-control-prev` y `.carousel-control-next`.

Ambos tienen el atributo `data-bs-target="#exempleCarrousel"`, que corresponde al `id` del carrusel.

Por último, los `botones` están representados por `2 flechas` hacia la izquierda y hacia la derecha gracias a las clases `.carousel-control-prev-icon` y `.carousel-control-next-icon`.

<br>

---

---

<br>

<br>

---

### **Los acordeones**

---

<br>

Los acordeones permiten navegar rápidamente por los títulos de una sección de preguntas frecuentes, por ejemplo, donde se utilizan con frecuencia.

No es necesario leer todo el contenido para obtener la respuesta a nuestra pregunta, simplemente podemos leer los títulos y abrir la sección que nos interesa para obtener rápidamente la información.

Bootstrap utiliza el complemento `Collapse` para este componente.

Por lo tanto, es importante tener al menos el `script bootstrap.min.js` instalado al final del `<body>`.

<br>

---

**Código:**

```html
<div class="container">
  <div class="accordion w-75 mx-auto" id="exempleAccordeon">
    <div class="accordion-item">
      <h2 class="accordion-header" id="titre1">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse1"
          aria-expanded="false"
          aria-controls="collapse1"
        >
          Primer título
        </button>
      </h2>
      <div
        id="collapse1"
        class="accordion-collapse collapse"
        aria-labelledby="titre1"
        data-bs-parent="#exempleAccordeon"
      >
        <div class="accordion-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          nostrum! Nulla aperiam, voluptas placeat cumque quod, illum quam animi
          labore illo quasi quia voluptatibus facilis officiis quaerat qui
          adipisci numquam odit veritatis expedita delectus id! Culpa
          perspiciatis magnam voluptates. Aliquam.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="titre2">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse2"
          aria-expanded="false"
          aria-controls="collapse2"
        >
          Segundo
        </button>
      </h2>
      <div
        id="collapse2"
        class="accordion-collapse collapse"
        aria-labelledby="titre2"
        data-bs-parent="#exempleAccordeon"
      >
        <div class="accordion-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          nostrum! Nulla aperiam, voluptas placeat cumque quod, illum quam animi
          labore illo quasi quia voluptatibus facilis officiis quaerat qui
          adipisci numquam odit veritatis expedita delectus id! Culpa
          perspiciatis magnam voluptates. Aliquam.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="titre3">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse3"
          aria-expanded="false"
          aria-controls="collapse3"
        >
          Tercer título
        </button>
      </h2>
      <div
        id="collapse3"
        class="accordion-collapse collapse"
        aria-labelledby="titre3"
        data-bs-parent="#exempleAccordeon"
      >
        <div class="accordion-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          nostrum! Nulla aperiam, voluptas placeat cumque quod, illum quam animi
          labore illo quasi quia voluptatibus facilis officiis quaerat qui
          adipisci numquam odit veritatis expedita delectus id! Culpa
          perspiciatis magnam voluptates. Aliquam.
        </div>
      </div>
    </div>
  </div>
</div>
```

---

<br>

La div que envuelve el acordeón tiene la clase `.accordion` y un `id=''` que `debe ser idéntico al atributo data-bs-parent="# "` de cada elemento del acordeón que tiene la clase `.accordion-item`.

Cada `.accordion-item` tiene un encabezado con la clase `.accordion-header` y un `id=''` que es idéntico a `aria-labelledby=" "`.

<br>

---

<br>

Debajo del encabezado, encontramos el `botón` que tiene la `función de abrir o cerrar` el elemento del acordeón.

El botón tiene la clase `.accordion-button` y la clase `.collapsed` si queremos que el elemento esté cerrado de forma predeterminada.

El atributo `data-bs-toggle="collapse"` activa la función JavaScript y el atributo `data-bs-target="# "` apunta a la div con el `id=''` para cerrarla.

<br>

---

<br>

Luego viene la div con las clases `.accordion-collapse` `.collapse` y los atributos `aria-labelledby=" "` que es idéntico al `id=''` del `.accordion-header`, y `data-bs-parent="# "` que es idéntico al `id=''` de la div `.accordion`.

El cuerpo del mensaje está incluido en una div con la clase `.accordion-body`.

<br>

---

---

<br>

<br>

---

#### **Observación**

---

<br>

La clase `.accordion-flush` en la div `.accordion` elimina el borde exterior y las esquinas redondeadas.

Es posible omitir el atributo `data-bs-parent="# "` si se desea mantener los elementos abiertos cuando se abre otro elemento.

<br>

---

---

<br>

<br>

---

### **Los `collapse`**

---

<br>

El plugin `"collapse"` se utiliza para mostrar y ocultar contenido.

Por lo general, se activa mediante un `botón`, pero también se puede usar un enlace `hipertexto`.

Por razones semánticas, un enlace debe tener el atributo `role="button""`.

<br>

---

---