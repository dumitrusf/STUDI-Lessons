# **Recorrido de Arrays**

<br>

## **_Objetivo_**

- **Aprender a recorrer los elementos de un array.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

- **Recorrer un array implica pasar por sus elementos uno por uno, generalmente utilizando `un índice` y `un bucle`.**

<br>

---

---

<br>

<br>

---

## **Tamaño de un Array**

---

<br>

**El número de elementos en un array determina su tamaño.**

**En JavaScript:**

- se calcula el tamaño de un array mediante el atributo `length`.

---

<br>


**En Python:**

- se utiliza la función `len()`.

<br>

---

**Ejemplo JavaScript: Mostrar el número de días**

```javascript
const week = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
console.log('Una semana =', week.length, 'días');
```

---

<br>

**Ejemplo Python: Mostrar el número de días**

```python
week = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
print('Una semana =', len(week), 'días')
```

<br>

---

### **Recordatorio: `Bucle for`**

---

<br>

**La estructura de repetición `for` es un bucle que se utiliza con un contador que se incrementa en cada iteración.**

**El bucle `for` permite iterar un número conocido de veces.**

<br>

---

---

<br>

<br>

---

## **Recorrido por índice**

---

Dado que el tamaño del array es conocido de antemano, se utiliza el bucle `for` con un contador que va desde 0 hasta el último índice del array (es decir, `tamaño - 1`).

<br>

---

<br>

**En Python:**

- el bucle `for` utiliza:

    - `range(tamaño)` **para representar los valores desde `0` hasta `tamaño - 1`.**

---

<br>

**En JavaScript:**

- se utiliza:

    - la `"condición" contador < tamaño` **para finalizar el bucle cuando el contador supera** `el último índice`.

<br>

---

<br>

Es importante recordar que **el último índice** de un array es igual **a** `tamaño - 1 (es decir 1 menos de lo que es en realidad (si tenemos 7 elementos pues en verdad son 6 elementos, por que contamos desde cero 0))`, **ya que la indexación comienza en 0 y no en 1.**

<br>

---

**Ejemplo JavaScript: Mostrar cada día de la semana**

```javascript
const week = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
for (let i = 0; i < week.length; i++) {
  console.log('Día', i, week[i]);
}
```

---

<br>

**Ejemplo Python: Mostrar cada día de la semana**

```python
week = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
for i in range(len(week)):
  print('Día', i, week[i])
```

<br>

---

---

<br>

<br>

---

### **Complemento: Bucles "para cada ..." (`for...of`)**

---

<br>

Para **recorrer un array de principio a fin**, es necesario **hacer uso de los índices y del tamaño del array**.

**Existe un tipo de bucle diseñado para recorrer "UNO A UNO" cada elemento del array, del primero al último.**

---

<br>

- **En Python:** se utiliza `for...in`

  y
  
- **JavaScript:** es `for...of`

<br>

---

**Ejemplo JavaScript: Mostrar cada día de la semana**

```javascript
const week = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
for(const day of week) {
  console.log(day);
}
```

---

<br>

**Ejemplo Python: Mostrar cada día de la semana**

```python
week = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
for day in week:
  print(day)
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

Los arrays indexados se recorren mediante un contador de índice utilizando un bucle `for`.

<br>

---

---