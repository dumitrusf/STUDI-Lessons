# **Programación orientada a Eventos**

<br>

## **_Objetivos:_**

- **Familiarizarse con la programación orientada a eventos**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Es común que un programa interactúe con el exterior intercambiando datos de entrada y salida.

Sin embargo, también puede intercambiar eventos y desencadenar acciones basadas en otras acciones externas.

Esto es el caso de sitios web dinámicos, que reaccionan para cambiar el estado o la apariencia de la página, por ejemplo, cuando se hace clic en un botón.

La programación orientada a eventos **se centra en la ejecución de código en función de eventos, en lugar de una simple ejecución secuencial de instrucciones.**

<br>

---

---

<br>
<br>

---

## **Programación Orientada a eventos**

---

<br>

Este paradigma se basa en los eventos que ocurren en el programa.

En otras palabras, la ejecución del programa estará determinada por lo que ocurra en un momento dado.

<br>

---

<br>

Vemos su utilidad en programas con interfaz gráfica, donde el usuario puede utilizar su ratón o teclado para activar una acción.

Estos programas suelen necesitar detectar estos eventos y ejecutar de inmediato las acciones asociadas.

<br>

---
---

<br>
<br>

---

## **Bucles Asíncronos**

---

<br>

Un bucle asíncrono se ejecuta en segundo plano del programa, es decir, su presencia es no bloqueante, lo que significa que no impide que otras partes del programa se ejecuten.

<br>

---

<br>

---

### **Ejemplo: `HTML` + `JS`**

---

<br>

**Archivo `HTML`**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Example</title>
    <script src="index.js"></script>
  </head>
  <body>
    <button id="button">Click Me</button>
  </body>
</html>
```

<br>

---

```js
function eventHandler (event) {
  console.log('Button has been clicked!')
}
const button = document.getElementById('button')
button.addEventListener('click', eventHandler)
```

<br>

---

**La función "evento" eventHandler es llamada cuando el botón es cliqueado.**

<br>

---

---

<br>

<br>

---

### **Multiparadigma**

---

<br>

La mayoría de los lenguajes son multi-paradigma, lo que significa que admiten simultáneamente paradigmas como el imperativo, funcional, orientado a eventos, etc.

La mayoría de ellos tienen, sin embargo, una dominancia fuerte, por ejemplo, el declarativo para `C` o el orientado a objetos para `Java`.

`JavaScript` es un lenguaje multi-paradigma.

`TypeScript` es un **`superconjunto`** de `JavaScript` aún más multi-paradigma, ya que completa las deficiencias orientadas a objetos de `JavaScript`, al mismo tiempo que permite seguir escribiendo `JavaScript`.

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **La programación orientada a eventos utiliza eventos para determinar la ejecución de un programa.**

- **Un evento puede ser una acción del usuario.**

<br>

---

---
