# **Complejidad algorítmica**

<br>

## **_Objetivos:_**

- **Descubrir la noción de complejidad algorítmica**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Cuando un desarrollador escribe un programa, es necesario estimar si** ese programa es costoso.

Costoso significa, por ejemplo, que **requiere muchos cálculos por parte del procesador.**

**También puede significar que requiere mucha memoria.**

<br>

---

<br>

**Saber cómo calcular este costo permite comparar varias soluciones alternativas entre sí.**

**También ayuda a determinar si un programa puede `"escalar"`, es decir, si puede seguir funcionando correctamente cuando se enfrenta a situaciones reales.**

<br>

---

<br>

Por ejemplo, si un desarrollador ha escrito un programa para verificar una huella de tarjeta de pago, pero esa verificación lleva varios minutos o requiere una computadora con mucha memoria, no será posible utilizarlo para pagos en línea.

<br>

---

### **Ejemplo: Contar el numero de operaciones para resolver un problema**

---

<br>

Para crear la tabla del 2 de los primeros n números enteros, se deben realizar n cálculos de tipo multiplicación.

En general, buscamos estimar de manera teórica la cantidad de operaciones necesarias para resolver un problema; es aquí donde hablamos de la complejidad de un problema.

<br>

---

---

<br>
<br>

---

## **Complejidad algorítmica**

---

<br>

**La complejidad algorítmica es:**

- una estimación del número de operaciones elementales necesarias para resolver un problema en función del tamaño de los datos de entrada, denotado como `n`.

<br>

---

---

<br>
<br>

---

## **O()**

---

<br>

**Anotamos `O()` como la magnitud de la complejidad de un algoritmo:**

- **`O(n)`:**

    - significa que el número de operaciones está en el orden de `n` **(si tenemos 1000 datos de entrada, se espera alrededor de 1000 operaciones).**

    <br>

- **`O(n²)`:**

    - significa que el número de operaciones está en el orden de `n al cuadrado` **(si tenemos 1000 datos de entrada, se espera alrededor de 1 000 000 de operaciones).**

<br>

---

**Ejemplo simple: Este código suma una lista de enteros.**

```js
function somme(number_list) {
  let res = 0;
  for (var i = 0; i < number_list.length; i++) {
      res += number_list[i];
  }
  return res;
}
```

<br>

---

Dado `n` es el tamaño de la lista, sería necesario realizar `n` operaciones de adición para obtener la suma final.

Aquí diremos que la complejidad del algoritmo es del orden de `n` y la representaremos como `O(n)`.

<br>

---

---

<br>

<br>

---

### **Observación: Por que usar la complejidad algorítmica?**

---

<br>

**La complejidad algorítmica se puede ver como** la estimación del **"tiempo de ejecución" de un algoritmo en función** del tamaño de **los datos de entrada**.

**Para hacerlo, suponemos que las operaciones básicas (asignación, suma, etc.) tienen el mismo tiempo de ejecución:**

- **estimar el tiempo de ejecución equivale a estimar el número de operaciones básicas.**

<br>

---

---

<br>
<br>

---

### **Atención!: La ejecución sigue siendo proporcional al tamaño de los datos.**

---

<br>

La complejidad no cambia en función del tamaño de los datos.

Sin embargo, la ejecución será obviamente más larga si el tamaño de los datos aumenta.

Así, para 100 datos, un algoritmo con complejidad O(n) realizará alrededor de 100 operaciones.

Para 1000 datos, realizará alrededor de 1000 operaciones.

<br>

---

---

<br>
<br>

---

## **Estimar rápidamente la complejidad**

---

<br>

La complejidad proporciona una idea aproximada de la duración de un algoritmo.

Por ejemplo, si determinamos que para una lista de `n` elementos se necesitan realizar `2×n` operaciones, simplificaremos diciendo que la complejidad es del orden de `O(n)`.

<br>

---

<br>

