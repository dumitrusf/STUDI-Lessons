# **La programación imperativa**

<br>

## **_Objetivos:_**

- **Entender la programación Imperativa**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Es común hacer una analogía entre un algoritmo y una receta de cocina, para explicar que un código es una serie de instrucciones a seguir para obtener un resultado específico.

La programación imperativa es lo que se asemeja más a una receta de cocina.

Todas las instrucciones se ejecutan una tras otra y conducen a un resultado bien definido.

<br>

---

---

<br>
<br>

---

## **Programación Imperativa**

---

<br>

Este paradigma describe las operaciones de un programa como secuencias de instrucciones ejecutadas por la computadora para modificar el estado del programa.

El estado del programa es lo que el programa debe mantener en su memoria durante su ejecución (número de línea actual, valores de variables, etc.).

Así, **con este paradigma, es responsabilidad del desarrollador escribir las instrucciones necesarias para modificar el estado del programa de manera adecuada.**

En otras palabras, **la programación imperativa se enfoca en describir cómo un programa debe funcionar para resolver un problema.**

<br>

---

---

<br>
<br>

---

### **Observación:**

---

<br>

**Es el paradigma de programación más antiguo y se encuentra en los conjuntos de instrucciones de los procesadores y en los lenguajes más utilizados hoy en día.**

<br>

---

---

<br>

<br>

---

## **Fundamentos**

---

<br>

**Los lenguajes imperativos incluyen "todas estas instrucciones básicas":**

<br>

- **Asignación (o afectación):** 

    - permite **almacenar en memoria** (en **una variable**) el resultado de una operación.

    <br>
---
- **Condición:** 

    - permite **ejecutar un bloque de instrucciones si se cumple una condición** preestablecida.

    <br>
---
- **Bucle:** 

    - permite **repetir un bloque de instrucciones un número predefinido de veces o hasta que se cumpla una condición**.

    <br>
---
- **Salto:** 

    - **permite que la secuencia de ejecución se transfiera a otra parte del programa `(goto)`**.

    <br>
---
- **Secuencia de instrucciones:** 

    - **se refiere a la ejecución en secuencia de varias de las instrucciones mencionadas anteriormente.**

<br>

---

**Ejemplo: C**

```C
#include <stdio.h>
#include <stdlib.h>
int main() {
    int a = 20;
    int b = 22;
    res = a + b;
    printf("Le résultat est %d\n", res);
    return 0;
}
```

<br>

---

**Ejemplo: Python**

```Python
a = 20
b = 22
res = a + b
print("Le résultat est %d" % res)
```

<br>

---

**Ejemplo: PHP**

```php
<?php
    $a = 20;
    $b = 22;
    $res = $a + $b;
    echo "Le résultat est $res";
?>
```

<br>

---

**Ejemplo: JavaScript**

```C
const a = 20
const b = 22
const res = a + b
console.log('Le résultat est ' + res)
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

- **La programación imperativa permite dar instrucciones precisas a una máquina y modificar su estado global.**

- **Los lenguajes más conocidos comparten un aspecto imperativo.**

<br>

---

---
