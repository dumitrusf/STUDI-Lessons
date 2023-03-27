# **Definir métodos en una clase**

<br>

Ahora que sabemos cómo definir una clase, **vamos a poder definir `métodos` personalizados.**

Para ello, **vamos a ver en primer lugar cómo definir métodos estáticos,** es decir, **métodos accesibles a través del nombre de la `clase` directamente.**

<br>

---

## **Definir un método `estático`**

---

<br>

En JavaScript, definir un método estático equivale a definir una propiedad estática, pero sobre una función.

Para ello, **vamos a utilizar la palabra clave `static`**.

**En lugar de** utilizar la sintaxis **`miMetodo = function() {}`,** podemos **utilizar el atajo `miMetodo() {}`.**

No tenemos que utilizar la palabra `function`.

<br>

---

**Por ejemplo, definamos un `método` que permite mostrar simplemente una cadena que contiene una explicación del concepto de ordenador:**

```js
class Ordenador {
  //definición de propiedades estáticas
  static OBJETOS_admitidos = "ordenadores";

  //definición de propiedades de clase
  tipo = "portátil";
  teclado = "qwerty";

  //El constructor
  constructor(marca, ram, almacenamiento) {
    this.marca = marca;
    this.ram = ram;
    this.almacenamiento = almacenamiento;
  }

  //Y la definición de métodos estáticos osea (funciones en las clases)
  static definicion() {
    console.log(
      "Los ordenadores son máquinas automatizadas que permiten el proceso de la información."
    );
  }
}

let miOrdi = new Ordenador("Apple", 8, 512);
let miOrdi2 = new Ordenador("HP", 16, 256);


//llamada al método estático a traves del nombre de la clase
Ordenador.definicion();
```

---

<br>

Ahora que **hemos visto un ejemplo de definición de `método estático`**, **veamos** cómo definir **métodos de instancia.**

---
---

<br>
<br>

---

## **Definir métodos de `instancia`**

---

<br>

**Para crear un método de instancia,** solo tenemos que **definir este método sin** utilizar **la palabra** clave **`static`.**

**Tendremos que utilizar la palabra clave `this` para hacer referencia a la instancia.**

<br>

---

**Para ver un ejemplo, definamos un `método` que permite mostrar en una cadena las características de un ordenador (es decir, de una instancia de `Ordenador`).**

```javascript
class Ordenador {
  //definición de propiedades estáticas
  static OBJETOS_ADMITIDOS = "ordenadores";

  //definición de propiedades de clase
  tipo = "portátil";
  teclado = "qwerty";

  //definición del constructor
  constructor(marca, ram, almacenamiento) {
    this.marca = marca;
    this.ram = ram;
    this.almacenamiento = almacenamiento;
  }

  //definición de métodos estáticos
  static definicion() {
    console.log(
      "Los ordenadores son máquinas automatizadas que permiten el tratamiento de información."
    );
  }

  //definición de métodos de instancia, en el que a cada instancia creada y nueva se le aplicara al this el debido valor nuevo otorgado
  //y SIN LA PALABRA CLAVE "static"
  fichaProducto() {
    console.log(
      "Marca: " +
        this.marca +
        "\n" +
        "Memoria viva: " +
        this.ram +
        "\n" +
        "Almacenamiento: " +
        this.almacenamiento
    );
  }
}

let miOrdi = new Ordenador("Apple", 8, 512);

let miOrdi2 = new Ordenador("HP", 16, 256);

miOrdi.fichaProducto();

miOrdi2.fichaProducto();
```

---

<br>

Podemos ver que funciona, **hemos definido nuestro método de instancia `fichaProducto`.**

**Ahora, definamos un método que permita calcular un precio de nuestro ordenador.**

---

<br>

**Este método realizará el siguiente cálculo:**

$precio=ram\times100+almacenamiento\times2$

**Es un ejemplo totalmente ficticio.**

