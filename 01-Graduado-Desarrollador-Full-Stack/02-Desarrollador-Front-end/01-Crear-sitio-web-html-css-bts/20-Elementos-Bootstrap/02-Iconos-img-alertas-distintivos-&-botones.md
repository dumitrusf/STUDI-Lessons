# **Íconos, imágenes, alertas, distintivos (badges) y botones.**

<br>

---

## **Iconos**

---

<br>

**Bootstrap cuenta con su propia biblioteca de iconos en formato SVG diseñada por @mdo y mantenida por el equipo de Bootstrap, completamente de código abierto y accesible para todos.**

Existen **varias formas de utilizar** los **iconos** de Bootstrap.

<br>

---

```
Para acceder a la biblioteca, dirígete a la pestaña "Iconos" de la documentación de Bootstrap.
```

<br>

---

---

<br>

<br>

---

### **Descargar el archivo e incluir los iconos en el proyecto**

---

<br>

Puedes descargar el archivo completo desde esta dirección: github.

Luego, coloca los iconos que te interesen en la carpeta de tu proyecto.

<br>

---

**Podrás utilizarlos, como imágenes, en tu proyecto de la siguiente manera:**

```html
<div class="container">
  <p>
    <img src="img/check-circle-fill.svg" alt="check" width="32" height="32" />
    Cette icône est une image de hauteur et de largeur 32px.
  </p>
</div>
```

<br>

**Puedes personalizar las dimensiones del ícono utilizando los atributos "width" y "height".**

<br>

---

---

<br>

<br>

---

### **Utilizar el enlace `CDN`**

---

<br>

Al igual que con CSS, Bootstrap nos proporciona un enlace `CDN` que debemos colocar entre las etiquetas `<head></head>` del proyecto.

<br>

---

**Como se muestra a continuación:**

```html
<!DOCTYPE html>

<html lang="fr">
  <head>
    <meta charset="UTF-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Los elementos Bootstrap</title>

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
    />
  </head>
</html>
```

<br>

**El último enlace es el enlace del `CDN` del conjunto de fuentes de iconos.**

<br>

---

<br>

---

**Ahora puedes simplemente buscar el icono en la biblioteca de Bootstrap y copiar y pegar el enlace de la fuente de iconos:**

```html
<div class="container">
  <p>
    <i class="bi bi-check-circle-fill" style="font-size: 18px;"></i>
    Este icono es considerado como una fuente
  </p>
</div>
```

<br>

Ten en cuenta que la etiqueta para **los iconos se representa con `<i></i>`**.

**Podemos utilizar las propiedades "font-size" y "color" para personalizar los iconos.**

<br>

---

---

<br>

<br>

---

### **Utilizar la ruta `(path)` HTML del icono deseado**

---

<br>

**Para cada icono, puedes utilizar la ruta `HTML` y pegarla en el código de tu proyecto.**

```html
<div class="container">
  <h2 class="p-3">Les icônes</h2>

  <p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      class="bi bi-check-circle-fill"
      viewBox="0 0 16 16">

        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">

    </svg>

  </p>
</div>
```

<br>

**Puedes personalizar los iconos utilizando** los atributos **`"width"`** y **`"height"`** **para las dimensiones**, y **`"fill"` para el color**.

Ten en cuenta que **"currentColor" utiliza el color del elemento padre.**

También puedes elegir un color utilizando valores hexadecimales.

<br>

---

---

<br>

<br>

---

## **Imágenes**

---

<br>

Para que una imagen sea responsive, es decir, que nunca sea más grande que su elemento padre, utilizamos la clase **"`.img-fluid`"**.

De esta manera, la imagen siempre se ajustará dentro de su contenedor, sin importar el tamaño de pantalla del visitante.

<br>

---

---

<br>

<br>

---

## **Las alertas**

---

<br>

Las alertas nos permiten proporcionar mensajes contextuales al usuario, gracias a la variedad de mensajes de alerta disponibles y flexibles.

<br>

---

<br>

**Es importante respetar los colores proporcionados por Bootstrap para las alertas**, ya que a menudo tienen un significado específico en función de su contexto.

<br>

---

---

<br>

<br>

---

### **Diferentes tipos de alertas**

---

<br>

**Las alertas tienen la función de proporcionar información contextual al usuario.**

