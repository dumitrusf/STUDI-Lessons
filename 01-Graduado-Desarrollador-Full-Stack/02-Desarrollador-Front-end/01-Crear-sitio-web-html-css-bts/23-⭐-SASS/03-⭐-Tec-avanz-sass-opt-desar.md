# **Técnicas avanzadas de sass: optimizar nuestros desarrollos de `CSS`**

<br>

---

## **Compilar código `Sass en Css`**

---

<br>

**SASS es un pre-procesador** que amplía las funcionalidades de CSS.

**Debido a esto**, **los navegadores no pueden interpretar** el código **SASS** directamente.

Por lo tanto, **debe ser compilado a CSS antes de ser presentado a los usuarios**.

**El proceso de compilación consiste en traducir el código SASS a una sintaxis CSS estándar**, que luego puede ser comprendida por los navegadores web.

<br>

---

Aquí un ejemplo de compilación del código Sass a Css

**El código Sass siguiente:**

```Scss
$primary-color: #007bff;

@mixin center {

  display: flex;

  justify-content: center;

  align-items: center;

}

.hero {

  background-color: $primary-color;

  color: white;

  padding: 50px;



  h1 {

    font-size: 48px;

    margin-bottom: 20px;

  }



  p {

    font-size: 24px;

    @include center;

  }

}
```

---

---

<br>

<br>

---

**Luego, se compila a CSS de la siguiente manera:**

```scss
.hero {
  background-color: #007bff;

  color: white;

  padding: 50px;
}

.hero h1 {
  font-size: 48px;

  margin-bottom: 20px;
}

.hero p {
  font-size: 24px;

  display: flex;

  justify-content: center;

  align-items: center;
}
```

---

<br>

**Existen diferentes formas de compilar el código SASS a CSS.**

<br>

- Una de ellas es utilizar una herramienta de Línea de Comando (CLI) como Sass o node-sass.

  - Este enfoque requiere que los desarrolladores instalen el compilador y lo ejecuten manualmente cada vez que deseen convertir su código SASS a CSS.

<br>
  
- Otra opción es utilizar una herramienta de construcción como Grunt o Gulp para automatizar el proceso de compilación.

<br>

---

---

<br>

**En este curso, utilizaremos el `CLI`**.

**Pero si planeas utilizar `SASS` en un entorno más profesional, sería recomendable considerar `Grunt` o `Gulp` para automatizar toda la compilación.**

<br>

---

---

<br>

<br>

---

### **Etapas de compilación**

---

<br>

**Aquí están los pasos para compilar código SASS a CSS:**

<br>

**1.** Escribir el código SASS utilizando la extensión de archivo .scss.

**2.** Compilar el código SASS a CSS utilizando un compilador o una herramienta de construcción.

**3.** Guardar el código CSS compilado en un archivo separado con extensión .css.

**4.** Vincular el archivo CSS compilado a tu archivo HTML utilizando la etiqueta `<link>`.

<br>

---

---

<br>

<br>

---

## **Archivo `.map.css`**

---

<br>

**Cuando se compila un archivo `SASS`, se generan un archivo `CSS` y un archivo fuente con extensión `.map`.**

**El archivo fuente (.map.css) contiene información sobre el código SASS original y su relación con el código CSS compilado.**

**El objetivo de este archivo es ayudar a los desarrolladores a depurar el código CSS, permitiéndoles rastrear hasta el código fuente original.**

**Es un archivo JSON que contiene correspondencias entre el código CSS y el código SASS original, incluyendo el nombre del archivo original, los números de línea y los números de columna.**

**Es utilizado por herramientas de desarrollo, como las consolas de desarrollo de los navegadores, para vincular el código CSS compilado con el código SASS original.**

**De esta manera, es más fácil identificar dónde se define una regla de estilo particular en el código SASS al depurar problemas en el código CSS.**

<br>

---

<br>

**En resumen, el archivo `.map` generado por el compilador de SASS es una herramienta de depuración valiosa que ayuda a los desarrolladores a rastrear el código CSS compilado hasta el código SASS original, lo que facilita la identificación y resolución de problemas.**

<br>

---

---

<br>

<br>

---

### **Complemento: Live `SASS` Compiler**

---

<br>

Para llevar el desarrollo de SASS en Visual Studio Code (un editor de código) **a un nivel más avanzado**, es posible **instalar extensiones** que facilitan el desarrollo.

<br>

---

<br>

Una de ellas es **Live Sass Compiler**, que **compila archivos Sass o Scss a CSS en tiempo real y actualiza el CSS compilado en el navegador sin necesidad de guardar manualmente el archivo o recargar la página.**

Es una forma conveniente y eficiente de escribir y probar código Sass o Scss sin tener que utilizar compiladores externos o herramientas de línea de comandos.

