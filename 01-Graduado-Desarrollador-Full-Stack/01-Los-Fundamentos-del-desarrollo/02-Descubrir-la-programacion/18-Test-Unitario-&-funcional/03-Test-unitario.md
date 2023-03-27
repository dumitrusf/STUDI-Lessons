# **Test Unitario**

<br>

## **_Objetivo_**

- **Aprender a escribir una prueba unitaria simple.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Un enfoque inicial de las pruebas es el de las pruebas unitarias.

Se trata de probar cada componente, cada función de nuestro programa de manera aislada.

<br>

---

<br>

**Imagina un programa de gestión de una asociación que se encarga de diversas funcionalidades:** 

- gestionar las cuotas

- la contabilidad

- las donaciones realizadas

- etc.

---

<br>

El programa consta de muchas funciones, como una que calcula una deducción fiscal sobre una donación.

La idea de la prueba unitaria es escribir una prueba que se encargue de ejecutar esta función con varios parámetros diferentes y asegurarse de que el resultado siempre sea el esperado.

<br>

---

### **Recordatorio: Test Unitario**

---

<br>

El objetivo de una prueba unitaria es verificar el correcto funcionamiento de un componente de un programa, generalmente una función.

La prueba unitaria intentará ser exhaustiva al verificar que cada línea de código sea válida y no genere errores.

<br>

---

<br>

**Por ejemplo, si una función contiene una condición, se necesitarán al menos dos pruebas:**

- una en la que **la condición sea verdadera**

    y
    
- otra en la que **la condición sea falsa**.

<br>

---

#### **Fundamental: Test unitario**

---

<br>

**Llamaremos a una función de prueba unitaria aquella que llama a otra función múltiples veces para probar su validez con diferentes parámetros.**

<br>

---

---

<br>

<br>

---

## **Cobertura de código**

---

<br>

- **Una línea de código se considera cubierta por una prueba si se ejecuta durante la prueba.**

- **Para lograr una cobertura completa del código, es necesario probar la función con diferentes valores que verifiquen todas las condiciones.**

- **Las condiciones deben ser cubiertas "ya que a menudo son la causa de errores".**

---

<br>

**Los frameworks de pruebas permiten calcular fácilmente la cobertura de código.**

<br>

---

### **Ejemplo: Tests de los valores retornados**

---

<br>

**Aquí tienes un ejemplo de prueba en una función simple.**

**Si el resultado esperado no es idéntico al valor retornado por la función, la prueba fallará y mostrará un mensaje de error.**

<br>

---

**Ejemplo JavaScript: prueba unitariamente la función basket_price**

```javascript
/** JavaScript: prueba unitariamente la función basketPrice. */
function basketPrice(listItemPrices) {
  let res = 0;
  for (let i = 0; i < listItemPrices.length; i++) {
    res = res + listItemPrices[i];
  }
  return res;
}

function testBasketPrice() {
  if (basketPrice([2, 5, 29]) !== 36) {
    console.log('Test fallido para [2, 5, 29]');
    return false;
  }
  if (basketPrice([]) !== 0) {
    console.log('Test fallido para []');
    return false;
  }
  console.log('Prueba exitosa para basketPrice');
  return true;
}

testBasketPrice();
```

---

<br>

**Ejemplo Python: prueba unitariamente la función basket_price**

```python
def basket_price(list_item_prices):
  res = 0
  for i in range(len(list_item_prices)):
    res = res + list_item_prices[i]
  return res

def test_basket_price():
  if basket_price([2, 5, 29]) != 36:
    print("Test fallido para [2, 5, 29]")
    return False
  if basket_price([]) != 0:
    print("Test fallido para []")
    return False
  print("Prueba exitosa para basket_price")
  return True

test_basket_price()
```

---

<br>

**Si se introduce un error durante una modificación en el código, por ejemplo:**

```javascript
for (let i = 0; i < listItemPrices.length - 1; i++)
```

---

<br>

**La prueba fallará y mostrará:**

```javascript
Test fallido para [2, 5, 29]
```

---

<br>

**Así, el error es detectado y corregible antes de que los usuarios experimenten el error directamente.**

<br>

---

---

<br>

<br>

---

## **Utilizando la sintaxis assert** 

---

