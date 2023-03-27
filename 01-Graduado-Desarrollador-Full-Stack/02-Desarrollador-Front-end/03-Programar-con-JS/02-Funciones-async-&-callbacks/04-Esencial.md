# **Esencial: Importancia de la `Asincronía` en Programación**

<br>

---

## **Introducción al Funcionamiento Asíncrono**

---

<br>

Este curso nos ha permitido entender mejor cómo funcionan las operaciones asíncronas y cómo podemos gestionarlas de manera eficiente en nuestros programas.

Aprendimos que una operación asíncrona es una tarea que se realiza en segundo plano, mientras que el resto del programa continúa ejecutándose.

Esto es especialmente útil para llevar a cabo tareas que requieren mucho tiempo, como peticiones a redes o cálculos matemáticos complejos.

---

---

<br>

<br>

---

## **Uso de `Async`, `Await` y `setTimeout()`**

---

<br>

Exploramos cómo utilizar las palabras clave `async` y `await`, así como la función `setTimeout()`.

Además, vimos los primeros ejemplos de Promesas y entendimos la relación que existe entre las funciones asíncronas y las Promesas.

---

---

<br>

<br>

---

## **Importancia de los `Callbacks`**

---

<br>

La sección sobre los `callbacks` fue especialmente importante ya que nos permitió entender mejor cómo manejar funciones asíncronas de manera eficiente en JavaScript.

Una función de callback es una función que se pasa como argumento a otra función.

Se puede utilizar en una función asíncrona para que sea llamada automáticamente por esta función una vez que una operación asíncrona haya concluido.

Comprendimos que la asincronía y los callbacks serán particularmente indispensables cuando profundicemos en las peticiones de red.

---

---

<br>

<br>

---

## **Conclusión y Aplicaciones Prácticas**

---

<br>

En resumen, el curso sobre funciones asíncronas y callbacks nos proporcionó una comprensión profunda de cómo las operaciones asíncronas pueden ser utilizadas para mejorar el rendimiento de nuestros programas.

También introdujimos cómo usar los callbacks para gestionar estas operaciones y para interactuar con recursos externos.

Estas habilidades son esenciales para cualquier desarrollador que quiera crear aplicaciones web modernas y eficientes, y ahora estamos mejor preparados para trabajar con estas tecnologías en nuestro propio código.

---

---

<br>

<br>

---

## **Recordemos: Diferencia entre `Promesas` y `Callbacks`**

---

<br>

---

### **¿Qué es un Callback?**

---

<br>

<u>**[Explicación en 40 segundos, mostrando la función generalizada para implementar la asincronía ... promesa o lo que queramos, y que en el segundo bloque sera la creación de nuestro callback](https://youtu.be/KSwuo_5z8Qo?si=j9u5uFb-Q4Taz3kz)**</u>

<br>

---

**Un `"callback"` (función de devolución de llamada) es simplemente una función que se pasa como argumento a otra función, y que se ejecutará en un momento determinado.**

**Los callbacks son una manera de manejar la asincronía y son ampliamente utilizados en JavaScript, especialmente en versiones anteriores del lenguaje.**

<br>

---

**Ejemplo de Callback**

```javascript
function hacerAlgo(callback) {
  // Realizar alguna operación
  callback('Operación completada');
}

const sumar = (a, b) => {
  let op = a + b;
  console.log(op);  // Si deseas ver la suma en la consola
}

hacerAlgo((mensaje) => {
  console.log(mensaje);  // Imprimirá "Operación completada"
  sumar(3, 6);           // Realizará la suma
});
```

---

---

<br>

<br>

---

## ¿Qué es una Promesa?

---

<br>

**Una "Promesa" en JavaScript es un objeto que representa el resultado final de una operación asíncrona.**

A diferencia de un callback, una Promesa tiene estados (`pending`, `fulfilled`, `rejected`) y puede ser encadenada.

**Las Promesas ofrecen una forma más limpia y potente de manejar operaciones asíncronas.**

<br>

---

**Ejemplo de Promesa**

```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Realizar alguna operación
  if (/* todo va bien */) {
    resolve('Operación completada');
  } else {
    reject('Operación fallida');
  }
});
```

---

---

<br>

<br>

---

## **Comparación**

---

<br>

---

### **Legibilidad y Mantenimiento**

---

<br>

- Las Promesas ofrecen un código más limpio y fácil de leer, especialmente cuando se manejan múltiples operaciones asíncronas.

- Con callbacks, el código puede volverse rápidamente complicado debido al anidamiento **("callback hell")**.

![Alt text](image.png)

<br>

---

### **Encadenamiento**

---

<br>

- Con Promesas, es fácil encadenar múltiples operaciones asíncronas y manejar errores de una forma más controlada. Esto es más difícil de hacer con callbacks.

<br>

---

### **Tratamiento de Errores**

---

<br>

- Las Promesas hacen que el manejo de errores sea más sencillo y coherente, gracias a métodos como `.catch()` y `.finally()`.

<br>

---

### **Sintaxis Moderna**

---

<br>

- Las Promesas son más recientes y están más alineadas con las prácticas modernas de programación en JavaScript.

Se integran muy bien con `async/await`, lo que hace que el código sea aún más legible.

En resumen, aunque las Promesas y los callbacks se utilizan para manejar la asincronía, las Promesas ofrecen una serie de ventajas en términos de legibilidad, mantenimiento y funcionalidad.

---

---