<br>

---

<br>

---

**Tienen las clases `.alert` y `.alert-{color}` y el atributo `role="alert"`.**

```html
<div class="container">
  <h2 class="py-3">Las alertas simples</h2>

  <div class="alert alert-primary" role="alert">
    Una alerta informativa de color azul
  </div>

  <div class="alert alert-secondary" role="alert">
    Una alerta informativa de color gris claro
  </div>

  <div class="alert alert-success" role="alert">
    Una alerta informativa de color verde
  </div>

  <div class="alert alert-danger" role="alert">
    Una alerta informativa de color rojo
  </div>

  <div class="alert alert-warning" role="alert">
    Una alerta informativa de color amarillo
  </div>

  <div class="alert alert-info" role="alert">
    Una alerta informativa de color azul claro
  </div>

  <div class="alert alert-light" role="alert">
    Una alerta informativa de color gris claro
  </div>

  <div class="alert alert-dark" role="alert">
    Una alerta informativa de color gris
  </div>
</div>
```

<br>

---

---

<br>

<br>

---

### **Utilizar una alerta con contenido**

---

<br>

**Cuando tenemos mucho contenido para colocar en una alerta, podemos utilizar etiquetas `HTML` como encabezados, párrafos y la etiqueta de separación `<hr>`.**

<br>

---

**Ejemplo:**

```html
<div class="container">

   <h2 class="py-3">Alerta con mucho de contenido</h2>

    <div class="alert alert-success" role="alert">

      <h4 class="alert-heading">Una gran alerta</h4>

      <p>
        Aquí tienes un ejemplo de una alerta con mucho contenido.

        Una alerta también puede contener elementos HTML como títulos, párrafos y separadores.
      </p>

      <hr />

      <p class="mb-0">La etiqueta `<hr>` crea un espacio vertical con una línea horizontal. Podemos ocultarla agregándole la clase "invisible".<br> No dudes en utilizar las clases de margen proporcionadas por Bootstrap si es necesario.</p>

    </div>

  </div>
```

<br>

---

---

<br>

<br>

---

### **Alerta con icono usando el `<< path >>` HTML**

---

<br>

**También podemos usar iconos en nuestras alertas.**

**Solo necesitas elegir el tipo de icono que deseas usar:** ya sea el "path" `HTML`, un icono de fuente o un icono de imagen.

**Ten en cuenta que si eliges el "path" HTML, el contenedor padre debe tener la clase .d-flex para que el icono se coloque al lado del texto.**

<br>

---

**Ejemplo:**

```html
<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
    width="32"
    height="32"
    fill="currentColor"
    viewBox="0 0 16 16"
    role="img"
    aria-label="Warning:"
  >
    <path
      d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    />
  </svg>

  <div>Alerta con icono usando el "path" del icono</div>
</div>
```

<br>

---

---

<br>

<br>

---

### **Alerta con icono utilizandolo como fuente**

---

<br>

**También podemos usar iconos en nuestras alertas.**

**Solo necesitas elegir el tipo de icono que deseas usar:** ya sea el "path" `HTML`, un icono de fuente o un icono de imagen.

**Ten en cuenta que si eliges el "path" HTML, el contenedor padre debe tener la clase .d-flex para que el icono se coloque al lado del texto.**

<br>

---

**Ejemplo:**

```html
<div class="alert alert-primary align-items-center" role="alert">
  <p>
    <i class="bi bi-check-circle-fill" style="font-size: 18px;"></i>
    Alerta utilizando un icono como una fuente
  </p>
</div>
```

<br>

---

---

<br>

<br>

---

### **Alerta con icono utilizandolo como imagen**

---

<br>

El mismo principio se aplica cuando se utiliza un icono de tipo imagen.

<br>

**La etiqueta `<img>` se coloca dentro del párrafo `<p>`:**

<br>

---

**Ejemplo:**

```html
<div class="alert alert-primary align-items-center" role="alert">
  <p>
    <img src="img/check-circle-fill.svg" alt="check" width="18" height="18" />
    Alerta utilizando un icono como imagen
  </p>
</div>
```

<br>

Observa que el icono está en color negro.

Para cambiar el color, puedes hacerlo modificando el estilo con CSS o editar la imagen con un software de edición de imágenes.

