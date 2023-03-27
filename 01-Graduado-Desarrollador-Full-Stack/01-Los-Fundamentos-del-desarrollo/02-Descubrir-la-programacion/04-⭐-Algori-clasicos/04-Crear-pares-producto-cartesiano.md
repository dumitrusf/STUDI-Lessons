# **Crear pares (Producto cartesiano)**

<br>

## **_Objetivos:_**

- **Conocer el funcionamiento de un producto cartesiano**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Las bases de datos son ampliamente utilizadas hoy en día y este uso es ampliamente conocido por el público en general.

**Sin embargo, una de las operaciones básicas que se realiza en las bases de datos sigue siendo muy poco conocida: el producto cartesiano.**

**Esta operación matemática permite combinar dos conjuntos de datos y dar una lista de las posibles combinaciones entre los elementos de esos conjuntos.**

Veremos que es una operación fácil de realizar, pero relativamente costosa en términos de complejidad algorítmica.

<br>

---

---

<br>
<br>

---

## **Producto cartesiano**

---

<br>

El producto cartesiano es una operación matemática entre dos conjuntos.

Realizar el producto cartesiano del conjunto X con el conjunto Y implica listar todas las posibles combinaciones entre los elementos de X y los de Y.

Esta operación se utiliza ampliamente en las bases de datos para crear relaciones entre las tablas.

<br>

---

**Aquí tenemos un ejemplo para comprender mejor esta operación matemática:**

```
persons = {"Jean", "Anne", "Maria"}

martialArts = {"Karaté", "Judo"}

ProductoCartesiano(persons, martialArts) = [
 ("Jean", "Karaté"), ("Jean", "Judo"),
 ("Anne", "Karaté"), ("Anne", "Judo"),
 ("Maria", "Karaté"), ("Maria", "Judo")
]
```

---

**Atención:** no debes listar las combinaciones posibles entre los elementos de `X` o `Y` confundidos.

**Por ejemplo, ("Jean", "Anne") no forma parte del producto cartesiano porque tanto Jean como Anne pertenecen a X.**

<br>

---

---

<br>
<br>

---

## **Implementación**

---

<br>

Para implementar el producto cartesiano, se requieren dos bucles anidados.

**En términos más simples, la idea del algoritmo se expresaría de la siguiente manera:** por cada elemento en `X`, creamos una pareja con cada elemento en `Y`.

<br>

---

**Ejemplo JavaScript: Producto cartesiano para obtener las combinaciones posibles de menús**

```JS
const vegetables = ['Frites', 'Riz', 'Coquillettes']
const sauces = ['Pesto', 'Ketchup']
for (let i = 0; i < vegetables.length; i++) {
  for (let j = 0; j < sauces.length; j++) {
    console.log(vegetables[i], sauces[j])
  }
}
```

<br>

---

**Ejemplo Python: Producto cartesiano para obtener las combinaciones posibles de menús**

```Python
vegetables = ["Frites", "Riz", "Coquillettes"]
sauces = ["Pesto", "Ketchup"]
for i in range(len(vegetables)):
  for j in range(len(sauces)):
    print(vegetables[i],sauces[j])
```

<br>

---

### **Desarrollo paso a paso**

---

<br>

**Probemos el desarrollo paso a paso con `X = ["Frites", "Riz", "Coquillettes"]` e `Y = ["Pesto", "Ketchup"]`.**

- Primera iteración principal, i = 0:

    - Primera iteración secundaria, j = 0: Mostramos "Frites Pesto".

    - Segunda iteración secundaria, j = 1: Mostramos "Frites Ketchup".

---

<br>

- Segunda iteración principal, i = 1:

    - Primera iteración secundaria, j = 0: Mostramos "Riz Pesto".

    - Segunda iteración secundaria, j = 1: Mostramos "Riz Ketchup".

---
<br>    

- Tercera iteración principal, i = 2:

    - Primera iteración secundaria, j = 0: Mostramos "Coquillettes Pesto".

    - Segunda iteración secundaria, j = 1: Mostramos "Coquillettes Ketchup".

---

<br>

- Fin de la iteración principal.

<br>

**Todos los elementos del producto cartesiano han sido mostrados.**

<br>

---

### **Complemento: Complejidad del producto cartesiano**

---

<br>

La complejidad del producto cartesiano es `O(n*m)`, donde `n` es el número de elementos en `X` y `m` es el número de elementos en `Y`.

Esta complejidad es evidente debido a la anidación de los bucles.


---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **El producto cartesiano es una operación matemática utilizada, en particular, por las bases de datos.**

- **Su implementación es muy simple gracias a dos bucles anidados.**

<br>

---

---
