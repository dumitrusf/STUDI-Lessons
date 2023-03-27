# **Z-index**

<br>

## **_Objetivos:_**

- Posicionar/apilar elementos utilizando la propiedad z-index.

---

---

<br>

---

## **Contexto**

---

<br>

Al posicionar nuestros diferentes bloques, puede suceder que algunos de ellos se superpongan por encima de otro.

Para gestionar el orden de visualización de estos, tenemos acceso a una nueva propiedad: z-index.

La propiedad z-index se utiliza para gestionar la superposición de elementos.

Cuanto mayor sea el valor, más se posicionará el elemento por encima de los demás en el eje Z.

<br>

---

**EJEMPLO**

```html
<div class="index-1"></div>
<div class="index-2"></div>
<div class="index-3"></div>
```

```css
.index-1 {
  z-index: 3;
  position: absolute;
  width: 200px;
  height: 100px;
  background: orange;
}

.index-2 {
  z-index: 2;
  position: absolute;
  width: 200px;
  height: 100px;
  background: purple;
  top: 50px;
  left: 50px;
}

.index-3 {
  z-index: 1;
  position: absolute;
  width: 200px;
  height: 100px;
  background: pink;
  top: 100px;
  left: 100px;
}
```

<br>

Resultado:

![Resultado Z-index](./03-Z-index/img/z-index.png)

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **La propiedad z-index permite gestionar el orden de visualización de los elementos. Cuanto mayor sea el valor, más se mostrará el elemento en primer plano.**

<br>

---

---

<br>
<br>

---

### **Atención**

---

<br>

Es importante utilizar la propiedad z-index con moderación.

Su uso excesivo puede causar errores gráficos difíciles de encontrar.

En caso de duda, es recomendable revisar la documentación para comprender bien el contexto de apilamiento o el orden de visualización de los elementos en función de su estado.

<br>

---

---

<br>
<br>

---

### **Complemento**

---

<br>

**[Documentación MDN sobre z-index](https://developer.mozilla.org/fr/docs/Web/CSS/z-index)**

<br>

---

---
