# **Flotantes y precision**

<br>

## **_Objetivos:_**

- **Comprender qué son los booleanos**

- **Saber cómo combinar booleanos con el álgebra booleana.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

En programación, los números no solo se utilizan para representar cantidades numéricas.

De hecho, también se encuentran en la forma en que se manejan otros tipos de variables, como los booleanos.

El concepto de booleano proviene del álgebra booleana y representa los valores de verdad utilizados en el razonamiento lógico.

---

<br>

**En la práctica, los booleanos almacenan 2 estados posibles:** 

- verdadero

    o
    
- falso

<br>

**y se utilizan ampliamente para evaluar condiciones en la programación.**

**Los booleanos se basan en gran medida en los números.**

<br>

---

---

<br>

<br>

---

## **Los booleanos**

---

<br>

**Los booleanos son un tipo de variable que puede tomar dos valores: verdadero (true) o falso (false).**

Representan valores de verdad, por ejemplo, si una comparación es verdadera o falsa.

<br>

---

### **Implementación en python**

---

<br>

En Python, el tipo `bool` es en realidad una subclase del tipo `int` y los valores `True` y `False` son versiones particulares de `1` y `0`.

Por lo tanto, el número `0` se puede considerar como un `booleano False`, al igual que una cadena de caracteres vacía.

**Por otro lado, todos los números diferentes de 0 y todas las cadenas de caracteres que no están vacías se pueden considerar como booleanos `True`.**

<br>

---

## **Implementación en javascript**

---

<br>

**En JavaScript, una `cadena de caracteres vacía`, un valor `undefined` y `el número 0` también se pueden considerar como `booleanos falsos`, pero se llaman `"falsy"` para `diferenciarlos del tipo booleano`.**

**Y al igual que en Python, todos los números diferentes de 0 y todas las cadenas de caracteres no vacías se consideran como booleanos verdaderos, pero se llaman `"truthy"`.**

<br>

---

---

<br>

<br>

---

## **La operación booleana Y (AND)**

---

<br>

**La operación `Y (AND)` entre dos variables booleanas es verdadera si ambas variables son verdaderas, de lo contrario es falsa.**

<br>

---

**Ejemplo JavaScript:**

```js
const menorDeEdad = true;

const estudiante = false;

console.log(menorDeEdad && estudiante);
```

<br>

---

**Ejemplo Python:**

```python
menor_de_edad = True

estudiante = False

print(menor_de_edad and estudiante)
```

---

<br>

**Ambos programas muestran el valor false.**

<br>

---

--- 

<br>

<br>

---

## **La operación booleana O (OR)**

---

<br>

**La operación O (OR) entre dos variables booleanas es verdadera si al menos una de las dos variables es verdadera, de lo contrario es falsa.**

<br>

---

**Ejemplo JavaScript:**

```js
const cineAbierto = true;

const boleraAbierta = false;

const fiestaPosible = cineAbierto || boleraAbierta;

console.log(fiestaPosible);
```

<br>

---

**Ejemplo Python:**

```python
cine_abierto = True

bolera_abierta = False

fiesta_posible = cine_abierto or bolera_abierta

print(fiesta_posible)
```

---

<br>

**Ambos programas muestran el valor true.**

<br>

---

--- 

<br>

<br>

---

## **La operación booleana NO (NOT)**

---

<br>

**La operación NOT en un booleano devuelve el inverso de ese booleano.**

<br>

---

**Ejemplo JavaScript:**

```js
const lluvia = true;

const sol = false;

console.log('hace buen tiempo: ' + !lluvia);

console.log('no hace buen tiempo: ' + !sol);
```

<br>

---

**Ejemplo Python:**

```python
lluvia = True

sol = False

print('hace buen tiempo:', not(lluvia))

print('no hace buen tiempo:', not(sol))
```

---

<br>

**Ambos programas muestran el valor false y luego el valor true.**

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Los booleanos son un tipo especial de enteros con valores 0 o 1.**

- **Es posible realizar operaciones Y (AND), O (OR) y NO (NOT) con ellos.**

<br>

---

---
