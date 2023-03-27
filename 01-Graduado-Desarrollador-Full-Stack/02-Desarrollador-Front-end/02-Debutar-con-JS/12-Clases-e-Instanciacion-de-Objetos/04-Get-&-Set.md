# **`Get`ters y `Set`ters**

<br>

**En la programación orientada a objetos, los `get`ters y `set`ters son:**

- **métodos especiales:**

    - que proporcionan una forma de acceder
    
        y
        
    - modificar los valores de las propiedades de un objeto.

---

<br>
    
**Estos métodos son una parte esencial del concepto de `encapsulamiento`, que se refiere a:**

- **la agrupación de datos relacionados**
    
- **funciones en un solo objeto**

    y
    
- **restringir el acceso directo a algunos de los componentes del `objeto`**

<br>

---

## **¿Qué son los `Get`ters?**

---

<br>

**Los `get`ters** son métodos que **se utilizan para** obtener el valor de una propiedad específica.

En otras palabras, un getter es como un portal que te permite **ver el valor de una propiedad desde fuera del objeto, pero no nos permite modificar ese valor directamente.**

<br>

---

**Por ejemplo, considera el siguiente código:**

```javascript
class Producto {
  constructor(marca) {
    this._marca = marca;
  }

  get marca() {
    return this._marca;
  }
}

let producto = new Producto("HP");

console.log(producto.marca); // Imprime: "HP"
```

---

<br>

**En este código, `get marca()`** es un método `getter` que **devuelve el valor de la propiedad `_marca`.**

**Cuando llamamos a `producto.marca`, estamos llamando al método `getter`, que nos devuelve el valor de `_marca`.**

---
---

<br>
<br>

---

## **¿Qué son los Setters?**

---

<br>

**Los `set`ters** son métodos que **se utilizan para** asignar un valor a una propiedad específica.

Un setter es como un portal que te permite **cambiar el valor de una propiedad desde fuera del `objeto`.**

<br>

---

**Por ejemplo, considera el siguiente código:**

```javascript
class Producto {
  constructor(marca) {
    this._marca = marca;
  }

  get marca() {
    return this._marca;
  }

  set marca(nuevaMarca) {
    this._marca = nuevaMarca;
  }
}

let producto = new Producto("HP");
console.log(producto.marca); // Imprime: "HP"

producto.marca = "Acer";
console.log(producto.marca); // Imprime: "Acer"
```

---

<br>

**`nuevaMarca`** en el método `set` es un parámetro que **representa el nuevo valor que queremos asignar a la propiedad `_marca`.**

**Cuando llamamos al método `set`, pasamos el nuevo valor que queremos asignar a `_marca` como argumento, y ese valor se recibe en el método `set` como `nuevaMarca`.**

---

<br>

**Por ejemplo, en el siguiente código:**

```javascript
class Producto {
  constructor(marca) {
    this._marca = marca;
  }

  get marca() {
    return this._marca;
  }

  set marca(nuevaMarca) {
    this._marca = nuevaMarca;
  }
}

let producto = new Producto("HP");
console.log(producto.marca); // Imprime: "HP"

producto.marca = "Acer";
console.log(producto.marca); // Imprime: "Acer"
```

---

<br>

- **Cuando llamamos a `producto.marca = "Acer";`, estamos llamando al método setter `marca(nuevaMarca)` y pasando `"Acer"` como argumento.**

- **Dentro del método `set`ter, este nuevo valor se recibe como `nuevaMarca`, y luego se asigna a la propiedad `_marca`.**

- **Por lo tanto, no veríamos `nuevaMarca` en un `console.log` a menos que lo imprimamos dentro del método setter, porque `nuevaMarca` solo existe dentro del ámbito de ese método.**

<br>

---

<br>

El nombre **`nuevaMarca` es simplemente un nombre de parámetro que hemos elegido** para este método en particular.

Podríamos darle cualquier nombre válido que quisiéramos, siempre y cuando utilicemos ese mismo nombre dentro del método como parámetro para referirnos al nuevo valor.

<br>

---

**Aquí te muestro cómo se vería con un nombre de parámetro diferente:**

```javascript
class Producto {
  constructor(marca) {
    this._marca = marca;
  }

  get marca() {
    return this._marca;
  }
    // mismo nombre de parametro que declarado en la propiedad de "this._marca", que es valor
  set marca(valor) {
    this._marca = valor;
  }
}

let producto = new Producto("HP");
console.log(producto.marca); // Imprime: "HP"

producto.marca = "Acer";
console.log(producto.marca); // Imprime: "Acer"
```

---

<br>

**En este código, hemos cambiado el nombre del parámetro a `valor`, pero el código funciona exactamente igual que antes.**

**Como mencionamos, elegir nombres intuitivos para nuestras variables y parámetros puede hacer que nuestro código sea más fácil de leer y entender.**

---

---

<br>

<br>

---

## **¿Por qué usar Getters y Setters?**

---

<br>

**Los getters y setters son útiles por varias razones:**

1. **Encapsulamiento**:

    - Los getters y setters ayudan a ocultar los detalles internos de cómo se almacenan los datos en un objeto.
    
    - Esto significa que puedes cambiar cómo se almacenan los datos sin afectar el resto de tu código.

    ---

    <br>

2. **Validación**:

    - Puedes usar setters para agregar lógica de validación adicional.
    
    - Por ejemplo, podrías verificar si un nuevo valor es válido antes de asignarlo a una propiedad.

    ---

    <br>

3. **Control**:

    - Los getters y setters te dan más control sobre cómo se accede y modifica una propiedad.
    
    Por ejemplo, podrías usar un getter para calcular un valor sobre la marcha en lugar de almacenarlo.

---

---

<br>

<br>

---

## **Ejemplo: Explicativo**

---

<br>

**Imagina que tienes una caja fuerte (que es tu objeto). Dentro de la caja fuerte, tienes algo valioso, digamos un diamante (que es tu propiedad `_marca`).**

- El método `get` es como preguntarle al guardia de seguridad (que sería tu método `get`) que te muestre el diamante.

    - El guardia de seguridad abre la caja fuerte, saca el diamante y te lo muestra.
    
    - Pero en ningún momento te da el diamante directamente ni te permite tocarlo.
    
    - De esta manera, el diamante está seguro.

    ---

    <br>

- El método `set` es como darle un nuevo diamante al guardia de seguridad para que lo guarde en la caja fuerte.

    - Le das el diamante al guardia de seguridad (tu método `set`), él abre la caja fuerte y coloca el nuevo diamante dentro.

<br>

---

<br>

**Entonces, ¿por qué no abres la caja fuerte (_marca) directamente?**

- **Bueno, podría ser peligroso.**

    - Podrías perder el diamante, o alguien más podría ver el código de la caja fuerte y robarlo.
    
    - Al usar los métodos `get` y `set`, te aseguras de que solo las personas autorizadas (los métodos `get` y `set`) pueden acceder al diamante.

---
---