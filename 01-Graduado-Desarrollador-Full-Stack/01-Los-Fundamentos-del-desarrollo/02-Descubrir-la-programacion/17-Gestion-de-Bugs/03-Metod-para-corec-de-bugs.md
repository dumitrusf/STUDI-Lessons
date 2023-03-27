# **Métodos para la corrección de bugs**

<br>

## **_Objetivo_**

- **Conocer métodos para la corrección de bugs.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Los bugs son inevitables.

Llega un momento en el que es necesario corregir estos bugs.

Seguir un método riguroso para corregir bugs permite ahorrar tiempo y garantizar que la corrección sea efectiva.

<br>

---

---

<br>

<br>

---

## **Aislar y minimizar la parte del código que contiene el problema**

---

<br>

Para comprender mejor el problema, **es recomendable aislarlo en un ejemplo simple.**

**"Una vez" que este ejemplo esté "aislado, "se puede simplificar al máximo para identificar el bug correspondiente", asegurarse del elemento que está causando el mal funcionamiento y corregirlo.**

<br>

---

### **Ejemplo: Se dispone del siguiente código con dos funciones**

---

<br>

```js
function fahrenheitToCelsiusFormatting (temperatureF) {
  // Conversión de un valor de temperatura en grados Fahrenheit a grados Celsius
  const temperatureC = (temperatureF - 32) * 5 / 9
}

function temperatureConversion (startTempF, nTemperatures, scale) {
  console.log('Comienzo de la conversión de temperaturas ...')
  let temperature = startTempF
  let countTemperature = 0
  while (countTemperature !== nTemperatures) {
    fahrenheitToCelsiusFormatting(temperature)
    nTemperatures = nTemperatures + 1
    temperature = temperature + scale
  }
}

const startTempF = -459
const nTemperatures = 10
const scale = 40
temperatureConversion(startTempF, nTemperatures, scale)
```

---

<br>

La ejecución de este código nunca finaliza.

<br>

---

<br>

**Se percibe que el problema reside en el bucle while, que nunca se detiene y genera un bucle infinito.**

```js
while (countTemperture !== nTemperatures) {
  fahrenheitToCelsiusFormatting(temperature)
  nTemperatures = nTemperatures + 1
  temperature = temperature + scale
}
```

---

<br>

**Se puede aislar estas líneas con lo necesario para reproducir el problema de la siguiente manera:**

```javascript
let startTempF = -459
let nTemperatures = 10
let scale = 40

function fahrenheitToCelsiusFormatting (temperatureF) {
  // Convertir un valor de grados Fahrenheit a grados Celsius
  const temperatureC = (temperatureF - 32) * 5 / 9
}

let temperature = startTempF
let countTemperature = 0

while (countTemperature != nTemperatures) {
  fahrenheitToCelsiusFormatting(temperature)
  nTemperatures = nTemperatures + 1
  temperature = temperature + scale
}
```

Se obtiene un código mucho más corto que produce el mismo problema y que puede ser inspeccionado con más facilidad.

<br>

---

### **Observación:**

---

<br>

Un ejemplo como este se llama `MWE`, que significa **"Minimal Working Example"** **(Ejemplo Mínimo Funcional).**

Esta práctica permite aislar con precisión el **bug** y **asegurarse de que no es causado por una instrucción en otro lugar y no depende del contexto.**

Para informar a otros desarrolladores sobre un bug, es común construir un `MWE`, **que permite a cada uno reproducir el problema.**

<br>

---

---

<br>

<br>

---

## **Realizar una búsqueda de manera efectiva**

---

<br>

Por lo general, se obtiene un mensaje de error en presencia de un error de sintaxis.

Una buena práctica es profundizar en el significado del error y buscar una solución en la web, basándose en este mensaje.

Para encontrar resultados de manera más rápida o precisa, se pueden realizar búsquedas más refinadas utilizando ciertas sintaxis en ciertos navegadores.

---

<br>

**En el caso de DuckDuckGo, por ejemplo, se puede ingresar:**

**'perro gato':**

- para encontrar resultados con esa cadena de caracteres exacta.

---

<br>

**perro -gato:**

- para encontrar resultados que mencionen "perro" pero no mencionen "gato".

---

<br>

**perro filetype:pdf:**

- para encontrar documentos en formato PDF que mencionen "perro".