<br>

---

---

<br>

<br>

---

### **Alerta con icono utilizando un enlace hypertexto**

---

<br>

También es posible agregar un enlace en nuestras alertas.

<br>

**Para que el enlace tenga un color que coincida con el color de la alerta, simplemente debes agregar la clase `.alert-link` a la etiqueta `"a"` del enlace.**

<br>

---

**Ejemplo:**

```html
<div class="alert alert-primary" role="alert">
  Je suis une alerte <a href="#" class="alert-link">avec un lien</a> dont la
  couleur correspond à la couleur de l'alerte.
</div>
```

<br>

---

---

<br>

<br>

---

## **Los botones**

---

<br>

Bootstrap nos ofrece varios botones con estilos predefinidos, como colores, para darles un sentido semántico.

<br>

La etiqueta es **"button"** y la clase es **.btn**.

También es posible usar la clase **`.btn` en otros elementos como enlaces "a"** y en envíos de formularios de tipo **`<input>`**.

<br>

---

---

<br>

<br>

---

### **Botón con la etiqueta `«button»`**

---

<br>

Utilisez la classe **`.btn-primary`** pour la couleur en plus de la classe **`.btn`**.

Vous pouvez utiliser toutes les classes de couleur que Bootstrap propose.

<br>

---

**Exemple de boutons simples:**

```html
<button class="btn btn-primary" type="submit">Bouton simple</button>
```

<br>

---

**También puedes optar por un estilo personalizado en línea, como se muestra a continuación:**

```html
<button
  class="btn"
  type="submit"
  style="background-color: #E2D026; color: #6E4597;"
>
  Bouton simple
</button>
```

<br>

---

---

<br>

<br>

---

### **Botón con la etiqueta `«a»`**

---

<br>

Podemos utilizar **un enlace `<a>`** y darle la clase **`.btn`** para que se vea como un botón.

No olvides el atributo **`role="button"`**.

<br>

---

```html
<a class="btn btn-primary" href="#" role="button">Soy un enlace hypertexto</a>
```

<br>

---

---

<br>

<br>

---

### **Botón con la etiqueta `«input»`**

---

<br>

Estos **botones de tipo `"submit"`** generalmente se utilizan para enviar un formulario, registrarse o iniciar sesión en un sitio.

**Indicaremos la razón del botón en el atributo `"value"`.**

<br>

---

```html
<input class="btn btn-primary" type="submit" value="Envoyer" />
```

<br>

---

---

<br>

<br>

---

### **Botón con borde**

---

<br>

Los botones de Bootstrap con borde son transparentes y adquieren un color de fondo cuando se pasa el cursor sobre ellos.

**Ten en cuenta que el color del texto cambia para mantener un buen contraste.**

<br>

---

```html
<button type="button" class="btn btn-outline-primary">
  Botón simple con borde
</button>
```

<br>

---

---

<br>

<br>

---

### **Tamaños de un Botón**

---

<br>

Bootstrap ofrece 2 tamaños de botón con las clases **`.btn-lg`** para un botón grande o **`.btn-sm`** para un botón pequeño.

<br>

---

**Ejemplo:**

```html
<button type="button" class="btn btn-lg btn-outline-primary">
  Soy un gran botón
</button>

<button type="button" class="btn btn-sm btn-outline-primary">
  Soy un pequeño botón
</button>
```

<br>

---

---

<br>

<br>

---

### **Botones inactivos**

---

<br>

**En algunos casos, es útil tener un botón desactivado.**

<br>

Solo tienes que agregar el **atributo `"disabled"`** al botón.

Ten en cuenta que esto solo funciona para enlaces hipertexto.

En ese caso, deberás agregar la clase **`.disabled`**, **eliminar el atributo "`href='' ''` "** y agregar el atributo **"`aria-disabled='true'`"** para los enlaces inactivos.

<br>

---

**Ejemplo:**

```html
<button type="button" class="btn btn-outline-primary" disabled>
  Soy un botón inactivo
</button>

<a class="btn btn-primary disabled" role="button" aria-disabled="true"
  >Soy un enlace de hipertexto inactivo</a
>
```

<br>

---

---

<br>

<br>

---

### **Botones colocados uno encima del otro**

---

<br>

**También tenemos la opción de colocar varios botones uno encima del otro según nuestras necesidades.**

