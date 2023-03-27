# **Concatenación**

<br>

## **_Objetivos:_**

- **Saber qué es la concatenación y cómo utilizarla.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Una operación de manipulación de texto que aún no hemos abordado y que parece natural es la concatenación.

Es la operación que consiste en unir dos cadenas de caracteres para formar una sola.

Imagina que tu programa solicita el nombre del usuario, lo almacena en una variable y luego desea mostrar un mensaje de bienvenida.

La cadena de caracteres que mostrarás será la concatenación de tu mensaje genérico y el nombre del usuario.

<br>

---
---

<br>

<br>

---

## **La concatenación**

---

<br>

La concatenación es una operación de `"pegar"` cadenas de caracteres.

Es simplemente agregar una cadena después de otra.

La concatenación se realiza utilizando el operador `+`.

Coloca las cadenas una tras otra, **sin separarlas con espacios:**

- es responsabilidad del programador hacerlo.

---

<br>

Se pueden concatenar cualquier cantidad de cadenas.

<br>

---

**Ejemplo JavaScript:**

```js
const str1 = 'miel'
const str2 = 'de'
const str3 = 'primavera'
const etiqueta = str1 + str2 + str3
console.log(etiqueta)
```

---

<br>

**Ejemplo Python:**

```python
str1 = 'miel'
str2 = 'de'
str3 = 'primavera'
etiqueta = str1 + str2 + str3
print(etiqueta)
```

---

<br>

**Ambos programas muestran `mieldeprimavera` (sin espacios)**

<br>

---

---

<br>

<br>

---

## **Mostrar en consola: la salida por defecto**

---

<br>

**Es posible mostrar directamente la concatenación de cadenas utilizando la instrucción de impresión en la salida estándar:**

- **En JavaScript:**

    - `console.log(str1, str2, ...)`

    ---
    <br>

- **En Python:**

    - `print(str1, str2, ...)`

---

<br>

**En este caso, las cadenas se separan automáticamente una de otra.**

**Ejemplo JavaScript:**

```js
const str1 = 'piratas'
const str2 = 'del'
const str3 = 'Caribe'
console.log(str1, str2, str3)
```

---

<br>

**Ejemplo Python:**

```Python
str1 = 'piratas'
str2 = 'del'
str3 = 'Caribe'
print(str1, str2, str3)
```

---

<br>

**Ambos programas muestran `"piratas del Caribe"`.**

<br>

---

---

<br>

<br>

---

## **Función de concatenación**

---

<br>

**Existen varias formas de concatenar cadenas.**

**Se puede usar el operador `+`, pero esto puede generar confusión con las operaciones de suma entre números:**

<br>

- **En JavaScript, se utiliza el método `.concat()`, que concatena cadenas de caracteres la primera cadena es la que llama al método `.concat()` y las demás se colocan entre paréntesis:**

    - **Ejemplo:**

            ```js
                str1.concat(' ', str2, ...)
            ```
---            
            
<br>            

- **En Python, es preferible utilizar el método `''.join([])`, que concatena varias cadenas separándolas con el carácter colocado entre comillas simples.**

    - **Ejemplo:**

            ```js
                str1.concat(' ', str2, ...)
            ```
---            
     
<br>

**Ejemplo JavaScript:**

```js
const str1 = 'piratas'
const str2 = 'del'
const str3 = 'Caribe'
const titulo = str1.concat(' ', str2, ' ', str3)
console.log(titulo)
```

---

<br>

**Ejemplo Python:**

```Python
str1 = 'piratas'
str2 = 'del'
str3 = 'Caribe'
titulo = ' '.join([str1, str2, str3])
print(titulo)
```

---

<br>

**Ambos programas muestran `"piratas del Caribe"`.**

<br>

---

---

<br>

<br>

---

## **Plantillas literales en JavaScript**

---

<br>

**Las plantillas literales permiten integrar cadenas de caracteres de varias líneas o insertar valores de variables directamente dentro de cadenas de caracteres.**

**[Documentación sobre plantillas literales en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **La concatenación consiste en "pegar" cadenas de caracteres unas tras otras.**

    **Es posible concatenar cadenas con el operador + o usar los métodos dedicados a la concatenación. La elección depende del desarrollador, según el contexto y la claridad del código.**

<br>

---

---
