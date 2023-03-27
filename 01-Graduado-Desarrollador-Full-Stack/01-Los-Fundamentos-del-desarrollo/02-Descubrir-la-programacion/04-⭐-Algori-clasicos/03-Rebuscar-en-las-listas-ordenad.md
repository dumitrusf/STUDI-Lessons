# **Rebuscar en las listas**

<br>

## **_Objetivos:_**

- **Saber cómo buscar eficientemente un valor en una lista ORDENADA.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

La complejidad de la búsqueda en una lista no ordenada, es decir O(n), no es muy óptima.

De hecho, en grandes volúmenes de datos o en casos de búsquedas frecuentes, el tiempo de ejecución o el rendimiento podrían no ser satisfactorios.

**Para mejorar esto, la clasificación previa de nuestra lista y luego el uso de un algoritmo de búsqueda en una lista ordenada pueden mejorar significativamente la complejidad del problema.**

<br>

---

---

<br>
<br>

---

## **Lista ORDENADA**

---

<br>

Suponer que una lista está ordenada aporta mucha facilidad para el desarrollador en la búsqueda.

Aquí solo estamos considerando listas ordenadas en orden ascendente, pero los algoritmos son prácticamente idénticos para listas ordenadas en orden descendente.

<br>

---

---

<br>
<br>

---

## **Búsqueda del máximo**

---

<br>

El algoritmo en este caso es mucho más simple, ya que solo se necesita una instrucción para encontrar el máximo.

Dado que la lista está ordenada, el máximo es necesariamente el último elemento.

Por lo tanto, el algoritmo tiene una complejidad de O(1) (en comparación con O(n) en el caso de una lista no ordenada).

<br>

---

**Ejemplo JavaScript: Búsqueda del máximo en una lista ordenada.**

```JS
const temperaturasOrdenadas = [-3, 5, 12, 29];
const max = temperaturasOrdenadas[temperaturasOrdenadas.length - 1];
console.log(max);
```

<br>

---

**Ejemplo Python: Búsqueda del máximo en una lista ordenada.**

```Python
temperaturas_ordenadas = [-3, 5, 12, 29]
max = temperaturas_ordenadas[len(temperaturas_ordenadas) - 1]
print(max)
```

<br>

---

---

<br>
<br>

---

## **Buscar como novatos indice de un valor**

---

<br>

**ingenuo:**

- **(un método de búsqueda simple y directo, pero que podría no ser la opción más rápida o eficiente en todos los casos. Es posible que la búsqueda ingenua requiera más tiempo o recursos que otros enfoques más avanzados.)**

Aquí tenemos un algoritmo ingenuo que devuelve los índices de un valor dado en una lista ordenada.

Este algoritmo es considerado ingenuo debido a que es muy intuitivo pero no es el más optimizado en este caso.

<br>

---

**Ejemplo JavaScript: Búsqueda ingenua en una lista ordenada.**

```JS
const sortedTemperatures = [-3, 5, 12, 50, 50, 78, 94, 113, 129]
const val = 50
let i = 0
while (i < sortedTemperatures.length && sortedTemperatures[i] <= val) {
  if (sortedTemperatures[i] === val) {
    console.log(i)
  }
  i = i + 1
}
console.log('Fin')
```

<br>

---

**Ejemplo Python: Búsqueda ingenua en una lista ordenada.**

```JS
sorted_temperatures = [-3, 5, 12, 50, 50, 78, 94, 113, 129]
val = 50
i = 0
while (i < len(sorted_temperatures) and sorted_temperatures[i] <= val):
  if sorted_temperatures[i] == val:
    print(i)
  i = i + 1
print("Fin")
```

<br>

---

### **Desarrollo paso a paso**

---

<br>

**Para comprender mejor este algoritmo, es interesante ejecutarlo manualmente con el ejemplo `sorted_temperatures = [-3, 5, 12, 50, 50, 78, 94, 113, 129]; val = 50`:**

- Inicialmente, i = 0 y sorted_temperatures[0] = -3 < 50, por lo que entramos en el bucle while.

- Primera iteración: i = 0, sorted_temperatures[0] = -3 no es igual a 50, por lo que la condición if es falsa. Incrementamos i para continuar la iteración.

