# **Etiqueta `<iframe>`**

<br>

## **_Objetivos:_**

- Descubrir la etiqueta `<iframe>`

- Conocer su utilidad y su uso

---

---

<br>

---

## **Contexto**

---

<br>

Existe una etiqueta especial que permite incluir diferentes tipos de contenido HTML, desde un banner publicitario hasta un módulo de pago bancario, pasando por un mapa de navegación: la etiqueta `<iframe>`.

<br>

---

---

<br>
<br>

---

## **La etiqueta `<iframe>`**

---

<br>

La etiqueta `<iframe>` (para inline frame) permite incluir diferentes tipos de contenido HTML, desde banners publicitarios hasta módulos de pago bancario, pasando por mapas de navegación.

**Para utilizarla,** primero debemos **dar** un **nombre** al elemento para identificarlo, **para ello utilizamos el atributo name="".**

**Luego,** debemos **asignar un tamaño** al elemento (por defecto **en píxeles**) mediante los atributos **width="" y height="".**

El atributo **src=""** se utiliza para **indica**r el objetivo del **elemento que deseamos integrar en la página.**

```
El uso de iframe debe ser controlado, ya que al integrar un contenido externo, no podemos saber si su contenido seguirá siendo relevante con el tiempo o incluso si seguirá en línea.

El autor del sitio puede decidir cortar el recurso, en cuyo caso tampoco estará disponible en nuestro sitio.
```

Además, el elemento incluido desde **el iframe** está en un contexto diferente al de la página: **no** será **posible aplicar estilos CSS** ni hacer que nuestra página interactúe con el iframe de ninguna manera.

Debemos considerarlo como una cápsula de contenido aislado del resto.

<mark>
<b>Sin embargo, esta propiedad presenta varios riesgos.
</b>
</mark>

<br>

<b style="color: orange;">

Dado que la conexión del usuario al servidor que aloja el contenido del iframe se realiza sin su conocimiento, es fácil para un individuo malintencionado explotar esta propiedad para comprometer a su víctima.
</b>

<br>

<i style="font-weight: 800; color: red">
El objetivo del uso de la etiqueta iframe por parte de una persona malintencionada suele ser la propagación de códigos maliciosos.
</i>

<br>

---

---

<br>
<br>

---

## **Incluir una pagina web dentro de otra**

---

<br>

```html
<iframe
  width="500"
  height="250"
  style="border:0"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA">
</iframe>
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

- **Para agregar elementos HTML específicos dentro de una página, podemos utilizar `<iframe>`, pero debemos ser conscientes de los riesgos y de la dificultad de mantener y modificar dicho elemento.**

<br>

---

---

<br>
<br>

---

### **Complemento**

---

<br>

El elemento `<iframe>` accepta también otros tipos de atributos en los que hay una gran lista en el sitio de [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe)

<br>

---

---