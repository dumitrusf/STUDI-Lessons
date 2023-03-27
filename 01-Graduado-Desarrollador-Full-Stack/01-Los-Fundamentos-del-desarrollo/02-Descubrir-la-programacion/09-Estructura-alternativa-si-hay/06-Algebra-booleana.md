# **Álgebra booleana**

<br>

## **_Objetivos:_**

- **Aprender a utilizar el "álgebra booleana".**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**El álgebra Booleano permite realizar razonamientos lógicos con operaciones de comparación.**

**Es posible combinar valores de verdad (true y false) para formar condiciones más complejas.**

**Existen tres funciones lógicas:**

- la conjunción `(y)`,

- la disyunción `(o)`,

- la negación `(no)`.

---

<br>

**Dado que las comparaciones producen booleanos, es posible combinar directamente dos comparaciones de elementos con una función lógica `"y"`, para que la condición global solo sea verdadera si ambas comparaciones son verdaderas simultáneamente.**

<br>

---

---

<br>

<br>

---

## **Conjunción**

---

<br>

**La conjunción representa la `"y (AND)"` lógica:**

- para que sea verdadera, todos los elementos que la componen también deben ser verdaderos (o confirmados).

<br>

- Se utiliza `"&&"` en JavaScript y **`"and"` en Python**.

---

<br>

**En lenguaje natural, se puede traducir simplemente una conjunción como:**

```
condition1 && condition2 => "condition1 verdadera Y condition2 verdadera".
```

<br>

---

**Ejemplo JavaScript: muestra true y false**

```js
console.log(true && true)
console.log(false && true)
```

---

<br>

**Ejemplo Python: muestra true y false**

```Python
print(True and True)
print(False and True)
```

<br>

---

---

<br>

<br>

---

## **Disyunción**

---

<br>

**La disyunción representa la `"o (OR)"` lógica:**

- para que sea verdadera, **"AL MENOS UNO" de sus elementos debe ser verdadero.**

- Se utiliza **`"||"` en JavaScript**

    y
    
- **`"or"` en Python**

---

<br>

**En lenguaje natural, se puede traducir simplemente una disyunción como:**

```
condition1 || condition2 => "condition1 verdadera O condition2 verdadera".
```

<br>

---

**Ejemplo JavaScript: muestra true**

```js
console.log(false || true || false)
```

---

<br>

**Ejemplo Python: muestra true**

```Python
print(False or True or False)
```

<br>

---

---

<br>

<br>

---

## **Negación**

---

<br>

**La negación representa el "no" lógico:**

- simplemente invierte el valor de la expresión de verdadero a falso, o viceversa.

- Se utiliza **`"!"` en JavaScript**

    y
    
- **`"not"` en Python**

---

<br>

**En lenguaje natural, se puede traducir simplemente una negación como:**
```
!condition => "condición no verdadera (falsa)".
```

<br>

---

---

<br>

<br>

---

## **Uso de paréntesis**

---

<br>

**Para asegurarse de que la expresión produzca el resultado esperado, es importante prestar atención al orden de los paréntesis:**

- **al igual que en** las expresiones **matemáticas** convencionales, **los paréntesis tienen efectos en la interpretación de la expresión.**

- También facilitan la lectura.

<br>

---

**Ejemplo JavaScript: muestra false y true**

```js
console.log(!true && false)
console.log(!(true && false))
```

---

<br>

**Ejemplo Python: muestra false y true**

```Python
print(not True and False)
print(not (True and False))
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

- **Los operadores `"y (AND)"` y `"o (OR)"` permiten manipular varias condiciones sucesivas, mientras que `el operador "no (NOT)" permite invertir el valor de verdad`.**

<br>

---

---
