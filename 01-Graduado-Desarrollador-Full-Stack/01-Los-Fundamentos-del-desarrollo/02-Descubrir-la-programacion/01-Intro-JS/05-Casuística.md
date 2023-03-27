# **La diferencia entre mayúsculas y minúsculas**

<br>

## **_Objetivos:_**

- **Revisar las diferentes convenciones casuísticas**

---

---

<br>

---

## **Contexto**

---

<br>

**Cuando estamos desarrollando, nos vemos obligados a nombrar diferentes elementos de nuestro código, como:**

- **variables**

    o
    
- **funciones**

---

**Según los lenguajes de programación, la diferenciación de `los nombres en función de las mayúsculas y minúsculas, no siempre es la misma`.**

**Dado que los espacios no son utilizables en los nombres, se han establecido diferentes convenciones para separar diferentes palabras en un mismo nombre.**

<br>

---

---

<br>
<br>

---

## **Sensibilidad**

---

<br>

**JavaScript es sensible a las mayúsculas y minúsculas;**

**"por lo tanto, debemos prestar atención a las mayúsculas y minúsculas"**

**(palabras clave, variables, funciones, etc.)**

---

**Por ejemplo, la palabra clave **`let`** (que crea una variable) no puede ser reemplazada por **`Let`** (que no existe).**

<br>

---

<br>

### **Atención!:**

---

<br>

**Se pueden crear dos variables que contengan los mismos caracteres pero con una diferencia en la casuística.**

<br>

---

---

<br>
<br>

---

## **Casuística**

---

<br>

**Los espacios que se utilizan para separar palabras** en el lenguaje **no se pueden usar para nombrar variables.**

**Para reemplazarlos, se unen varias palabras y se utiliza una convención para marcar su separación:**

<br>

---

**Ejemplo:**

- **`camelCase`:**

    - **La primera letra de la primera palabra en minúscula, las primeras letras de las palabras siguientes en mayúscula**
    
    - `(por ejemplo: albumName, parseInput)`

    <br>

- **`PascalCase`:**

    - **Igual que la casuística camel, excepto que la primera letra de la primera palabra también está en mayúscula**
    
    - `(por ejemplo: AlbumName, ParseInput)`

<br>

- **`snake_case`:**

    - **Los espacios son reemplazados por guiones bajos (underscores) " _ " **
    
    - `(por ejemplo: album_name, parse_input)`

<br>

- **`kebab_case`:**

    - **Los espacios son reemplazados por guiones "-"**
    
    - `(Por ejemplo: album-name, parse-input)`

---

**La elección de una convención debe ser consistente para todo el programa:**

- Se elegirá un tipo de convención para el nombre de las variables y funciones

- Y una convención para el nombre de los archivos, etc.

<br>

---

---

<br>
<br>

---

### **Observación: Variación de combinaciones**

---

<br>

**Algunas convenciones son más populares para ciertos lenguajes:**

- snake case en Python

- camel case en JavaScript

- etc.

<br>

---

**Ejemplo: camelCase en JS**

```js
let firstPlayer = 'Leo'
```

<br>

---

**Ejemplo: snake_case en Python**

```python
first_player = 'Leo'
```

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **La elección de la convención de `casuística` permite uniformar los programas y escribir nombres más detallados y legibles.**

<br>

---

---
