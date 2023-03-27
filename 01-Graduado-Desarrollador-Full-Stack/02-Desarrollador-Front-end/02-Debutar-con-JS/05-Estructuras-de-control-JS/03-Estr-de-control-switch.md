# **Estructura de control `switch`**

<br>
<br>

---

## **Introducción a `switch`**

---

<br>

En programación, la estructura de control switch existe en muchas tecnologías.

**Pero, ¿qué es exactamente?:**

- ¿La última consola de Nintendo? No

---

## Obviamente, el **término** `switch` se puede traducir literalmente como `"interruptor"` `o` el verbo `"cambiar"`.

<br>

**En programación**, la estructura switch, también conocida como `switch/case`, permite:

<br>

- **"Enumerar"** fácilmente `varios posibles valores` <u>devueltos por una expresión</u>

  y

- **Definir** las `instrucciones` <u>para cada caso</u>.

<br>

---

**Ejemplo**

```js
switch (/*expresión*/) {

  case /*valor 1*/:

    //instrucciones 1;

    break;

  case /*valor 2*/:

    //instrucciones 2;

    break;

  case /*valor 3*/:

    //instrucciones 3;

    break;

  case /*valor 4*/:

    //instrucciones 4;

    break;

}
```

---

<br>

## <u>Tomemos un ejemplo muy simple.</u>

<br>

Tenemos una variable llamada `"marca"` que representa la marca de un teléfono y queremos **generar un console.log específico para cada marca.**

<br>

---

**Aquí tienes un script que funciona:**

```js
(0)    const marca = "Huawei";

(1)    switch (marca) {
(2)    case "Apple":
(3)        console.log("Smartphone alta gama con sistema IOS");

(4)        break;

(5)    case "Samsung":
(6)        console.log("Smartphone alta gama con sistema Android");

(7)        break;

(8)    case "Xiaomi":
(9)        console.log("Smartphone económico con sistema Android");

(10)        break;

(11)    case "Huawei":
(12)        console.log("Smartphone económico con sistema Android");

(13)        break;
       }
```

---

<br>

El switch verificará desde el primer caso `(2 caso apple)` si la **variable** `"marca"` que esta entre paréntesis en la declaración de switch `(1)` es igual a la variable declarada en const <u>`"Huawei"`</u>.

<br>

**Si no es así** `((2) no lo es, es Apple)`, **<u>pasará al siguiente caso</u>, el caso No ((5) caso Samsung).**

<br>

Por lo tanto, <u>**es en el caso `Huawei ((11) caso Huawei)`**</u> _donde se ejecutará la instrucción_.

Es decir, **se ejecutará la instrucción console.log** ` "Teléfono inteligente económico con sistema Android". `

<br>

**` En resumen, el script se traduce a: `** 

- "Si la marca es 'Apple', mostrar 'Teléfono inteligente de alta gama con sistema iOS';

- "Si la marca es 'Samsung', mostrar 'Teléfono inteligente de alta gama con sistema Android', etc.".

<br>

---

**Es importante tener en cuenta que la presencia de la palabra clave "break" es esencial para evitar errores.**

---

<br>

El `"break"` **permite** finalizar el switch en curso para **pasar a las siguientes instrucciones** del script en caso de que coincidencia en un caso, asi pasara al siguiente.

En definitiva, <u>**una vez que un caso coincide con el valor de la variable "marca", se ejecutan las instrucciones del caso**</u> `y el "break" permite saltar al siguiente caso del switch para no procesar los casos que no estén el la variable switch.

<br>

Ahora, ¿qué sucede si se define la variable "marca" con una marca que no aparece en el switch?

<br>

Por ejemplo, "Motorola".

```
Bueno, simplemente no sucede nada.
```

<br>

---

### **IMPORTANTE**

---

<br>

Supongamos que deseamos que se ejecute una instrucción para cada nombre de marca que no esté definido como caso en el switch.

Para eso, debemos definir la cláusula "default".

👇

---
---

<br>

<br>

---

## **La cláusula `Default`**

---

<br>

La cláusula default permite indicar las **instrucciones que se ejecutarán "por defecto"**, es decir, `en el` caso de `que ningún caso que se encuentre en el switch coincida con el valor` indicado por la expresión de referencia <u>(entre paréntesis en la declaración del switch).</u>

<br>

Aunque es opcional, se recomienda encarecidamente utilizarlo en un switch.

<br>

---

**Para entenderlo mejor, apliquemos este concepto a nuestro ejemplo:**

```js
(0)    const marca = "Huawei";

(1)    switch (marca) {
(2)    case "Apple":
(3)        console.log("Smartphone alta gama con sistema IOS");
(4)        break;

(5)    case "Samsung":
(6)        console.log("Smartphone alta gama con sistema Android");
(7)        break;

(8)    case "Xiaomi":
(9)        console.log("Smartphone económico con sistema Android");
(10)        break;

(11)    case "Huawei":
(12)        console.log("Smartphone económico con sistema Android");
(13)        break;

        default:

            console.log("Marque non référencée");
            break;
       }
```

---

<br>

Podemos observar que al especificar la cláusula **` default `**, indicamos qué **instrucciones** ejecutará el switch en caso de que **ninguno de los casos coincida** **con** el valor de la `marca`.

---
---

<br>
<br>

---

## **Aplicar misma instrucción a varios casos**

---

<br>

**Podemos notar que nuestro switch podría ser mejorado.**

<br>

**De hecho, para las marcas "Xiaomi" y "Huawei", las instrucciones son exactamente las mismas.**

<br>

**Por lo tanto, no es necesario repetirlas dos veces. ¿Cómo podemos aplicar la misma instrucción a dos casos?**

---

<br>

Para aplicar una misma secuencia de instrucciones a varios casos, simplemente debemos especificar cada caso correspondiente uno tras otro, antes de escribir la secuencia de instrucciones a devolvernos, respetando la sintaxis.

<br>

---

**Para comprenderlo mejor, apliquemos esta noción a nuestro ejemplo:**

```js
(0)    const marca = "Huawei";

(1)    switch (marca) {
(2)    case "Apple":
(3)        console.log("Smartphone alta gama con sistema IOS");
(4)        break;

(5)    case "Samsung":
(6)        console.log("Smartphone alta gama con sistema Android");
(7)        break;

(8)    case "Xiaomi":
(11)   case "Huawei":
(12)        console.log("Smartphone económico con sistema Android");
(13)        break;

       default:

            console.log("Marque non référencée");
            break;
       }
```

---

<br>

**Podemos ver que funciona, las instrucciones ejecutadas serán las mismas para las marcas "Xiaomi" y "Huawei", que son las siguientes:**

```
TERMINAL:

    Smartphone económico con sistema Android    

```

---

<br>

ejecutar en el buen repertorio test.js con: node test.js en terminal asi testear nuestros códigos 

<br>

---
---

<br>
<br>

---

## **`Evitar SWITCH !`**

---

<br>

[Evitar switch ya que no compensa !, enlace a midudev YT](https://youtu.be/0NlsJuwFsrQ)

---
---