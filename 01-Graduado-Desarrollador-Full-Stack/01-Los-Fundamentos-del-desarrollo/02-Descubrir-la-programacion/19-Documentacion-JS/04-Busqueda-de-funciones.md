# **Búsqueda de Funciones**

<br>

## **_Objetivo_**

- **Aprender a buscar funciones en `MDN`.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Gran parte del trabajo de un desarrollador implica aprovechar funciones, objetos y métodos existentes para resolver problemas en lugar de crear nuevas funcionalidades o reinventar la rueda.

Es útil investigar las funciones disponibles en relación a las cadenas de caracteres.

**[La página de `MDN` sobre "Strings"](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)** está diseñada para esto.

---

<br>

**Cada `método`, `función` u `objeto` es enlace que te lleva a su propia página con ejemplos.**

**A continuación, se presentan algunos métodos interesantes:**

<br>

---

**Ejemplo JavaScript `concat`: Concatena al menos dos cadenas juntas.**


```javascript
const hello = "Bonjour";
const world = "tout le monde";
console.log(hello.concat(' ', world)); // muestra "Bonjour tout le monde"
```

---

<br>

**Ejemplo JavaScript `includes`: Retorna `true` si una cadena contiene la cadena dada como argumento.**

```JavaScript
const names = ['Alice', 'Jean-Marie', 'Charlie'];
for (const name of names) {
  console.log(`El nombre ${name} ${name.includes('-') ? 'está' : 'no está'} compuesto`);
}
```

**La página del método `includes` también indica que esta función distingue entre mayúsculas y minúsculas.**

---

<br>

**Ejemplo JavaScript `split`: Divide una cadena según un separador y retorna un arreglo con los diferentes elementos.**

```JavaScript
let receivedInfo = 'Luke:Skywalker:luke.sky@rebels.net:Jedi Master';
receivedInfo = receivedInfo.split(':');
const luke = {
  firstname: receivedInfo[0],
  lastname: receivedInfo[1],
  email: receivedInfo[2],
  title: receivedInfo[3]
};
console.log(luke);
```

<br>

---

### **Cadena de Caracteres**

---

<br>

**Ejemplo JavaScript `toUpperCase`: Retorna la cadena en mayúsculas.**

<br>

---

**El ejemplo anterior podría dar como resultado:**

```javascript
let receivedInfo = 'Luke:Skywalker:luke.sky@rebels.net:Jedi Master';
receivedInfo = receivedInfo.split(':');
const luke = {
  firstname: receivedInfo[0],
  lastname: receivedInfo[1].toUpperCase(),
  email: receivedInfo[2],
  title: receivedInfo[3]
};
console.log(luke);
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

- **Es muy sencillo encontrar todas las `funciones`/`métodos` relacionados con un objeto JavaScript en `MDN`**

- **Cada página también proporciona información sobre cómo `JavaScript` interpreta el código.**

<br>

---

---