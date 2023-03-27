# **Etiqueta `<img>`**

<br>

## **_Objetivos:_**

- Descubrir y usar la etiqueta `<img>`

---

---

<br>

---

## **Contexto**

---

<br>

Es posible agregar imágenes a una página HTML.

Para ello, existe una etiqueta dedicada que vamos a descubrir.

<br>

---

---

<br>
<br>

---

## **La etiqueta `<img>`**

---

<br>

**Una imagen se inserta** en una página HTML **mediante** la etiqueta **`<img>`**, indicando **con** el **atributo "src" la fuente de la imagen en forma de URL**, **y con** el atributo **"alt"** una **descripción** textual **de la imagen.**

**_La etiqueta `<img>` puede tener varios atributos opcionales, siendo el atributo "src" el único obligatorio._**

<br>

---

**EJEMPLO**

```html
<img src="img_girl.jpg" alt="Girl in a jacket" />
```

---

Existen otros atributos que pueden ser utilizados en diferentes casos, tales como: Height/Width, que definen las dimensiones de la imagen.

```html
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" />
```

---

Title: contiene información opcional sobre la imagen que se mostrará al pasar el cursor por encima.

```html
<img src="zorro.png" alt="zorro paseando" title="zorro que se pasea" />
```

---

srcset: Este atributo toma como valor una lista de archivos de imagen con su "descripteur de ancho" (es decir, su ancho expresado en w) separados por una coma. Ejemplo:

```html
<img
  src="mi-archivo-img.jpg"
  srcset="mi-archivo-img-300.jpg 300w, mi-archivo-img-600.jpg 600w"
  alt="mi-archivo-img.jpg"
/>
```

Con el código anterior, el navegador sabrá que tiene 2 imágenes (una de 300 píxeles de ancho y la otra de 600 píxeles) y se asegurará de mostrar la que mejor se adapte al ancho de la pantalla.

<br>

---

---

<br>
<br>

---

## **`<img>` responsive**

---

<br>

Para combinar ambas técnicas (**(media queries), y responsive de "srcset"**), **podemos usar las media queries para ajustar el diseño en general** **y** el atributo **"srcset" para** cambiar las **imágenes** en **función del tamaño de la pantalla.**

<b style="color: orange;">Por ejemplo, podría tener un conjunto de imágenes con diferentes tamaños para usar con `srcset=""`. 

Luego usar media queries para cambiar el ancho máximo de la página y ajustar el diseño en general.

Al reducir el ancho máximo de la página, las imágenes con un ancho menor se cargarán automáticamente según lo especificado en `srcset`.
</b>

Aquí hay un ejemplo:

```html
<picture>
  <source srcset="image-small.jpg" media="(max-width: 480px)" />
  <source srcset="image-medium.jpg" media="(max-width: 768px)" />
  <source srcset="image-large.jpg" />
  <img src="image-default.jpg" alt="Imagen predeterminada" />
</picture>
```

<i style="color: #ffff10">
En este ejemplo, se especifica un conjunto de imágenes con diferentes tamaños usando `srcset` y también se agrega una imagen predeterminada a través del atributo `src` de la etiqueta `img`. Luego, se usan media queries para cargar diferentes imágenes según el ancho máximo de la pantalla. La imagen `image-small.jpg` se cargará para pantallas con un ancho máximo de 480px, `image-medium.jpg` para pantallas con un ancho máximo de 768px, y `image-large.jpg` para pantallas con un ancho mayor que 768px.
</i>

<br>

---

---

<br>
<br>

---

### **Observación**

---

<br>

Se puede no incluir la imagen en sí, sino colocar un enlace a dicha imagen o, mejor aún, a la página web que la contiene.

<br>

---

```html
<a href="http://www.autresite.com/lapage.html">Autresite.com</a>
```

<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **Para agregar imágenes a una página HTML, se debe utilizar la etiqueta <img> junto con al menos los atributos src y alt.**

<br>

---

---

<br>
<br>

---

## **Complemento**

---

<br>

[Documentación etiqueta <img>](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Img)

<br>

---

---

