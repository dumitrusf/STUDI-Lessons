# **Comprender Sass y el preprocesamiento CSS**

<br>

---

## **Que es `Sass`**

---

<br>

SASS (Syntactically Awesome Style Sheets) es un lenguaje de script pre-procesador que se interpreta o compila en CSS.

Es una extensión de CSS que agrega características como variables, reglas anidadas, mixins y funciones, lo que facilita la escritura y mantenimiento del código CSS.

<br>

---

<br>

SASS está escrito en Ruby y se puede ejecutar en cualquier plataforma que tenga un intérprete de Ruby.

Permite a los desarrolladores crear código CSS de manera más organizada y eficiente, proporcionando varias características útiles que no están disponibles en CSS regular.

<br>

---

<br>

Las variables son una de las características más útiles de SASS.

Permiten a los desarrolladores definir un valor una vez y usarlo en todo su código, lo que puede ser especialmente útil para definir colores o tamaños de fuente.

Otra característica importante es la anidación, que permite a los desarrolladores escribir un código más conciso y legible al agrupar selectores que pertenecen al mismo padre.

<br>

---

<br>

SASS también ofrece mixins, que son bloques de código reutilizables que se pueden llamar varias veces en un proyecto.

Esto permite a los desarrolladores evitar escribir código repetitivo y hacer que su base de código sea más fácil de mantener.

<br>

---

<br>

Por último, SASS ofrece funciones, que permiten a los desarrolladores realizar cálculos y manipular valores en sus hojas de estilo.

Las funciones pueden ser especialmente útiles para crear diseños responsivos o trabajar con estructuras de diseño complejas.

<br>

---

<br>

En general, SASS es una herramienta poderosa que puede ayudar a los desarrolladores a escribir código CSS más eficiente y fácil de mantener.

Al utilizar SASS, los desarrolladores pueden aprovechar características como variables, anidación, mixins, funciones y muchas más, que simplifican el proceso de escritura y mantenimiento del código CSS.

---

<br>

---

---

<br>

<br>

---

## **Las variables en `Sass`**

---

<br>

`SASS` agrega varias características útiles al `CSS` estándar.

Una de ellas es la capacidad de usar variables en tu código `CSS`.

<br>

---

<br>

Las variables en `SASS` funcionan de la misma manera que las variables en otros lenguajes de programación.

Te permiten definir un valor una vez y luego usarlo en varios lugares de tu código `CSS`.

Esto puede ser especialmente útil para elementos como esquemas de colores, familias de fuentes y otros elementos de diseño que deseas utilizar repetidamente.

<br>

---

<br>

Para crear una variable en `SASS`, simplemente la defines utilizando un signo de `dólar` seguido de un nombre y luego le asignas un valor.

<br>

---

**Por ejemplo, si quieres crear una variable para el color primario de tu sitio web, puedes escribir:**

```scss
$primary-color: #007bff;
```

---

<br>

Una vez que hayas definido tu variable, puedes usarla en cualquier lugar de tu código `CSS` llamándola por su nombre precedido del signo de `dólar`.

<br>

---

**Por ejemplo, si deseas utilizar el color primario como color de fondo de un elemento, puedes escribir:**

```scss
background-color: $primary-color;
```

---

<br>

El elemento tendría un color de fondo de ` #007bff``, el valor que le asignaste a  `$primary-color``.

Además de las variables simples, SASS también te permite crear variables más complejas utilizando listas y mapas. Las listas te permiten agrupar múltiples valores, mientras que los mapas te permiten asignar múltiples valores a una sola clave.

<br>

---

**Aquí un ejemplo de lista en Sass**

```scss
$font-stack: (Helvetica, Arial, sans-serif);
```

<br>

En este ejemplo, `$font-stack` es una lista de tres familias de fuentes diferentes.

Luego puedes usar esta lista en cualquier parte de tu código `CSS` llamando a su nombre con el signo del `dólar` y el índice del valor que deseas usar.

