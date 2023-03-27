# **Definiciones**

<br>

## **_Objetivo_**

- **Comprender qué es una prueba automatizada.**

- **Conocer los dos tipos principales de pruebas.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

La noción de pruebas a menudo es subestimada por los desarrolladores.

Se involucran en proyectos que tienen la intención de crecer y descuidan el valor que representan las pruebas para mantener su desarrollo.

Para entender su necesidad, primero es importante comprender qué son estas pruebas.

<br>

---

---

<br>

<br>

---

## **Test automatizado**

---

<br>

**Una prueba automatizada es:**

- **un programa diseñado para probar otro programa.**

---

<br>

Para llevar a cabo estas pruebas, comparan el valor devuelto por el programa bajo prueba con un valor previsto proporcionado al escribir la prueba.

---

<br>

**Si los dos valores no son iguales:**

- la prueba fallará.

<br>

---

### **Observación:**

---

<br>

**Existen muchos tipos de pruebas:**

- unitarias

- funcionales

- de integridad

- de integración

- entre otras.

---

<br>

**Nos centraremos en los dos tipos más comunes:**

- pruebas unitarias

    y
    
- pruebas funcionales

<br>

---

---

<br>

<br>

---

## **Mantenimiento del código**

---

<br>

Estas pruebas se utilizan para mantener el código.

Cuando un desarrollador crea o modifica una función, pueden surgir efectos secundarios no deseados.

Un efecto secundario es un impacto indirecto e imprevisto en el funcionamiento esperado de una parte del código.

Por efecto cascada, el funcionamiento completo del programa podría verse comprometido.

<br>

---

<br>

A medida que un proyecto crece, tiene tantas características que ya no es posible probarlas manualmente ni garantizar que los cambios no provoquen efectos secundarios.

Las pruebas automatizadas se vuelven estratégicas para verificar la integridad del proyecto en cada modificación importante.

<br>

---

---

<br>

<br>

---

## **Regresión**

---

<br>

**La introducción de un error en una característica existente durante una actualización se llama regresión:**

- las pruebas también sirven para evitar las regresiones.

<br>

---

---

<br>

<br>

---

## **Test unitario** 

---

<br>

**El objetivo de una prueba unitaria es verificar el correcto funcionamiento de un "componente" de un programa, "generalmente una función".**

<br>

---

<br>

La prueba unitaria intentará ser exhaustiva al probar todos los escenarios posibles para una función.

<br>

---

**Por ejemplo, si una función contiene una condición, se necesitarán al menos dos pruebas:**

- una en la que la condición sea verdadera

    y
    
- otra en la que la condición sea falsa.

---

<br>

**Esta exhaustividad también permite verificar que cada parte del código sea útil y alcanzable en escenarios realistas.**

<br>

---

---

<br>

<br>

---

## **Test funcional**

---

<br>

El objetivo de una prueba funcional es verificar el correcto funcionamiento de una característica completa.

<br>

---

<br>

La prueba se realizará en una caja negra, es decir, sin acceso a los detalles del código.

<br>

---

<br>

Por lo tanto, a diferencia de **la prueba unitaria que examina un componente de código aislado**.

**la prueba funcional examina el comportamiento de un programa completo.**

**Es una prueba más global que no será tan exhaustiva como la prueba unitaria, pero validará que los componentes del programa estén ensamblados correctamente.**

<br>

---

### **Ejemplo: Comprender la diferencia entre tests funcionales y tests unitarios**

---

<br>

Para entender la diferencia entre las pruebas unitarias y las pruebas funcionales, tomemos un ejemplo simple: un botón de compra en un sitio web de comercio electrónico. Cuando se hace clic en el botón Comprar, se envía un mensaje al servidor para indicarle que compre el producto. El servidor realiza la operación y devuelve un mensaje de éxito o error. Aquí están las diferentes pruebas en este caso:

<br>

---

**Prueba unitaria:**

```
Esta prueba consistiría en verificar que hacer clic en el botón realmente resulta en el envío de un mensaje al servidor.
```

<br>

---

**Prueba funcional:**

```
Esta prueba consistiría en verificar toda la cadena, probando la naturaleza de la respuesta del servidor después de hacer clic en el botón.
```

---

<br>

**A menudo, las pruebas unitarias se desarrollan en primer lugar.**

**La validación de las pruebas unitarias generalmente se requiere antes de realizar las pruebas funcionales, ya que las funcionalidades globales se basan en los componentes del código.**

<br>

---

---

<br>

<br>

---

## **Cuándo desarrollar un Test?**

---

<br>

**Se recomienda desarrollar pruebas cada vez que se entrega una nueva funcionalidad.**

<br>

---

<br>

**Estas pruebas servirán para, por un lado, ayudar a otro desarrollador a comprender cómo funciona la funcionalidad y, por otro lado, garantizar que la funcionalidad no se vea comprometida por futuras modificaciones.**

<br>

---

### **Complemento: Frameworks de tests**

---

<br>

**Existen frameworks de test que enmarcan y facilitan la escritura y el uso de los tests.**

**Aunque pueden complicar la escritura de programas, en el contexto de proyectos profesionales se recomienda encarecidamente utilizar estos `frameworks`.**

---

<br>

**En Python:**

- **Los dos frameworks principales son:**

    - `unittest`:

        - Es el framework histórico incluido por defecto en la instalación de Python.

    ---
    
    <br>
        
    - Y `pytest`:
    
        - Es más reciente y está ganando consenso en la comunidad de Python.

<br>

---

<br>

**En JavaScript, existen numerosos frameworks, pero los más populares son:**

- `Mocha`

    y
    
- `Jasmine`

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Los tests automatizados son herramientas muy poderosas para mantener el código y evitar regresiones.**

- **Los tests unitarios se centran en el funcionamiento de una parte aislada de código.**

- **Los tests funcionales se centran en las funcionalidades esperadas del programa en su conjunto.**

<br>

---

---