```javascript
class Ordenador {
  //definición de propiedades estáticas
  static OBJETOS_ADMITIDOS = "ordenadores";

  //definición de propiedades de clase
  tipo = "portátil";
  teclado = "qwerty";

  //definición del constructor
  constructor(marca, ram, almacenamiento) {
    this.marca = marca;
    this.ram = ram;
    this.almacenamiento = almacenamiento;
  }

  //definición de métodos estáticos
  static definicion() {
    console.log(
      "Los ordenadores son máquinas automatizadas que permiten el tratamiento de información."
    );
  }

  //definición de métodos de instancia
  fichaProducto() {
    console.log(
      "Marca: " +
        this.marca +
        "\n" +
        "Memoria viva: " +
        this.ram +
        "\n" +
        "Almacenamiento: " +
        this.almacenamiento
    );
  }

  //El método que realizara el calculo de un ordenador
  calcPrecio() {
    return this.ram * 100 + this.almacenamiento * 2;
  }
}

let miOrdi = new Ordenador("Apple", 8, 512);
let miOrdi2 = new Ordenador("HP", 16, 256);

Ordenador.definicion();

console.log(miOrdi.calcPrecio());

console.log(miOrdi2.calcPrecio());
```

---

<br>

**Luego definamos un `método` que, por ejemplo, permita "aumentar" la ram de un ordenador:**

```javascript
class Ordenador {
  //definición de propiedades estáticas
  static OBJETOS_ADMITIDOS = "ordenadores";

  //definición de propiedades de clase
  tipo = "portátil";
  teclado = "qwerty";

  //definición del constructor
  constructor(marca, ram, almacenamiento) {
    this.marca = marca;
    this.ram = ram;
    this.almacenamiento = almacenamiento;
  }

  //definición de métodos estáticos
  static definicion() {
    console.log(
      "Los ordenadores son máquinas automatizadas que permiten el tratamiento de información."
    );
  }

  //definición de métodos de instancia
  fichaProducto() {
    console.log(
      "Marca: " +
        this.marca +
        "\n" +
        "Memoria viva: " +
        this.ram +
        "\n" +
        "Almacenamiento: " +
        this.almacenamiento
    );
  }

  calcPrecio() {
    return this.ram * 100 + this.almacenamiento * 2;
  }

  addRam(valor) {
    return (this.ram += valor);
  }
}

let miOrdi = new Ordenador("Apple", 8, 512);
let miOrdi2 = new Ordenador("HP", 16, 256);

Ordenador.definicion();

//Aumentacion de ram que veremeos en consola
console.log(miOrdi.addRam(8));
```

---

<br>

Listo, podemos probar el código y llamar a los `métodos` para ver que funcionan bien.

**Acabamos de ver prácticamente cómo definir métodos personalizados en una clase, para que todas las instancias los hereden.**

---

---

<br>

<br>

---

## **Definición de `métodos` en una `clase` y `Getters` y `Setters`**

---

<br>

- **[Clases y Herencia, ver video de jonmircha YouTube](https://youtu.be/C86JvqET61A?si=e_9ZGeQ1nXNOpKPI)**

  y

- **[Métodos estáticos, getters y setters, ver video de jonmircha YouTube](https://youtu.be/TEzu31q9MVA?si=YfK1_d-V80HMzSdp)**

---

<br>

**Ahora que sabemos cómo definir métodos en una clase, hablemos de métodos fundamentales, los `getters` y los `setters`, y veamos cómo los definimos a través de un video.**

- **[ver video de studi en su pagina oficial, podremos traducir la misma pagina al español](https://ressources.studi.fr/contenus/opale/860918ab6f60ec347690be7419344212b133caed/co/definir-methodes-class.html)**

---

<br>

**[Perfecta explicacion para get y set aqui que es identico el ejemplo al ejercicio3.md](https://youtu.be/tTXKLpztaSA?si=Pi1k6n2f3q596M4I)**

---

---
