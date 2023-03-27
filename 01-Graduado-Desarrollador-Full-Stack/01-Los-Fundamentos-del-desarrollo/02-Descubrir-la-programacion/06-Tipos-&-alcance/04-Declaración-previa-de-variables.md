# **Declaración previa de variables**

<br>

## **_Objetivos:_**

- **Saber cómo declarar una variable con o sin asignación**

- **Saber qué representa el valor `"undefined"`**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Durante el desarrollo de un programa, el desarrollador es responsable de definir las variables a utilizar, declararlas, asignarles tipos y asignarles valores.

**El paso de la declaración de una variable es crucial:**

- no es posible usar una variable si no ha sido declarada previamente.

De hecho, como **una variable permite reservar espacio en la memoria para almacenar un valor, la computadora no podrá almacenar nada si la variable no ha sido declarada.**

Además, **en algunos lenguajes, es durante la declaración que se determina el tipo de la variable.**

<br>

---

---

<br>
<br>

---

## **Declarar una variable**

---

<br>

**Declarar una variable implica indicarle al compilador o al intérprete que debe reservar un espacio en la memoria para que el programador pueda almacenar un dato.**

**En Python, es obligatorio inicializar una variable durante su declaración. Sin embargo, otros lenguajes como JavaScript permiten declarar una variable sin inicializarla.**

**Sin embargo, es recomendable inicializar una variable durante su declaración para asegurarse del valor que contiene la variable.**

<br>

---

**Ejemplo: JS**

```JavaScript
let apples
apples = 10
```

<br>

---

**Ejemplo: Python**

```Python
apples = 10
```

<br>

---

## **Atención!:**

---

<br>

**No se puede utilizar una variable que no haya sido declarado anteriormente.**

**Además, una constante debe inicializarse durante su declaración.**

<br>

---

### **Observación**

---

<br>

`JavaScript` **asocia un tipo de dato a una variable en función del valor asociado.**

**En ausencia de un valor asociado** **_(lo cual ocurre en una declaración sin inicialización)_**, **la variable solo puede tener el tipo `"undefined"`.**

<br>

---

```
Aquí, en el programa en JavaScript, cuando declaramos la variable "apples" sin inicializarla, automáticamente adquiere el tipo "undefined".
```

<br>

---

**Ejemplo: js**

```js
let apples
// apples = 10

console.log(apples)
```

<br>

---

**En consola**

```
undefined
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

- **Para poder usar una variable, primero debes declararla.**

- **Durante la declaración, a veces es esencial inicializarla (como en Python), pero incluso si no es obligatorio, es altamente recomendado ya que es mucho más seguro.**

<br>

---