---

<br>

**perro site:ejemplo.es:**

- para encontrar resultados que mencionen "perro" en el sitio ejemplo.es.

---

<br>

**Más detalles aquí:**

- **[https://help.duckduckgo.com/duckduckgo-help-pages/results/syntax/](https://help.duckduckgo.com/duckduckgo-help-pages/results/syntax/)**

<br>

---

### **Ejemplo:**

---

<br>

**Si al programar con JavaScript nos encontramos con el siguiente error:**

<br>

---

**Ejemplo:**

```js
Uncaught TypeError: undefined is not a function
```

---

<br>

**Una búsqueda efectiva para encontrar respuestas puede ser:**

```c#
javascript site:stackoverflow.com 'Uncaught TypeError: undefined is not a function'
```

---

<br>

**Esto nos permitirá acceder a respuestas en StackOverflow, un sitio web de intercambio de programación en línea.**

**Por ejemplo, esta respuesta que sugiere que una función podría haber sido definida incorrectamente:**

- **[https://stackoverflow.com/questions/13502733/uncaught-typeerror-undefined-is-not-a-function-beginner-backbone-js-applica](https://stackoverflow.com/questions/13502733/uncaught-typeerror-undefined-is-not-a-function-beginner-backbone-js-applica)**

<br>

---

---

<br>

<br>

---

## **Mostrar los diferentes valores de las variables** 

---

<br>

**Mostrar los diferentes valores de las variables del ejemplo aislado ayuda a comprenderlos mejor. En JavaScript, esto se puede lograr con console.log.**

<br>

---

### **Ejemplo:**

---

<br>

**Tomemos el ejemplo de un bucle infinito**

**A continuación, Podemos comprender el problema al mostrar el valor de la variable `countTemperature`.**

<br>

---

```js
let startTempF = -459
let nTemperatures = 10
let scale = 40

function fahrenheitToCelsiusFormatting(temperatureF) {
  // Conversión de un valor de temperatura de Fahrenheit a Celsius
  const temperatureC = (temperatureF - 32) * 5 / 9
  console.log(temperatureF, ' °F es equivalente a ', temperatureC, ' °C')
}

let temperature = startTempF
let countTemperature = 0

while (countTemperature !== nTemperatures) {
  console.log('countTemperature = ', countTemperature)
  console.log('nTemperatures = ', nTemperatures)
  fahrenheitToCelsiusFormatting(temperature)
  nTemperatures = nTemperatures + 1
  temperature = temperature + scale
}
```

---

<br>

**Aquí tendríamos la salida:**

```c#
countTemperature =  0

nTemperatures =  10

-459  °F es equivalente a  -272.77777777777777  °C
countTemperature =  0

nTemperatures =  11

-419  °F es equivalente a  -250.55555555555554  °C
countTemperature =  0

nTemperatures =  12

-379  °F es equivalente a  -228.33333333333334  °C
countTemperature =  0

nTemperatures =  13

-339  °F es equivalente a  -206.11111111111111  °C
countTemperature =  0

nTemperatures =  14

-299  °F es equivalente a  -183.88888888888889  °C
countTemperature =  0

nTemperatures =  15

-259  °F es equivalente a  -161.66666666666666  °C
countTemperature =  0

nTemperatures =  16

-219  °F es equivalente a  -139.44444444444446  °C
countTemperature =  0

nTemperatures =  17

-179  °F es equivalente a  -117.22222222222223  °C
countTemperature =  0

nTemperatures =  18

-139  °F es equivalente a  -95  °C
countTemperature =  0

nTemperatures =  19

-99  °F es equivalente a  -72.77777777777777  °C
```

---

<br>

**Lo cual muestra que el comportamiento no es el correcto:** **`nTemperatures` está siendo incrementado en lugar de `countTemperature`.**

<br>

---

---

<br>

<br>

---

## **Comentar temporalmente partes no esenciales**

---

<br>

**Para comprender más rápidamente un error en el código, es posible comentar las partes del mismo que no son esenciales para resolver el problema.**

---

<br>

**Esto presenta la ventaja de:**

- Reducir el tiempo de ejecución para lograr iteraciones más rápidas durante la depuración.

- Tener menos salidas para concentrarse mejor en las visualizaciones de depuración.

<br>

---

### **Ejemplo:**

---

<br>

Si tomamos el ejemplo anterior, **podemos comentar la función `"fahrenheitToCelsiusFormatting"`** aquí **para ejecutar la bucle más rápidamente y concentrarnos en la salida de la depuración.**

```javascript
let startTempF = -459
let nTemperatures = 10
let scale = 40
function fahrenheitToCelsiusFormatting (temperatureF) {
  // Conversión de una temperatura en grados Fahrenheit a grados Celsius
  const temperatureC = (temperatureF - 32) * 5 / 9
  console.log(temperatureF, ' °F es equivalente a ', temperatureC, ' °C')
}
let temperature = startTempF
let countTemperature = 0
while(countTemperature !== nTemperatures){
  console.log('countTemperature = ', countTemperature)
  console.log('nTemperatures = ', nTemperatures)
  // fahrenheitToCelsiusFormatting(temperature)
  nTemperatures = nTemperatures + 1
  temperature = temperature + scale
}
```

---

<br>

**En este caso, solo obtendríamos los valores de las variables para depurar.**

```javascript
countTemperature =  0
nTemperatures =  10
countTemperature =  0
nTemperatures =  11
countTemperature =  0
nTemperatures =  12
countTemperature =  0
nTemperatures =  13
countTemperature =  0
nTemperatures =  14
countTemperature =  0
nTemperatures =  15
countTemperature =  0
nTemperatures =  16
countTemperature =  0
nTemperatures =  17
countTemperature =  0
nTemperatures =  18
countTemperature =  0
nTemperatures =  19
countTemperature =  0
nTemperatures =  20
countTemperature =  0
nTemperatures =  21
countTemperature =  0
nTemperatures =  22
countTemperature =  0
nTemperatures =  23
countTemperature =  0
nTemperatures =  24
...
```

---

<br>

La salida es menos confusa, lo que facilita entender el origen del problema.

<br>

---

---

<br>

<br>

---

## **Explicarse el Problema**

---

<br>

**Para comprender mejor un ejemplo defectuoso, podemos intentar explicar el problema.**

**El explicar el problema, facilita la comprensión y, por lo tanto, la resolución del problema.**

**Escribir el problema que estamos enfrentando puede ayudarnos a resolverlo de manera más efectiva.**

---

<br>

**Esta técnica puede realizarse en 5 pasos:**

1. **"Escribir el nombre del concepto" en la "parte superior" de "una página en blanco".**

---

<br>

2. **Enumerar el contexto del problema:**

    - **los "elementos conocidos", el "error encontrado", las "personas que trabajaron recientemente en el código".**

---

<br>

3. **"Explicar con frases", "como" si estuviera explicando "a otra persona", el problema y su manifestación.**

    **Esto debería ayudarte a descubrir lo que aún no sabes sobre el problema.**

---

<br>

4. **Explorar las áreas oscuras identificadas, plantear hipótesis y anotar diferentes experimentos que puedas realizar para probar estas hipótesis.**

---

<br>

5. **Implementar estos experimentos y, según los resultados, actualizar tus conocimientos sobre el problema, volviendo a la etapa 3 si es necesario.**

<br>

---

### **Complemento: Método del Patito de Hule (Rubber Duck Debugging)**

---

<br>

**En programación, existe un método similar llamado "método del patito de hule":**

  - el método implica explicar el problema a un personaje o a otra persona en voz alta.
  
  - De manera similar a la técnica anterior, es posible que la solución al problema surja al expresarlo en voz alta.

---

<br>

![patito de hule](./03-Metod-para-corec-de-bugs/img/duck.jpg)

```
Asistente de depuración #geek
```

<br>

---

---

<br>

<br>

---

### **Atención!: Realizar una corrección incremental del ejemplo simplificado**

---

<br>

Cuando se corrige un problema, **es recomendable utilizar un enfoque incremental y modificar solo un pequeño número de instrucciones a la vez, para asegurarse de que la corrección que se está realizando es la correcta.**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

**En el proceso de corrección de errores, se pueden resumir esencialmente en tres puntos clave:**

1. Tener la **capacidad de explicar y comprender en detalle el problema.**

---

<br>

2. Tener la **capacidad de modificar y simplificar el código para aislar el problema.**

---

<br>

3. Tener la **capacidad de realizar investigaciones específicas para obtener información relevante.**

<br>

---

---