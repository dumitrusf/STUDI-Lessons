# JavaScript: multi-paradigma

## Objetivos

- Saber situar el JavaScript en los paradigmas
- Comprender la noción de multi-paradigma

## Contexto

Hemos visto varios paradigmas, que son los principales utilizados en programación web. Esta lista está lejos de ser exhaustiva, existen muchos otros paradigmas y sub-paradigmas, pero permite comprender qué es un paradigma y cómo puede cambiar la visión de un desarrollador sobre su código. Por lo tanto, es interesante ver dónde se sitúa el JavaScript, que vamos a aprender, para poder entender mejor este lenguaje.

## Un lenguaje, varios paradigmas

Casi todos los ejemplos que hemos visto en este curso estaban escritos en JavaScript, a excepción de la programación declarativa. Por lo tanto, es posible utilizarlo para hacer programación imperativa, funcional u orientada a objetos: es un lenguaje multi-paradigma.

La ventaja de un lenguaje multi-paradigma reside en el hecho de que es posible utilizar un paradigma diferente para cada parte de nuestra aplicación, y por lo tanto hacer coexistir varias visiones del código en un mismo programa. Es algo que puede ser complejo de implementar, pero que puede resultar muy potente.

## Ejemplo: Un ejemplo de uso del multi-paradigma

Aquí hay un ejemplo de uso de varios paradigmas en un mismo programa. Imaginemos una página de blog con esta estructura HTML:

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="content">
      <article>
        <div class="article-content">
          <h2>El JavaScript</h2>
          <div>
            El JavaScript es un <b>lenguaje</b> utilizado lado cliente pero también
            lado servidor
          </div>
        </div>
      </article>
      <article>
        <div class="article-content">
          <h2>El PHP</h2>
          <div>
            El PHP es un lenguaje de <b>script</b> lado <b>servidor</b>
          </div>
        </div>
      </article>
      <article>
        <div class="article-content">
          <h2>El HTML/CSS</h2>
          <div>Estos lenguajes permiten dar formato a una página web</div>
        </div>
      </article>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

En esta estructura, queremos transformar todos los títulos en enlaces que apunten a la búsqueda de Google asociada. Para ello, vamos a recuperar, para cada artículo, el primer hijo más bajo en la jerarquía (es decir, las etiquetas `<h2>`). El HTML tiene forma de árbol (con una jerarquía padre/hijos), y esta estructura se manipula fácilmente usando la programación funcional y la recursividad. Vamos a crear una función que nos permita navegar hasta el primer hijo más bajo usando la programación funcional, pero esta función será llamada en un bucle for que recupera todos los artículos y forma el enlace asociado, es decir, en programación imperativa. También vamos a crear una clase para gestionar fácilmente la URL de Google, es decir, usando el paradigma orientado a objetos. Por último, vamos a añadir una nueva estructura HTML a la existente. El HTML es un lenguaje declarativo: nuestro programa simplemente indicará que queremos un enlace (gracias a la etiqueta `<a>`), pero será el navegador el que lo muestre como debe en la página.

Aquí está el código que permite realizar esta operación:

```javascript
// Esta función usa el paradigma funcional
function getDeepestFirstChildren(node) {
  if (node.children[0]) {
    return getDeepestFirstChildren(node.children[0]);
  }
  return node;
}

// Esta clase indica la Programación Orientada a Objetos
class GoogleURL {
  constructor(text) {
    this.text = text;
    this.query = encodeURIComponent(text);
  }
  getLink() {
    return "http://www.google.com/search?q=" + this.query;
  }
}

// El script principal, que llama a los otros elementos, es en programación imperativa
for (article of document.getElementById("content").children) {
  let children = getDeepestFirstChildren(article);
  let googleURL = new GoogleURL(children.textContent);
  //Creamos un nuevo nodo en HTML, que es un lenguaje declarativo
  children.innerHTML =
    '<a href="' + googleURL.getLink() + '">' + googleURL.text + "</a>";
}
```

## Nota: Un Orientado a Objetos particular

>El JavaScript no implementa exactamente el paradigma orientado a objetos. Originalmente, implementa más bien una de sus variantes: la programación orientada a prototipos. A diferencia de la POO, este paradigma no utiliza clases, sino prototipos, que reaccionan un poco diferente. Las últimas versiones de JavaScript implementan un sistema de clases, como hemos visto al abordar la POO, pero no es más que una versión deformada de los prototipos.

## A recordar

- JavaScript es un lenguaje multi-paradigma capaz de implementar la programación imperativa, la programación funcional y la Programación Orientada a Objetos.
- Cuidado, JavaScript se basa en realidad en una variante de la POO: la programación orientada a prototipos¹¹.

## Complemento

- **[La programación orientada a prototipos](https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_prototype)**