<br>

**Para simplificar las pruebas, es posible utilizar un nuevo elemento de sintaxis:**

- la afirmación `(assertion)`.

---

<br>

**Una afirmación no hará nada en particular si la expresión que le sigue es verdadera, "pero generará un error (AssertionError para ser precisos) si la expresión es falsa".**

<br>

---

**Ejemplo JavaScript: prueba unitariamente la función basketPrice utilizando `assert`.**

```js
function basketPrice(listItemPrices) {
  let res = 0;
  for (let i = 0; i < listItemPrices.length; i++) {
    res = res + listItemPrices[i];
  }
  return res;
}

function testBasketPrice() {
  const assert = require('assert');
  assert(basketPrice([2, 5, 29]) === 36);
  assert(basketPrice([]) === 0);
  console.log('Prueba exitosa para basketPrice');
  return true;
}

testBasketPrice();

```

---

<br>

**Ejemplo Python: prueba unitariamente la función basket_price utilizando `assert`.**

```Python
def basket_price(list_item_prices):
  res = 0
  for i in range(len(list_item_prices)):
    res = res + list_item_prices[i]
  return res

def test_basket_price():
  assert basket_price([2, 5, 29]) == 36
  assert basket_price([]) == 0
  print("Prueba exitosa para basket_price")
  return True

test_basket_price()

```

---

**Usar la afirmación de esta manera permite simplificar las pruebas y hacer que los errores sean más fáciles de identificar.**

<br>

---

**Aquí tienes un programa que prueba una función que devuelve una lista de precios con IVA a partir de los precios sin IVA**

**Ejemplo JavaScript: prueba unitariamente la función `htToTtc`**

```javascript
function htToTtc(htPriceList) {
  const ttcPriceList = [];
  for (let i = 0; i < htPriceList.length; i++) {
    const ttcPrice = htPriceList[i] * 1.2;
    ttcPriceList.push(ttcPrice);
  }
  return ttcPriceList;
}

function testHtToTtc() {
  if (htToTtc([2, 5, 10]).toString() !== [2.4, 6, 12].toString()) {
    console.log('Prueba htToTtc fallida para [2, 5, 10]');
    return false;
  }
  if (htToTtc([]).toString() !== [].toString()) {
    // También estamos probando valores extremos
    console.log('Prueba htToTtc fallida para []');
    return false;
  }
  console.log('Prueba exitosa');
  return true;
}

testHtToTtc();
```

---

<br>

**Ejemplo Python: prueba unitariamente la `función HT_to_TTC`**

```python
"""Python:  """
def HT_to_TTC(ht_price_list):
  ttc_price_list = []
  for i in range(len(ht_price_list)):
    ttc_price = ht_price_list[i] * 1.2
    ttc_price_list.append(ttc_price)
  return ttc_price_list

def test_HT_to_TTC():
  if HT_to_TTC([2, 5, 10]) != [2.4, 6, 12]:
    print("Prueba HT_to_TTC fallida para [2, 5, 10]")
    return False
  if HT_to_TTC([]) != []:  # También estamos probando valores extremos
    print("Prueba HT_to_TTC fallida para []")
    return False
  print("Prueba exitosa")
  return True

test_HT_to_TTC()
```

---

**Esto te muestra cómo puedes usar pruebas unitarias para verificar si la función `htToTtc` (o `HT_to_TTC` en Python) produce los resultados esperados.**

**Si alguna prueba falla, se mostrará un mensaje de error indicando qué prueba falló y qué valor se esperaba.**

<br>

---

---

<br>

<br>

---

### **Complemento: Definición de Variables Falsas (`Mocks`)**

---

<br>

En el desarrollo web, los programadores crean funciones que realizan solicitudes web o acceden a bases de datos. 

Sin embargo, durante las pruebas, no es viable realizar estas llamadas reales ya que no deseamos interrogar los sistemas en producción.

Para solucionar este inconveniente, se emplean variables falsas, conocidas como "mocks", que sustituyen ciertas variables por valores predefinidos.

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Un test unitario verifica automáticamente el comportamiento de una función utilizando valores simples y valores extremos.**

- **Un buen test unitario debe contemplar todos los posibles casos de uso de la función que está siendo probada.**

<br>

---

---