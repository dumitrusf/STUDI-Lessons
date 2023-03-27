# **Uso de funciones**

<br>

## **_Objetivo_**

- **Comprender cómo hacer que las funciones sean más genéricas "utilizando argumentos".**

- **Aprender a devolver información desde una función.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Probablemente hayas encontrado el concepto de función matemática en la escuela.

Es una fórmula de cálculo que permite determinar un valor en función de diferentes parámetros de entrada.

Las funciones en programación funcionan de manera similar, aunque no necesitas ser un experto en matemáticas para entenderlas.

<br>

---

<br>

**Una función en programación es un conjunto de instrucciones que realizan una operación específica.**

Estas instrucciones pueden basarse en parámetros de entrada, es decir, variables, y pueden devolver un resultado, creando así una nueva variable.

<br>

---

---

<br>

<br>

---

## **Función**

---

<br>

Una función es un conjunto de instrucciones (también conocido como subprograma) diseñado para devolver un resultado o realizar una tarea específica.

Esta secuencia de instrucciones puede ser llamada desde varios lugares del código utilizando su nombre.

**Cada vez que se llama a la función, el ordenador ejecuta todas sus instrucciones.**

<br>

---

---

<br>

<br>

---

## **Parámetro**

---

<br>

Una función puede tener uno o varios parámetros.

Estos parámetros son comparables a los antecedentes en las funciones matemáticas.

Un parámetro es un valor de un tipo dado, utilizado por la función para realizar cálculos.

Es importante destacar que cada argumento de una función puede tener un tipo diferente.

<br>

---

---

<br>

<br>

---

## **Valor de Retorno**

---

<br>

Una función puede o no devolver un resultado.

Este valor corresponde a la imagen en las funciones matemáticas.

---

<br>

**Una función puede devolver cualquier tipo de valor:**

**ya sea un tipo simple:**

- entero

- cadena de caracteres

- etc

---

<br>

    
**O un tipo complejo:**

- matriz

- registro

- etc

<br>

---

---

<br>

<br>

---

### **Complemento: Procedimientos y Funciones**

---

<br>

Algunos informáticos puristas distinguen entre los conceptos de procedimientos y funciones.

La única diferencia entre estas dos nociones es que **las funciones devuelven sistemáticamente un valor, a diferencia de los procedimientos.**

<br>

---

### **Ejemplo: Devolver el máximo de una lista**

---

<br>

Aquí tienes una función muy simple que **recibe como parámetro una lista de enteros y devuelve su valor máximo.**

<br>

---

**Ejemplo JavaScript: función que devuelve el valor máximo de una lista**

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
console.log(maximoLista([2, 5, 10, 3]));
```

---

<br>

**Ejemplo Python: función que devuelve el valor máximo de una lista**

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
console.log(maximoLista([2, 5, 10, 3]));
```

<br>

---

---

<br>

<br>

---

## **Modularizar el código**

---

<br>

Se recomienda crear funciones de manera predeterminada, ya que esto permite organizar el código en módulos.

Esto hará que el programa principal sea más legible al reducir su tamaño.

El uso sistemático de funciones, incluso en ausencia de copias, reducirá el tamaño del programa principal y facilitará el trabajo del desarrollador si necesita reutilizar la función sin haberlo previsto.

<br>

---

<br>

**Un desarrollador puede dividir su programa en varios archivos:**

- **Un archivo por tema que agrupe las funciones relacionadas con ese tema:** 

    - cálculos
    
    - interacciones
    
    - etc

---

<br>
    
**Un archivo principal que llame a las diferentes funciones.**

**Este enfoque facilitará la revisión y la continuación del proyecto por parte de otros desarrolladores.**

**También ayudará al propio desarrollador a descomponer y estructurar su tarea.**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Las funciones son secuencias de instrucciones que realizan un cálculo utilizando parámetros.**

- **Una función puede devolver un valor, que puede ser el resultado de un cálculo, entre otros.**

<br>

---

---