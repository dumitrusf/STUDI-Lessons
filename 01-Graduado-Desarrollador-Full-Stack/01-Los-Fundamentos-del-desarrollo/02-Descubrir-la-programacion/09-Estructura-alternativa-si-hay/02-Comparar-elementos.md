# **Comparar elementos**

<br>

## **_Objetivos:_**

- **Saber cómo utilizar los operadores de comparación.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Una de las operaciones más comunes en los programas es la comparación de dos elementos.**

**Existen diferentes operadores de comparación, como:**

- la igualdad

    o
    
- no igualdad

---

- el mayor o igual que

    o
    
- el menor o igual que

---

- el mayor que

    o
    
- el menor que

---

<br>

**Cada comparación debe realizarse entre dos elementos del mismo tipo y produce un resultado binario:**

- verdadero

    o
    
- falso.

**Esto es lo que se llama un booleano.**

<br>

---

---

<br>
<br>

---

## **Resultado de una comparación**

---

<br>

**En programación, encontramos estas mismas comparaciones para:**

- números

- caracteres

- frases

- etc

---

<br>

Sin embargo, los símbolos de comparación difieren de la escritura matemática natural.

Además, las notaciones pueden variar de un lenguaje a otro.

**Una comparación produce un resultado:**

- **verdadero** o **falso** (true o false), que se llama un **booleano**.

<br>

---

---

<br>

<br>

---

## **Testear la igualdad**

---

<br>

**El símbolo `==` significa `"es igual a"`.**

Es claramente distinto del simple `=` **que se utiliza para asignar un valor a una variable.**

<br>

---

**Ejemplo JavaScript: Muestra True & False**

```js
console.log(5 == 5)
console.log(5 == -5)
```

---

<br>

**Ejemplo Python: Muestra True & False**

```js
print(5 == 5)
print(5 == -5)
```

<br>

---

---

<br>

<br>

---

## **Testear la desigualdad**

---

<br>

**El opuesto de `==` es** `!=` que `significa` `"no es igual a"`.

<br>

---

**Ejemplo JavaScript: Muestra True & False**

```js
console.log('A' != 'B')
console.log('A' != 'A')
```

---

<br>

**Ejemplo Python: Muestra True & False**

```js
print('A' != 'B')
print('A' != 'A')
```

<br>

---

---

<br>

<br>

---

## **Testear mayor / menor que (superioridad e infer estricta)**

---

<br>

El operador **`<` significa "es estrictamente menor que"** y **`>` significa "es estrictamente mayor que"**.

<br>

---

**Ejemplo JavaScript: Muestra True & False**

```js
console.log(1 < 2)
console.log(5 > 5)
```

---

<br>

**Ejemplo Python: Muestra True & False**

```js
print(1 < 2)
print(5 > 5)
```

<br>

---

---

<br>

<br>

---

## **Testear mayor o igual que / menor o igual que (superioridad e infer)**

---

<br>

El operador **`<=` significa "es menor o igual que"** y **`>=` significa "es mayor o igual que"**.

<br>

---

**Ejemplo JavaScript: Muestra True & False**

```js
console.log(1 <= 1)
console.log(4 >= 5)
```

---

<br>

**Ejemplo Python: Muestra True & False**

```js
print(1 <= 1)
print(4 >= 5)
```

<br>

---

---

<br>

<br>

---

## **Utilización**

---

<br>

**Los operandos de una comparación, es decir, los valores sobre los que se aplica, pueden ser valores simples, así como variables y expresiones.**

<br>

---

**Ejemplo: JS**

```js
let amount = 6 * 6
console.log(amount == 9 * 2 * 2)
```

---

<br>

**Ejemplo: Python**

```python
amount = 6 * 6
print(amount == 9 * 2 * 2)
```

---

<br>

---

---

<br>

<br>

---

## **Atención!:**

---

<br>

**En JavaScript**, **se prefiere la comparación estricta `(===)`** a la comparación simple (==) presentada aquí.

**La comparación estricta `verifica la igualdad de tipo` además de la igualdad de valor.**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Los operadores de comparación permiten comparar dos operandos, ya sean variables o expresiones.**

<br>

---

---
