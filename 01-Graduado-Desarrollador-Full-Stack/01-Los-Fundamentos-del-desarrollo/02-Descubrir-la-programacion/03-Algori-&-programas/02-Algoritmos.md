# **Algoritmos**

<br>

## **_Objetivos:_**

- **Entender el concepto de algoritmo**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Hoy en día, es común escuchar hablar de algoritmos,** y **ya no es un término reservado únicamente a los campos de las matemáticas y la informática.**

Al mismo tiempo, **este término ha evolucionado de su significado original, y es frecuente que su definición no sea bien comprendida.**

**De hecho, el público en general a menudo utiliza la palabra `"algoritmo"` "para referirse al funcionamiento oscuro de una aplicación", o en contraste, como una especie de solución milagrosa para todos los problemas.**

**En realidad, la definición de un algoritmo es más simple y neutral de lo que se puede creer.**

<br>

---

---

<br>
<br>

---

## **Etimología**

---

<br>

La palabra *`"algoritmo"`* proviene del nombre del matemático persa **Al-Juarismi**.

**No inventó el concepto de algoritmo**, pero **tuvo una gran influencia en las matemáticas de su época,** por ejemplo, clasificando los algoritmos existentes o difundiendo el uso de los números arábigos a través de su Tratado sobre el sistema de numeración de los indios.

<br>

---

---

<br>
<br>

---

## **Definición simple**

---

<br>

Un algoritmo es una secuencia finita y no ambigua de operaciones o instrucciones que permiten resolver un problema.

Un algoritmo toma parámetros de entrada y devuelve un resultado.

<br>

---

---

<br>
<br>

---

## **Hacer funcionar un algoritmo**

---

<br>

**"Hacer funcionar un algoritmo"** consiste en llevar a cabo manualmente, una a una, las instrucciones y operaciones del algoritmo.

<br>

---

---

<br>

<br>

---

## **Finitud**

---

<br>

Es esencial que el algoritmo sea una secuencia finita de instrucciones, de lo contrario simplemente sería imposible resolver el problema.

**En efecto, por definición, no es posible realizar una secuencia infinita (bucle infinito NO se puede!) de instrucciones.**

<br>

---

---

<br>

<br>

---

## **No Ambiguo**

---

<br>

Las instrucciones (o las operaciones) deben ser muy simples para asegurarse de que sea factible realizar el algoritmo.

En otras palabras, el resultado de un algoritmo debe ser independiente de la interpretación de la persona que lo ejecuta.

De lo contrario, dos personas diferentes podrían obtener dos resultados distintos.

Además, la ambigüedad podría ocultar un problema subyacente, potencialmente insoluble.

<br>

---

### **Ejemplo: Instrucciones simples**

---

<br>

**Aquí tienes ejemplos de instrucciones simples y comunes:**

- Mientras x > 0, hacer: ...

- Para i de 1 a 30, hacer: ...

- Si x > 0, entonces: ...

- Sea x con valor inicial 21

- x toma el valor 84

- Incrementar el valor de x

- x toma el valor de x + y

<br>

---

### **Ejemplo: Algoritmo Simple**

---

<br>

**Aquí tenemos un algoritmo que toma un número como entrada y escribe su tabla de multiplicar hasta 10.**

```
Entradas:
    x número

Para i desde 1 hasta 9 hacer:
    resultado toma el valor de i * x
    Mostrar i * x = resultado
FinPara
```

<br>

---

**Este algoritmo puede ser implementado en `JavaScript`, por ejemplo, mediante el siguiente código:**

```js
const x = Number(prompt("Enter the value of x :"))
for (let i = 1; i < 10; i++) {
  const result = x * i
  console.log(i, "*", x, "=", result)
}
```

<br>

---

---

<br>
<br>

---

## **Analogía con receta de cocina**

---

<br>

Para introducir el concepto de algoritmo, es común compararlo con una receta de cocina.

Esto se ajusta perfectamente a la definición anterior ya que sus instrucciones son claramente finitas y no ambiguas.

Si no es así, la receta será imposible de llevar a cabo.

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Un algoritmo es:**

    - **una secuencia de instrucciones precisamente definidas que permite llevar a cabo una tarea.**

<br>

---

---
