# **Definición e instanciación de una clase**

<br>

<br>

---

## **Clase**

---

<br>

**Una clase es como un plano que permite construir tantos objetos como sea necesario.**

Por ejemplo, **una clase puede ser como un plano de una casa.**

**Si aplicamos este plano varias veces, podemos construir tantas casas como necesitemos con él.**

<br>

---

<br>

**ES EXACTAMENTE EL MISMO PRINCIPIO QUE PARA UNA CLASE**

**Una clase** es un espacio de código que **define todas las propiedades de un tipo en concreto, y** por lo tanto **de los objetos creados a partir de ella.**

<br>

---

### **Definir una clase**

---

<br>

**¿cómo definir una clase?**

**La convención quiere que una clase empiece siempre por una mayúscula.**

**Para definir una clase, usamos `(la nomenclatura de PascalCase)` esta sintaxis:**

<br>

---

```javascript
class NombreDeLaClase {
  //definición de las propiedades
}
```

<br>

---

Para entenderlo mejor, a lo largo de este curso **vamos a definir una `clase` que permita construir objetos de tipo `Ordenador`**

**Nuestra `clase` va a definir las propiedades de los ordenadores.**

**Así que aquí está nuestra clase:**

```javascript
class Ordenador {
  //definición de las propiedades
}
```

---

<br>

Esta clase nos va a permitir definir el tipo `Ordenador`.

---

---

<br>

<br>

---

## **Diferentes tipos de propiedades**

---

<br>

**Como sabemos, existen varios tipos de propiedades.**

**Las propiedades `estáticas`:**

- son propiedades que **se llaman directamente a través del nombre de la `clase`**

  y
  
- **no a través de una instancia.**

---

<br>

**Las propiedades de clase son:**

- **propiedades** (valores definidos) **definidas en la `clase`,** pero **fuera del bloque `constructor`**, **y compartidas por todas las instancias de la clase.**

- **Por lo tanto**, estas propiedades **son accesibles a través de las instancias de la clase, y POR DEFECTO, están definidas sobre EL MISMO VALOR, SEA CUAL SEA LA INSTANCIA.**

---

<br>

**Las propiedades de instancia son:**

- **propiedades definidas dentro del constructor de la clase, y que TENDRÁN UN VALOR PROPIO PARA CADA INSTANCIA ```(para cada instancia dependiendo lo que argumentemos, el valor diferirá)```.**

- **El valor de estas propiedades podrá pasarse como argumento del constructor al llamarlo.**

<br>

---

### **Definir propiedades estáticas**

---

<br>

**Para crear propiedades estáticas, podemos simplemente definirlas con la palabra clave `static` en nuestra clase.**

<br>

---

**Veámoslo directamente en un ejemplo:**

```javascript
class Ordenador {

  //definición de propiedades estáticas
  static OBJETOS_ADMITIDOS = "ordenadores";
}
```

**Definimos una `propiedad estática`, asociada a la clase `Ordenador`.**

<br>

---

**La escribimos en mayúscula `(y en UPPER_SNAKE_CASE)` para ser más convencional, porque es una propiedad `constante`.**

**Para acceder a su valor, podemos proceder así:**

```javascript
class Ordenador {

  //definición de propiedades estáticas
  static OBJETOS_ADMITIDOS = "ordenadores";
}

//da en consola: ordenadores
console.log(Ordenador.OBJETOS_ADMITIDOS);
```

---

<br>

Podemos ver que **accedemos a la `propiedad estática` "a través del nombre" de la `clase`**, no hay necesidad de instanciarla.

Veamos ahora cómo crear propiedades de clase.

<br>

---

### **Definir propiedades de clase**

---

<br>

Para definir una propiedad de clase, **hay que definir simplemente una propiedad, sobre un valor dentro de la clase**, y FUERA DE LA DEFINICIÓN del `constructor **(DENTRO DEL CONSTRUCTOR NO)**.

Por ahora, no hemos definido ningún constructor, así que no hay problema, **podemos definirlas donde queramos en la clase.**

<br>

---

**Creemos por ejemplo dos propiedades de `clase`:**

```javascript
class Ordenador {

  //definición de propiedades estáticas
  static OBJETOS_ADMITIDOS = "ordenadores";

