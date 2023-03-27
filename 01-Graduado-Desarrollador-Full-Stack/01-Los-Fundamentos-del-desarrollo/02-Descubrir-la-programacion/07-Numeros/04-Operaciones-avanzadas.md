# **Operaciones avanzadas**

<br>

## **_Objetivos:_**

- **Aprender a usar operaciones más avanzadas que las operaciones básicas.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Hemos visto cómo realizar las cuatro operaciones básicas, pero también **existen muchas otras operaciones matemáticas más complejas** que pueden ser utilizadas fácilmente.

<br>

---

---

<br>
<br>

---

## **Las operaciones Avanzadas**

---

<br>

**Consideramos como operaciones avanzadas, las siguientes:**

<br>

- El cálculo de potencias

- raíces

- valor absoluto

- módulo

- redondeos

- división entera

    y
    
- generación de números aleatorios.

---

<br>

**Existen muchas más, como las operaciones trigonométricas.**

<br>

---

---

<br>
<br>

---

## **Operaciones avanzadas en Python**

---

<br>

**Para calcular la potencia de un número, por ejemplo 23, se escribe:**

- `x = 2 ** 3`

---

<br>

**Para calcular una división entera, por ejemplo, la división entera de 5 entre 3 que es igual a 1, se escribe:**

- `x = 5 // 3`

---

<br>

**Para obtener el resto de una división entera (el módulo), por ejemplo el resto de la división entera de 5 entre 3 que es igual a 2, se escribe:**

- `x = 5 % 3`

---

<br>

**Para redondear un número basado en su parte decimal (sube si es mayor o igual que 0.5) , por ejemplo de 2.6 que es igual a 3, se escribe:**

- `x = round(2.6)`

<br>

---

**Ejemplo: Operaciones avanzadas en Python**

```python
print('2 elevado a la 10 es: ',2**10)
print('División entera de 5 entre 3 es: ',5 // 3)
print('El resto de la división de 5 entre 3 es: ',5 % 3)
print('Redondeo de 2.6 es: ', round(2.6))

```

<br>

---

--- 

<br>

<br>

---

## **Las operaciones en Python requieren de la biblioteca math**

---

<br>

**Para las siguientes operaciones, es necesario importar una biblioteca de operaciones matemáticas con la instrucción `from math import *`**

**Para calcular la raíz cuadrada de un número, por ejemplo, la raíz de 25 se escribe:**

- `x = sqrt(25)`

---

<br>

**Para redondear al entero INFERIOR (lo redondea a inferior) de un número, por ejemplo, de 2.6 que es igual a 2, se escribe:**

- `x = floor(2.6)`

---

<br>

**Para redondear al entero SUPERIOR (lo redondea a superior) de un número, por ejemplo, de 2.6 que es igual a 3, se escribe:**

- `x = ceil(2.6)`

<br>

---

**Ejemplo: Operaciones en Python que requieren la biblioteca math**

```python
from math import *
print('La raíz cuadrada de 25 es: ',sqrt(25))
print('El entero inferior de 2.6 es: ',floor(2.6))
print('El entero superior de 2.6 es: ',ceil(2.6))
```

<br>

---

---

<br>
<br>

---

## **Operaciones avanzadas en JavaScript**

---

<br>

**En JavaScript, las operaciones avanzadas a menudo tienen el mismo nombre que en Python, pero se llaman de manera diferente.**

---

<br>

**Para calcular la potencia de un número, por ejemplo 23, se escribe:**

- `x = Math.pow(2, 3)`

---

<br>

**Para obtener el resto de una división entera (módulo), por ejemplo, el resto de la división entera de 5 entre 3 que es igual a 2, se escribe:**

- `x = 5 % 3`

---

<br>

**Para redondear un número basado en su parte decimal (sube si es mayor o igual que 0.5) , por ejemplo de 2.6 que es igual a 3, se escribe:**

- `x = Math.round(2.6)`

---

<br>

**Para calcular la raíz cuadrada de un número, por ejemplo, la raíz cuadrada de 25, se escribe:**

- `x = Math.sqrt(25)`

<br>

**Para redondear al entero INFERIOR (lo redondea a inferior) de un número, por ejemplo, de 2.6 que es igual a 2, se escribe:**

- `x = Math.floor(2.6)`

<br>

**Para redondear al entero SUPERIOR (lo redondea a superior) de un número, por ejemplo, de 2.6 que es igual a 3, se escribe:**

- `x = Math.ceil(2.6)`

<br>

---

**Ejemplo: Operaciones avanzadas en JavaScript**

```js
console.log('2 elevado a la 10 es: ' + Math.pow(2, 10))
console.log('División entera de 5 entre 3 es: ' + Math.floor(5 / 3))
console.log('El resto de la división de 5 entre 3 es: ' + 5 % 3)
console.log('Redondeo de 2.6 es: ' + Math.round(2.6))
console.log('La raíz cuadrada de 25 es: ' + Math.sqrt(25))
console.log('El entero superior de 2.6 es: ' + Math.ceil(2.6))
```

<br>

---

---

<br>

<br>

---

### **Complemento: Otras operaciones en python**

---

<br>

**Existen muchas otras funciones matemáticas muy útiles.**

---

<br>

**Para calcular el valor absoluto de un número, por ejemplo, el valor absoluto de -3 que es igual a 3, se escribe:**

- `x = abs(-3)`

---

<br>

**Para las siguientes operaciones, es necesario importar una biblioteca de operaciones aleatorias con la instrucción: `from random import *`**

---

<br>

**Para generar aleatoriamente un número entre 0 y 1 excluido, se escribe:**

- `x = random()`

---

<br>

**Para generar aleatoriamente un número entero entre dos límites, por ejemplo, entre 1 y 5, se escribe:**

- `x = randint(1, 5)`

---

<br>

**Para generar aleatoriamente un número flotante entre dos límites, por ejemplo, entre 2 y 5, se escribe:**

- `x = uniform(2, 5)`

---

<br>

---

---

<br>
<br>

---

### **Otras operaciones en JavaScript**

---

<br>

**Para calcular el valor absoluto de un número, por ejemplo, el valor absoluto de -3 que es igual a 3, se escribe:**

- `x = Math.abs(-3)`

---

<br>

**Para generar aleatoriamente un número entre 0 y 1 excluido, se escribe:**

- `x = Math.random()`

---

<br>

- **ETC**

<br>

---

---

<br>
<br>

---

### **Atención: La división entera y la generación de números aleatorios enteros en JavaScript**

---

<br>

**Dado que en JavaScript no hay un tipo específico para números enteros, no hay un operador específico para la división entera (pero aún asi es posible calcularla).**

---

<br>

**Para calcular una división entera, por ejemplo, la división entera de 5 entre 3 que es igual a 1, se escribe:**

- `x = Math.trunc(5 / 3)`

---

<br>

**Para generar aleatoriamente un número entero entre dos límites, por ejemplo, entre 1 y 5, se escribe:**

- `x = Math.ceil(Math.random()*5)`

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Es posible realizar operaciones avanzadas fácilmente en Python y JavaScript.**

    **Las funciones utilizadas generalmente tienen el mismo nombre, pero se llaman de manera diferente.**

    <br>

- **Para usar algunas funciones, es necesario importar la biblioteca math o la biblioteca random en Python.**

<br>

---

---
