# **Programas**

<br>

## **_Objetivos:_**

- **Comprender la diferencia entre un algoritmo y un programa.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

El algoritmo y el programa son dos cosas distintas.

De hecho, **los algoritmos existen desde hace miles de años** y **son simplemente secuencias de operaciones que resuelven un problema, similar a una receta de cocina.**

**Los programas, en cambio, son mucho más recientes, ya que son implementaciones informáticas de algoritmos para permitir su resolución por una computadora.**

**Según el paradigma** **_"o"_** **el lenguaje utilizado:**

- las implementaciones de un mismo algoritmo pueden variar y ofrecer rendimientos diferentes.

<br>

Por lo tanto, es una elección importante que se debe hacer antes de comenzar a escribir un programa.

<br>

---

## **Programa**

---

<br>

**Un programa es:**

- la traducción en código ejecutable de un algoritmo.

- Así, para un algoritmo dado, existen varias implementaciones.

- Las elecciones de implementación pueden variar de un lenguaje a otro o incluso dentro del mismo lenguaje.

<br>

---

---

<br>

<br>

---

## **Nivel de traducción**

---

<br>

**Un programa puede verse a dos niveles:** 

- **El código del programador:**

    - será traducido por un compilador o un intérprete, que convertira las instrucciones en algo que la máquina puede ejecutar y leer.
    
    - El código del programador se considera **"de alto nivel"** porque está cerca de la escritura literal de las instrucciones pero no es comprensible en sí mismo para la máquina.

    <br>

    y

    <br>
    
- **El lenguaje máquina:**

    - El lenguaje máquina es mucho menos comprensible para un ser humano, pero la máquina podrá ejecutarlo porque son instrucciones en código binario.

<br>

---

---

<br>

<br>

---

## **Paradigma de programación**

---

<br>

Los **lenguajes de programación se clasifican en** varias categorías llamadas **paradigmas.**

**Estas categorías dependen de las características del lenguaje y de su enfoque para resolver problemas.**

**Los paradigmas más conocidos son:**

- imperativo

- funcional

- lógico

- etc.

<br>

---

### **Lenguajes Imperativos**

---

<br>

**Los lenguajes imperativos son los más conocidos y comunes porque tienen un funcionamiento muy cercano a la algoritmia clásica.**

<br>

---

**Algunos ejemplos son:**

- C/C++

- Python

- Javascript

- Java

- PHP

<br>

---

### **Comparación de dos implementaciones**

---

<br>

Aquí tenemos la implementación del cálculo de la secuencia de Fibonacci en Python y luego en JavaScript.

**Se puede observar que la sintaxis difiere y también algunas instrucciones:**

**Por ejemplo:**

- **En Python:** se recorren los elementos de una lista uno por uno

    mientras que ... 

- **En JavaScript:** se utiliza un índice que representa el número de posición.

<br>

---

**Ejemplo Python: Secuencia de Fibonacci**

```Python
n = int(input("Ingrese un número entero mayor que 1:"))

fibo = [0] * (n + 1)
fibo[0] = 0
fibo[1] = 1

for i in range(2, n + 1):
    fibo[i] = fibo[i - 1] + fibo[i - 2]

for number in fibo:
    print(number)
```

<br>

---

**Ejemplo JavScript: Secuencia de Fibonacci**

```js
const n = Number(prompt('Ingrese un número entero mayor que 1:'));

var fibo = new Array(n + 1);
fibo[0] = 0;
fibo[1] = 1;

for (let i = 2; i < n + 1; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

for (let i = 0; i < n + 1; i++) {
    console.log(fibo[i]);
}
```

<br>

---

---

<br>
<br>

---

### **Complemento: Escoger un lenguaje y un paradigma**

---

<br>

Los paradigmas y los lenguajes tienen sus propias especificidades, se debe elegir un lenguaje no solo porque el desarrollador lo conozca, sino porque permitirá abordar de la mejor manera el problema planteado.

<br>

- Por ejemplo, para la informática embarcada, es preferible optar por C/C++ ya que son lenguajes muy rápidos y requieren menos recursos.

- Por otro lado, para el Aprendizaje Automático (Machine Learning), Python hace que la implementación de algoritmos sea muy sencilla para el programador (aunque podría haber una ligera disminución en el rendimiento en comparación con C/C++).

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Un programa es la traducción de un algoritmo utilizando un lenguaje de programación.**

- **Dependiendo del lenguaje y su paradigma, la traducción no siempre será idéntica.**

<br>

---

---
