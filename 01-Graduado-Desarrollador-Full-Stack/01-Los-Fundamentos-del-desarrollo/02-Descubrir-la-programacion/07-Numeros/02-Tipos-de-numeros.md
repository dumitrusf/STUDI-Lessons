# **Tipos de numeros**

<br>

## **_Objetivos:_**

- **Conocer los diferentes tipos de números en programación.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**En matemáticas, diferenciamos entre:** 

- números enteros

- números decimales

    y
    
- números reales.

---

<br>

En programación, esta distinción también es posible y se realiza a través de los tipos de números.

<br>

---

---

<br>
<br>

---

## **Tipo de número**

---

<br>

Un tipo de número es, un tipo de dato **(como las cadenas y los booleanos) que tiene varias categorías:**

- números enteros

- números decimales

- números reales

---

<br>

La diferenciación de estos tipos depende del lenguaje de programación utilizado.

**Los números con una parte decimal se escriben con un punto en lugar de una coma:** `2.2` en lugar de `2,2`

<br>

---

### **Ejemplo: Tipos de numeros en Python**

---

<br>

**En Python, hay tres tipos de números:**

- `"int"`: **números enteros**

- `"float"`: **números decimales (o flotantes)** 

    y
    
- `"complex"`: **números complejos**

    - Los números flotantes **se utilizan para representar los números decimales y** para **aproximar** los **números reales**

<br>

---

No es posible almacenar el valor exacto de `Pi` (que es un número real con infinitas decimales), independientemente del tipo utilizado, pero es posible aproximarla utilizando un número flotante (aproximadamente 3.14159).

**Ejemplo Python:**

```Python
print(type(3))
print(type(3.1))
```

<br>

---

**En consola:**

```
<class 'int'>
<class 'float'>
```

<br>

---

### **Ejemplo: Tipos de numeros en JavaScript**

---

<br>

**En JavaScript, solo hay un tipo de número:**

- `"number"`:

    - **almacena números enteros y números flotantes en 8 bytes (64 bits)**

<br>

---

**Ejemplo JavaScript:**

```js
console.log(typeof (3))
console.log(typeof (3.1))
```

<br>

---

**En consola:**

```
"number"
"number"
```

<br>

---

### **Complemento: La codificación de los tipos de números**

---

<br>

Los tipos de números pueden influir en el comportamiento de algunos operadores y determinan el espacio en memoria necesario para almacenar un número.

<br>

---

<br>

En Python, un entero "int" se almacena en 4 bytes (32 bits), mientras que un número flotante "float" se almacena en 8 bytes (64 bits).

<br>

---

<br>

Los números enteros almacenados en 32 bits están comprendidos entre -2 147 483 648 y 2 147 483 647, es decir, entre -231 y 231-1.

**Si un programa contiene un número más grande, el intérprete de Python lo convierte en "long", que es otro tipo de "int".**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Existen diferentes tipos de números en informática para representar los tipos de números que existen en matemáticas**

    **Estos tipos varían según el lenguaje utilizado y determinan qué espacio es necesario para almacenar un número en memoria.**

<br>

---

---
