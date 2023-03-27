# **Operaciones en cadenas de caracteres**

<br>

## **_Objetivos:_**

- **Saber cómo realizar operaciones simples en variables de tipo cadena de caracteres.**

---

---

<br>

<br>

---

## **Contexto**


<br>

**Existen numerosas operaciones para manipular cadenas de caracteres, por ejemplo:**

- Conocer la cantidad de caracteres en una cadena.

- Devolver el carácter en la posición `x`.

- Devolver una sub-cadena que comienza en la posición `x` y termina en la posición `y`.

<br>

---

---

<br>

<br>

---

## **JavaScript**

---

<br>

- `myString.length` **permite conocer la cantidad de caracteres en `myString`.**

- `myString[x]` **devuelve el carácter que hay en la posición `x`**.

- `myString.substring(x, y)` **devuelve una sub-cadena que comienza en la posición `x` y termina en la posición `y`**.

<br>

---

---

<br>

<br>

---

## **Python**

---

<br>

- `len(my_string)` **permite conocer la cantidad de caracteres en my_string**

- `my_string[x]` **devuelve el carácter que hay en la posición `x`**

- `my_string[x:y]` **devuelve una sub-cadena que comienza en la posición `x` y termina en la posición `y`**

<br>

---

---

<br>
<br>

---

## **Atención!:**

---

<br>

**En Python, en JavaScript y en la mayoría de los lenguajes de programación, comenzamos a contar desde 0 en lugar de 1. Por lo tanto, el primer carácter de una cadena tiene el número de posición 0.**

<br>

---

**Ejemplo JavaScript: manipula la cadena "Hello World"**

```js
let s = 'Hello World'

console.log(s.length)

console.log(s[0])

console.log(s.substring(6, 11))
```

<br>

---

**Ejemplo Python: manipula la cadena "Hello World"**

```python
s = "Hello World"

print(len(s))

print(s[0])

print(s[6:11])
```

<br>

---

**Ambos programas muestran:**

```
11
H
World
```

<br>

---

---