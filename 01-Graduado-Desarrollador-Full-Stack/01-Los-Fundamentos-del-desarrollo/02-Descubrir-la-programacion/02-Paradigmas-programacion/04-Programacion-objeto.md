# **Programación Objeto**

<br>

## **_Objetivos:_**

- **Familiarizarse con la programación objeto**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

A veces es más interesante, eficiente e intuitivo representar conceptos, ideas u objetos del mundo físico en un programa.

<br>

---

---

<br>
<br>

---

## **Programación orientada objeto**

---

<br>

La **"programación imperativa separa el comportamiento de un programa de su estado"**, y **"la programación declarativa no presenta estado"**.

Sin embargo, **tenemos un tercer paradigma de programación** que **nos permite mezclar el comportamiento de un programa con su/sus estado(s)**.

**En otras palabras, es posible crear bloques que representan una entidad muy específica y que encapsulan su propio estado y comportamiento.**

<br>

---

---
---

<br>
<br>

---

### **Ejemplo: COCHE**

---

<br>

**Un ejemplo típico es el coche.**

**Un desarrollador necesita incorporar la idea de un coche en su programa, ya sea para un videojuego de carreras, una simulación de tráfico vial u otro programa que requiera el concepto de coche.**

**Utilizará un lenguaje orientado a objetos para crear una clase "Coche"; esta clase permitirá almacenar dos cosas:**

<br>

- **El estado de un coche:**

    - **El desarrollador almacena información sobre un coche en su estado como:**
    
      - su color
      - marca
      
        o
        
      - potencia.

      <br>
    
    - **El estado de un objeto se compone de:**
    
      - variables 
        
        y 
        
      - puede cambiar con el tiempo.

      <br>
    
    - Estas variables se llaman atributos.
    
      - Un objeto también puede contener otros objetos.

      <br>
    
    - **En este caso, podría haber un array (lista, o tabla(array) ) de cuatro variables que contengan objetos:**
    
      - "Rueda".

      - "puerta".

      - "Luces"

      - "transmisión"

      - "volante"

      - "Motor"

    ---
    <br>

- **El comportamiento:**

    - **Es un conjunto de funciones (llamadas métodos) específicas para todos los coches, que permite saber lo que un objeto puede hacer.**
    
    - **En el caso de la clase "Coche", podría haber un método para arrancar, acelerar o detener.**

---

**Los métodos tienen acceso al estado del objeto y pueden interactuar con él.**

<br>

---

---

<br>

<br>

---

### **Clase y Objeto**

---

<br>

En programación orientada a objetos, **una clase representa la estructura de un objeto**.

**En la estructura se establece:**

- cómo debería lucir el estado

    y
    
- se implementan los métodos propios del **`objeto (coche)`**.

---

<br>

**Una clase de coche, tendría los valores mas generalizados de un objeto, en este caso, coche tendría valores generalizados.**

**Por ejemplo, la clase "Coche" nos dice que un coche tiene:**

- un color

- una marca

- un número de caballos




**_y "nos indica el comportamiento de un coche a través de sus métodos"._**

---

<br>

**Un objeto representa una instancia de la clase (una copia de la plantilla clase (coche)), un elemento específico.**

**Un objeto (la instancia coche) "Coche" podría ser un coche:**

- rojo

**de la marca:**

- Renault

**con una potencia de:**

- 200 caballos

---

<br>

**Cuando se llama al método `"acelerar"` de este objeto en particular, tendrá acceso al estado del objeto y podrá modificar una variable de aceleración.**

<br>

---

**Ejemplo: JAVA**

```java
public class Car {
    public String color;
    public String marca;
    private int Caballos;
    public int aceleracion;
    public bool started;

    public car(String color, String marca, int Caballos) {
        this.color = color;
        this.marca = marca;
        this.Caballos = Caballos;
        this.started = false;
        this.aceleracion = 0;
    }
    public getCaballos() {
        return this.Caballos;
    }
    public start() {
        this.started = true;
    }
    public accelerate() {
        this.aceleracion = this.aceleracion + 10;
    }
```

<br>

---

**El primer método `"public car"` corresponde al constructor de la clase, es la función que se llama cuando se instancia un objeto.**

<br>

---

**Ejemplo: JAVA**

```java
public static void main(String[] args) {
    Car myCar = new Car("red", "Renault", 5);
    System.out.println("La marca de mi coche es" + myCar.marca);
    System.our.println("Tiene" + myCar.getCaballos() + "caballos");
}
```

<br>

---

---

<br>

<br>

---

## **Encapsulacion**

---

<br>

**En el ejemplo anterior se observa que los atributos pueden haber sido marcados como públicos o privados.**

**Esta `"es una característica de Java"` que permite incorporar un concepto fundamental de la programación orientada a objetos: la encapsulacion.**

**La encapsulación es la idea de que ciertos elementos de un objeto solo pueden ser accedidos por el objeto mismo.**

En el ejemplo anterior, **el atributo `"Caballos"` está marcado como `privado` y, por lo tanto, desde fuera del objeto no se puede acceder a él.** Es por eso que también existe un método **"getCaballos" (que es público) que devuelve la variable `"Caballos"`.**

<br>

---

**Ejemplo: Typescript**

```TS
class Car {
  public color: string;
  public brand: string;
  private horsepower: number;
  public acceleration: number;
  public started: boolean;
  public constructor(color: string, brand: string, horsepower: number) {
    this.color = color;
    this.brand = brand;
    this.horsepower = horsepower;
    this.acceleration = 0;
    this.started = false;
  }
  public getHorsepower() {
    return this.horsepower;
  }
  public start() {
    this.started = true;
  }
  public accelerate() {
    this.acceleration += 10;
  }
  public stop() {
    this.acceleration = 0;
    this.started = false;
  }
}
```

---

```TS
let myCar = new Car("red", "Renault", 5);
console.log(`La marque de ma voiture est ${myCar.brand}`);
console.log(`Elle a ${myCar.getHorsepower()} chevaux`);
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

- **La programación orientada a objetos permite combinar el estado y el comportamiento de un objeto.**

- **Un objeto representa un concepto, una idea o un elemento del mundo físico.**

- **La clase corresponde a la estructura general del objeto y la definición de sus métodos, el objeto corresponde a una instancia de la clase.**

<br>

---

---
