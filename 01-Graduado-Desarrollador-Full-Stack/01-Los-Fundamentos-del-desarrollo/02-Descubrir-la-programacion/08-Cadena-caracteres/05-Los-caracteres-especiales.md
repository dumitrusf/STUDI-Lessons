# **Caracteres Especiales**

<br>

## **_Objetivos:_**

- **Comprender la especificidad de los caracteres especiales y su uso.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**¿Cómo mostrar la cadena de caracteres "c'est l'été" (es verano)?**

**La operación de visualización de una cadena de caracteres es simple, pero puede volverse más complicada cuando se desean mostrar caracteres especiales como:**

- `apóstrofes`

- `comillas`

- `tabulaciones`

    o
    
- `barras invertidas`

<br>

---
---

<br>

<br>

---

## **Caracteres Especiales**

---

<br>

Algunos caracteres tienen un significado particular **(como lo es el apostrofe)**.

Cuando el compilador encuentra uno de estos caracteres, realiza un proceso especial.

**Esto ocurre, por ejemplo, con las comillas `simples` o `dobles`, que se consideran el comienzo y el final de una cadena de caracteres.**

<br>

---

**Ejemplo, ERROR!, a no cometer!: Al mostrar una cadena con apostrofes**

```js
const srt1 = 'c'est l'été'
console.log(str1)
```

---

<br>

**Ejemplo Python:**

```python
str1 = 'c'est l'été'
print(str1)
```

---

<br>

**Ambos programas no funcionan porque el intérprete considera que hay dos cadenas y caracteres entre ellas, lo que genera un error de sintaxis.**

<br>

---

### **Solución**

---

<br>

**Existen dos formas de resolver este problema.**

1. **Se puede colocar la cadena entre `comillas dobles`, de modo que las apóstrofes no se consideren delimitadores de la cadena.**

    **Sin embargo, esto no resuelve el problema si se desea una cadena que contenga tanto comillas simples como dobles.**

---

<br>

2. **La `otra opción` es `indicar que se desea insertar un carácter especial` colocando una `barra invertida` antes.**

<br>

---

**Ejemplo:**

```js
let message = 'c\'est l\'été'
console.log(message)
message = "c'est l'été" 
console.log(message)
```

---

<br>

**Ejemplo Python:**

```Python
message = 'c\'est l\'été'
print(message)
message = "c'est l'été"
print(message)
```

---

<br>

**Ambos programas muestran `"c'est l'été"` (es verano).**

<br>

---

### **Atención!: Mostrar la barra invertida**

---

<br>

**Para mostrar el carácter de barra invertida, es necesario indicar al compilador que no se trata de un carácter especial.**

**Por lo tanto, se debe colocar otra barra invertida antes de la barra invertida original: (las comillas están para indicar de lo que estamos hablando)**

- `"\"`\

<br>

---

---

<br>

<br>

---

## **Caracteres Especiales de Formateo**

---

<br>

**Para indicar** al compilador **que vaya a la línea siguiente**, se usa **`\n`**.

**Para** solicitar una **tabulación**, se usa **`\t`**.

**Existen muchos otros caracteres especiales de este tipo, pero estos son los más utilizados.**

<br>

---

---

<br>

<br>

---

## **Codificación de Caracteres**

---

<br>

Dado que **las computadoras solo pueden entender el lenguaje binario**, **cada carácter debe asociarse a un número binario** específico.

**Al comienzo de la informática, los estadounidenses crearon el código `ASCII` (Código Estándar Americano para el Intercambio de Información)**, que permite escribir cualquier texto en inglés.

<br>

---

<br>

Sin embargo, **esta codificación no permite escribir algunos caracteres de otros idiomas _(por ejemplo, los caracteres acentuados del francés)_.**

Por lo tanto, se crearon varias otras codificaciones y **hoy en día, la codificación `UTF-8`**, que **permite escribir casi todos los caracteres utilizados en el mundo, es la más común.**

<br>

---

### **Complemento: Todos los Caracteres Especiales en JavaScript**

---

<br>

- `\0`: **Octeto nulo**

- `\b`: **Retroceso**

- `\f`: **Salto de página**

- `\n`: **Nueva línea**

- `\r`: **Retorno de carro**

- `\t`: **Tabulación**

- `\v`: **Tabulación vertical**

- `\'`: **Apóstrofe o comilla simple**

- `\"`: **Comilla doble**

- `\\`: **Comilla doble**

---

<br>

**[tipos de caracteres especiales JS](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types)**
<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Algunos caracteres se consideran especiales y están asociados a una función particular.**

- **Para usarlos en otro contexto, como por ejemplo mostrarlos, es necesario indicar al compilador que el carácter en cuestión no es especial, y para ello se coloca una barra invertida antes.**

<br>

---

---
