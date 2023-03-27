# **Selectores y combinadores**

<br>

## **_Objetivos:_**

- Aprender nuevos modos de selección

---

---

<br>

---

## **Contexto**

---

<br>

Es posible seleccionar elementos de manera más precisa utilizando diferentes tipos de combinadores, que permiten realizar selecciones avanzadas.

<br>

---

---

<br>
<br>

---

## **Los selectores**

---

<br>

Antes de dar estilo a un elemento, es importante seleccionarlo utilizando el método más adecuado.

Aquí están los principales selectores posibles y cómo utilizarlos:

- **Selector universal:** \* seleccionará todos los elementos del documento.

- **Selector de elemento:** el nombre del elemento sin los corchetes seleccionará todos los elementos de ese tipo.

- **Selector por identificación:** el atributo id = "" de un elemento seleccionará el elemento que tiene ese identificador.

- **Selector por clase:** el atributo class = "" de un elemento seleccionará todos los elementos que tengan esa clase.

- **Selector de atributo:** seleccionará todos los elementos que tengan un atributo particular.

**_En general, se recomienda no seleccionar un elemento utilizando su identificación, ya que el código CSS no podrá ser reutilizado._**

La selección más duradera y mantenible en caso de necesidad de personalización específica es el uso de clases.

Además, será posible dar múltiples clases a un elemento para aplicar varios estilos.

<br>

---

---

<br>
<br>

---

## **Selector de hijos**

---

<br>

Es posible combinar selectores para seleccionar elementos de manera más precisa.

Con el combinador `>`, es posible seleccionar un elemento que sea directamente hijo del primer elemento seleccionado en el selector:

mi-elemento > .el-objetivo.

Entonces, el estilo se aplicará solo a los elementos .el-objetivo directamente relacionados con el elemento mi-elemento.

Cabe señalar que los sub-elementos de los hijos no serán tomados en cuenta.

<br>

---

**EJEMPLO**

Aquí hay un estilo aplicado usando el selector de hijos.

Podemos ver que todos los hijos directos `<p>` de `<div>` tendrán un color:

```html
<div>
  <p>Primer hijo directo de div</p>

  <span>
    <p>segundo hijo Indirecto de div osea nieto</p>
  </span>
</div>

<p>Un párrafo fuera de div. Pero primer vecino de div.</p>

<p>Un párrafo, segundo vecino de div.</p>
```

```css
div > p {
  color: #2cc0b4;

  font-style: italic;
}
```

![Combinador-hijo](./04-Selectores-%26-combinadores/img/combinateur-enfant.png)

<br>

---

---

<br>
<br>

---

## **Selector descendiente**

---

<br>

Este selector se representa con un espacio en blanco entre los selectores.

A diferencia del selector de hijo, el selector descendente permite aplicar un estilo a todos los descendientes de un tipo descendente de un padre.

Por ejemplo, si seleccionamos "mon-elemento .la-cible", el estilo se aplicará a todos los elementos que tengan la clase .la-cible y sean descendientes del elemento "mon-elemento".

Se tendrán en cuenta los hijos de los hijos.

<br>

---

**EJEMPLO**

Aquí está el mismo estilo aplicado después de la selección utilizando el selector descendente, todos los descendientes `<p>` de `<div>` están coloreados:

```html
<div>
  <p>Primer hijo directo de div</p>

  <span>
    <p>segundo hijo Indirecto de div osea nieto</p>
  </span>
</div>

<p>Un párrafo fuera de div. Pero primer vecino de div.</p>

<p>Un párrafo, segundo vecino de div.</p>
```

```css
div p {
  color: #2cc0b4;

  font-style: italic;
}
```

![Combinador descendiente](./04-Selectores-%26-combinadores/img/combinateur-descendant.png)

<br>

---

---

<br>
<br>

---

## **Combinador adyacente y combinador general 'siblings'**

---

<br>

Combinador adyacente y combinador general "hermanos"

Existen también otros dos selectores que permiten seleccionar los vecinos de un elemento:

- **Combinador adyacente:** representado por el símbolo +, permite seleccionar un elemento que está justo después de otro elemento vecino seleccionado: "mi-elemento + el-objetivo", el elemento seleccionado será el elemento ".el-objetivo" que está justo después de "mi-elemento".

- **Combinador general:** representado por el símbolo ~, permite seleccionar todos los elementos hermanos que siguen a un elemento seleccionado: "mi-elemento ~ el-objetivo", seleccionará todos los elementos ".el-objetivo" que están después de "mi-elemento".

<br>

---

**EJEMPLO**

Si aplicamos estilo usando el combinador adyacente, notamos que solo el vecino directo `<p>` de `<div>` está coloreado:

```html
<div>
  <p>Primer hijo directo de div</p>

  <span>
    <p>segundo hijo Indirecto de div osea nieto</p>
  </span>
</div>

<p>Un párrafo fuera de div. Pero primer vecino de div.</p>

<p>Un párrafo, segundo vecino de div.</p>
```

```css
div + p {
  color: #2cc0b4;

  font-style: italic;
}
```

![selector adyacente](./04-Selectores-%26-combinadores/img/conbinateur-adjacent.png)

<br>

---

**EJEMPLO**

Si usamos el combinador general, todos los elementos `<p>` después del elemento `<div>` se colorearán de azul:

```html
<div>
  <p>Primer hijo directo de div</p>

  <span>
    <p>segundo hijo Indirecto de div osea nieto</p>
  </span>
</div>

<p>Un párrafo fuera de div. Pero primer vecino de div</p>

<p>Un párrafo, segundo vecino de div</p>
```

```css
div ~ p {
  color: #2cc0b4;

  font-style: italic;
}
```

![sibling o selector general](./04-Selectores-%26-combinadores/img/combinatur-sibling.png)

<br>

---

---

<br>
<br>

---

## **Observación: Aplicar mismo estilo a varios**

---

<br>

Para aplicar el mismo estilo a varios elementos o varias clases, es posible encadenar los selectores con comas.

<br>

---

**EJEMPLO**

```html
<h1>Lorem ipsum dolor sit amet</h1>

<p>
  Consectetur adipiscing elit. Vestibulum volutpat purus nisl, sed tincidunt
  enim scelerisque at.
</p>
```

```css
h1 {
  color: #e67e22;

  text-decoration: underline;
}

p,
h1 {
  text-align: center;
}
```

Aquí, el elemento `<h1>` obtendrá la propiedad text-align: center; que comparte con `<p>`, además de sus propias reglas.

![compartir propiedades anadiendo mas elementos a una regla mediante la coma](./04-Selectores-%26-combinadores/img/shared-rules.png)

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Es posible especificar la selección de elementos utilizando combinadores, ya sea seleccionando el hijo directo de un elemento con ">", o seleccionando todos los hijos de un tipo descendiente de un elemento con un espacio en blanco.**

- **También es posible seleccionar el hermano directo de un elemento utilizando "+", o seleccionar hermanos del mismo tipo con "~".**

<br>

---

---