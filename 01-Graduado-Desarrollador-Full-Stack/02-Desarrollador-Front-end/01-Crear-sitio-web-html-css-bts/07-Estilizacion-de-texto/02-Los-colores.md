# **Los colores**

<br>

## **_Objetivos:_**

- Dar color a un texto o al fondo de un texto

---

---

<br>

---

## **Contexto**

---

<br>

Agregar color a sus páginas las hará más atractivas y le permitirá resaltar las partes importantes de su sitio.

Para lograr esto, es posible agregar color al texto con CSS, así como también modificar el color de fondo y la sombra del texto.

Para ello, se utilizan las propiedades color, background-color y text-shadow, asociadas con la notación de color adecuada.

<br>

---

---

<br>
<br>

---

### **Observación: Colores en CSS**

---

<br>

Es posible nombrar los colores de varias formas en CSS.

Entre estas notaciones se encuentran:

- Palabra clave, por ejemplo, red. La lista completa de colores está disponible en el sitio web w3schools.com.

- RGB, por ejemplo, rgb(255, 0, 0), que indica la cantidad de rojo, verde y azul respectivamente. Cada uno de estos parámetros varía de 0 a 255.

- Hexadecimal, por ejemplo, #ff0000, es una numeración en base 16 que indica en tramos de dos caracteres la cantidad de rojo, verde y azul, respectivamente.

- RGBA, por ejemplo, rgba(255, 0, 0, 0,5), que además de los colores RGB, agrega esta capa adicional (Alfa) que permite jugar con la transparencia del color (de 0 a 1).

- HSL, por ejemplo, hsl(0, 100%, 16%), se basa en el Tono(H), la Saturación (S) y la Luminosidad(L). Permite obtener una paleta de colores más precisa que RGB al variar la saturación, aunque su uso es más complejo.

- HSLA, por ejemplo, hsla(0, 100%, 16%, 1), completa el color HSL con un parámetro Alfa que permite definir la transparencia, como lo hace RGBA.

<br>

---

---

<br>
<br>

---

## **Propiedad color**

---

<br>

Para cambiar el color de un texto, es posible aplicarle una regla CSS y utilizar la propiedad color.

Esta propiedad acepta un color y somos libres de usar la notación que queramos.

<br>

---

**EJEMPLO**

```html
<!DOCTYPE html>

<html lang="es">
  <head>
    <meta charset="UTF-8" />

    <title>Titulo de la pagina</title>

    <style>
      .red {
        color: #ff0000;
      }
    </style>
  </head>

  <body>
    <div class="red">texto en rojo</div>
  </body>
</html>
```

<br>

---

---

<br>
<br>

---

## **Propiedad background-color**

---

<br>

Para modificar el fondo de un texto, o más ampliamente de cualquier etiqueta HTML, es posible utilizar la propiedad background-color.

Esta propiedad acepta un color, y somos libres de utilizar la notación que deseemos.

<br>

---

**EJEMPLO**

```html
<!DOCTYPE html>

<html lang="es">
  <head>
    <meta charset="UTF-8" />

    <title>Titulo de la pagina</title>

    <style>
      .bg-red {
        background-color: #ff0000;
      }
    </style>
  </head>

  <body>
    <div class="bg-red">texto sobre fondo rojo</div>
  </body>
</html>
```

<br>

---

---

<br>
<br>

---

## **Propiedad text shadow**

---

<br>

Es posible modificar la sombra de un texto gracias a la propiedad text-shadow. Esta propiedad acepta 4 valores:

- Desplazamiento horizontal de la sombra con respecto al texto (generalmente con la unidad px).

- Desplazamiento vertical. Tiene el mismo comportamiento que el desplazamiento horizontal, salvo que la sombra se desplaza hacia arriba o hacia abajo.

- Radio de desenfoque. Cuanto mayor sea su valor, más se extenderá la sombra.

- Color de la sombra. Puede tomar cualquier valor de color mencionado anteriormente en este curso (negro por defecto).

<br>

---

**EJEMPLO**

```html
<!DOCTYPE html>

<html lang="es">
  <head>
    <meta charset="UTF-8" />

    <title>Titulo de la pagina</title>

    <style>
      .shadow-yellow {
        text-shadow: 4px 4px 5px yellow;
      }
    </style>
  </head>

  <body>
    <div class="shadow-yellow">texto con sombra amarilla</div>
  </body>
</html>
```

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Las colores en CSS pueden ser escritas en varias formas: texto, hexadecimal, RGB, RGBA y HSL.**

- **Para agregar un color a un texto, agregarle una sombra, o modificar el color de fondo de una etiqueta HTML, se pueden utilizar las propiedades CSS color, text-shadow y background-color respectivamente.**


<br>

---

---

<br>
<br>

---

### **Complemento**

---

<br>

- [https://www.w3schools.com/colors/colors_hexadecimal.asp](https://www.w3schools.com/colors/colors_hexadecimal.asp)

- [https://htmlcolorcodes.com/fr/](https://htmlcolorcodes.com/fr/)

- [https://www.w3schools.com/cssref/css_colors.asp](https://www.w3schools.com/cssref/css_colors.asp)



<br>

---

---
