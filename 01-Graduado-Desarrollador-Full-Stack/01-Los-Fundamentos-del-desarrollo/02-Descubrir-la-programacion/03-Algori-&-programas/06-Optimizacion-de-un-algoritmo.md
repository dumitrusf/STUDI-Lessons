# **Optimización de un algoritmo**

<br>

## **_Objetivos:_**

- **Descubrir la optimización algorítmica**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**La complejidad algorítmica es un concepto importante para aquellos que desean desarrollar aplicaciones capaces de escalar.**

Durante las etapas de desarrollo, **es común probar los algoritmos en conjuntos de datos pequeños.**

Pero **si el algoritmo resulta ser demasiado complejo, su uso en un volumen mayor de datos puede ser mucho más lento o consumir más recursos.**

Por lo tanto, **es importante realizar un análisis de la complejidad de un algoritmo antes de utilizarlo, y posiblemente adaptarlo y optimizarlo para lograr un funcionamiento conforme a las expectativas.**

<br>

---

## **Recordatorio: Complejidad algorítmica**

---

<br>

**La** [complejidad algorítmica](./05-Complejidad-algoritmica.md) **es una estimación del número de operaciones elementales necesarias para resolver un problema en función del tamaño de los datos de entrada, denotado como `"n"`.**

**Se utiliza la notación `"O()"` para representar la magnitud de la complejidad de un algoritmo.**

**Por ejemplo, "O(n)"** significa que el número de operaciones es del orden de `"n"` **(si tenemos 1000 datos de entrada, se esperan alrededor de 1000 operaciones).**

<br>

---

---

<br>

<br>

---

### **Complejidad en tiempo**

---

<br>

La complejidad en tiempo es lo primero que llega a la mente de los desarrolladores.

Proporciona una idea del tiempo de ejecución de un algoritmo.

Estimarla permite buscar optimizaciones que reducirán el tiempo de cálculo.

A veces es muy sencillo reducir a la mitad el tiempo de cálculo, lo que se refleja desde la perspectiva del usuario.

<br>

---

---

<br>

<br>

---

### **Complejidad en espacio**

---

<br>

La complejidad en espacio es menos conocida pero igualmente importante.

Proporciona una magnitud del número de "espacios de memoria" que serán necesarios para el cálculo.

Minimizar esta complejidad evitará que el programa funcione incorrectamente debido a la falta de memoria disponible.

<br>

---

Dos algoritmos calculan la suma de los enteros de 1 a `n`.

- El valor de `n` se proporciona como entrada al algoritmo.

- Existe una fórmula matemática que permite obtener la suma de los primeros `n` enteros **`(n * (n + 1) / 2)`**.

El primer algoritmo, conocido como "naïf", tiene una complejidad de `O(n)`, mientras que el segundo, que utiliza la fórmula matemática, tiene una complejidad de `O(1)`.

Por lo tanto, es preferible el segundo algoritmo, ya que, para una complejidad espacial idéntica, tiene una complejidad temporal mucho menor.

**Ejemplo:**

```%
Algo Suma1aN:

Entrada:
    n, un entero positivo

suma toma el valor 0
Para i de 1 a n hacer:
    suma toma el valor suma + i

ParaFin

Retornar suma
```

```%
Algo Somme1aN:

Entrada:
    n, un entero positivo

suma toma el valor n*(n+1)/2

Retornar suma
```

<br>

---

---

<br>
<br>

---

## **Método**

---

<br>

- Eliminar bucles es una solución efectiva para reducir la complejidad de un algoritmo.

- También es posible reducir la complejidad al eliminar instrucciones simples.

  Por ejemplo, se habla de "factorización" cuando se condensan varias condiciones en una sola instrucción.
  
  Esto reduce el número de cálculos de comparaciones.

  <br>

**Por lo tanto, para optimizar un algoritmo, es recomendable comenzar eliminando bucles innecesarios y luego, en una segunda etapa, factorizar el código cuando sea posible.**

<br>

---

**En el siguiente ejemplo, el segundo algoritmo reduce la complejidad temporal al fusionar las dos condiciones en una sola.**

Además, también se reduce la complejidad espacial, ya que ya no utiliza una variable para almacenar el resultado.

**Ejemplo:**

```
Algorit PuedeConducir1:

Entradas:
    edad, un entero
    permitido, un booleano

resultado toma el valor Verdadero

Si edad < 18 hacer:
    resultado toma el valor Falso
AcabarSi

Si edad > 18 y no permiso hacer
    resultado toma el valor Falso
AcabarSi

Retornar resultado
```

---

```
Algorit PuedeConducir2:

Entradas:
    edad, un entero
    permiso, un booleano

Si (edad < 18) ou (edad > 18 et non permis) alors:
    Retourner Faux
Sinon
    Retourner Vrai
FinSi
```

<br>

---

---

<br>
<br>

---

## **Complemento: Escoger entre tiempo y espacio**

---

<br>

A veces es necesario elegir entre un algoritmo que minimiza el tiempo y otro que minimiza el espacio.

La elección debe estar orientada por el dominio de aplicación.

En la informática embarcada, el espacio es muy limitado, por lo que podría sacrificarse el tiempo en favor de un menor uso de memoria.

En el Big Data, el espacio de memoria disponible es enorme y se buscará acelerar los cálculos.

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Es posible estimar el tiempo de ejecución de un algoritmo y la memoria que necesita utilizando la complejidad algorítmica.**

- **Un desarrollador debe buscar un algoritmo que minimice el tiempo y el espacio.**

- **Según su campo de aplicación, podrá priorizar el tiempo o el espacio.**

<br>

---

---