  //definición de propiedades de clase
  tipo = "portátil";
  teclado = "qwerty";
}
```

---

<br>

En este ejemplo, **todas las instancias de `Ordenador`** (derivados de la clase Ordenador) **heredarán las propiedades `tipo` y `teclado`.**

**Esto significa que** por defecto, **todos los ordenadores tendrán:**

- **una propiedad `tipo` definida sobre:**

  - "portátil"

  y
  
- **una propiedad `teclado` definida sobre:**

  - "qwerty".

---

<br>

Estas son **`propiedades de clase`**

- **Serán accesibles a través de las instancias de la clase `Ordenador`**

  y

- NO A TRAVÉS DE LA CLASE MISMA.

---

---

<br>

<br>

---

## **Constructor**

---

<br>

**El `constructor` nos va a permitir** instanciar nuestra clase, es decir, **construir objetos reales a partir de nuestra `clase`**

**El constructor es un método** (un tipo de función), **que** además **va a permitir definir** propiedades (valores) de instancia, es decir, **propiedades cuyo valor será específico para cada instancia.**

**El `valor` de estas propiedades podrá pasarse como `argumento`** del constructor al llamarlo.

**Si no definimos ningún constructor en la `clase`, "UN CONSTRUCTOR POR DEFECTO SERA CREADO" y llamado por JavaScript, que no pasará ningún parámetro.**

<br>

---

### **Definir un constructor y propiedades de instancia**

---

<br>

- **Para definir un constructor, hay que usar la palabra clave `constructor`**

  e
  
- **inicializar los parámetros [ `constructor(juan, moreno, developper)` ] que almacenarán los valores que tomarán las propiedades de instancia.**

```javascript
class Ordenador {

  //declaración de las propiedades que serán definidas como propiedades de instancia en el constructor (opcional pero buena práctica)
  marca;
  ram;
  almacenamiento;

  //definición de propiedades estáticas
  static OBJETOS_ADMITIDOS = "ordenadores";

  //definición de propiedades de clase
  tipo = "portátil";
  teclado = "qwerty";

  //definición del constructor, inicializando con parametros
  constructor(marca, ram, almacenamiento) {
    this.marca = marca;
    this.ram = ram;
    this.almacenamiento = almacenamiento;
  }
}
```

---

<br>

**Definimos nuestro `constructor` e inicializamos `3 parámetros`:** 

- `marca`

- `ram`

  y
  
- `almacenamiento`.

---

<br>

Luego **`definimos 3 propiedades` de instancia usando la palabra clave `"this"`,** que **permite hacer referencia a la instancia y NO A LA CLASE.**

---

**Definimos:**

- **la propiedad de instancia `this.marca`:**

  - **sobre** el valor del parámetro **`marca`**

  ---

  <br>
  
- **la propiedad de instancia `this.ram`:**

  - **sobre** el valor del parámetro **`ram`**, y finalmente

  ---
  
  <br>
  
- **la propiedad de instancia `this.almacenamiento`:**

  - **sobre** el valor del parámetro **`almacenamiento`**

---

---

<br>

<br>

---

## **Instanciar la clase**

---

<br>

**Ahora podemos `instanciar` nuestra `clase` haciendo llamada al `"constructor"`**

Para ello, **vamos a pasar como `argumento` los valores correspondientes a:**

- la `marca`

- la `ram`

  y
  
- el `almacenamiento`

<br>

---

**Para llamar al constructor, debemos usar la palabra clave `"new"` seguida de la llamada al constructor.**

```javascript
class Ordenador {

  //declaración de las propiedades que serán definidas como propiedades de instancia en el constructor (opcional pero buena práctica)
  marca;
  ram;
  almacenamiento;

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
}


// En este ejemplo, instanciamos 2 veces `Ordenador`
let miOrdi = new Ordenador("Apple", 8, 512);
let miOrdi2 = new Ordenador("HP", 16, 256);
// definimos los argumentos que serán los valores de cada atributo de instancia

```

---

<br>

**Podemos ver que cada ordenador accederá a las propiedades de clase, y tendrá propiedades de instancia definidas sobre valores propios a cada una.**

<br>

---

**De hecho, podemos mostrar las propiedades de clase y de instancia de cada objeto:**

```javascript
class Ordenador {

  //declaración de las propiedades que serán definidas como propiedades de instancia en el constructor 
  marca;
  ram;
  almacenamiento;
  // 👆 (opcional pero buena práctica)



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
}

let miOrdi = new Ordenador("Apple", 8, 512);
let miOrdi2 = new Ordenador("HP", 16, 256);


//Apple
console.log(miOrdi.marca); 


//HP
console.log(miOrdi2.marca); 


//"portátil"
console.log(miOrdi.tipo); 


//"portátil"
console.log(miOrdi2.tipo); 
```

---

<br>

- Hemos definido las propiedades de nuestros objetos gracias a la clase `Ordenador`.

---

<br>

- Las clases permiten definir un tipo, en este caso, es el tipo `Ordenador` el que se define.

---

<br>

- Para recordar, cada tipo de objetos que definimos es un subtipo del tipo "raíz" `Object`.

  - Por lo tanto, `Ordenador` es un subtipo de `Object`.

---

---