La razón principal es que las constantes no cambian fundamentalmente el orden de magnitud de la complejidad.

Por ejemplo, `O(n²)` y `O(2×n²)` son muy similares, y es sobre todo el valor de `n` el que influirá en la duración final.

<br>

---

---

<br>
<br>

---

## **Complejidades usuales de los algoritmos**

---

<br>

**Frecuentemente encontramos las siguientes complejidades:**

- **O(1):**

    - cuando el número de operaciones no depende del tamaño de los datos.
    
    - Por ejemplo, mostrar el primer elemento de una lista.

    <br>

- **O(n):**

    - esta complejidad a menudo se encuentra cuando necesitamos recorrer los elementos de una lista, como calcular la suma de los elementos.

    <br>

- **O(n²):**

    - por ejemplo, el algoritmo ingenuo para ordenar una lista de números requiere, para cada elemento de la lista, recorrer toda la lista.

    <br>

- **O(n×m):**

    - por ejemplo, para encontrar los números comunes en dos listas de tamaño `n` y `m`, es necesario recorrer toda la segunda lista para cada número de la primera lista para verificar si existe.

<br>

---

---

<br>
<br>

---

### **Complemento:**

---

<br>

**La complejidad algorítmica permite afirmar que**, para tamaños de datos iguales, **un algoritmo** con complejidad **O(n) terminará mucho antes que un** segundo algoritmo con complejidad **O(n²)**.

Por ejemplo, para 100 datos, el primer algoritmo realizará alrededor de 100 operaciones básicas y el segundo realizará 10,000 operaciones.

Se entiende que si el tamaño de los datos se cuenta en millones (o incluso miles de millones), el segundo algoritmo será mucho más costoso que el primero.

<br>

---

**Tabla: Comparación de complejidad**

| n      | O(n)   | O(n²)           |
| ------ | ------ | --------------- |
| 10     | 10     | 100             |
| 100    | 100    | 10 000          |
| 1 000  | 1 000  | 1 000 000       |
| 10 000 | 10 000 | 100 000 000     |

<br>

---

---

<br>
<br>

---

### **Complemento: Complejidad algorítmica en espacio**

---

<br>

**El tiempo de cálculo es importante, pero el espacio necesario para el cálculo también lo es.**

**La memoria de una computadora no es infinita:**

- es útil estimar el espacio de memoria necesario para ejecutar un algoritmo.

<br>

La complejidad descrita hasta ahora se llama complejidad en tiempo.

Aquí estamos hablando de la complejidad algorítmica en espacio.

**La notación será siempre la misma:** O(1), O(n), O(n²), etc.

<br>

---

---

<br>
<br>

---

### **Complemento: Complejidad & maquina de turing**

---

<br>

El concepto de complejidad algorítmica está estrechamente relacionado con las máquinas de Turing, una de las bases teóricas de las computadoras.

Introdujeron una nueva definición de la noción de cálculo que también permite teorizar su complejidad.

Así, hoy en día, es posible clasificar los problemas de cálculo según la complejidad de los algoritmos que pueden resolverlos.

**Podemos distinguir, de manera muy esquemática, tres grandes tipos de problemas:**

- **Problemas que un algoritmo resuelve en tiempo polinómico:**

    - O(n)
    
    - O(n²)
    
    - etc.

    <br>

- **Problemas que un algoritmo resuelve en tiempo exponencial:**

    - O(2^n)

    - O(n!)

    - etc.
    
**Se evita este tipo de algoritmo (el exponencial!)**, ya que basta con que `n` aumente un poco para que el tiempo de ejecución se cuente en meses, años e incluso siglos.

- Problemas para los cuales no existe solución (llamados indecidibles).

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Es posible asignar una complejidad a un algoritmo.**

- **Estimar la complejidad de un programa proporciona una idea aproximada de su tiempo de ejecución.**

- **Comparar la complejidad de dos algoritmos permite determinar cuál es más optimizado para abordar un problema dado.**

<br>

---

---
