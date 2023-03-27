# **Calculo**

<br>

## **_Objetivos:_**

- **Descubrir el concepto de calculo**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**La aparición de la teoría de la Informática está estrechamente relacionada con la teoría de la Computabilidad**.

<br>

---

---

<br>
<br>

---

## **Funcion calculable**

---

<br>

**Una función `f` es calculable si, para cualquier argumento `x`, es posible obtener `f(x)` en un número finito de pasos.**

<br>

---

---

<br>
<br>

---

## **Algoritmo y Funcion calculable**

---

<br>

**Se comprende rápidamente que un algoritmo representa una función calculable, ya que se puede establecer un paralelo entre el número finito de pasos de la función y la secuencia finita de instrucciones del algoritmo.**

**De esta manera, el trabajo del algoritmo es asimilable a un cálculo.**

<br>

---

---

<br>
<br>

---

## **Los algoritmos y sus problemas**

---

<br>

**Un algoritmo siempre tiene como objetivo resolver un problema dado, ya sea complicado (como encontrar el camino más corto en un grafo) o muy simple (como una división euclidiana).**

**La teoría de la Computabilidad es esencial para caracterizar la naturaleza de los problemas.**

<br>

---

---

<br>
<br>

---

## **Indecidibilidad**

---

<br>

**Existen cosas imposibles de calcular, es decir, problemas insolubles.**

**Así, hay problemas cuya solución se puede calcular y otros que no.**

<br>

**El ejemplo más clásico de un problema indecidible es el problema de la detención:**

- no existe un algoritmo que determine si cualquier algoritmo dado termina.

<br>

---

---

<br>
<br>

---

## **Clase de problemas**

---

<br>

**Los problemas son clásicamente clasificados según los algoritmos que los resuelven:**

- **P:**

    - existe un algoritmo que resuelve el problema y finaliza en tiempo polinomial, es decir, no se dispara en función del tamaño de los datos de entrada.

    <br>

- **NP:**

    - existe un algoritmo que verifica la solución de un problema en tiempo polinomial, pero se requerirá tiempo exponencial para encontrar una solución.

    <br>

- **Indecidibles:**

    - no existe un algoritmo para resolver el problema.

<br>

---

---

<br>
<br>

---

## **Los problemas `NP`**

---

<br>

Los problemas `NP` se consideran imposibles de resolver en un tiempo humano.

Para un tamaño importante de datos de entrada, la ejecución del algoritmo en una computadora moderna podría llevar años, siglos o incluso más.

Hay muchos problemas `NP` y es necesario adoptar optimizaciones para encontrar una solución `"subóptima"` en tiempo `polinomial`.

Una solución `"subóptima"` es una solución que se acerca a la solución ideal.

<br>

---

### **Ejemplo: ¿Debo mover mi reina o mi alfil?**

---

<br>

Un problema `NP` muy conocido es el del cálculo del mejor movimiento en el juego de ajedrez.

Para cada posición en el ajedrez, existe un número extremadamente grande de posiciones posibles.

Teóricamente, es posible calcular todas estas posiciones.

Sin embargo, el algoritmo tomaría siglos en completarse.

Las inteligencias artificiales como Deep Blue calculan todas las posiciones posibles en los próximos x turnos y eligen aquella que ofrece la mejor posición en x turnos.

Lo que hace que las inteligencias artificiales sean mejores que los humanos es su capacidad para proyectarse más allá de lo que los humanos pueden hacer.

Los jugadores humanos también calculan las posibles posiciones futuras, pero pueden calcular muchos menos turnos que las computadoras modernas.

<br>

---

### **Ejemplo: Resolver un Cubo de Rubik**

---

<br>

Encontrar la solución de un Cubo de Rubik es un problema de clase **[P](#clase-de-problemas)**.

Es bastante simple resolverlo, como lo demuestran los récords mundiales de velocidad.

Incluso con cubos un poco más grandes, el número de posibilidades crece mucho menos que el número de movimientos en el ajedrez.

<br>

---

### **Ejemplo: Encontrar su camino**

---

<br>

**Las aplicaciones GPS se han vuelto ampliamente populares y resuelven todas un mismo problema, encontrar la ruta más corta entre**

- A

    y
    
- B.

<br>

A pesar de que existen infinitas rutas entre `A` y `B`, este problema es de clase **[P](#clase-de-problemas)** porque no es necesario probar todas las rutas, a diferencia del ajedrez donde es necesario calcular todos los posibles movimientos.

Existen algoritmos que permiten descartar rápidamente las soluciones imposibles y llegar a la ruta más corta en tiempo polinomial.

Por lo tanto, se entiende que **la gran diferencia entre P y NP radica en la naturaleza exponencial del número de cálculos necesarios para llegar a la solución.**

<br>

---

---

<br>

<br>

---

### **Complemento: P = NP ?**

---

<br>

**Existe un problema matemático considerado uno de los siete problemas del milenio por los matemáticos:**

```
"¿P = NP?"
```

**Este problema busca afirmar o refutar formalmente si los problemas `NP` son o no problemas `P`.**

**La prueba de igualdad implicaría que existe un algoritmo de tiempo polinomial para resolver problemas como romper cifrados modernos en los que se basa el sistema de transacciones bancarias.**

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Un algoritmo es asimilable a un cálculo.**

- **Existen problemas imposibles de resolver, pero también existen problemas teóricamente resolubles, aunque no prácticamente (en un tiempo limitado).**

<br>

---

---