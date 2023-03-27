# **Factorizar el código con funciones**

<br>

## **_Objetivo_**

- **Comprender el concepto de factorización de código**

- **Familiarizarse con el concepto de función**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

En su actividad diaria, un desarrollador **a menudo se encuentra reutilizando ciertos fragmentos de código**, ya que **algunas partes de los algoritmos se repiten en varios programas.**

**Para evitar copiar las mismas instrucciones repetidamente**, es necesario recurrir a **las funciones**.

Se dice que se **`"factoriza"` el código**, **es eliminar la duplicación agrupándola en una estructura:**

- la función.

---

<br>

**Luego, una función puede ser llamada en diferentes momentos durante la ejecución del programa para realizar las mismas operaciones.**

<br>

---

---

<br>

<br>

---

## **Recopia de código**

---

<br>

Un desarrollador suele tener que reutilizar un fragmento de código en varios lugares dentro de un programa o en diferentes programas.

Estos fragmentos de código pueden ser operaciones básicas, como calcular el precio con impuestos a partir del precio sin impuestos, o incluso operaciones más complejas, como enviar un correo electrónico.

Por ejemplo, un sitio web de comercio electrónico debe calcular el precio sin impuestos para cada producto y también enviar correos electrónicos por diversas razones (registro, mensaje privado, información sobre el pedido, etc.).

<br>

---

---

<br>

<br>

---

### **Atención!: Problema de manejo de las recopias**

---

<br>

**La copia de código plantea dos problemas importantes:**

1. **El primer problema:**

    - **Es que en proyectos muy grandes, la cantidad de copias de un fragmento de código podría ser muy grande.**

        - Al evitar estas copias, **se podría reducir significativamente el espacio en disco ocupado por el código.**

    y   
    
2. **El segundo problema:**

    - **Es la gestión de versiones**
    
       - **Si** el desarrollador descubre que **el código copiado tiene un error** o podría optimizarse, **deberá modificar todas las copias**.

---       
       
<br>       
       
En resumen, la copia crea un problema de control de versiones que debe evitarse a toda costa, especialmente en proyectos grandes, ya que puede provocar errores difíciles de diagnosticar.

<br>

---

---

<br>

<br>

---

## **Factorizar el código utilizando funciones**

---

<br>

**La factorización del código se logra con frecuencia mediante el uso de funciones.**

Una **función** **contiene un conjunto de instrucciones reutilizables que el programa ejecutará cada vez que se la llame, en lugar de copiar el código.**

<br>

---

<br>

**A continuación, se muestra cómo declarar y llamar a una función en JavaScript y luego en Python.**

<br>

---

**Ejemplo JavaScript: muestra '¡Hola mundo!'**

```js
function holaMundo() {
  console.log('¡Hola mundo!');
  console.log('Soy un desarrollador.');
}
holaMundo(); // Llamamos a la función por primera vez
// Otras operaciones
holaMundo(); // Segunda llamada a la función
```

---

<br>

**Ejemplo Python: muestra '¡Hola mundo!'**

```python
def hola_mundo():
  print("¡Hola mundo!")
  print("Soy un desarrollador.")
hola_mundo()  # Llamamos a la función por primera vez
# Otras operaciones
hola_mundo()  # Segunda llamada a la función
```

<br>

---

### **Ejemplo: Cantemos Sloubi**

---

<br>

**Aquí hay un ejemplo trivial en JavaScript en el que se reutiliza varias veces el mismo fragmento de código.**

<br>

---

**Ejemplo JavaScript: canta Sloubi**

```js
console.log('Parte de Sloubi');
for (let i = 0; i < 20; i++) {
  console.log('Sloubi', i);
}
console.log('Vamos otra vez');
for (let i = 0; i < 20; i++) {
  console.log('Sloubi', i);
}
console.log('¡Otra vez!');
for (let i = 0; i < 20; i++) {
  console.log('Sloubi', i);
}
console.log('Una última vez.');
for (let i = 0; i < 20; i++) {
  console.log('Sloubi', i);
}
console.log('Una vez más para el camino');
for (let i = 0; i < 20; i++) {
  console.log('Sloubi', i);
}

```

---

<br>

**En el segundo ejemplo**, definimos una función previamente y la llamamos para **evitar copiar el código repetidamente.**

<br>

---

**2do Ejemplo JavaScript: canta Sloubi**

```js
function sloubi() {
  for (let i = 0; i < 20; i++) {
    console.log('Sloubi', i);
  }
}
console.log('Parte de Sloubi');
sloubi();
console.log('Vamos otra vez');
sloubi();
console.log('¡Otra vez!');
sloubi();
console.log('Una última vez.');
sloubi();
console.log('Una vez más para el camino');
sloubi();
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

- **Un desarrollador a menudo necesita reutilizar fragmentos de código que ya ha desarrollado.**

- **Las funciones permiten factorizar el código y evitar copiar repetidamente el mismo código**

<br>

---

---