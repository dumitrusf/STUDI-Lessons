# **Cadena de Fibonacci**

<br>

## **_Objetivos:_**

- **Comprender el funcionamiento de un algoritmo de ordenamiento**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Los algoritmos de ordenamiento son una familia de algoritmos muy clásicos, ya que el ordenamiento es muy útil para optimizar los algoritmos de búsqueda.

Sin embargo, optimizar un algoritmo de ordenamiento en sí mismo también es muy interesante, especialmente porque existen varios tipos diferentes.

Es un caso de estudio que a menudo se analiza para comparar la complejidad de los diferentes algoritmos.

Sin embargo, en la actualidad, casi todos los lenguajes de programación implementan funcionalidades de ordenamiento internamente, lo que hace que los algoritmos de ordenamiento sean más una cuestión de conocimiento general que de necesidad práctica.

<br>

---

---

<br>
<br>

---

## **Algoritmos de ordenamiento**

---

<br>

Existen muchos algoritmos de ordenamiento.

Cada uno tiene sus ventajas e inconvenientes.

**Algunos son más eficientes en listas poco mezcladas** (con solo algunos elementos en el orden incorrecto), **mientras que otros pueden ser más lentos pero tienen una complejidad temporal menor.**

<br>

---

**Aquí tienes una lista de algunos de los algoritmos de ordenamiento más conocidos:**

<br>

- Ordenamiento rápido (Quicksort)

- Ordenamiento por fusión (Mergesort)

- Ordenamiento por montículos (Heapsort)

- Ordenamiento de burbuja (Bubblesort)

- Ordenamiento por inserción (Insertionsort)

- etc.

<br>

---

---

<br>

<br>

---

## **Ordenamiento de burbuja**

---

<br>

La idea detrás de este algoritmo es llevar gradualmente los valores más altos hacia el final de la lista en iteraciones sucesivas.

Se puede hacer una analogía con las burbujas de aceite que ascienden lentamente hacia la superficie del agua.

Después de la primera iteración, el valor máximo estará al final de la lista.

Al mismo tiempo, es muy probable que otros valores altos también hayan avanzado ligeramente hacia el final de la lista.

**Aquí tienes las implementaciones en JavaScript y Python para comprenderlo mejor:**

<br>

---

**Ejemplo JavaScript: Ordenamiento de burbuja de una lista de edades**

```js
const ages = [17, 1, 28, 5];

for (let i = ages.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        if (ages[j + 1] < ages[j]) {
            // Intercambiar los dos valores
            const temp = ages[j + 1];
            ages[j + 1] = ages[j];
            ages[j] = temp;
        }
    }
}

console.log(ages);
```

<br>

---

**Ejemplo Python: Ordenamiento de burbuja de una lista de edades.**

```python
ages = [17, 1, 28, 5]

for i in range(len(ages) - 1, 0, -1):
    for j in range(0, i):
        if ages[j + 1] < ages[j]:
            # Intercambiar los dos valores
            temp = ages[j + 1]
            ages[j + 1] = ages[j]
            ages[j] = temp

print(ages)
```

<br>

---

### **Desarrollo paso a paso**

---

<br>

**Dado que hay dos bucles anidados, tomemos un ejemplo muy simple que permitirá comprender rápidamente el funcionamiento de esta ordenación:** `ages = [17, 1, 28, 5]`

- **Primera iteración principal, `i = 3`:**

    - Primera iteración secundaria, `j = 0`: `ages[0] (= 17) > ages[1] (= 1)`, por lo tanto, intercambiamos los dos valores y la lista se convierte en `[1, 17, 28, 5]`.

    - Segunda iteración secundaria, `j = 1`: `ages[1] (= 17) < ages[2] (= 28)`, por lo que la lista permanece igual `[1, 17, 28, 5]`.

    - Tercera iteración secundaria, `j = 2`: `ages[2] (= 28) > ages[3] (= 5)`, por lo tanto, intercambiamos los dos valores y la lista se convierte en `[1, 17, 5, 28]`.

    - `j = 3 = i`, por lo que el bucle secundario termina.

    ---

<br>

- **Segunda iteración principal, `i = 2`:**

    - Primera iteración secundaria, `j = 0`: `ages[0] (= 1) < ages[1] (= 17)`, por lo que la lista permanece igual `[1, 17, 5, 28]`.

    - Segunda iteración secundaria, `j = 1`: `ages[1] (= 17) > ages[2] (= 5)`, por lo tanto, intercambiamos los dos valores y la lista se convierte en `[1, 5, 17, 28]`.

    - `j = 2 = i`, por lo que el bucle secundario termina.
    
    ---

<br>    

- **Tercera iteración principal, `i = 1`:**

    - Primera iteración secundaria, `j = 0`: `ages[0] (= 1) < ages[1] (= 5)`, por lo que la lista permanece igual `[1, 5, 17, 28]`.

    - `j = 1 = i`, por lo que el bucle secundario termina.

    ---

<br>

- **`i = 0`, por lo que el bucle principal termina.**

<br>

---

**En este desglose, se observa claramente el concepto de burbujas en la primera iteración principal:** 

el valor 28 asciende "a la superficie" y termina en la última posición, mientras que el valor 17 asciende ligeramente y alcanzará su posición final en la siguiente iteración principal.

<br>

---

### **Complemento: Complejidad de ordenamiento a burbuja**

---

<br>

La complejidad temporal de esta ordenación es `O(n²)`.

Se puede ver claramente lo que explica esta complejidad debido al bucle anidado.

No pertenece a los métodos de ordenación más rápidos, como la ordenación por fusión que tiene una complejidad de `O(n*log(n))`.

<br>

---

---

<br>

<br>

---

## **Atención!: Nunca implementes un algoritmo de ordenación por ti mismo.**

---

<br>

**Es importante para un desarrollador conocer los algoritmos de ordenación, ya que estos implementan de manera muy elegante conceptos algorítmicos clave.**

**Forman parte de la cultura general de los desarrolladores.**

<br>

---

<br>

**Sin embargo, nunca debes implementar este tipo de algoritmo por ti mismo.**

<br>

---

<br>

La gran mayoría de los lenguajes tienen funciones de ordenación ya implementadas.

Incluso estas funciones no le piden al usuario que elija qué ordenación usar, ya que están optimizadas para utilizar la ordenación óptima según la lista proporcionada.

<br>

---

**Aquí mostramos cómo hacerlo en JavaScript:**

```JavaScript
const ages = [18, 6, 82];
let sorted = ages.sort(function(a, b) { return a - b; });
console.log(sorted);
```

<br>

---

**Aquí mostramos cómo hacerlo en Python:**

```Python
ages = [18, 6, 82]
ages.sort()
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

- **Hay muchos algoritmos de ordenación, cada uno con sus propias ventajas.**

- **No debes implementar algoritmos de ordenación por ti mismo, ya que los lenguajes ya tienen funciones de ordenación perfectamente optimizadas.**

<br>

---

---
