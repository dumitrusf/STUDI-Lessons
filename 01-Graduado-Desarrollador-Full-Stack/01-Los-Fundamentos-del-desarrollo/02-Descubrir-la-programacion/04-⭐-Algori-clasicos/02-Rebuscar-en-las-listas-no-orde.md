# **Rebuscar en las listas**

<br>

## **_Objetivos:_**

- **Saber cómo buscar eficientemente un valor en una lista NO ORDENADA.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

La búsqueda de valores en una lista es uno de los problemas más simples y comunes en el día a día de un desarrollador.

<br>

---

---

<br>
<br>

---

## **Lista NO ORDENADA**

---

<br>

La búsqueda en una lista no ordenada no hace suposiciones sobre la posición de los elementos.

Por ejemplo, el valor máximo puede estar en cualquier lugar de la lista.

Por lo tanto, para encontrar un valor, siempre se debe recorrer los elementos uno por uno.

<br>

---

---

<br>
<br>

---

## **Búsqueda de la posición de un valor**

---

<br>

**Este problema consiste en devolvernos el índice (la posición) de un valor dado si está presente en una lista.**

En este caso también trabajaremos con una lista no ordenada.

**Será necesario recorrer todas las posiciones uno por uno.**

**El programa a continuación muestra todas las posiciones del valor buscado.**

**Si el valor está presente varias veces, el programa mostrará cada uno de los índices correspondientes.**

<br>

---

**Ejemplo JavaScript: busca un valor en una lista de temperaturas.**

```JS
const temperaturas = [12, 5, 29, -3]; // array de temperaturas

const val = 5; // El valor a buscar, una constante que tiene como valor numero 5

for (let i = 0; i < temperaturas.length; i++) {

    // bucle for que recorrera asi:
    // i, es 0 empieza el bucle en 0, si; i es mayor a la longitud de la lista (4)
    // el bucle parara.
    
  if (val === temperaturas[i]) {
    // con [i] lo que hace es recorrer cada indice 0, 1, 2, 3 y si en alguno de esos indices se encuentra el 5 pues este en consola te muestra el indice donde se encuentra el 5
    
   // verifica si el valor en la posición i de la lista temperatures es igual al valor val que estamos buscando.
   
   // Si la condición se cumple, significa que hemos encontrado una coincidencia en la lista y el código dentro del bloque if se ejecuta.
   
    console.log(i);
    
    // Nos mostrara en que posicion se encuentra "5"
    
  }
}

```

<br>

---

**Ejemplo Python: busca un valor en una lista de temperaturas.**

```Python
temperatures = [12, 5, 29, -3]  # Lista de temperaturas

val = 5  # Valor a buscar, una constante con valor 5

# Bucle for que recorre la lista de temperaturas
for i in range(len(temperatures)):
    # Verifica si el valor en la posición i de la lista temperatures es igual al valor val que estamos buscando.
    if val == temperatures[i]:
        # Si la condición se cumple, significa que hemos encontrado una coincidencia en la lista y el código dentro del bloque if se ejecuta.
        print(i)  # Imprime el índice donde se encuentra el valor buscado

```

<br>

---

---

<br>
<br>

---

## **Búsqueda del máximo**

---

<br>

Aquí tienes un algoritmo que devuelve el valor máximo de una lista no ordenada.

El algoritmo prueba los elementos uno a uno y tiene una variable que almacena el máximo.

Esta variable se inicializa con el primer elemento de la lista y se actualiza tan pronto como se encuentra un valor mayor que el máximo actual.

Cabe destacar que la búsqueda del mínimo es idéntica.

Solo tendrás que invertir la condición del if dentro del bucle.

<br>

---

**Ejemplo JavaScript: busca el máximo en una lista de temperaturas.**

```JS
const temperatures = [12, 5, 29, -3]; // array de temperaturas

let max = temperatures[0]; // inicializar max con el primer elemento del array, que es 12

// iterar a través del resto de los elementos en el array a partir del índice 1, ya que el 0 es 12 y ya vimos que fue asignado con, let max = temperatures[0];

for (let i = 1; i < temperatures.length; i++) {
  // comparar el elemento actual con el valor actual de max

  if (max < temperatures[i]) {
    // si el elemento actual en esta siguiente iteracion que es 5 es mayor que max (que es 12), actualizar max con el valor del elemento actual, pero como no lo es se sigue quedando en 12, a la siguiente iteracion compara el valor 29, con el valor actual de max que es 12, como 29 es mas grande, pues max se actualiza y ahora es 29
    max = temperatures[i];
  }
}

// imprimir el valor máximo en el array
console.log(max);

```

<br>

---

**Ejemplo Python: busca el máximo en una lista de temperaturas.**

```JS

temperatures = [12, 5, 29, -3]
max = temperatures[0]
for i in range(1, len(temperatures)):
  if max < temperatures[i]:
    max = temperatures[i]

print(max)

```

<br>

---

### **Desarrollo paso a paso**

---

<br>

**Para comprender mejor este algoritmo, es interesante ejecutarlo manualmente con el ejemplo temperatures = [12, 5, 29, -3]:**

- Antes del bucle: max almacena el valor 12.

- Primera iteración, i = 1: max es mayor que 5, por lo que el algoritmo pasa a la siguiente iteración, pero sigue valiendo 12.

- Segunda iteración, i = 2: max es menor que 29, por lo que max toma el valor 29.

- Tercera iteración, i = 3: max es mayor que -3, por lo que el algoritmo pasa a la siguiente iteración, pero sigue siendo 29.

- i = 4, por lo que el bucle termina y el programa muestra el resultado, que es 29.

<br>

---

### **Complejidad de sus búsquedas**

---

<br>

La complejidad temporal de estos dos algoritmos es `O(n)`, ya que es necesario recorrer todos los elementos de la lista para encontrar lo que buscamos.

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Cuando buscamos un elemento en una lista no ordenada, es necesario recorrer los elementos uno por uno.**

<br>

---

---
