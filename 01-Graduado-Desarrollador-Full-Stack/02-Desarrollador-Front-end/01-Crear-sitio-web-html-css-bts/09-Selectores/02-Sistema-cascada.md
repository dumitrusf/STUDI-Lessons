# **Sistema Cascada**

<br>

## **_Objetivos:_**

- Entender el sistema cascada

- Entender como se gestionan los conflictos de los estilos

---

---

<br>

---

## **Contexto**

---

<br>

El orden de declaración de las reglas CSS es importante.

Cuando se desea aplicar una misma propiedad a un elemento, el momento en que fue seleccionado y la forma en que se hizo son parámetros que se consideran para establecer las prioridades de aplicación.

<br>

---

---

<br>
<br>

---

## **Orden de declaración**

---

<br>

**Cuando un elemento ha sido seleccionado de la misma manera en dos lugares diferentes, el orden de declaración de las reglas CSS es importante.**

**De hecho, si se declara dos veces una _propiedad_ en el mismo elemento, pero con un valor diferente, el estilo que se aplicará será el contenido en la regla que aparece en último lugar en el archivo CSS.**

**Del mismo modo, si se importan varios archivos CSS con la misma regla en el mismo elemento, la regla que se tendrá en cuenta será la última cargada por el navegador. Será entonces la que se encuentra en el archivo importado en último lugar en la etiqueta `<head>`**.

<br>

---

Si declaramos dos veces una propiedad sobre el color de fondo del párrafo:

**EJEMPLO**

```html
<p>Soy un párrafo</p>
```

<br>

```css
p {
  background-color: red;
}

p {
  background-color: green;
}
```

El estilo que se aplica sera el ultimo que este declarado, en este caso la regla que contiene el valor verde, ese es el escogido por cascada.

![Regla escogida](./02-Sistema-cascada/img/priority-same-element.png)

<br>

---

---

<br>
<br>

---

## **La especificidad**

---

<br>

Si una misma regla se aplica con un valor diferente en una clase y en un elemento, se tomará en cuenta la de la clase.

Una clase es, de hecho, un selector más específico con un peso más importante: el orden de declaración no se tiene en cuenta en este caso.

<br>

---

**EJEMPLO**

```html
<p class="ma-classe">Soy un párrafo</p>
```

```css
.mi-classe {
  background-color: red;
}

p {
  background-color: green;
}
```

Aunque la regla de selector de elemento este declarada posterior al de la regla de .clase, se toma en consideración la regla de .clase ya que tiene mayor valor específicamente.

![Prioridad de regla mas especifica](./02-Sistema-cascada/img/priority-weight.png)

<br>

---

---

<br>
<br>

---

### **Método: Determinar la especificidad, el peso de las reglas**

---

<br>

Para determinar qué reglas aplicar a un elemento, el navegador se basa en un peso, es decir, una puntuación calculada en función de la especificidad del selector.

En general, cuanto más preciso sea un selector, más se considerará prioritario.

Un selector de elemento es poco específico: apunta a todos los elementos de un tipo determinado en la página, por lo que su puntuación es baja.

Un selector de clase es más específico: en la página, solo apunta a los elementos cuyo atributo de clase tiene el valor elegido, por lo que su puntuación es más alta.

Por ejemplo, si apuntamos a un elemento utilizando su nombre de etiqueta y su clase, la regla CSS prioritaria será la más precisa.

Por lo tanto, será la que tenga un selector compuesto por el nombre de la etiqueta y la clase.

De hecho, su peso será mayor que si solo hubiéramos dado la clase o el nombre del elemento.

Para comprender en detalle cómo se realizan estos cálculos, [este artículo](https://blog.organicweb.fr/comprendre-le-poids-des-regles-css/) resume particularmente bien la forma en que se calcula el peso.

Aconsejable ver en YouTube calculo de peso de especificidad, en concreto a Dorian desings.

<br>

---

---

<br>
<br>

---

### **Observación**

---

<br>

Es posible asignar múltiples clases a los elementos HTML enumerándolas en el atributo "class" y separándoles con un espacio.

Si la misma propiedad es declarada en dos reglas diferentes, el conflicto se resuelve de la siguiente manera: primero según la regla de especificidad, luego según el orden de declaración del CSS.

El orden de las clases en el atributo "class" no es tenido en cuenta.

<br>

---

**EJEMPLO**

```html
<p id="identifiant" class="classe1 classe2">Soy un párrafo</p>
```

<br>

```css
p {
  color: white;
}

.classe2 {
  text-decoration: underline;
  background-color: blue;
}

.classe1 {
  background-color: green;
}
```

Sin embargo, el efecto esperado no está aquí 👇.

![propiedad con valor verde](./02-Sistema-cascada/img/css.png)

<br>

---

---

<br>
<br>

---

## **Atención**

---

<br>

Existe la palabra clave !important que no se recomienda usar, ya que tiene el peso más fuerte, es decir, si se usa, no se podrá sobrescribir la propiedad CSS en la que se aplica. 

Esto presenta un problema si deseamos reutilizar nuestro código y modificar elementos mediante la sobrescritura.

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **En caso de conflicto en una regla CSS para aplicar al mismo elemento seleccionado, se aplicará el estilo declarado en último lugar.**

- **En caso de conflicto en elementos seleccionados de diferentes maneras, se aplicará la regla con mayor peso (es decir, la más específica).**

<br>

---

---

<br>
<br>

---

## **Complemento**

---

<br>

[Cascada y herencia](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#comprendre_la_cascade)

<br>

---

---