<br>

Para ello, en primer lugar, con un ancho del 100% del contenedor, utilizaremos la clase **`.d-grid`** para que los botones se coloquen uno encima del otro, y **`gap-*`** para crear un espacio vertical entre ellos.

Ten en cuenta que la clase **`.gap-*` se utiliza en** elementos con **"display grid" o "display flex"**, y puede tomar un valor "**del 0 al 5**" para un espaciado más o menos grande.

<br>

---

**Ejemplo:**

```html
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">
    Soy un botón de display grid
  </button>

  <button class="btn btn-primary" type="button">
    Soy un botón de display grid
  </button>
</div>
```

<br>
<br>

---

Gracias a los breakpoints, podemos cambiar el diseño de los botones según el tamaño de pantalla del usuario.

**Por ejemplo, queremos que los botones se apilen hasta el tamaño de pantalla "lg" y luego se coloquen uno al lado del otro.**

Para lograr esto, **utilizaremos las clases .d-grid para apilarlos**, si se desea la clase **`gap-*`** para crear un espacio, y luego agregaremos la clase **`.d-lg-block`** para que los botones se coloquen uno al lado del otro.

La clase **`.d-block` reemplaza la clase `.d-grid` y anula la clase `.gap-*`**

<br>

---

```html
<div class="d-grid gap-2 d-lg-block">
  <button class="btn btn-primary" type="button">
    Soy un botón apilado hasta el tamaño de lg
  </button>

  <button class="btn btn-primary" type="button">
    Soy un botón apilado hasta el tamaño de lg
  </button>
</div>
```

<br>

También **podemos ajustar el ancho de nuestros botones** utilizando la clase **`.col-*`** y, si lo deseamos, colocarlos en el centro de la pantalla con la clase **`.mx-auto.`**

<br>

---

```html
<div class="d-grid gap-2 col-4 mx-auto">
  <button class="btn btn-primary" type="button">
    Soy un botón ubicado en el centro de mi contenedor con un ancho de 1/3.
  </button>

  <button class="btn btn-primary" type="button">
    Soy un botón ubicado en el centro de mi contenedor con un ancho de 1/3.
  </button>
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

También **podemos alinear horizontalmente nuestros botones utilizando las clases `.justify-content-start`**, **`.justify-content-center`** y **`.justify-content-end`**, según si los queremos alineados **a la izquierda, en el centro o a la derecha.**

En este caso, **los botones deben tener la propiedad `display flex`**.

```
Se recomienda agregar un pequeño margen al primer botón utilizando la clase .me-* para obtener un mejor resultado.
```

<br>

---

```html
<div class="d-flex justify-content-end">
  <button class="btn btn-primary me-2" type="button">
    Soy un botón en display flex situado a la derecha
  </button>

  <button class="btn btn-primary" type="button">
    Je suis un bouton en display flex disposé à droite
  </button>
</div>
```

<br>

---

---

<br>

<br>

---

### **Botón con icono**

---

<br>

**Finalmente, podemos utilizar íconos junto con nuestros botones:**

<br>

---

```html
<button class="btn btn-primary" type="button">
  <i class="bi bi-hand-thumbs-up-fill"></i> Un pequeño pulgar hacia la izquierda
</button>

<button class="btn btn-primary" type="button">
  Un pequeño pulgar hacia la derecha <i class="bi bi-hand-thumbs-up-fill"></i>
</button>

<button class="btn btn-primary" type="button">
  <i class="bi bi-hand-thumbs-up-fill d-block"></i> Un pequeño pulgar arriba
</button>

<button class="btn btn-primary" type="button">
  Un pequeño pulgar abajo <i class="bi bi-hand-thumbs-up-fill d-block"></i>
