# **Funciones y Ámbito de Variables**

<br>

## **_Objetivo_**

- **Comprender las restricciones del ámbito de las variables en las funciones.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Estamos familiarizados con el concepto de ámbito de una variable.

Esto se refiere a la parte del código donde se declara la variable y, por lo tanto, donde es utilizable.

Por defecto, las variables son locales y solo pueden ser utilizadas dentro del bloque de código donde fueron declaradas.

<br>

---

<br>

Las funciones son bloques de código como cualquier otro, por lo que las restricciones del ámbito de las variables se aplican de la misma manera en ellas.

Una variable definida en una función solo es válida dentro de esa función.

<br>

---

---

<br>

<br>

---

## **Alcance de las variables**

---

<br>

Cuando definimos una variable, está asociada al bloque donde se declara y solo es visible en ese bloque. Esto se llama variable local.

<br>

---

---

<br>

<br>

---

## **Alcance en una función**

---

<br>

Una variable definida dentro de una función solo será accesible dentro de esa función.

---

<br>

**En JavaScript:**

- este bloque se distingue por la indentación

y
    
**En Python:**

- este bloque se distingue por las llaves.

<br>

---

### **Ejemplo: Alcance de Variables Locales en JavaScript**

---

<br>

**Ejemplo JavaScript: función que devuelve el máximo de una lista**

```js
function maximoLista(listaLocal) {
  let maximo = listaLocal[0]; // La variable maximo solo existe durante la ejecución de la función
  for (let i = 0; i < listaLocal.length; i++) {
    if (maximo < listaLocal[i]) {
      maximo = listaLocal[i];
    }
  }
  return maximo;
}
console.log('El máximo de la lista es', maximoLista([2, 5, 10, 3]));

```

<br>

---

---

<br>

<br>

---

### **Atención!: Mismo Nombre, Diferente Alcance**

---

<br>

Es posible definir una variable con el mismo nombre en una función que en el programa que la llama.

**Si ambas variables son locales en bloques diferentes, existen de manera independiente y sus valores no entran en conflicto.**

<br>

---


**Ejemplo JavaScript: función que devuelve el máximo de una lista**

```js
function maximoLista(listaLocal) {
  let maximo = listaLocal[0];
  for (let i = 0; i < listaLocal.length; i++) {
    if (maximo < listaLocal[i]) {
      maximo = listaLocal[i];
    }
  }
  return maximo;
}
let maximo = maximoLista([2, 5, 10, 3]); // Esta variable maximo es diferente de la variable maximo utilizada en la función
console.log('El máximo de la lista es', maximo);
```

<br>

---

---

<br>

<br>

---

## **Recordatorio**

---

<br>

En JavaScript, es posible definir una variable ya sea directamente sin un prefijo, con var o con let.

Las sintaxis sin prefijo y con var permiten definir una variable que persistirá una vez que el bloque termine, lo que significa que será una variable global.

**Sin embargo, se debe evitar el uso de variables globales siempre que sea posible.**

<br>

```
La sintaxis let permite definir una variable que se destruirá una vez que el bloque termine.
```

<br>

---

---

<br>

<br>

---

## **Declaración de Variables en Funciones**

---

<br>

Siempre se debe utilizar let o const en las funciones de JavaScript.

<br>

---

---

<br>

<br>

---

### **Atención!: Efectos secundarios**

---

<br>

**No usar let para definir una variable en una función puede tener efectos secundarios, por lo que siempre se deben declarar las variables utilizadas en las funciones para evitarlos.**

En efecto, una variable definida sin una indicación adicional sobrescribirá las variables definidas en el código que la llama.

**Aquí tienes un ejemplo donde se modifica una variable sin querer:**

- **La primera versión devuelve un resultado incorrecto.**

- La segunda versión corrige este error agregando `let` **en la primera línea de la función** `maximoLista`.

<br>

---

**Ejemplo JavaScript: código con un problema de alcance en una de sus variables**

```js
function maximoLista(listaLocal) {
  // Sin let, se declara una variable global que sobrescribe la variable max existente
  max = listaLocal[0];
  for (let i = 0; i < listaLocal.length; i++) {
    if (maximo < listaLocal[i]) {
      maximo = listaLocal[i];
    }
  }
  return maximo;
}

// Se busca el máximo de una lista de listas de enteros positivos
const listaAnidada = [
  [1, 12, 5],
  [4, 3, 10],
  [2, 7, 1, 9]
];
let maximo = 0;
for (let i = 0; i < listaAnidada.length; i++) {
  const maximoTemp = maximoLista(listaAnidada[i]);
  if (maximo < maximoTemp) {
    maximo = maximoTemp;
  }
}
console.log(maximo); // Mostrará 9 aunque el máximo es 12
```

---

<br>

**Ejemplo JavaScript: código corrigiendo el efecto secundario del alcance de una variable**

```js
function maximoLista(listaLocal) {
  // Con let, se declara una variable local en la función
  let maximo = listaLocal[0];
  for (let i = 0; i < listaLocal.length; i++) {
    if (maximo < listaLocal[i]) {
      maximo = listaLocal[i];
    }
  }
  return maximo;
}

// Se busca el máximo de una lista de listas de enteros positivos
const listaAnidada = [
  [1, 12, 5],
  [4, 3, 10],
  [2, 7, 1, 9]
];
let maximo = 0;
for (let i = 0; i < listaAnidada.length; i++) {
  const maximoTemp = maximoLista(listaAnidada[i]);
  if (maximo < maximoTemp) {
    maximo = maximoTemp;
  }
}
console.log(maximo); // Mostrará el valor correcto

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

- **Las restricciones de alcance de las variables también se aplican a las funciones.**

- **En JavaScript, es esencial usar `let` para definir variables en funciones y evitar efectos secundarios.**

<br>

---

---