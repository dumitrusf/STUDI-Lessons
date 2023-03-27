# **Array de registros**

<br>

## **_Objetivo_**

- **Saber cómo gestionar Arrays de registros**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Hemos visto que los registros son muy útiles para describir conceptos complejos, como un automóvil.

Si luego deseamos manipular un gran número de registros similares, naturalmente recurriremos a las matrices.

De hecho, es posible crear simplemente una matriz de registros y usarla como cualquier matriz convencional.

Incluso más allá, es posible crear un registro que esté anidado en el componente de otro registro, que a su vez está en una matriz de registros.

Veremos que para gestionar estas estructuras cada vez más complejas, se ha establecido un formato estándar de representación.

<br>

---

### **Anidar registros**

---

<br>

**Es posible crear Arrays o listas de registros.**

**Estas variables se ven entonces como anidaciones de registros.**

<br>

---

### **Ejemplo: Calcular el monto de un pedido**

---

<br>

Esto puede ser útil para calcular el monto de una cesta en un sitio de comercio electrónico.

Cada producto está representado por un registro que contiene su nombre y su precio.

---

<br>

**Ejemplo JavaScript: cálculo del precio de una cesta**

```js
const cesta = [
  { nombre: 'ratón', precio: 10.5 },
  { nombre: 'teclado', precio: 25 },
  { nombre: 'monitor', precio: 50 }
]
let total = 0
for (const item of cesta) {
  total = total + item.precio
}
console.log(total)
```

<br>

---

---

<br>

<br>

---

## **El formato `JSON`**

---

<br>

JSON, que significa JavaScript Object Notation, **es un formato de datos de texto derivado de la notación de registros en JavaScript**.

Este formato **es muy práctico para la transferencia de datos estructurados.**

El formato de estos datos **es muy similar al de un registro o un array de registros.**

<br>

---

**Aquí tienes un extracto de JSON que representa a empleados:**

```json
{
  "nombre": "Ada",
  "apellido": "Lovelace",
  "nacimiento": 1815,
  "fallecimiento": 1852,
  "trabajos": ["programadora", "matemática", "poeta", "traductora", "ingeniera"],
  "institución": "Universidad de Cambridge"
}
```

<br>

---

### **Complemento: Utilización del formato `JSON`**

---

<br>

El formato `JSON` se utiliza principalmente para la transferencia de pequeñas cantidades de datos.

Hoy en día, se ha destacado en la web para la comunicación entre el cliente y el servidor.

En el ejemplo anterior, el cliente habría pedido la lista de empleados al servidor.

El servidor envía el documento `JSON` y el cliente se encarga de integrar la información contenida en el JSON en la página web.

<br>

---

### **Complemento: Anidación de registros**

---

<br>

Es posible anidar registros.

Esto significa que el valor de un componente de un registro será en sí mismo un registro, como se muestra en el ejemplo a continuación con la fecha de nacimiento, que es un registro.

<br>

---

**Ejemplo JavaScript: anidación de registros**

```js
const usuario = {
  apellido: 'Tesla',
  nombre: 'Nikola',
  nacimiento: { día: 10, mes: 7, año: 1856 },
  trabajo: 'ingeniero'
}
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

- **En JavaScript, es posible gestionar colecciones de registros mediante matrices.**

- **El formato JSON deriva de los registros y se utiliza ampliamente para la transferencia de datos estructurados.**

<br>

---

---