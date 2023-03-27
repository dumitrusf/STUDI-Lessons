# **Pseudo-clases**

<br>

## **_Objetivos:_**

- Descubrir el uso de las pseudo clases

---

---

<br>

---

## **Contexto**

---

<br>

Veremos cómo aplicar estilo a los elementos cuando estén en un estado particular.

<br>

---

---

<br>
<br>

---

## **Pseudo-Clases**

---

<br>

Una pseudo-clase es una clase que permite seleccionar un elemento cuando se encuentra en un estado particular.

Por ejemplo, al pasar el cursor sobre un enlace, notamos que el estilo cambia.

En efecto, es el estilo de la pseudo-clase :hover que se aplica al elemento.

Es posible seleccionar estas pseudo-clases y modificar su estilo.

Para hacerlo, se debe seleccionar el elemento o la clase y agregar la pseudo-clase precedida por ":".

Existen muchas pseudo-clases, pero mencionaremos sólo las principales:

- **:active** selecciona el elemento cuando está activado, especialmente por el clic del usuario.

- **:hover** apunta al elemento cuando se mueve el cursor sobre él.

- **:checked** selecciona el elemento cuando está marcado.

- **:focus** selecciona el elemento cuando es seleccionado por el usuario.

- **:visited** determina el estilo de un enlace cuando el usuario ya lo ha visitado.

<br>

---

**EJEMPLO**

```css
a:hover {

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

Al modificar el estilo de un elemento `<a>` de enlace, al sobrevolar sobre el enlace con el mouse el estilo de este último cambia:

```html
<a href="#">Click aquí</a>
```

```css
a:hover {
    color: orange;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 1px;
}
```

<br>

![hover sobre enlace](./05-%E2%AD%90-Pseudo_clases/img/a-hover.png)

<br>

---

---

<br>
<br>

---

### **Complemento**

---

<br>

Existen otras pseudo-clases que permiten seleccionar elementos padres o hijos, o que cumplen ciertos criterios:

- **:first-child** selecciona el primer elemento de un tipo en relación a su padre.

- **:first-of-type** selecciona el primer elemento de su tipo en el padre.

- **:not()** selecciona un elemento que no es el argumento entre paréntesis (puede ser otro elemento).

- **:last-of-type** selecciona un elemento que es el último de su tipo en el padre.

<br>

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Es posible seleccionar elementos en estados particulares gracias al selector llamado pseudo-clase.**

- **El estilo solo se aplicará cuando el elemento se encuentre en el estado seleccionado.**

<br>

---

---

<br>
<br>

---

### **Complemento**

---

<br>

**[Lista de pseudo clases](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes)**

<br>

---

---