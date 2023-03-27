# **Pseudo-elementos**

<br>

## **_Objetivos:_**

- Descubrir los pseudo elementos

- Saber utilizarlos para estilizar los elementos

---

---

<br>

---

## **Contexto**

---

<br>

Veremos como estilizar ciertas partes de un elemento, gracias a los pseudo elementos.

<br>

---

---

<br>
<br>

---

## **Pseudo-Elemento**

---

<br>

El pseudo-elemento no es propiamente un elemento, sino una palabra clave que permite seleccionar una parte específica de un elemento.

Los más utilizados son los siguientes:

- **::after** permite crear un elemento interno justo después del elemento seleccionado. Se debe asociar la propiedad CSS content a este pseudo-elemento para agregar elementos, como un ícono que seguirá un enlace para indicar que es externo al sitio. Atención, el contenido de este pseudo-elemento no es seleccionable por el usuario.

- **::before** lo mismo que ::after, pero para ::before el elemento creado precederá al elemento seleccionado.

- **::first-line** permite seleccionar la primera línea de un párrafo.

- **::first-letter** selecciona la primera letra de una frase.

- **::selection** permite aplicar reglas CSS a una porción del documento que ha sido seleccionada por el usuario (a través del ratón u otro dispositivo de puntero).

Estos pseudo-elementos se usan después del selector deseado, seguido de "::pseudo-elemento".

<br>

---

**EJEMPLO**

```css
p::first-letter {
}
```

<br>

---

---

<br>
<br>

---

### **Ejemplo**

---

<br>

Por ejemplo, es posible seleccionar la primera línea de un párrafo utilizando el pseudo-elemento ::first-line para colorear la primera línea en azul y cambiar el texto a cursiva:

```html
<p>
  Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum volutpat
  purus nisl, sed tincidunt enim scelerisque at.
</p>

<p>
  Nam pretium justo a purus vehicula, non feugiat mi faucibus. Nam malesuada
  ultricies libero vel suscipit.
</p>
```

```css
p::first-line {
  color: #2cc0b4;

  font-style: italic;
}
```

Todos los elementos `<p>` tendrán su primera línea modificada:

<br>

![Primera linea coloreada](./06-%E2%AD%90-Pseudo_elementos/img/first-line-pseudo-element.png)

<br>

---

**Ejemplo**

Gracias al pseudo-elemento ::after asociado a la propiedad content, es posible estilizar enlaces de una manera más avanzada, utilizando por ejemplo caracteres Unicode.

```html
<a class="travel-link" href="#">Mon blog de voyage</a>
```

```css
.travel-link::after {
  content: "\2708";
}
```

![Avioncito después del contenido](./06-%E2%AD%90-Pseudo_elementos/img/after-content.png)

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Es posible seleccionar una cierta parte de un elemento gracias a los pseudo-elementos: el estilo no se aplicará a todo el elemento, sino solo a la parte del elemento apuntado.**

- **Para utilizar un pseudo-elemento, hay que añadir al elemento apuntado "::pseudo-elemento".**

<br>

---

---

<br>
<br>

---

### **Complemento**

---

<br>

**[Lista de pseudo elementos](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-elements)**

<br>

---

---
