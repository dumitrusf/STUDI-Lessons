# **Tipo**

<br>

## **_Objetivos:_**

- **Saber cuándo usar una constante**

- **Conocer la sintaxis para declarar constantes en JavaScript.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**En un programa, hay ocasiones en las que ciertos datos no cambian.**

Estos **son valores constantes**, cuya declaración e inicialización son **un poco diferentes de las variables.**

<br>

---

---

<br>
<br>

---

## **Constantes**

---

<br>

**En un programa, algunos valores están predefinidos y no cambian.**

**El cálculo del perímetro de un círculo involucra su diámetro (que depende del círculo) y el número Pi (que no cambia).**

**Para asegurarnos de que en el programa, el valor asociado a Pi no cambie, declaramos que Pi es una constante.**

<br>

---

---

<br>

<br>

---

## **Constantes en JS**

---

<br>

Para indicar que una variable es constante en JavaScript, se utiliza la palabra clave `const` en lugar de la palabra clave `let`.

Intentar modificar una variable declarada como constante provocará un error.

<br>

---

**Ejemplo:**

```javascript
// diameter puede ser modificado para otro círculo
let diameter = 10
const pi = 3.14159
```

<br>

---

---

<br>

<br>

---

## **Atención!: Inicialización**

---

<br>

**Es posible separar la declaración de una variable** de su inicialización.

Sin embargo, **no es posible separar la declaración y la inicialización de una constante:**

siempre debe ser inicializada durante su declaración.

<br>

---

**Ejemplo:**

```javascript
// Este código no funciona: la constante no está
// inicializada durante su declaración.
const pi
pi = 3.14


// Este código funciona: la constante está inicializada durante su declaración.
const pi = 3.14
```

En este código, la constante `pi` no está inicializada durante su declaración, lo que causará un error.

Las constantes en JavaScript deben ser inicializadas en el momento de su declaración.

<br>

---

### **Complemento: Constante en Python**

---

<br>

**En Python, no es posible definir constantes directamente, por lo que debes tener cuidado de nunca modificar una variable cuyo valor se supone que es fijo.**

<br>

---

---