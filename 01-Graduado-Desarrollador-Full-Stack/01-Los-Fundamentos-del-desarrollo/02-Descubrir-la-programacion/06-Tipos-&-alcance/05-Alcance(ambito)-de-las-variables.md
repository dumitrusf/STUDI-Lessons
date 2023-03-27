# **Ámbito de las variables**

<br>

## **_Objetivos:_**

- **Comprender el concepto de ámbito local y bloque de definición.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Un programa se divide en bloques para que sea más legible.

**Por ejemplo si queremos escribir un programa que muestre una serie de números y luego calcule su suma, podemos dividir el programa en dos partes:**

- **dos bloques:**

    - cada uno con sus propias variables.
    
        De hecho, cada variable solo será utilizable en el bloque de código donde se ha definido.

<br>        
        
**Llamamos alcance de una variable a la zona de código en la cual la variable está definida y es utilizable.**

<br>

---

---

<br>
<br>

---

## **Ámbito (Alcance) de una variable**

---

<br>

**Cuando definimos una variable, esta está asociada al bloque en el cual se encuentra y solo es visible en ese bloque.**

**Esto se llama ámbito local.**

<br>

---

<br>

**Esto significa que no es posible mostrar o usar esa variable en otro bloque:**

- **SIMPLEMENTE NO EXISTE.**

<br>

---

<br>

**Si una variable se declara en el bloque principal** `(es decir, fuera de cualquier bucle o función)`, **es visible en toda la parte del programa que se encuentra "después de su declaración"**

<br>

---

En el siguiente programa, **la variable `"numberApple"`** **es visible en todo el programa, incluso en el bloque `"if"`**.

Por otro lado, **la variable `"enoughApple"` se declara en el bloque "if", `por lo tanto, solo es visible en el bloque "if"`.**

La última instrucción genera un error.

**Ejemplo: JS**

```JavaScript
const numberApple = 30

console.log(numberApple)

if(numberApple === 30)
{
  let enoughApple = true
  console.log(enoughApple)
}

console.log(enoughApple)
// 👆 esta da error por que enoughApple no es de ámbito global, es de local, por estar declarada dentro del bloque if

```

<br>

---

### **Observación**

---

<br>

**El alcance de las variables funciona de la misma manera con otros bucles o en funciones.**

**Una variable definida en una función solo es visible en esa función.**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Según el bloque en el cual se declaran las variables, estas tienen diferentes ámbitos y, por lo tanto, no son visibles ni utilizable en la misma parte del programa.**

<br>

---