<br>

---

<br>

**También está la extensión `Sass`**, que agrega soporte lingüístico para archivos Sass (.sass) y SCSS (.scss).

Proporciona resaltado de sintaxis, snippets de código y auto-indentación.

<br>

---

<br>

Además, **tenemos StyleLint**, un linter moderno que **detecta errores y aplica convenciones consistentes en tu código SASS o CSS.**

Ofrece una amplia gama de reglas que se pueden personalizar para que coincidan con la guía de estilo y las normas de codificación de tu equipo.

También proporciona sugerencias y correcciones para los problemas detectados, lo que facilita el mantenimiento de la calidad y coherencia del código en un proyecto.

<br>

---

---

<br>

<br>

---

### **Definición: Linter**

---

<br>

**Un linter es una herramienta** utilizada por los desarrolladores **para verificar el código** fuente **en busca de** posibles **errores, bugs y violaciones de convenciones de estilo o sintaxis**.

**Analiza el código para detectar posibles problemas y proporciona retroalimentación al desarrollador.**

<br>

---

---

<br>

<br>

---

## **Operador matemático en SASS**

---

<br>

SASS proporciona varios operadores matemáticos integrados que se pueden utilizar para realizar operaciones aritméticas en tu hoja de estilos. Estos operadores se pueden utilizar junto con variables SASS para crear estilos dinámicos y flexibles.

<br>

---

**Aquí tienes algunos de los `operadores matemáticos` más comúnmente utilizados en SASS:**

<br>

- **`+ (adición):`** suma dos valores.

- **`- (sustracción):`** resta un valor de otro.

- **`* (multiplicación):`** multiplica dos valores.

- **`/ (división):`** divide un valor por otro.

<br>

---

**Aquí tienes un ejemplo donde se define el tamaño de fuente de algunos elementos utilizando operadores matemáticos:**

```scss
$base-font-size: 16px;

$header-font-size: $base-font-size * 1.5;

$footer-font-size: $base-font-size * 0.8;

header {
  font-size: $header-font-size;
}

footer {
  font-size: $footer-font-size;
}
```

<br>

---

**En este ejemplo, se define un tamaño de fuente base de 16 px y se utilizan operadores matemáticos para calcular los tamaños de fuente del encabezado y del pie de página.**

**La variable `$header-font-size`:**

- se calcula **multiplicando la variable `$base-font-size` por 1.5**

  mientras que

<br>

**la variable `$footer-font-size`:**

- se calcula multiplicándola **por 0.8**.

<br>

---

**Estos valores se utilizan luego para establecer el tamaño de fuente de los elementos de encabezado y pie de página, respectivamente.**

<br>

---

---

<br>

<br>

---

## **El bucle en SASS**

---

<br>

Los bucles son otra característica poderosa de SASS que puede hacer que tu código sea más conciso y eficiente.

**Con los bucles, puedes escribir un bloque de código una vez y luego usarlo repetidamente con diferentes valores, en lugar de escribir el mismo código una y otra vez.**

<br>

---

---

<br>
<br>

---

### **Bucle `@for`**

---

<br>

**Aquí hay un ejemplo de un bucle `@for`:**

```scss
@for $i from 1 through 5 {
  .item-#{$i} {
    font-size: 16px * $i;
  }
}
```

<br>

---

En este ejemplo, **utilizamos un bucle `@for` para generar estilos para cinco elementos diferentes.**

**El bucle itera sobre los valores del 1 al 5, y en cada iteración, genera una clase CSS con un tamaño de fuente diferente basado en el valor actual de `$i`.**

---

<br>

---

**Cuando se compila este código SASS, este genera el siguiente CSS:**

```css
.item-1 {
  font-size: 16px;
}

.item-2 {
  font-size: 32px;
}

.item-3 {
  font-size: 48px;
}

.item-4 {
  font-size: 64px;
}

.item-5 {
  font-size: 80px;
}
```

---

<br>

---

---

<br>
<br>

---

### **Bucle `@each`**

---

<br>

**Aquí hay un ejemplo de un bucle `@each`:**

```scss
$colors: (
  primary: #007bff,

  secondary: #6c757d,

  success: #28a745,

  danger: #dc3545,

  warning: #ffc107,

  info: #17a2b8,
);

@each $name, $color in $colors {
  .btn-#{$name} {
    background-color: $color;
  }
}
```

<br>

**En este ejemplo, definimos un mapa llamado `$colors` que contiene un conjunto de pares clave-valor.**

**Luego, utilizamos el bucle `@each` para iterar sobre cada par clave-valor en el mapa `$colors`.**

**En cada iteración del bucle, asignamos la clave a la variable `$name` y el valor a la variable `$color`.**

<br>

---

<br>

