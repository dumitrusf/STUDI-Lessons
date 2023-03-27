# **La indentación**

<br>

## **_Objetivos:_**

- **Conocer las convenciones de indentación del código**

---

---

<br>

---

## **Contexto**

---

<br>

El trabajo de un desarrollador no se limita simplemente a escribir código.

Frecuentemente, es necesario leer código, por ejemplo, para comprender el funcionamiento de un programa.

Por lo tanto, es importante dar una buena legibilidad a su código, para permitir a los demás o a uno mismo leerlo fácilmente.

Para ello, se deben respetar diferentes reglas, como por ejemplo, la indentación.

Consiste en agregar espacios al principio de las líneas para identificar claramente los diferentes bloques de código.

<br>

---

---

<br>
<br>

---

## **Indentación**

---

<br>

**La lectura de un código debe ser facilitada visualmente por una buena indentación:**

Es una manera de formatear las líneas y organizar los bloques de código utilizando un número específico de espacios y tabulaciones.

El resultado debe permitir identificar de un simple vistazo los diferentes niveles del código, especialmente cuando se anidan bloques dentro de otros.

---

<br>

**La indentación es en su mayoría estética:**

- solo da formato al código.

    Sin embargo,

- en ciertos lenguajes como Python, modifica el significado del contenido.

<br>

---

**Ejemplo: Código no indentado**

```js
// Código mal indentado
let surName = 'First'
let firstName = 'Alexander'
if (surName && firstName) {
console.log('Name :')
console.log(firstName, surName)
}
```

<br>

---

**Ejemplo: Código indentado**

```js
// Código correctamente indentado
let surName = 'First'
let firstName = 'Alexander'
if (surName && firstName) {
  console.log('Name :')
  console.log(firstName, surName)
}
```

<br>

---

Gracias a la indentación, podemos percibir mejor que las dos impresiones `console.log` dependen de la condición `(if)`.

<br>

---

---

<br>

<br>

---

## **Reglas generales**

---

<br>

**Aunque el estilo de indentación puede variar ligeramente, existen convenciones populares:**

- **Utilizar espacios** (que se espaciarán de manera consistente en todas partes) en lugar de tabulaciones (que pueden dar resultados diferentes según los entornos).

- **Utilizar dos espacios** para la indentación.

- **Cada vez que un bloque está anidado dentro de otro, se debe indentar con los 2 espacios adicionales.**

- **No dejar varias líneas en blanco entre instrucciones.**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **La `indentación` no debe ser descuidada, ya que sin ella, el código puede volverse rápidamente difícil de leer y, por lo tanto, difícil de entender.**

<br>

---

---
