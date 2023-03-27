# **Noción de Bugs**

<br>

## **_Objetivo_**

- **Comprender el concepto de error `(bug)`.**

- **Entender el origen de ciertos errores.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**En informática, la situación en la que todo funciona correctamente es bastante rara:**

- hay muchas posibles razones por las cuales pocas cosas funcionan.

---

<br>

**En ese caso, hablamos de un error informático, o "bug".**

<br>

---

---

<br>

<br>

---

## **Bug**

---

<br>

**Un bug (bogue en francés) es una anomalía de funcionamiento en un programa informático.**

<br>

---

---

<br>

<br>

---

## **Origen de bugs**

---

<br>

**Los bugs pueden ser causados por:**

- Errores de sintaxis en el código fuente de un programa.

- Errores de lógica en el código fuente de un programa.

- Errores de lógica en el código fuente de las bibliotecas utilizadas por el programa.

<br>

---

### **Ejemplo: Error de Syntaxis**

---

<br>

```javascript
const postcode = 75001
if (postcode === 75001) {
  console.log('Primer distrito de París')
} 
els { // error de sintaxis
  console.log('Otro código postal')
}
```

---

<br>

**En este caso, el error de sintaxis resulta en la interrupción del programa.**

<br>

---

### **Ejemplo: Error de Lógica**

---

<br>

```javascript
const postcode = 75001
if (postcode !== 75001) { // Error de lógica
  console.log('Primer distrito de París')
} 
else {
  console.log('Otro código postal')
}
```

---

<br>

**En este caso, el error de lógica resulta en un resultado incorrecto.**

<br>

---

---

<br>

<br>

---

## **Manifestación de errores en el uso del programa**

---

<br>

**Si los errores no son corregidos, varias cosas pueden ocurrir:**

- El programa puede no ejecutarse en absoluto.

- El programa puede comenzar a ejecutarse pero luego detenerse abruptamente.

- El programa puede ejecutarse pero tener un comportamiento diferente al esperado.

<br>

---

---

<br>

<br>

---

### **Ejemplo: Un error de lógica común: el bucle infinito**

---

<br>

**Considera el siguiente código, que se supone que debe mostrar todos los números naturales impares menores que 10:**

<br>

---

**Ejemplo:**

```js
for (let i = 1; i != 10; i = i + 2) {
  console.log(i)
}
```

---

<br>

**En realidad, este código resultará en una ejecución infinita porque la condición `i != 10` nunca se cumple.**

**Comenzamos desde 1 y sumamos 2 cada vez, lo que significa que "saltaremos de 9 a 11 sin nunca llegar a 10".**

<br>

---

<br>

**El bucle nunca se detendrá:**

- **A esto se le llama un bucle infinito.**

---

<br>

Si este código se ejecuta en un navegador, puede ralentizarlo.

En algunos casos, incluso puede hacer que se detenga bruscamente.

---

<br>

![Bucle infinito](./02-Nocion-de-Bugs/img/infinite_while.png)

**Advertencia de Firefox debido a un bucle infinito**

<br>

---

---

<br>

<br>

---

## **Observación: El `"primer bug"` en informática**

---

<br>

**Durante la corrección de un error en el "Harvard Mark II", una computadora conservada en la "Smithsonian Institution", esta contenía un insecto, al cual se le denominó "bug" en inglés.**

**El insecto fue conservado y adjuntado a las notas de "Grace Hopper", quien trabajaba en esa computadora en ese momento.**

---

<br>

![Insecto en el markII (en el pc)](./02-Nocion-de-Bugs/img/first-bug.jpg)

<br>

---

```
Primer caso de error confirmado
```

---

<br>

**Sin embargo, el término "bug" ya existía antes de este descubrimiento y se utilizaba en el ámbito de la mecánica.**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Los bugs son anomalías de funcionamiento causadas por múltiples errores y que se manifiestan en varios comportamientos incorrectos en el programa.**

<br>

---

---