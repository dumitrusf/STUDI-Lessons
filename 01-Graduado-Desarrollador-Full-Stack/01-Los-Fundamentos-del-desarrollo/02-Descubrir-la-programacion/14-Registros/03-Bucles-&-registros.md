# **Bucles y Registros**

<br>

## **_Objetivo_**

- **Saber cómo iterar sobre los componentes de los registros.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

De la misma manera que con los arrays, a veces es útil poder recorrer un registro, por ejemplo, para mostrar todos sus componentes.

En el caso de los arrays, simplemente iteramos sobre los diferentes elementos.

Para los registros, **iteramos sobre los componentes, lo que nos permite recuperar su nombre y su valor.**

<br>

---

### **Iterar sobre los componentes de un registro**

---

<br>

**Cuando** los registros **"tienen muchos componentes" o "su número es variable"**, es conveniente poder **realizar una operación en cada uno de los componentes** sin tener que enumerar todas las posibilidades en el código.

**Esto acorta el código y mejora un poco su legibilidad.**

<br>

---

### **Ejemplo: Acortar el código**

---

<br>

Aquí tienes **dos ejemplos en JavaScript** que muestran la reducción en líneas de código.

**El segundo ejemplo utiliza un bucle que facilita la comprensión del código.**

De hecho, **sin 👆 este bucle**, un lector tendría que leer detenidamente para saber si algunos componentes han sido omitidos.

El bucle transmite la idea de que la operación se realiza en todos los componentes sin excepción.

Además, **el bucle permite ahorrar líneas y tiempo al desarrollador.**

---

<br>

**Ejemplo JavaScript: Muestra la información del coche de Bob**

```js
const cocheBob = {
  marca: 'Renault',
  color: 'azul',
  año: 2012,
  motor: 'V1337',
  país: 'Francia',
  combustible: 'diésel'
}
console.log('marca', cocheBob.marca)
console.log('color', cocheBob.color)
console.log('año', cocheBob.año)
console.log('motor', cocheBob.motor)
console.log('país', cocheBob.país)
console.log('combustible', cocheBob.combustible)

```

---

<br>

**2do Ejemplo JavaScript: Muestra la información del coche de Bob utilizando un bucle for**

```js
const cocheBob = {
  marca: 'Renault',
  color: 'azul',
  año: 2012,
  motor: 'V1337',
  país: 'Francia',
  combustible: 'diésel'
}
for (const componente in cocheBob) {
  console.log(componente, cocheBob[componente])
}
```

<br>

---

---

<br>

<br>

---

## **`for..in`: "Recorrer los atributos" de un registro**

---

<br>

```js
for (let propiedad in objetoVar) {
  // propiedad es el nombre del componente
}
```

**Esta sintaxis podría traducirse como:**

- "Para cada componente en el registro objetoVar, hacer...".

<br>

---

---

<br>

<br>

---

## **`for..of`: "Recorrer los valores" de un registro**

---

<br>

```js
for (let valor of Object.values(objetoVar)){
  // valor es el valor del componente
}
```

**Esta sintaxis podría traducirse como:**

- "Para cada valor en el registro `objetoVar`, hacer...".

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Es posible iterar sobre los componentes de un registro.**

- **La iteración puede realizarse sobre el nombre de los componentes o sobre su valor.**

- **Iterar sobre los componentes de un registro mejora la legibilidad y es indispensable para registros muy grandes.**

<br>

---

---