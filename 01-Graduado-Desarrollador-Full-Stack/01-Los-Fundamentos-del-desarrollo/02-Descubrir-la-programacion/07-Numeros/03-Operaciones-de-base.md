# **Operaciones básicas de base**

<br>

## **_Objetivos:_**

- **Conocer las operaciones matemáticas básicas para la programación.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

En matemáticas, existen reglas precisas para escribir operaciones, y en informática también.

<br>

---

---

<br>
<br>

---

## **Las operaciones básicas**

---

<br>

**Consideramos cuatro operaciones básicas:**

- **suma**: `+`

- **resta**: `-`

- **multiplicación**: `*`

    y
    
- **división**: `/`

<br>

**En programación, el símbolo** `=` **no significa** `"es igual a"`, sino `"toma el valor de"`

<br>

---

**Ejemplo JavaScript:**

```js
const x = 3 * 2.5
```

<br>

---

**Ejemplo Python:**

```python
x = 3 * 2.5
```

---

<br>

Los ejemplos anteriores asignan el resultado de la operación 3 * 2.5 a la variable x.

<br>

---

---

<br>
<br>

---

## **Prioridades de cálculo**

---

<br>

**Las prioridades de cálculo son las mismas en matemáticas e informática:**

<br>

- la **multiplicación** y la **división** tienen **más prioridad que:**

    - la suma y la resta.

    ---

    <br>

- **La potencia tiene prioridad sobre:**

    - la multiplicación y la división.

    ---

    <br>

- **Si dos operaciones tienen el mismo nivel de prioridad:**

    - la operación que está más a la izquierda se realizará primero.

    ---

   <br>

- **Una operación escrita entre paréntesis tiene prioridad sobre:**

    - todas las demás operaciones.

    ---

    <br>

**Estas reglas son las mismas sin importar el lenguaje utilizado.**

<br>

---

**Ejemplo: JavaScript**

```js
const x = 3 * (4 + 1) / 5 - 3
console.log(x)
```

<br>

---

**En consola**

```
0
```

<br>

---

**Ejemplo: Python**

```python
x = 3 * (4 + 1) / 5 - 3
print(x)
```

<br>

---

**En consola**

```
0
```

---

<br>

**Los dos ejemplos anteriores devuelven 0 ya que:**

- primero realizan la suma de 4 + 1 = (5)

- luego la multiplicación de 3 x (5) = (15)

- luego la división (15) / 5 = (3)

    y

- finalmente la resta de (3) - 3 = (0).

<br>

---

--- 

<br>

<br>

---

### **Atención!: Espacios entre operadores en JavaScript**

---

<br>

**Una buena práctica en JavaScript es separar cada operador de sus operandos utilizando un espacio.**

**En lugar de escribir** `x=3*2.5`**:**

- se escribe `x = 3 * 2.5`, lo que es más legible.

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Las reglas de cálculo y prioridad de operaciones en informática son idénticas o muy similares a las de matemáticas.**

- **Es importante separar cada operador con un espacio para hacer el código más legible.**

<br>

---

---
