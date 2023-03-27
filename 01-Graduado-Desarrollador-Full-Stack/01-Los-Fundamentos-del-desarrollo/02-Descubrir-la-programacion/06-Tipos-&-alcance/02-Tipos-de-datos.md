# **Tipos de datos**

<br>

## **_Objetivos:_**

- **Explorar los diferentes tipos de datos.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Para manipular y procesar datos, se asocia un tipo a cada uno de ellos.

Una computadora solo procesa información binaria, por lo que todos los datos se convierten en secuencias de 0 y 1.

**¿Cómo se diferencia entonces una letra de un número o un booleano de una cadena de caracteres?**

Esto se logra mediante los tipos de datos.

Estos permiten definir cómo se deben realizar las operaciones en los datos.

En efecto, sumar dos números no se hace de la misma manera que concatenar dos cadenas de caracteres.

<br>

---

---

<br>
<br>

---

## **Tipos de datos**

---

<br>

**Un dato puede ser:**

- un número

- un carácter

- una cadena de caracteres

- etc.

---

<br>

El tipo de un dato es la categoría que el programa asocia a ese dato.

**El tipo determina el espacio ocupado en la memoria por el dato, los tratamientos posibles sobre él o el comportamiento de un operador.**

<br>

---

### **Ejemplo: Comportamiento del operador `+`**

---

<br>

**El operador `+` puede usarse con `números` o `cadenas de caracteres`**

**Su comportamiento** **depende** precisamente **del tipo de dato** manipulado.

<br>

---

**Ejemplo JavaScript:**

```JavaScript

const number1 = 1

const number2 = 4

const letter1 = '1'

const letter2 = '4'

console.log(number1 + number2)

console.log(letter1 + letter2)

```

<br>

---

**Ejemplo Python:**

```Python

number1 = 1

number2 = 4

letter1 = '1'

letter2 = '4'

print(number1 + number2)

print(letter1 + letter2)

```

---

<br>

**Estos dos programas retornan en consola:**

```
5
14
```

---

Las variables `number1` y `number2` s**e sumaron con el operador `+`,** mientras que **las variables letter1 y letter2 se concatenaron con el mismo operador,** porque **los datos number1 y number2 no son del mismo tipo que los datos letter1 y letter2** (número y cadena en JavaScript).

Con datos de tipo booleano, el operador + se refiere a la operación lógica `OR`.

<br>

---

---

<br>
<br>

---

## **Principales tipos**

---

<br>

**En JavaScript, los principales tipos son:**

- **number:** los números enteros

- **float:** números de punto flotante decimales

- **string:** las cadenas de caracteres

- **bool:** los booleanos

---

**En Python, los principales tipos son:**

- **int:** los números enteros  

- **float:** números de punto flotante decimales

- **str:** las cadenas de caracteres

- **bool:** los booleanos

<br>

---

### **Complemento: Otros tipos de datos**

---

<br>

**Existen otros tipos de datos como:**

- **los arrays:**

    - Un array es una colección de variables de cualquier tipo, dispuestas una detrás de otra en la memoria.

    - Los arrays se utilizan generalmente para almacenar y procesar datos del mismo tipo.

    o
    
- **los objetos**

<br>

---

**En el siguiente ejemplo, el array `temp` contiene `temperaturas`, las cuales están separadas por comas.**

<br>

---

**Ejemplo JavaScript:**

```JavaScript
const temp = [21, 24, 18, 19]
```

<br>

---

**Ejemplo Python:**

```Python
temp = [21, 24, 18, 19]
```

---

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **El tipo de un dato corresponde a la categoría de ese dato (número, cadena de caracteres, etc.).**

- **Este tipo le indica al programa cómo debe manipular y procesar ese dato.**

<br>

---

---
