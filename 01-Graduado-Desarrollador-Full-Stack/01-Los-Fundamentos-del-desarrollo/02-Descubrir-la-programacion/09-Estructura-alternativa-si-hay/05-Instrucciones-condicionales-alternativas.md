# **Instrucciones condicionales alternativas**

<br>

## **_Objetivos:_**

- **Aprender a enriquecer una instrucción condicional con alternativas.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**La instrucción `if` puede ser complementada con tantas alternativas como sea necesario en caso de que la condición sea falsa.**

<br>

---

### **Si... entonces si... sino...**

---

<br>

**La instrucción `if` a menudo va acompañada del `else`.**

**El `else` permite evitar que los bloques `if` se sucedan innecesariamente y "ofrece una alternativa al primer bloque (del if)".**

<br>

---

<br>

**De hecho, `un bloque else` se ejecuta solo si la condición del bloque `if` no se cumple", mientras que las condiciones de `"los bloques if simples siempre se evalúan"`.**

<br>

---

---

<br>
<br>

---

## **Instrucción else**

---

<br>

**La instrucción `else` es el "y sino" de la instrucción condicional.**

**Si** la primera condición (que es **`if`**) **no se cumple y el primer bloque se ignora en consecuencia**, **es posible ejecutar otro bloque de instrucciones alternativo.**

**El `else` se ignorara "si la primera condición se cumple".**

<br>

---

<br>

**Esto equivale a decir:**

- **"Si la condición es verdadera, entonces hacer ... y Sino hacer ...".**

<br>

---

**Ejemplo JavaScript: condición falsa, muestra 'Un Vodka-Martini'**

```js
if (7 === '007') {
  console.log('...Bond, James Bond')
} else {
  console.log('Un Vodka-Martini')
}
```

---

<br>

**Ejemplo Python: condición falsa, muestra 'Un Vodka-Martini'**

```Python
if 7 == '007':
  print('...Bond, James Bond')
else:
  print('Un Vodka-Martini')
```

---

<br>

---

<br>

**No es obligatorio limitarse a una sola alternativa:**

- **una instrucción condicional puede contener varios `"else if"` consecutivos que permiten encadenar condiciones hasta que se cumpla una.**

    **"Una vez que una condición es verdadera", `las siguientes se ignoran`.**

<br>

---

**Ejemplo JavaScript: muestra "Más bien alto"**

```js
const altura = 180
if (altura < 150) {
  console.log('Más bien bajo')
} else if (altura < 180) {
  console.log('Más bien medio')
} else {
  console.log('Más bien alto')
}
```

---

<br>

**Ejemplo Python: muestra "Más bien alto"**

```Python
altura = 180
if altura < 150:
  print('Más bien bajo')
elif altura < 180:
  print('Más bien medio')
else:
  print('Más bien alto')
```

<br>

---

---

<br>

<br>

---

### **Observación**

---

<br>

**Dependiendo del lenguaje, puede haber varias formas de escribir la instrucción `"else if"`.**

**En JavaScript, se utiliza simplemente "else" seguido de un nuevo "if", mientras que en `Python` la sintaxis `se acorta a "elif"` (contracción de "else" e "if").**

<br>

---

---

<br>

<br>

---

## **Anidación**

---

<br>

**Es "posible" escribir "una estructura condicional dentro de otra estructura condicional" para simplificar el código y evitar evaluar la misma condición varias veces.**

**Esta imbricación puede hacerse cualquier cantidad de veces, aunque "es preferible evitar una imbricación demasiado profunda".**

<br>

---

**Ejemplo de anidación:**

```js
const numero = 42

if (numero > 10) {

  if (numero < 30) {
    console.log('Número entre 10 y 30')
  } else if (numero < 50) {
    console.log('Número entre 30 y 50')
  } else {
    console.log('Número mayor o igual a 50')
  }

} else {

  console.log('Número menor o igual a 10')

}

```

---

<br>

La imbricación de estructuras condicionales **aquí evita repetir varias veces la condición `numero > 10`:**

- dentro del bloque, **ya tenemos la garantía de que `numero es mayor que 10`**.

<br>

---

---

<br>

<br>

---

### **Complemento: Switch**

---

<br>

**En JavaScript, la instrucción `"switch"` es `otra sintaxis para expresar alternativas`, para otros mejor o para otros peor, en nuestro caso es muy recomendable verla ya que es `"MEJOR"`.**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Un bloque `"if"` puede ser extendido con un bloque `"else"` para expresar una alternativa predeterminada, e incluso `es posible encadenar varios bloques "else if"` para expresar `varias alternativas condicionales`.**

<br>

---

---
