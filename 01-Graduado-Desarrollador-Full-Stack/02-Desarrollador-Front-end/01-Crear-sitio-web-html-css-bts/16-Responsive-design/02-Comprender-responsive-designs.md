# **Concepto de responsive design**

<br>

<br>

---

## **Técnica de responsive design**

---

<br>

La técnica de diseño responsivo fue desarrollada por primera vez en 2010 por Ethan Marcotte, un diseñador web estadounidense

Presentó este nuevo enfoque en un artículo publicado en "A List Apart", un **[sitio web especializado en diseño y desarrollo web](https://alistapart.com/author/emarcotte/).**

Desde entonces, el diseño responsivo se ha convertido en una norma en la industria web, en gran parte debido al aumento de los dispositivos móviles y tabletas.

Las empresas han comprendido la importancia de ofrecer sitios web optimizados para dispositivos móviles para satisfacer las expectativas de los usuarios y mantenerse competitivas en el mercado

Hoy en día, la mayoría de los sitios web adoptan un enfoque de diseño adaptativo, lo que significa que los sitios están diseñados para adaptarse a diferentes tipos de dispositivos y resoluciones de pantalla.

Antes, había dos opciones para diseñar un sitio web:

- Crear un sitio líquido, es decir, un sitio que se estira para llenar la ventana del navegador, también llamado sitio fluido para adaptarse automáticamente al tamaño de la pantalla

  Los sitios líquidos resultaban en un diseño aplastado en las pantallas pequeñas y longitudes de línea ilegibles en las más grandes.

- Crear un sitio de ancho fijo, que tendría un tamaño fijo en píxeles y que no se adaptaría a diferentes tamaños de pantalla.

<br>

---

**EJEMPLO**

![Ejemplo fluido](./02-Comprender-responsive-designs/img/responsive-design-image1_1.png)

```
Ejemplo fluido
```

<br>

Fuente: [GitHub](https://mdn.github.io/css-examples/learn/rwd/liquid-width.html)

<br>

---

---

<br>
<br>

---

## **Existen varios métodos para realizar un diseño responsive. Aquí están los principales:**

---

<br>

- **`La primera`** es el diseño flexible o **`"fluid design"`**, que **utiliza** unidades de medida flexibles como **porcentajes** en lugar de píxeles, para permitir que los elementos del sitio se adapten al tamaño de la pantalla.

  ```css
  /* TÉCNICAS EN BASE A CÓDIGO COMO: */

  /* de esta manera le decimos que nos cree como mínimo tantas columnas que quepa en el diseño de 350px, y como máximo pues todo lo que pueda caber. */

  grid-template-columns: repeat( auto-fit, minmax(350px, 1fr))

  /* pero asi nuestras imágenes (se desbordarían del contenedor al ser el dispositivo mas pequeño) esto se desbordaría y nuestro responsive ... 😬... */

  /* Con esto, le decimos que aplique el valor mínimo entre lo que miden las imágenes por ejemplo que serian 350px por ejemplo, y el 100% del dispositivo, si el dispositivo no puede contener dos filas de 350px por que es mas estrecho entonces pasara a al 100% de su contenedor y este no se desbordara */

  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  ```

<br>

Las estructuras de diseño suelen estar basadas en una cuadrícula que se puede ajustar en función del tamaño de la pantalla.

<br>

- Otra técnica **`(la segunda)`** es el diseño adaptativo o **`"adaptive design"`**, que **consiste en crear varias estructuras de diseño específicas para diferentes dispositivos o tamaños de pantalla.** [COMO MEDIA QUERIES]

  El sitio web detecta automáticamente el tipo de dispositivo utilizado y muestra la estructura de diseño correspondiente.

<br>

- También se utiliza **`(la tercera)`** la técnica de **la cuadrícula flexible o `"grid-based design"`**, que **utiliza** **cuadrículas para organizar y colocar elementos en el sitio de manera que la estructura de diseño se mantenga coherente en diferentes dispositivos.** [COMO BOOTSTRAP]

  Esta técnica se usa comúnmente con el framework Bootstrap.

  Utilizar una cuadrícula en CSS ayuda a simplificar la estructura de diseño del sitio web.

<br>

Por último, **(y la cuarta)** la técnica del **`"mobile-first"`** **implica crear** un diseño **para** dispositivos **móviles antes de crear una versión para pantallas más grandes**.

Esto garantiza que el sitio web esté optimizado para los usuarios móviles y pueda adaptarse fácilmente a pantallas más grandes.

Para implementar el responsive design, también se pueden utilizar las "`media queries`", que permiten definir un conjunto de reglas CSS específicas para pantallas de diferentes tamaños.

En la segunda parte del curso, se abordará el tema de las media queries.

También es importante redimensionar automáticamente las imágenes utilizando la propiedad CSS "max-width" para evitar que las imágenes se desborden del contenedor.

<br>

---

**EJEMPLO**

```css
img {
  max-width: 100%; /* Permite redimensionar las imágenes en función de la anchura de su contenedor */
  height: auto; /* Garantiza que la altura de la imagen se ajuste automáticamente a la anchura */
}
```

Utilizando estas diferentes técnicas, los diseñadores pueden crear sitios web responsivos que se adapten a diferentes tamaños de pantalla y brinden una experiencia de usuario coherente en todos los dispositivos.

**Para crear un diseño responsivo efectivo, aquí hay algunas reglas a seguir:**

  **1. Usar media queries para adaptar los estilos CSS según el tamaño de la pantalla o el tipo de dispositivo.**
  
  **2. Usar una cuadrícula de diseño para estructurar el contenido de la página y facilitar su adaptación a diferentes tamaños de pantalla.**
  
  **3. Usar imágenes adaptables para proporcionar imágenes optimizadas según el tamaño de la pantalla.**
  
  **4. Usar fuentes adaptables.**
  
  **5. Evitar el uso de ventanas emergentes y publicidad.**
  
  **6. Reducir la cantidad de recursos, como scripts y hojas de estilo, para mejorar el tiempo de carga de las páginas en dispositivos móviles.**

**No se debe olvidar probar el diseño en diferentes dispositivos y resoluciones para asegurarse de que todo se muestre correctamente y que la navegación siga siendo fluida y efectiva.**

**Podemos probar el diseño en diferentes dispositivos utilizando la herramienta de inspección de su navegador Google para ver el sitio en diferentes tamaños de pantalla.**

<br>

---

---