**Al interior del bucle, utilizamos interpolación de cadenas para generar una clase CSS llamada `.btn-{nombre-color}`, donde nombre-color es el nombre de cada color en el mapa `$colors`.**

**Finalmente, definimos la propiedad `background-color` de cada clase CSS con el valor del color correspondiente.**

<br>

---

<br>

<br>

---

---

<br>
<br>

---

### **Las funciones en `Sass`**

---

<br>

**Las funciones son otra característica poderosa de `SASS` que te permite escribir fragmentos de código reutilizables.**

**Funcionan de la misma manera que las funciones en lenguajes de programación como JavaScript, permitiéndote realizar cálculos, manipular datos, etc.**

<br>

---

<br>

**En SASS, puedes definir tus propias funciones utilizando la directiva `@function`.**

**Las funciones pueden aceptar argumentos, al igual que las funciones tradicionales, y devolver un valor.**

<br>

---

**Aquí hay un ejemplo de función en `Sass`:**

```Scss
@function double($number) {

  @return $number * 2;

}

.my-element {

  width: double(10px);

}
```

---

<br>

**En este ejemplo, definimos una función llamada "double" que toma un solo argumento, "$number".**

**La función multiplica el número por 2 y devuelve el resultado.**

**En el selector `".my-element"``, utilizamos la función `"double"`` para establecer el ancho del elemento en 20 px.**

<br>

---

<br>

Las funciones pueden ser extremadamente útiles para realizar cálculos u otras operaciones que se repiten en tu código base.

También pueden ayudarte a escribir un código más conciso y fácil de mantener.

<br>

---

---

<br>

<br>

---

### **Observación: _`Funciones Integradas`_**

---

<br>

**SASS viene con varias funciones integradas que puedes utilizar desde el principio.**

**Estas incluyen funciones para manipular colores, cadenas de texto, listas, etc. Aquí tienes algunos ejemplos:**

<br>

- **lighten($color, $amount):** 

  - aclara el color dado en la cantidad especificada (en porcentaje).

---

<br>  

- **darken($color, $amount):** 

  - oscurece el color dado en la cantidad especificada (en porcentaje).

---

<br>  

- **percentage($value):** 

  - convierte el valor dado en porcentaje.

---

<br>  

- **join($list1, $list2, $separator):** 

  - une dos listas juntas, opcionalmente con un separador especificado.

---

<br>  

- **color.adjust($color, $hue: $amount):** 

  - es una función que permite cambiar el valor de un color.

---

<br>  

- **grayscale($color):** 

  - es una función que convierte un color a escala de grises.

---

<br>  

- **invert($color):** 

  - es una función que invierte los colores de un elemento.

<br>

---

<br>

**Al utilizar funciones en tu código SASS, puedes simplificar tus hojas de estilo y hacerlas más flexibles y reutilizables.**

<br>

---

---

<br>

<br>

---

#### **Pequeños consejos de desarrollo**

---

<br>

**Cuando estás desarrollando con SASS, hay varios consejos que puedes seguir para optimizar tu flujo de trabajo y evitar los errores más comunes.**

<br>

---

**Aquí tienes algunas sugerencias:**

<br>

- **Organiza tu código SASS:** 

  - utiliza nombres de variables significativos, una indentación coherente y comentarios apropiados para hacer tu código más legible y fácil de mantener.

---

<br>  

- **Utiliza archivos parciales:** 

  - divide tu código en piezas modulares e impórtalos según sea necesario, en lugar de escribir un solo archivo grande.
  
  - Esto ayuda a reducir el tamaño de tu CSS compilado y lo hace más fácil de gestionar.

---

<br>  

- **Minimiza la anidación:** 

  - si bien la anidación puede ser útil para organizar tu código, también puede resultar en selectores demasiado específicos y hojas de estilo CSS demasiado largas.
  
  - Intenta limitar la anidación a tres niveles o menos, y considera el uso de convenciones de nomenclatura para mantener tus selectores concisos.

---

<br>  

- **Evita usar demasiados mixins:** 

  - si bien los mixins pueden ser una herramienta poderosa, su uso excesivo puede llevar a la duplicación de código y a una disminución en la mantenibilidad.
  
  - Utiliza los mixins con moderación y solo cuando aporten un valor significativo.

---

<br>  

- **Aprovecha las funciones de SASS:** 

  - SASS cuenta con muchas funciones integradas que pueden ayudarte a simplificar tu código y hacerlo más eficiente.
  
  - Por ejemplo, puedes utilizar las funciones `lighten()` y `darken()` para ajustar el brillo de un color, o la función `percentage()` **para convertir un valor decimal a porcentaje.**

<br>

---

**Siguiendo estos consejos, puedes hacer tu proceso de desarrollo con SASS más eficiente y producir un código más fácil de mantener.**

<br>

---

---