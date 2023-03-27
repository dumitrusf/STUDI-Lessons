# **Alineamiento d elementos**

<br>

## **_Objetivos:_**

- Alinear horizontalmente un elemento en un área de cuadrícula.

- Alinear verticalmente un elemento en un área de cuadrícula.

---

---

<br>

---

## **Contexto**

---

<br>

Hasta ahora, todos los grid-items que hemos utilizado no tenían una altura o anchura definida explícitamente. Por lo tanto, estos elementos se estirarán vertical y horizontalmente por defecto, hasta llenar toda la zona que se les asignó.

En caso de que un grid-item sea explícitamente más pequeño que el tamaño de la zona en la que se encuentra, es posible gestionar el posicionamiento de este elemento dentro de su grid-area.

<br>

---

**EJEMPLO**

Imaginemos, para los ejemplos que siguen, el siguiente grid-container:

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
  gap: 10px;
}
```

<br>

O Una cuadrícula de 4 por 4, donde cada celda mide 100 píxeles por 100 píxeles.

Y elementos de la cuadrícula que tienen las siguientes propiedades:

<br>

---

**EJEMPLO**

```css
.item {
  width: 50%;
  height: 50%;
  background: #0984e3;
}
```

Los elementos de cuadrícula en azul se colocan en cada una de las celdas de la cuadrícula y, por el momento, se alinean en la parte superior izquierda de su celda.

![alinear items](./05-Alinear-elementos/img/grid_4.png)

<br>

---

---

<br>

<br>

---

## **Posicionamiento horizontal**

---

<br>

---

La propiedad justify-items permite configurar el posicionamiento horizontal del elemento. Los valores start, center y end permiten colocar los elementos respectivamente a la izquierda, al centro y a la derecha de la celda.

Aquí hay un ejemplo con el valor center:

<br>

---

**EJEMPLO**

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
  gap: 10px;
  justify-items: center;
}
```

![justify-items](./05-Alinear-elementos/img/grid_5.png)

<br>

---

---

<br>
<br>

---

## **Posicionamiento vertical**

---

<br>

La propiedad align-items usada en el grid-container permite gestionar el posicionamiento vertical de los elementos en las grid-area. De nuevo, las posibles valores son start, center y end.

Aquí un ejemplo con end:

<br>

---

**EJEMPLO**

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
  gap: 10px;
  justify-items: center;
  align-items: end;
}
```

<br>

![align end](./05-Alinear-elementos/img/grid_6.png)

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Para gestionar el posicionamiento vertical de los elementos en una cuadrícula, se utiliza la propiedad `align-items`.**

- **El posicionamiento horizontal, por otro lado, se gestiona mediante la propiedad `justify-items`.**

- **Ambas propiedades aceptan los valores `start`, `end` y `center`.**

<br>

---

---
