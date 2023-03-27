# **Conversion de tipo (cast)**

<br>

## **_Objetivos:_**

- **Aprender a convertir datos de un tipo a otro**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**¿Cómo cambiar el tipo de un dato?**

Cada dato tiene un tipo que determina qué tratamientos son posibles y cómo actúa un operador en ese dato.

Sin embargo, **a veces necesitamos cambiar el tipo de un dato**, por ejemplo, si queremos realizar operaciones incompatibles con el tipo original.

**Supongamos que tenemos un número que queremos agregar a una cadena de caracteres para incluirlo en una oración.**

**No es posible sumar un número a un texto, pero al convertir ese número en una cadena de caracteres, se vuelve posible concatenar las dos cadenas de caracteres.**

<br>

---

---

<br>
<br>

---

## **Conversión a cadena de caracteres**

---

<br>

**En JavaScript, el método `String()` permite convertir números o booleanos en cadenas de caracteres.**

**En Python, se utiliza el método `str()`.**

<br>

---

**Ejemplo: JS**

```JavaScript
let number = 25
number = String(number)
```

<br>

---

**Ejemplo: Python**

```Python
number = 25
number = str(number)
```

<br>

---

---

<br>
<br>

---

## **Conversión a número**

---

<br>

En JavaScript, el método **`Number()` permite convertir** cadenas de caracteres o booleanos **en números**.

En Python, se utiliza el método `int()` si se desea convertir a un número entero y float() si se desea convertir a un número decimal.

<br>

---

**Ejemplo JavaScript:**

```JavaScript
let word = '3.26'
word = Number(word)
```

<br>

---

**Ejemplo Python:**

```Python
word_1 = '3.26'
word_1 = float(word_1)

word_2 = '426'
word_2 = int(word_2)
```

<br>

---

### **Observación**

---

<br>

- **Los métodos de conversión de tipo funcionan de la misma manera con booleanos.**

- **La conversión de un booleano true a un número devuelve 1, y la conversión de un booleano false a un número devuelve 0.**

<br>

---

---