- Segunda iteración: i = 1, sorted_temperatures[1] = 5 no es igual a 50, por lo que la condición if es falsa. Incrementamos i para continuar la iteración.

- Tercera iteración: i = 2, sorted_temperatures[2] = 12 no es igual a 50, por lo que la condición if es falsa. Incrementamos i para continuar la iteración.

- Cuarta iteración: i = 3, sorted_temperatures[3] = 50 es igual a 50, por lo que la condición if es verdadera. El programa muestra i. Incrementamos i para continuar la iteración.

- Quinta iteración: i = 4, sorted_temperatures[4] = 50 es igual a 50, por lo que la condición if es verdadera. El programa muestra i. Incrementamos i para continuar la iteración.

- i = 5 y sorted_temperatures[5] = 78 > 50, la condición while es falsa, por lo que salimos del bucle y el programa termina.

<br>

---

**Para resumir, la salida del programa será:**

```
3
4
Fin
```

---

<br>

---

### **Complemento: Búsqueda del índice de un valor dicotómico**

---

<br>

**Este problema implica devolver el índice (la posición) de un valor dado si está presente en una lista.**

Dado que la lista está ordenada, el algoritmo realiza una búsqueda dicotómica para optimizar la búsqueda.

Para simplificar nuestro programa, consideramos listas sin duplicados (ningún valor está presente dos veces).

**La idea es la siguiente:**

la búsqueda se realiza en una ventana (la lista en nuestro caso).

La ventana inicial se divide en dos; si el elemento central es menor que el valor, la ventana superior se convierte en la nueva ventana de búsqueda.

De lo contrario, es la ventana inferior la que se convierte en la nueva ventana de búsqueda.

Una vez que se define la nueva ventana, el proceso se repite.

De esta manera, en cada iteración, la ventana de búsqueda se divide a la mitad y el algoritmo converge rápidamente hacia la solución correcta.

En nuestro programa, la ventana de búsqueda está definida por los límites a y b, que son respectivamente los límites inferior y superior.

<br>

---

**Ejemplo JavaScript: Búsqueda Dicotómica.**

```JS
const sortedTemperatures = [-3, 5, 12, 50, 78, 94, 113, 129]
const val = 12

let a = 0
let b = sortedTemperatures.length - 1

while (a <= b) {
  const m = Math.floor((a + b) / 2)
  if (sortedTemperatures[m] === val) {
    // Hemos encontrado el valor
    console.log(m)
    break
  } else if (sortedTemperatures[m] < val) {
    a = m + 1
  } else {
    b = m - 1
  }
}
```

<br>

---

**Ejemplo Python: Búsqueda Dicotómica.**

```JS
sorted_temperatures = [-3, 5, 12, 50, 78, 94, 113, 129]
val = 12

a = 0
b = len(sorted_temperatures) - 1

while a <= b:
  m = (a + b) // 2
  if sorted_temperatures[m] == val:
    # Hemos encontrado el valor
    print(m)
    break
  elif sorted_temperatures[m] < val:
    a = m + 1
  else:
    b = m - 1
```

<br>

---

### **Desarrollo paso a paso de la dicotomía**

---

<br>

**Pour mieux comprendre cet algorithme, il est intéressant de le faire tourner à la main avec l'exemple sorted_temperatures = [-3, 5, 12, 50, 78, 94, 113, 129] ; val = 12 :**

- Notre fenêtre est définie avec a = 0 et b = 7

- Première itération: m prend la valeur 3 et sorted_temperatures[3]= 50. 50 est supérieur à 12 donc la fenêtre inférieure est conservée, c'est-à-dire b = 2.

- Deuxième itération : m prend la valeur 1 et sorted_temperatures[1]= 5. 5 est inférieur à 12 donc la fenêtre supérieure est conservée, c'est-à-dire a = 2.

- Troisième itération : m prend la valeur 2 et sorted_temperatures[2]= 12. La valeur a été trouvée, on affiche la position et on sort de la boucle.

<br>

---

---

<br>
<br>

---

### **Complemento: Complejidad de las búsquedas**

---

<br>

La complejidad temporal de la búsqueda dicotómica es `O(log(n))`.

Esta complejidad es mucho mejor que `O(n)`, especialmente para listas muy grandes.

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Una lista ordenada permite reducir drásticamente los tiempos de búsqueda de los elementos**

<br>

---

---