</button>
```

<br>

Observa **cómo se organizan nuestros elementos `HTML`** para obtener un resultado diferente en cada botón.

**La clase `.d-block`** en la etiqueta del ícono permite tener el ícono ubicado arriba o abajo del texto.

<br>

---

---

<br>

<br>

---

## **Los grupos de botones**

---

<br>

**Bootstrap nos ofrece una variedad de grupos de botones destinados a usos específicos.**

<br>

**Los botones se encuentran dentro de un `div` con la clase `.btn-group`.**

Esto permite que los **botones** se agrupen **en una sola línea.**

**Es importante agregar el atributo `"role"` a este `div`** y `darle` un **`aria-label`** descriptivo para lectores de pantalla.

**Los roles pueden ser `role="group"`** para un grupo de botones **o `role="toolbar"` si el grupo de botones forma parte de una barra de herramientas.**

<br>

---

---

<br>

<br>

---

### **Los enlaces hypertexto**

---

<br>

**Dans le cas de groupe de boutons de type liens `<a>`, nous n'avons pas besoin de donner l’attribut role au lien.**

<br>

---

**La classe `.btn` remplit cette fonction :**

```html
<div class="container">
  <div class="btn-group">
    <a href="#" class="btn btn-primary active" aria-current="page"
      >Primer enlace</a
    >

    <a href="#" class="btn btn-primary">Segundo enlace</a>

    <a href="#" class="btn btn-primary">Tercer enlace</a>
  </div>
</div>
```

<br>

Observa ahora **el atributo `aria-current="page"`**, que indica al lector de pantalla que estamos en un enlace hipertexto de una página.

**No dudes en utilizar clases de estilo** como colores o bordes en los botones con **`las clases .btn-* y .btn-outline-*`**.

<br>

---

<br>

En este caso, las clases de tamaño de los botones se aplicarán al contenedor del grupo, además de la clase btn-group.

Tenemos las mismas dos clases que para los botones individuales, es decir, -sm y -lg. Utilizaremos .btn-group-sm para grupos de botones pequeños y .btn-group-lg para grupos de botones grandes.

<br>

---

---

<br>

<br>

---

### **Las barras de herramientas**

---

<br>

**Para crear barras de herramientas con Bootstrap, podemos incluir nuestros `div` con la clase `.btn-group` dentro de otra `div` que tenga la `clase .btn-toolbar.`**

**También debemos proporcionar el atributo `"role"` con `role="toolbar"` y el `aria-label` correspondiente.**

<br>

---

```html
<div class="container ">
  <div
    class="btn-toolbar"
    role="toolbar"
    aria-label="Barre d'outils avec groupes de boutons"
  >
    <div class="btn-group me-3" role="group" aria-label="Premier groupe">
      <button type="button" class="btn btn-primary">1</button>

      <button type="button" class="btn btn-primary active">2</button>

      <button type="button" class="btn btn-primary">3</button>
    </div>

    <div class="btn-group me-3" role="group" aria-label="Deuxième groupe">
      <button type="button" class="btn btn-primary">4</button>

      <button type="button" class="btn btn-primary">5</button>

      <button type="button" class="btn btn-primary">6</button>
    </div>

    <div class="btn-group me-3" role="group" aria-label="Troisième groupe">
      <button type="button" class="btn btn-primary">7</button>

      <button type="button" class="btn btn-primary">8</button>

      <button type="button" class="btn btn-primary">9</button>
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

### **Los checkbox**

---

<br>

**Como recordatorio, las casillas de verificación (checkbox) son opciones de selección múltiple.**

**Para crear una casilla de verificación, necesitamos las etiquetas `<input>` y `<label>`**

<br>

---

```html
<div class="container">
  <div
    class="btn-group"
    role="group"
    aria-label="Basic checkbox toggle button group"
  >
    <input
      type="checkbox"
      class="btn-check"
      id="btncheck1"
      autocomplete="off"
    />

    <label class="btn btn-outline-primary" for="btncheck1"
      >Primer checkbox</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="btncheck2"
      autocomplete="off"
    />

    <label class="btn btn-outline-primary" for="btncheck2"
      >Segundo checkbox
    </label>

    <input
      type="checkbox"
      class="btn-check"
      id="btncheck3"
      autocomplete="off"
    />

    <label class="btn btn-outline-primary" for="btncheck3"
      >Tercer checkbox</label
    >
  </div>
</div>
```

<br>

Observa el atributo **`type="checkbox"` en las etiquetas `<input>` y la clase `.btn-check`.**

El atributo **`"id"`** del **`<input>` debe ser idéntico al atributo "`for=''`" del `<label>`**.

<br>

---

---

<br>

<br>

---

### **Los radios**

---

<br>

**A diferencia de las casillas de verificación, las opciones de radio solo pueden tener una selección posible.**

