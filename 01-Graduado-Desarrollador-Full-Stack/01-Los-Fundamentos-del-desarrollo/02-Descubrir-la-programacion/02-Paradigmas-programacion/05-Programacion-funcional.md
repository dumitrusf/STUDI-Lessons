# **Programación Funcional**

<br>

## **_Objetivos:_**

- **Familiarizarse con la programación funcional**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Algunos algoritmos, como por ejemplo cálculos matemáticos, no necesitan considerar ningún estado para ser realizados.

En este caso, el resultado final depende únicamente de los datos de entrada, sobre los cuales se aplica una función.

Esto es lo que se conoce como programación funcional, que se enfoca en el uso de funciones.

<br>

---

---

<br>
<br>

---

## **Programación Funcional**

---

<br>

Es un derivado de la programación declarativa, por lo tanto, no se encuentra ningún estado.

Los datos solo pueden ser manipulados mediante evaluaciones de funciones matemáticas.

<br>

---

<br>

La ausencia de estado conlleva a la falta de operaciones de asignación.

Esto también evita cualquier efecto secundario y permite ver el programa como una verdadera aplicación matemática.

Si aparece un error, es muy fácil de identificar ya que seguramente estará en la función que no produce el resultado deseado.

De hecho, no existen variables compartidas ni estado global.

<br>

---

<br>

En otras palabras, un lenguaje funcional ofrece la posibilidad de alcanzar el resultado deseado a través de funciones.

Estas funciones siempre devolverán el mismo resultado para los mismos datos de entrada sin modificar el estado potencial que se encuentra fuera de estas funciones.

<br>

---
---

<br>
<br>

---

### **Ejemplo: JavaScript**

---

<br>

**Devolver los números pares de una `Array`:**

```javascript
// Definición de una función llamada 'even' que toma un parámetro 'tab'
function even(tab) {
  // Usamos el método 'filter' en el arreglo 'tab' y pasamos una función de flecha (arrow function)
  // La función de flecha verifica si un número es par o no (nb % 2 === 0)
  // Si el resultado es verdadero, el número se mantiene en el arreglo resultante
  // Si el resultado es falso, el número se excluye del arreglo resultante
  return tab.filter(nb => nb % 2 === 0);
}

// Definimos un arreglo llamado 'someArray' con varios números
const someArray = [33, 42, 12, 99, 103, 188];

// Llamamos a la función 'even' pasando el arreglo 'someArray' como argumento
// La función 'even' filtra los números pares del arreglo y devuelve un nuevo arreglo con esos números
const evenNumbers = even(someArray);

// Imprimimos en la consola el nuevo arreglo 'evenNumbers' que contiene solo los números pares
console.log(evenNumbers);
```

---

<br>

**La función `filter` aplica a cada elemento `"del Array"` la función anónima "nb => nb % 2 === 0".**

**En este contexto, la función anónima debe proporcionar una condición.**

La función **`filter` crea un nuevo array (y, por lo tanto, no modifica `el Array` original)** e inserta en ella los elementos de `el Array` que cumplen con la condición de la función pasada a **`filter`**.

<br>

---

<br>

En programación imperativa, habría sido necesario escribir las instrucciones necesarias para recorrer `el Array` manualmente y verificar la condición para cada elemento.

Esto habría requerido modificar `el Array` directamente o escribir el código para crear una nueva array.

Se puede ver claramente cómo la versión funcional es menos propensa a errores y efectos secundarios.

<br>

---

<br>

---

### **Ejemplo: Haskell**

---

<br>

**Haskell es un lenguaje puramente funcional.**

```haskell
filter even [42, 55, 76, 77, 109]
```

<br>

---

**Los números entre corchetes forman una lista de enteros.**

**El filtro crea una nueva lista que contiene los elementos de la primera lista que cumplen con la condición proporcionada como primer argumento, en este caso `"even"`, que verifica si un número es par.**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **La programación funcional prescinde de los estados en un programa, no hay reparto de memoria.**

- **Se enfoca en las funciones, las cuales no tienen efectos secundarios.**

- **Las funciones solo dependen de los datos de entrada.**

<br>

---

---
