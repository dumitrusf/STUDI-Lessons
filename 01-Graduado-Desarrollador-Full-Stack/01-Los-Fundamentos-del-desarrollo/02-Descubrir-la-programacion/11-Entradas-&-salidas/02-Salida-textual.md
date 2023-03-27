# **Salida textual**

<br>

## **_Objetivos:_**

- **prender a utilizar la salida textual desde un programa.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Escribir texto en la pantalla, especialmente en la consola de ejecución de un programa, es sin duda el primer ejemplo de salida que se aprende en un lenguaje de programación.**

**Esto incluye el famoso `"Hola Mundo"`, que "consiste en mostrar en la pantalla una simple cadena de caracteres".**

**Este es un ejemplo comúnmente utilizado para introducirse en un lenguaje ya que permite observar cómo se maneja la escritura en la salida estándar.**

**Además, esta es una función que casi siempre está integrada en el núcleo de un lenguaje y, por lo tanto, es fácil de utilizar.**

<br>

---

---

<br>

<br>

---

## **Salidas**

---

<br>

**En programación, las salidas se refieren a la información que un programa envía a un dispositivo de salida como:**

- una pantalla

- una impresora

- una memoria de disco

- etc.

---

<br>

Son **flujos de datos enviados desde el interior de la unidad de procesamiento** `👉 hacia` **el exterior:**

- **(de ahí el término `"salida"` u `"output"`)**.

---

<br>

También **se conoce** a **este flujo de salida como la salida estándar**, que **generalmente se refiere a la pantalla.**

<br>

---

### **Fundamental:**

---

<br>

**"Escribir en" `la salida estándar` "significa indicarle al programa que muestre algo en la pantalla".**

<br>

---

---

<br>

<br>

---

## **Escritura en la salida**

---

<br>

Los **lenguajes** a menudo **proporcionan** funciones cuyos **nombres son similares en inglés** para permitir escribir frases, números o cualquier tipo de valor.

- **En JavaScript:**

    - se utiliza la función `console.log` **con el contenido a mostrar como parámetro:**
    
      - **console.log('...')**

    ---

    <br>

- **En Python:**

    - la función `print` **se utiliza de manera similar:**
    
       - **print('...')**

<br>

---

**Ejemplo JavaScript: muestra "Un mensaje muy importante"**

```js
const mensaje = 'Un mensaje muy importante'
console.log(mensaje)
```

---

<br>

**Ejemplo Python: muestra "Un mensaje muy importante"**

```Python
mensaje = 'Un mensaje muy importante'
print(mensaje)
```

<br>

---

### **Observación: Escribir números**

---

<br>

**Las funciones de visualización aceptan caracteres numéricos:** 

- **simplemente se pueden pasar números como parámetros:**

    - estos se convertirán en cadenas de caracteres en la salida.

---

<br>

Además, a menudo **es posible pasar varios parámetros** a estas funciones **para mostrar varios elementos en la salida.**

<br>

---

**Ejemplo JavaScript: muestra "1 2 3 Sol"**

```js
console.log(1, 2, 3, 'Sol')
```

---

<br>

**Ejemplo Python: muestra "1 2 3 Sol"**

```Python
print(1, 2, 3, 'Sol')
```

<br>

---

### **Complemento: Formateo de Cadenas**

---

<br>

Es útil poder insertar el valor de las variables en una cadena durante la visualización, como el nombre de un usuario en la página de inicio de un sitio web.

**Existen sintaxis especiales que permiten realizar esta operación.**

---

**(preferible antes que la concatenación, ya que es menos aglomerado este ejemplo)**

---

<br>

Observa el uso de los caracteres **`` ` `` en JavaScript**, que permiten **indicar que la cadena contiene valores a reemplazar.**

<br>

---

**Ejemplo JavaScript:**

```js
const nombre = 'Bobby'
// Muestra '¡Hola Bobby!'
console.log(`¡Hola ${nombre}!`)
```

---

<br>

Observa el uso del carácter **`f` en Python**, que **indica que la cadena contiene valores a reemplazar.**

**Ejemplo Python:**

```Python
i = 0
while i < 5:
  print(i)
  i += 1
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

- **Para mostrar información en la pantalla, se utiliza la salida estándar, que permite enviarla al dispositivo de pantalla.**

<br>

---

---
