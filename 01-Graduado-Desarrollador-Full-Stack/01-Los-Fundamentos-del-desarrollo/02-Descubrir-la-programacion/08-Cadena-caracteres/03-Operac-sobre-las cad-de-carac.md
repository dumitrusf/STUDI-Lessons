# **Introducción a las cadenas de caracteres**

<br>

## **_Objetivos:_**

- **Aprender a manipular cadenas de caracteres**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Existen muchas funciones de manipulación de cadenas, aquí se presentan las más útiles.**

<br>

---

### **Recordatorio**

---

<br>

**Ejemplo JavaScript:**

```js
const citation = 'En una calurosa noche a principios de julio...'
console.log(citation.length)
console.log(citation[4])
console.log(citation.substring(8, 15))
```

<br>

---

**Ejemplo Python:**

```Python
citation = 'En una calurosa noche a principios de julio...'
print(len(citation))
print(citation[4])
print(citation[8:15])
```

---

<br>

**Ambos programas devuelven:**

```
56
u
calurosa
```

<br>

---

---

<br>

<br>

---

## **Convertir una cadena en mayúsculas**

---

<br>

**Para convertir una cadena a mayúsculas, se utiliza el método `.toUpperCase()` en JavaScript.**

**En Python, se utiliza el método `.upper()`.**

<br>

**Ejemplo JavaScript:**

```js
const cadena = 'Hola a todos'
const mayusculas = cadena.toUpperCase()
console.log(mayusculas)
```

<br>

---

**Ejemplo Python:**

```Python
cadena = 'Hola a todos'
mayusculas = cadena.upper()
print(mayusculas)
```

---

<br>

**Ambos programas muestran "HOLA A TODOS".**

<br>

---

---

<br>

<br>

---

## **Verificar si una subcadena está contenida en una cadena**

---

<br>

**Para verificar si una sub-cadena está incluida en una cadena, se utiliza el método `.includes(subCadena)`**

**En Python, se utiliza el operador `in`**

<br>

**Ejemplo JavaScript:**

```js
const str = 'Hola todo el mundo'
const include = str.includes('hola')
console.log(include)
```

<br>

---

**Ejemplo Python:**

```Python
str = 'Hola todo el mundo'
include = 'hola' in str
print(include)
```

---

<br>

**Ambos programas devuelven el valor booleano true.**

<br>

---

---

<br>

<br>

---

## **Testear el Inicio de una Cadena**

---

<br>

**Para verificar si una sub-cadena está al comienzo de una cadena, se utiliza el método `.startsWith(subString)` en JavaScript**

**En Python, se utiliza el método `startswith(sub_string)`.**

<br>

**Ejemplo JavaScript:**

```js
const str = 'Hola todo el mundo'
const start = str.startsWith('todo')
console.log(start)
```

<br>

---

**Ejemplo Python:**

```Python
str = 'Hola todo el mundo'
start = str.startswith('todo')
print(start)
```

---

<br>

**Ambos programas devuelven el valor booleano false.**

<br>

---

### **Recorrer una Cadena**

---

<br>

En JavaScript, la estructura `(for...of)` **permite recorrer todos los elementos de una lista**, como un arreglo o una cadena de caracteres.

**Esta es una estructura de bucle especial que comienza en el `índice 0` de la cadena `y se detiene al final`.**

**En Python, la estructura equivalente es for in.**

**Esta función se utiliza especialmente cuando se desea aplicar el mismo tratamiento a todos los elementos de la cadena.**

<br>

**Ejemplo JavaScript:**

```js
const citation = 'Empieza el juego puedo ganarlo'
for (const char of citation) {
  console.log(char)
}
```

<br>

---

**Ejemplo Python:**

```Python
citation = 'Empieza el juego puedo ganarlo'
for char in citation:
  print(char)
```

<br>

---

### **Complemento: Documentación**

---

<br>

La documentación de MDN enumera todas las funciones disponibles, como por ejemplo `replace`, que permite reemplazar caracteres.

**[mdn string](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String)**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Existen muchas formas de manipular cadenas de caracteres, pero se utilizan de manera diferente en JavaScript y Python.**

- **Es preferible utilizar comillas simples.**

<br>

---

---
