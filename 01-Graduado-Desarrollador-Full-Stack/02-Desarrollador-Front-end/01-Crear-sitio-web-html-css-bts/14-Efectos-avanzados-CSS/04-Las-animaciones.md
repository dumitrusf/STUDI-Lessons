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

Las animaciones permiten crear un movimiento que no necesariamente se activa por una pseudo-clase (tel trigger) ni se basa específicamente en la modificación de una propiedad como en transiciones.

<br>

---

---

<br>

---

## **Las Animaciones**

---

<br>

```
La creación de una animación generalmente se realiza a través de una función @keyframes que describe todo el movimiento que debe realizarse y una propiedad de animación que configura la duración y la velocidad.

Vamos a detallar estas dos componentes.
```

<br>

---

---

<br>

<br>

---

## **La función `@Keyframes`**

---

<br>

La función @keyframes definirá todas las modificaciones que sufrirá nuestro elemento objetivo.

<br>

---

---

**ATENCIÓN**

Es importante destacar que, al igual que con las transiciones, la lista de propiedades compatibles está limitada y disponible **[en este enlace de propiedades de animación css](https://developer.mozilla.org/fr/docs/Web/CSS/Liste_propri%C3%A9t%C3%A9s_CSS_anim%C3%A9es)**.

---

---

<br>

En su forma minimalista, se puede usar de la siguiente manera:

```css
@keyframes changeColor {
  from {
    background: red;
  }

  to {
    background: blue;
  }
}
```

**Las funciones `@keyframes`** no **se colocan** dentro de un selector CSS, sino **al mismo nivel que los selectores**.

Por lo general, se agrupan **en la parte superior o inferior del archivo CSS**, o incluso en un archivo separado.

**changeColor es el nombre de nuestra animación:** es arbitrario y puedes darle el nombre que desees.

A continuación, vemos dos funciones, from y to, que muestran los estados inicial y final deseados para nuestro elemento objetivo.

Aquí podemos ver que el estado deseado inicial para nuestro elemento es un fondo rojo, y queremos llegar a un fondo azul.

<br>

---

**EJEMPLO**

```css
@keyframes changeColor {
  0% {
    background: red;
  }

  40% {
    background: yellow;
  }

  90% {
    background: green;
  }

  100% {
    background: blue;
  }
}
```

En lugar de usar from y to, podríamos usar porcentajes para expresar:

- 0%, que es el inicio de la animación

- 100%, que es el final de la animación

De esta manera, podemos agregar estados intermedios con valores en porcentaje.

**Los únicos dos valores obligatorios son 0% (o from) y 100% (o to).**

**Luego, puedes agregar tantas etapas intermedias como desees.**

<br>

---

---

<br>
<br>

---

## **Propiedad Animation por individuales & por shorthand**

---

**El shorthand de animation se utiliza para definir todos los parámetros de una transición en una sola línea de código.**

Los valores de la propiedad animation son las siguientes:

- **`animation-name`:** el nombre que se le da a la animación definida con `@keyframes`.

- **`animation-duration`:** la duración de la animación en segundos o mili-segundos.

- **`animation-timing-function` (interpolación ease-in ... etc):** define el tipo de función osea "la dicha interpolación" de temporización.

- **`animation-delay`:** el tiempo que debe transcurrir antes de que la animación comience, en segundos o mili-segundos.

- **`animation-iteration-count`:**la cantidad de veces que la animación debe reproducirse, ya que si no definimos esta, la animación se ejecutara una sola vez.

- **`animation-direction`:**la dirección en la que se reproduce la animación (normal, reverse, alternate, alternate-reverse), por ejemplo si usamos, reverse, este comenzara desde el 100% de la animación hacia el 0% (o desde to hacia from, en vez de from - to que seria lo normal), alternate es la mas usada ya que va y viene la animación como si fuera algo repetido y sin ser brusco!.

- **`animation-fill-mode`:**cómo se aplican los estilos si antes o después o ambos de la animación, una vez que se termine la animación se queda con los estilos aplicados que declaramos en el 100% por ejemplo.

- **`animation-play-state`:**si la animación se reproduce o se detiene, se puede usar tanto con como o sin pseudo-clases, dependiendo de lo que se quiera lograr. Por ejemplo, se puede utilizar sin pseudo-clases para definir un estado inicial de una animación en pausa.

  y luego cambiar su valor con JavaScript para activar la animación.

  O se puede utilizar con pseudo-clases como :hover o :focus para activar y pausar la animación cuando el usuario interactúa con el elemento.

<br>

---

**EJEMPLO**

```css
animation-name: animación;
animation-duration: 1s;
animation-timing-function: ease-out;
animation-delay: 1s;
animation-iteration-count: infinite;
animation-direction: alternate;
animation-fill-mode: initial
animation-play-state: running;
```

👆 este es el buen orden para el shorthand, aunque algunos navegadores aun declarándolos desordenadamente entienden el shorthand, ya que entienden todas las propiedades, excepto que el primer valor numérico siempre corresponderá a la duración de la animación, mientras que el valor posterior se referirá siempre al delay.

Este ejemplo es equivalente a declararlo como shorthand. 👇

<br>

```css
/*   👇   animation duration siempre va a ser el primero valor*/
animation: animación 1s ease-out 1s infinite alternate initial running;
/* si quisiéramos declarar solo delay no se podría y no tendría sentido ya que no hay una velocidad de reacción aplicada a un movimiento como es el de la animación*/
```

<br>

---

---

**ATENCIÓN!!**

**En este ejemplo, si quisiéramos que el final de nuestra animación, acabe igual que en el 0%.**

**Lo único que tendríamos que hacer es NO ACABAR LA ANIMACIÓN!!, tal cual escuchas.**

**Declaramos el supuesto final que queremos en un 70% o 80% por ejemplo, y para que acabe el final como si fuera el comienzo simplemente lo dejamos asi:**

👇

Al hacer esto, hacemos que nuestro 100% sea nuestro 0%.

```css
@keyframes movement {
  0% {
    transform: translate(0%);
    background: crimson;
  }

  25% {
    transform: translate(100%);
    background: salmon;
  }

  50% {
    transform: translate(100%, 100%);
    background: slateblue;
  }

  75% {
    transform: translate(0%, 100%);
    background: teal;
  }
}
```

El shorthand de transition permite definir todas los valores de una animación en una sola línea de código, lo que facilita la escritura y la lectura del código.

Sin embargo, también se pueden declarar valores del shorthand individualmente en el orden correcto, lo que los convierte en propiedades.

<br>

---

---

<br>

<br>

---

### **Atención!**

---

<br>

Atención, no todas las propiedades son compatibles con las animaciones.

Aquí hay una **[lista de las propiedades que son compatibles](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_animated_properties)**.

<br>

---

---

<br>

<br>

---

### **Observación**

---

<br>

A tener en cuenta que puedes dar varias instrucciones en la función @keyframes y que es totalmente posible mover, rotar y cambiar el color de fondo de nuestro elemento objetivo simultáneamente.

**[Aquí hay un ejemplo en Repl.it](https://repl.it/@Mesian/animation)** que muestra una visualización de varias propiedades aplicadas a un `@keyframe` con varios elementos que acabamos de ver.

<br>

---

---

<br>

<br>

---

## **transition-timing-function & animation-timing-function**

---

<br>

El ajuste "timing-function" está presente en las transiciones y animaciones.

Este parámetro permite definir cómo se desarrollará la animación.

Por defecto, el valor siempre es "ease", lo que significa que la velocidad de la transición aumenta a la mitad de ésta y luego disminuye al final.

Sin embargo, hay otras "timing-functions" que se pueden usar:

- **"ease-in"** permite tener una velocidad lenta al inicio, pero que aumenta exponencialmente.

- **"ease-out"** permite tener una velocidad rápida al inicio, pero que disminuye exponencialmente.

- **"ease"** es una mezcla con un pico de velocidad en el medio del recorrido.

- **"ease-in-out"** es la mezcla de "ease-in" y "ease-out": su uso no se recomienda para animaciones de menos de un segundo (el ojo humano simplemente no tiene tiempo de ver todas las variaciones de velocidad en este caso).

<br>

---

**EJEMPLO**

**[Aquí tienes un ejemplo](https://repl.it/@Mesian/timing-function)** que te permitirá ver la diferencia entre las timing-functions para una animación muy simple de desplazamiento de un cuadrado.

<br>

---

---

<br>

<br>

---

### **Complemento**

---

<br>

También puedes configurar tus propias preferencias indicando "cubic-bezier" como timing-function.

Esto te lleva al terreno de las matemáticas, con una función que acepta 4 parámetros (x1, y1, x2, y2) para ajustar finamente tu animación.

Hay varias herramientas para crear una curva de Bézier de forma visual sin tener que introducir números directamente.

**[Cubic Bezier](https://cubic-bezier.com/)** es un ejemplo.

<br>

---

---

<br>

<br>

---

## **Propiedad Transform**

---

<br>

---

**EJEMPLO**

La propiedad transform aplica una transformación 2D o 3D a un elemento.

Esta propiedad permite rotar, mover, escalar y aplicar transformaciones a los elementos.

```css
/* Asi 👇 individualmente */
transform: rotate(20deg);
transform: translate(20px, 10px);
transform: scale(1, 2);
transform: skew(45deg, 62deg);

/* O asi 👇 en union*/
transform: translate(100px) rotate(20deg) skew(45deg, 62deg) scale(1, 2);
```

<br>

---

<br>

**La propiedad de transformación puede tomar para transformaciones 2D o 3D los siguientes valores:**

- **none**: ninguna transformación, valor por defecto.

- **matrix()**: permite aplicar una matriz de transformación a un elemento.

- **translate()**: mover un elemento horizontal y verticalmente.

- **translateX()**: mover un elemento horizontalmente.

- **translateY()**: mover un elemento verticalmente.

- **translateZ()**: mover un elemento en profundidad.

- **translate3D()**: mover en los tres ejes de perspectiva un elemento.

- **scale()**: redimensionar horizontal y verticalmente un elemento.

- **scaleX()**: redimensionar horizontalmente un elemento.

- **scaleY()**: redimensionar verticalmente un elemento.

- **scaleZ()**: redimensionar un elemento en su profundidad.

- **scale3D()**: redimensionar un elemento en los tres ejes de perspectiva.

- **rotate()**: permite rotar un elemento.

- **rotateX()**: rotar un elemento sobre el eje de perspectiva X.

- **rotateY()**: rotar un elemento sobre el eje de perspectiva Y.

- **rotate3D()**: rotar un elemento sobre los tres ejes de perspectiva.

- **skew()**: inclinar horizontal y verticalmente un elemento.

- **skewX()**: inclinar horizontalmente un elemento.

- **skewY()**: inclinar verticalmente un elemento.

- **perspective()**: define una perspectiva de vista para un elemento transformado en 
3D.
- **inherit**: hereda la propiedad de su elemento padre.

- **initial**: restablece la propiedad a su valor predeterminado.

<br>

---

---

<br>

<br>

---

### **Atención!**

---

<br>

Solo algunos elementos pueden ser convertidos.

No es posible convertir elementos cuya disposición está gestionada por una zona en línea, una columna de tabla o un grupo de columnas de tabla no reemplazado

<br>

---

---

<br>

<br>

---

## **En resumen**

---

<br>

Las transiciones y animaciones CSS son similares en muchos aspectos, pero difieren en la complejidad de las transiciones, la forma en que el código CSS interactúa con JavaScript, el funcionamiento de los bucles y el método para desencadenar la reproducción de la animación.

Las transiciones CSS son generalmente las mejores para movimientos simples de uno en uno, mientras que las animaciones CSS son adecuadas para series de movimientos más complejos.

<br>

---

---