<br>

---

**Por ejemplo, para usar la primera familia de fuentes de la lista, debes escribir:**

```scss
font-family: nth($font-stack, 1);
```

---

<br>

---

**Aquí tienes un ejemplo de mapa en Sass:**

```scss
$colors: (
  primary: #007bff,

  secondary: #6c757d,

  success: #28a745,

  danger: #dc3545,

  warning: #ffc107,

  info: #17a2b8,

  light: #f8f9fa,

  dark: #343a40,
);
```

---

<br>

En este ejemplo, `$colors` es un mapa de diferentes nombres de colores y sus códigos hexadecimales correspondientes.

Luego, puedes utilizar este mapa en cualquier parte de tu código `CSS` llamando a su nombre con el signo del `dólar` y la `clave` del valor que deseas utilizar.

<br>

---

**Por ejemplo, para utilizar el color primario del mapa, debes escribir:**

```scss
color: map-get($colors, primary);
```

---

<br>

El color del texto del elemento será entonces `#007bff`.

En general, las variables en `SASS` son una herramienta poderosa que puede ayudarte a escribir un código `CSS` más limpio y eficiente.

Al definir valores una sola vez y utilizarlos en todo tu código, puedes reducir la redundancia y facilitar el mantenimiento de tus estilos a lo largo del tiempo.

---

<br>

---

---

<br>

<br>

---

## **Los mixins**

---

<br>

Los mixins en `SASS` son bloques de código reutilizables que pueden ser incluidos en múltiples hojas de estilo.

