# **Las transiciones CSS**

<br>

## **_Objetivos:_**

- Comprender la diferencia entre "transición" y "animación"

- Implementar un feedback para el usuario

- Ajustar con mayor precisión su animación

---

---

<br>

---

## **Contexto**

---

<br>

La Web nos ofrece la posibilidad de no solo de estilizar elementos sino también de crear movimiento en la página.

El movimiento atraerá automáticamente la atención de los usuarios en su sitio web.

Esto puede ser beneficioso para destacar un elemento en particular y hacerle saber al usuario que una acción está disponible en ese elemento.

Esto permite obtener un contenido más interactivo, atractivo y divertido.

¡Veamos de inmediato cómo introducir movimiento en tus páginas web!

<br>

---

---

<br>

<br>

---

## **Las transiciones**

---

<br>

La propiedad `transition` en CSS nos permite crear una transición suave entre los valores de una propiedad, en lugar de un cambio instantáneo.

Esta propiedad es muy útil para agregar animaciones y efectos de transición a elementos HTML.

<br>

---

**EJEMPLO**

Una transición en CSS consiste en un cambio de un valor a otro valor, y este cambio no es instantáneo, sino que se produce gradualmente. Para hacer que la transición sea suave, necesitamos definir la propiedad `transition` en la regla CSS correspondiente.

Supongamos que tenemos una clase `.item` en CSS con las siguientes propiedades:

```css
.item {
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: tomato;
}
```

---

<br>

Para crear una transición en esta 👆 clase, necesitamos definir una nueva regla con la misma clase `.item` pero con una pseudo-clase como `:hover` que actuará como el disparador de la transición.

En esta nueva regla, podemos agregar las propiedades que queremos que cambien en la transición.

<br>

---

**EJEMPLO**

```css
.item:hover {
  background-color: steelblue;
  width: 400px;
}
```

<br>

En la regla original, agregaremos la propiedad `transition` con la propiedad que queremos animar, en este caso `background-color`, una duración de 1 segundo y un retraso de 0.9 segundos.

También podemos definir la función de interpolación que queremos utilizar, en este caso `linear`.

```css
.item {
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: tomato;
  transition: background-color 1s linear 0.9s;
}
```

<br>

---

**EJEMPLO**

Generalmente es aconsejable, al tener varias propiedades declararlas por comas en

<br>

---

**EJEMPLO**

Con esto, cuando el usuario mueve el cursor sobre el elemento `.item`, el fondo cambiará gradualmente de `tomato` a `steelblue` y el ancho de la caja se expandirá suavemente hasta los 400 píxeles.

**[Aquí hay un ejemplo](https://repl.it/@Mesian/transition)** de la transición de color de fondo de rojo a azul al pasar el cursor del ratón.

<br>

---

---

<br>
<br>

---

## **Shorthand propiedad transition**

---

<br>

El shorthand de transition se utiliza para definir todos los parámetros de una transición en una sola línea de código.

Los valores de la propiedad transition son las siguientes:

- **`transition-property`:** especifica las propiedades CSS que se animarán.

- **`transition-duration`:** define la duración de la transición.

- **`transition-timing-function`:** define el tipo de función osea "la dicha interpolación" de temporización.

- **`transition-delay`:** define el retraso antes de que se inicie la transición.

Estas co-propiedades se pueden declarar en el shorthand como una lista separada por espacios en el siguiente orden: `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`.

<br>

---

**EJEMPLO**

```css
transition: width 1s ease-in-out 0.5s, background-color 2s ease-in-out 1s;
```

En este ejemplo, se animarán las propiedades de **`width`** y **`background-color`**.

La duración de la animación es de 1 segundo para **`width`** y 2 segundos para **`background-color`**.

La función de temporización es `ease-in-out` y se aplica un retraso de 0.5 segundos a `width` y de 1 segundo a `background-color`.

El retraso es el tiempo que va a pasar desde que accionamos la acción hasta que se activa la transición:

```
por ejemplo el trigger de :hover, significa que al pasar con el mouse encima de algún elemento en concreto, este debido a la regla definida con hover tendra o accionara un comportamiento diferente que al del elemento sin el hover.

Pues bien este cambio del elemento natural al hover tendra un retraso de unos segundos o mili-segundos hasta que veamos que la transición empiece.
```

<br>

---

---

<br>

<br>

---

## **Declaración individual**

---

<br>

También es posible declarar cada valor de transition individualmente.

En este caso, se deben declarar las propiedades en el siguiente orden:

- `transition-property`

- `transition-duration`

- `transition-timing-function`

- `transition-delay`

**EJEMPLO**

```css
transition-property: width, background-color;
transition-duration: 1s, 2s;
transition-timing-function: ease-in-out, ease-in-out;
transition-delay: 0.5s, 1s;
```

Este ejemplo es equivalente al ejemplo del shorthand anterior.

<br>

---

---

<br>

<br>

---

## **Conclusión**

---

<br>

El shorthand de transition permite definir todas las co-propiedades de una transición en una sola línea de código, lo que facilita la escritura y la lectura del código. Sin embargo, también se pueden declarar las co-propiedades de transition individualmente en el orden correcto.

<br>

---

---

<br>

<br>

---

### **Atención!**

---

<br>

Atención, no todas las propiedades son compatibles con las transiciones. Aquí hay una **[lista de las propiedades que son compatibles](https://developer.mozilla.org/fr/docs/Web/CSS/Liste_propri%C3%A9t%C3%A9s_CSS_anim%C3%A9es)**.

<br>

---

---

<br>

<br>

---

### **Complemento**

---

<br>

Hemos visto en el ejemplo anterior que la aplicación de la transición se realizaba con la pseudo-clase :hover, pero todas las pseudo-clases pueden desencadenar una transición.

Además, agregar o eliminar una clase CSS con JavaScript también puede desencadenar una transición en esas clases.

<br>

---

---

<br>

<br>

---

### **Complemento-2**

---

<br>

**muy aconsejable ver en YouTube o Dorian desings**

mismamente este de **[ALEXCG design](https://youtu.be/WMJ0_7HXfOQ)**

Podemos declarar **(MUY IMPORTANTE)** una transición haciendo uso de pseudo-elementos, como ::before

<br>

---

---
