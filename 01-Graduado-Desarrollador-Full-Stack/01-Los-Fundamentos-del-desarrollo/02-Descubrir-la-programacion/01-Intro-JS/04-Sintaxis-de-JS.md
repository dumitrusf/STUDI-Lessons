# **Sintaxis de JavaScript**

<br>

## **_Objetivos:_**

- **Aprender las bases de la sintaxis de `JS`**

---

---

<br>

---

## **Contexto**

---

<br>

La sintaxis de un lenguaje es el conjunto de reglas de escritura que se deben respetar para redactar un código fuente válido de cuyo lenguaje usaremos.

La forma de definir variables o funciones, el formato de escritura de una operación, o incluso el cumplimiento o no del uso de mayúsculas y minúsculas son ejemplos de reglas de sintaxis en un lenguaje.

JavaScript es un lenguaje de alto nivel, lo que significa que su sintaxis es más cercana al lenguaje natural que al lenguaje de máquina.

Esto es lo que lo hace fácil de aprender y utilizar.

<br>

---

---

<br>
<br>

---

## **Instrucción**

---

<br>

**Una instrucción `es una línea de código que realiza una acción`:**

- una visualización, un cálculo, etc.

- Las instrucciones se ejecutan `secuencialmente`, es decir:

    - **en orden y una por una**

<br>

---

---

<br>
<br>

---

## **Variables y Constantes**

---

<br>

**Una instrucción puede utilizar variables**, que **son objetos a los cuales se les puede asignar un valor:**

- un nombre

- una fecha

- un número

- etc.


estas **se declaran con la palabra clave `"let"`**, y su valor puede cambiar a lo largo del programa.

<br>

---

<br>

**Una constante** se parece a una variable, excepto que **debe contener un valor** desde su creación **y este valor no puede ser cambiado posteriormente.**

**Se declara con la palabra clave `"const"`**.

<br>

---

**Ejemplo: Declaración de variables en JS**

```js
// Declaración y asignación de una variable llamada "month"
let month = 'April'

// Cambio del valor de la variable "month"
month = 'May' 

// Declaración y asignación de una CONSTANTE llamada "NB_MONTH"
const NB_MONTH = 12
```

<br>

---

---

<br>
<br>

---

## **Expresión**

---

<br>

Una expresión es un fragmento de código que produce un resultado, por ejemplo, una suma.

El resultado de una expresión puede ser almacenado en una variable.

<br>

---

**Ejemplo: Instrucción con Expresión**

```js
// La línea en si misma representa una instrucción.

// La parte de la derecha, "5 + 6", es una expresión.

let sum = 5 + 6 
```

<br>

---

---

<br>
<br>

---

## **Funciones**

---

<br>

En JavaScript, algunas acciones requieren el uso de funciones predefinidas.

Una función es un fragmento de código reutilizable.

<br>

**Las funciones sirven especialmente para evitar reescribir el código si se utiliza varias veces en el programa:** 

en su lugar, simplemente llamamos a la función usando su nombre y las instrucciones que la función contiene se ejecutarán al llamar a la función.

<br>

**Ejemplo: Visualizar en consola**

---

<br>

Para mostrar cosas en la consola, **utilizamos la función predefinida `console.log()`**.

**Dentro de los paréntesis,** debemos indicar **la información que queremos mostrar en consola**.

```js
// Muestra Hello World en la consola
console.log('Hello World')
// Muestra 4 en la consola
console.log(4)
```

<br>

---

---

<br>
<br>

---

## **Reglas de sintaxis**

---

<br>

**Para que las instrucciones sean ejecutadas, deben estar escritas en una sintaxis correcta.**

<br>

---

**JavaScript impone:**

- **Respetar mayúsculas y minúsculas, Por ejemplo:**

    - `console.Log()` no es lo mismo que `console.log()`.

    <br>

- **Respetar los espacios:**

    - el nombre de una variable no puede contener espacios, sin embargo, son necesarios después de palabras clave como `"let"`.

    <br>

- Es necesario saltar de línea entre dos instrucciones.

<br>

---

**Ejemplo:**

```js
const hello = 'Hello'
const world = 'World'
console.log(hello, world)
```

<br>

---

---

<br>
<br>

---

### **Atención!: Estándar**

---

<br>

En versiones anteriores, las instrucciones de JavaScript debían terminar con un punto y coma.

Con la evolución del lenguaje, el punto y coma ya no es necesario.

Aun así, todavía se pueden ver ambas escrituras.

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **JavaScript permite utilizar:** 

    - **variables**

    - **funciones**

    - **operaciones**
    
        *e*
        
    - **instrucciones.**

    <br>
    
- **Su escritura debe respetar reglas de sintaxis predefinidas.**

<br>

---

---