Son muy útiles para mantener tu código DRY (Don't Repeat Yourself) y pueden ahorrarte mucho tiempo al permitirte reutilizar código en tu proyecto.

Para crear un mixin, utilizas la directiva `@mixin` seguida del nombre del mixin y cualquier argumento que el mixin deba tomar.

<br>

---

**Ejemplo:**

```scss
@mixin button($bg-color) {
  background-color: $bg-color;

  color: white;

  padding: 10px 20px;

  border-radius: 5px;

  text-transform: uppercase;

  font-weight: bold;
}
```

---

<br>

En este ejemplo, hemos creado un mixin llamado `"button"` que toma un argumento, `$bg-color`.

Este mixin define una serie de estilos comúnmente utilizados para los botones, incluyendo un color de fondo, un color de texto, un relleno y un estilo de fuente.

<br>

---

**Para utilizar el mixin en nuestras hojas de estilo, utilizamos la directiva `@include` seguida del nombre del mixin y de todos los argumentos que necesita:**

```scss
.button-primary {
  @include button(#0074d9);
}

.button-secondary {
  @include button(#7fdbff);
}
```

---

<br>

En este ejemplo, hemos utilizado el `mixin "button"` para crear dos estilos de botones, uno con un fondo azul y otro con un fondo azul más claro.

<br>

Los mixins también se pueden utilizar para crear estilos más complejos. Por ejemplo, se pueden utilizar mixins para crear estilos de transiciones o animaciones CSS3.

<br>

---

**Aquí tienes un ejemplo:**

```scss
@mixin transition($property, $duration, $timing-function) {
  -webkit-transition: $property $duration $timing-function;

  -moz-transition: $property $duration $timing-function;

  -ms-transition: $property $duration $timing-function;

  -o-transition: $property $duration $timing-function;

  transition: $property $duration $timing-function;
}
```

---

<br>

Este mixin define los estilos de una transición CSS3, incluyendo la propiedad de transición, la duración y la función de temporización.

<br>

---

**Para utilizar el mixin, podemos llamarlo con los argumentos adecuados:**

```scss
.button {
  @include transition(background-color, 0.3s, ease-in-out);
}
```

---

<br>

En este ejemplo, utilizamos el mixin transition para agregar un efecto de transición al color de fondo de nuestros botones.

---

<br>

---

---

<br>

<br>

---

## **Las funciones**

---

<br>

SASS proporciona un conjunto de funciones integradas que permiten a los desarrolladores manipular y transformar valores, y hacer que sus hojas de estilo sean más dinámicas.

Estas funciones se pueden utilizar para realizar operaciones aritméticas simples, convertir entre diferentes unidades, manipular cadenas de texto, colores, etc.

<br>

---

**Aquí hay algunas características clave de las funciones en SASS:**

<br>

1. **Funciones integradas:**

   - SASS viene con una amplia gama de funciones integradas que se pueden utilizar para manipular valores.

---

<br>

2. **Funciones personalizadas:**

   - los desarrolladores también pueden crear sus propias funciones personalizadas utilizando la directiva `@function`.

   - Estas funciones personalizadas se pueden utilizar para realizar operaciones más complejas o para encapsular código frecuentemente utilizado en funciones reutilizables.

---

<br>

3. **Argumentos de función:**

   - las funciones de SASS pueden aceptar uno o varios argumentos, que se pasan cuando se llama a la función.

   - Los argumentos pueden ser de diferentes tipos de datos, como números, cadenas de texto, colores o listas.

---

<br>

4. **Valores de retorno:**

   - las funciones también pueden devolver valores, que se pueden utilizar en otras partes de la hoja de estilos.

   - El valor devuelto por una función puede ser de cualquier tipo de dato.

<br>

---

**Ejemplo: Convertir PX en REMS**

En este ejemplo, vamos a crear una función personalizada que convierte `píxeles` a `rems`.

La función aceptará un argumento (el valor en píxeles) y devolverá el valor equivalente en rems.

```scss
@function px-to-rem($px-value) {
  $rem-value: $px-value / 16;

  @return #{$rem-value}rem;
}

h1 {
  font-size: px-to-rem(32px);
}
```

---

<br>

En el ejemplo anterior, hemos creado una función personalizada llamada `"px-to-rem"` utilizando la directiva `@function`.

La función acepta un argumento (el valor en píxeles) y devuelve el valor equivalente en `rems`.

En el selector `h1`, llamamos a la función `"px-to-rem"` y le pasamos un valor de `32 px`.

La función devuelve un valor de `2rem`, que luego se utiliza como valor para la propiedad font-size.

---

<br>

---

**Ejemplo: Oscurecer un color**

En este ejemplo, vamos a utilizar una función integrada para oscurecer un color en un 10%.

```scss
$primary-color: #0074d9;

.button {
  background-color: darken($primary-color, 10%);
}
```

---

<br>

En el ejemplo anterior, hemos creado una variable llamada `$primary-color` y le hemos asignado el valor `#0074D9`.

Luego, hemos utilizado la función integrada `darken` para oscurecer el color en un `10%`.

El valor obtenido se ha utilizado como color de fondo para el selector `.button`.

---

<br>

---

---

<br>

<br>

---

## **Los bucles en Sass**

---

<br>

Sass ofrece varias estructuras de bucles para iterar sobre un conjunto de valores o bloques de código.

Estas estructuras ayudan a reducir la redundancia y simplificar el código, haciéndolo más fácil de mantener.

<br>

**Sass proporciona los siguientes tipos de bucles:**

- El bucle `@for`, que se utiliza para iterar sobre un conjunto de valores.

  - **Recibe 3 argumentos:**

    - el nombre de la variable
    - el valor de inicio

      y

    - el valor final.

  **El bucle `@for` se puede utilizar tanto para secuencias ascendentes como descendentes.**

<br>

---

**Ejemplo, Bucle `@for`:**

```scss
@for $i from 1 to 5 {
  .box-#{$i} {
    width: 20px * $i;

    height: 20px * $i;
  }
}
```

---

<br>

Este código crea cinco clases CSS `.box-1` a `.box-5` con anchos y alturas crecientes.

<br>

---

---

<br>

- El bucle `@each`, que se utiliza para iterar sobre una lista o un mapa.

  - **Toma 2 argumentos:**

    - el nombre de la variable

      y

    - la lista/mapa a recorrer.

<br>

---

**Ejemplo, Bucle `@each`:**

```scss
$colors: red, green, blue;

@each $color in $colors {
  .text-#{$color} {
    color: $color;
  }
}
```

---

<br>

**Este código crea 3 clases CSS:**

- `.text-red`

- `.text-green`

  y

- `.text-blue`

**cada una con un valor de color diferente.**

<br>

---

---

<br>

- El bucle `@while`, que se utiliza para iterar sobre un bloque de código hasta que se cumpla una condición.

  - **Toma 1 solo argumento:**

    - la condición a verificar.

<br>

---

**Ejemplo, Bucle `@while`:**

```scss
$i: 1;

@while $i < 6 {
  .box-#{$i} {
    width: 20px * $i;

    height: 20px * $i;
  }

  $i: $i + 1;
}
```

---

<br>

**Este código crea 5 clases CSS:**

- `.box-1` a `.box-5` con anchos y altos crecientes. 

- El bucle `@while` itera hasta que el valor de `$i` sea menor que `6`.


---

<br>

---

---

<br>

<br>

---

### **Atención!:**

---

<br>

**Los bucles en SASS pueden ser muy poderosos y flexibles, permitiendo un estilo complejo y dinámico.**

**Sin embargo, es importante usarlos con cuidado para evitar crear un código innecesariamente complejo y difícil de mantener.**

<br>

---

---

<br>

<br>

---

### **Uso de SASS en un proyecto web**

---

<br>

Para utilizar SASS en tu proyecto web, debes instalar la línea de comando de SASS, la cual puedes encontrar en el sitio web oficial de SASS.

Una vez instalado, puedes crear tu archivo styles.scss y escribir tu código SASS.

<br>

---

**Luego, puedes utilizar el siguiente comando:**

```
sass styles.scss styles.css
```

---

<br>

Este comando convertirá tu archivo SCSS en un archivo CSS.

---

<br>

---

---

<br>

<br>

---

## **Funcionamiento de un pre-procesador `CSS`**

---

<br>

El preprocesamiento CSS implica el uso de un lenguaje de script especializado para escribir código CSS. Este lenguaje de pre-procesador incluye varias características como variables, funciones, mixins y bucles, que no están disponibles en las hojas de estilo CSS convencionales. Los pre-procesadores facilitan la escritura y gestión del código CSS al permitir a los desarrolladores reutilizar el código y evitar tareas repetitivas.

<br>

---

<br>

Para utilizar un pre-procesador, el desarrollador escribe código en el lenguaje del pre-procesador, que luego se compila en CSS estándar que los navegadores web pueden entender. Esto significa que el navegador no necesita comprender el lenguaje del pre-procesador en sí, sino solo el código CSS resultante.

<br>

---

<br>

Los pre-procesadores CSS más populares son Sass, Less y Stylus. Estos pre-procesadores son ampliamente utilizados en el desarrollo web y son compatibles con muchas herramientas y frameworks de desarrollo.

<br>

---

**El preprocesamiento CSS ofrece varias ventajas a los desarrolladores web, entre ellas:**

<br>

- **Reutilización de código:**

    - los pre-procesadores permiten a los desarrolladores crear componentes de código reutilizables, como variables, mixins y funciones, que pueden ser utilizados en toda la base de código, reduciendo la redundancia y mejorando la eficiencia.

<br>

- **Mantenibilidad:**

    - los pre-procesadores facilitan la organización y gestión del código CSS, lo que reduce el riesgo de errores y facilita las modificaciones en la base de código.

<br>

- **Mejora de la productividad:**

    - los pre-procesadores pueden reducir el tiempo necesario para escribir y mantener el código CSS, lo que permite a los desarrolladores centrarse en otros aspectos del proceso de desarrollo.

---    

<br>

---

---