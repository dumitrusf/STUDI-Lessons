# **Introducción a las cadenas de caracteres**

<br>

## **_Objetivos:_**

- **Aprender cómo definir y utilizar cadenas de caracteres.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Como su nombre lo indica, una cadena de caracteres es una simple lista de uno o varios caracteres.

En la memoria, los caracteres se almacenan uno tras otro, utilizando una codificación para convertirlos en números.

Todo esto es manejado por el lenguaje de programación, y en el código fuente solo se necesita inicializar una variable asignándole el texto que se desea resaltar.

Este texto debe estar rodeado de comillas dobles o simples, para indicar que es una variable de tipo cadena de caracteres.

<br>

---

---

<br>
<br>

---

## **Cadena de caracteres**

---

<br>

**Una cadena de caracteres es una lista ordenada de cero, uno o varios caracteres.**

---

<br>

**Por lo general, se escribe entre comillas dobles o simples en los lenguajes de programación:**

- `"`

    o
    
- `'`

<br>

---

**Ejemplo JavaScript:**

```js
const cadena = 'Hola'
console.log(cadena)
```

<br>

---

**Ejemplo Python:**

```Python
cadena = 'Hola'
print(cadena)
```

---

<br>

**Ambos programas muestran `"Hola"`.**

<br>

---

---

<br>

<br>

---

## **Elección de comillas**

---

<br>

- **En JavaScript**, es posible usar comillas dobles o simples, pero **es común colocar las cadenas de caracteres entre comillas simples cuando las cadenas no contienen el carácter `'`**

- **En Python**, también es posible usar comillas dobles o simples, **no hay una preferencia oficial**

<br>

---

<br>

**En cualquier caso, se debe actuar de manera coherente en todo el programa:**

<br>

---

<br>

- Solo comillas dobles.

- Solo comillas simples.

- Solo comillas simples excepto cuando hay un carácter de comilla simple.

- Solo comillas dobles excepto cuando hay un carácter de comilla doble.

- Etc.

<br>

---

### **Complemento: Semejanzas entre Cadenas de Caracteres y Array de Caracteres**

---

<br>

Se puede ver una cadena de caracteres como una matriz de caracteres de dimensión 1.

Algunas funcionalidades son idénticas entre las cadenas y los arrays de caracteres, por ejemplo, `.length` devuelve en ambos casos la cantidad de elementos o caracteres.

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Las cadenas de caracteres y las matrices de caracteres se declaran e inicializan de manera diferente, ambas pueden usar ciertas funciones pero no son completamente equivalentes.**

<br>

---

---
