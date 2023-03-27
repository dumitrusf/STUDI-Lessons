# **Estructura `for`**

<br>

## **_Objetivos:_**

- **Comprender la estructura del bucle `for`**

- **Saber cómo "inicializar" e "interrumpir" un bucle `for`.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**A menudo, es necesario repetir una acción un número específico de veces:**

- En este caso, a menudo se utilizan contadores, que permiten contar la cantidad de repeticiones y detener el bucle después de un cierto número.

<br>

---

---

<br>

<br>

---

## **El bucle `for`**

---

<br>

**El bucle for permite realizar un número `"CONOCIDO"` de iteraciones.**

**Algorítmicamente, el bucle for se puede traducir como:**

- `"Para contador desde "x" hasta "y", hacer ..."`

---

<br>

**Se pueden distinguir tres elementos para configurar este bucle:**

- **Inicialización:** el contador toma su valor inicial.

- **Condición de salida:** si es verdadera, el bucle continúa.

- **Operación:** para aplicar al contador en cada iteración.

<br>

---

**Ejemplo:**

```js
for (inicialización; condición; operación) {
  // instrucciones
}
```

<br>

---

### **Ejemplo: Contador de `"0"` a `"5"` exclusivo (es decir, `5 vueltas`)**

---

<br>

**Ejemplo JavaScript: detenerse cuando `i` ya "no es menor que 5"**

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

---

<br>

**Ejemplo Python: detenerse cuando `i` ya "no es menor que 5"**

```js
for i in range(5):
  print(i)
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

- **El bucle `for` es especialmente adecuado para casos en los que es necesario realizar un número conocido de iteraciones antes de que comience el bucle.**

<br>

---

---