<br>

---

```html
<div class="container">
  <div
    class="btn-group"
    role="group"
    aria-label="Basic radio toggle button group"
  >
    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio1"
      autocomplete="off"
      checked
    />

    <label class="btn btn-outline-primary" for="btnradio1"
      >Primer botón radio</label
    >

    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio2"
      autocomplete="off"
    />

    <label class="btn btn-outline-primary" for="btnradio2"
      >Segundo botón radio</label
    >

    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio3"
      autocomplete="off"
    />

    <label class="btn btn-outline-primary" for="btnradio3"
      >Tercer botón radio</label
    >
  </div>
</div>
```

<br>

**El principio es idéntico al de los botones de casilla de verificación,** con **la** única **diferencia** de que se utiliza **el tipo `"radio"` en lugar de `"checkbox"`** en el elemento **`<input>`**, y se agrega el atributo **`name="btnradio"`** para que la opción funcione correctamente.

<br>

---

---

<br>

<br>

---

### **Los menús desplegables**

---

<br>

**Para que la función de menú desplegable funcione correctamente, es necesario colocar el `JavaScript` de Bootstrap y el "script" `Popper` antes del elemento final `</body>`**

<br>

---

```html
<div class="container">
  <div class="btn-group" role="group">
    <button
      type="button"
      class="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Menú desplegable
    </button>

    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Primer menu</a></li>

      <li><a class="dropdown-item" href="#">Segundo menu</a></li>
    </ul>
  </div>
</div>
```

<br>

**En el caso de los menús desplegables, debemos agregar la clase `.dropdown-toggle` al botón y el atributo `data-bs-toggle="dropdown"`, que se utiliza para activar el JavaScript que permite desplegar el menú.**

**Debajo del botón, colocamos nuestra lista, en este caso sin orden específico, utilizando la etiqueta `<ul>` con la clase `.dropdown-menu`.**

**Dentro de ella, ubicamos nuestros elementos de lista `<li>`, que a su vez llevan la clase `.dropdown-item`.**

<br>

---

---

<br>

<br>

---

### **Los botones verticales**

---

<br>

**Para obtener un grupo de botones dispuestos verticalmente, simplemente se debe agregar la clase btn-group-vertical a la div de grupo.**

<br>

---

```html
<div class="container">
  <div
    class="btn-group-vertical"
    role="group"
    aria-label="Groupe de boutons vertical"
  >
    <button type="button" class="btn btn-primary">Primer botón</button>

    <button type="button" class="btn btn-primary active">Segundo botón</button>

    <button type="button" class="btn btn-primary">Tercer bouton</button>
  </div>
</div>
```

<br>

---

---

<br>

<br>

---

### **Los botones «Cerrar»**

---

<br>

**Algunos elementos, como las alertas, pueden ser cerrados por los visitantes de la página.**

**Bootstrap tiene para eso un pequeño elemento llamado "Close Button" `(Botón de Cierre)`.**

**Este elemento funciona con `JavaScript`, por lo que es necesario que el "script" `bootstrap.min.js` esté incluido en la página para que funcione.**

<br>

---

**Aquí tienes un ejemplo con una alerta:**

```html
<div class="container">
  <div class="alert alert-primary alert-dismissible fade show" role="alert">
    Soy una alerta que podemos cerrar. Haga clic en la cruz y yo ya me voy !

    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Fermer"
    ></button>
  </div>
</div>
```

<br>

---

---

<br>

<br>

---

## **Observación**

---

<br>

**El div con la clase `.alert` ahora también tiene la clase `.alert-dismissible`.**

**Esta clase adicional informa al navegador que esta alerta se puede cerrar por el usuario.**

**Aquí, aunque hay una etiqueta `<button>`, no hay un botón propiamente dicho.**

**La clase `.btn-close` del botón muestra una pequeña cruz de cierre.**

**El atributo `data-bs-dismiss="alert"` activa el JavaScript que permite la acción.**

<br>

---

---

<br>

<br>

---

## **Los distintivos (o `badge`)**

---

<br>

**Los badges son elementos de Bootstrap que permiten resaltar información importante en forma de etiquetas o insignias. Estos badges son muy útiles para mostrar números, notificaciones o categorías en un diseño web.**

<br>

---

---
