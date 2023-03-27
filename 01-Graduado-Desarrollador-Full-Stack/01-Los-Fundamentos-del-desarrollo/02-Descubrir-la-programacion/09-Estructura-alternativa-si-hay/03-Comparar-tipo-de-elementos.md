# **Comparar los tipos de elementos**

<br>

## **_Objetivos:_**

- **Comprender la diferencia entre la "comparación simple" y "la comparación estricta"**

- **Saber "cómo usar las comparaciones estrictas".**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Cuando se comparan elementos entre sí, el resultado depende no solo de su valor sino también de su tipo.**

<br>

---

---

<br>
<br>

---

## **El tipo**

---

<br>

**El tipo de un elemento es como su naturaleza, puede ser:**

- **un número:** 

    - entero
    
    - decimal
    
    - etc

    ---

    <br>
    
- **un carácter**

- **una frase**

- **etc.**

<br>

---

<br>

**El tipo se puede identificar en parte según la notación utilizada:**

- Se utilizan comillas simples para los caracteres, pero no para los números.

- Los números decimales tienen un punto y los enteros no.

<br>

---

### **Comparación de tipo**

---

<br>

**Aunque los operadores de comparación a veces son idénticos en los lenguajes, la comparación no siempre es exactamente la misma.**

---

<br>

**En Python:**

- los elementos deben tener **el mismo valor** y ser del mismo tipo para ser iguales.

<br>

---

<br>

**En JavaScript:**

- **existen operadores especiales que indican que la comparación es estricta, es decir, debe tener en cuenta el tipo de los operandos.**

<br>

---

La segunda línea muestra la diferencia entre JavaScript y Python.

**Para JavaScript, solo importa el valor:** si el operando es una cadena de **caracteres o un número, no hace diferencia.**

Sin embargo, **en Python**, aunque los valores sean equivalentes, **un número y una cadena no son iguales.**

---

**Ejemplo JavaScript: Muestra True & True**

```js
console.log(91 == 91)
console.log('91' == 91)
```

---

<br>

**Ejemplo Python: Muestra True & False**

```Python
print(91 == 91)
print('91' == 91)
```

<br>

---

---

<br>

<br>

---

## **Igualdad estricta**

---

<br>

**Para JavaScript, quien diferencia la igualdad de la igualdad estricta, es el operador de igualdad estricta que es `===` y significa "es igual y del mismo tipo que".**

<br>

---

**Ejemplo JavaScript: Muestra True & False**

```js
console.log('7' == 7)
console.log('7' === 7)
```

---

<br>

---

---

<br>

<br>

---

## **Desigualdad estricta**

---

<br>

**Del mismo modo, la desigualdad estricta existe y se denota como `!==`, es decir, "es diferente en tipo y/o valor".**

<br>

---

**Ejemplo JavaScript: Muestra False & True**

```js
console.log('7' != 7)
console.log('7' !== 7)
```

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

**Es preferible usar comparaciones estrictas en el código JavaScript:**

- su uso es una práctica recomendada.

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Los lenguajes manejan las comparaciones de manera diferente y se debe prestar atención al tipo de operandos.**

<br>

---

---
