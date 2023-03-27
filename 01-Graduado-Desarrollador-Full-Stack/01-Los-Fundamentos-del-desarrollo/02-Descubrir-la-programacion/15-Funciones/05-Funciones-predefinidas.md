# **Funciones Pre-definidas**

<br>

## **_Objetivo_**

- **Descubrir las funciones predefinidas.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Para facilitar la vida del desarrollador, los lenguajes de programación incorporan funciones predefinidas que responden a usos muy comunes.

De esta manera, los desarrolladores no tienen que re-implementar constantemente estas funciones básicas.

Esto es especialmente cierto para funciones de manipulación de arrays, como la ordenación.

<br>

---

---

<br>

<br>

---

## **Funciones predefinidas por los lenguajes**

---

<br>

Una función predefinida es una función disponible nativamente en un lenguaje de programación.

Un desarrollador puede usar esta función sin importar bibliotecas de funciones adicionales.

---

<br>

**Por lo general, las funciones predefinidas abordan casos de uso muy simples, como:**

- impresión

- ordenación de listas

- etc.

<br>

---

---

<br>

<br>

---

### **Recordatorio: Las funciones predefinidas más utilizadas**

---

<br>

**Aquí tienes tres de las funciones predefinidas más utilizadas por los desarrolladores:**

**Funciones de conversión (casting):**

- Estas funciones cambian el tipo de una variable.

   - Por ejemplo, **para transformar una variable en un número en JavaScript se usa `Number()`** y **en Python se utiliza `float()`.**
   
   - El casting es ampliamente utilizado por los desarrolladores cuando necesitan transformar la entrada del usuario.
   
   - Dado que la entrada del usuario siempre es una cadena de caracteres, si deseamos obtener un precio, necesitamos hacer casting de la entrada del usuario para convertirla en un número.

---

<br>

**Funciones de impresión:**

- **Estas funciones muestran información en la consola.**

    - En JavaScript, puedes usar `console.log()`
    
        y
        
    - En Python, `print()`.

---

<br>

**Función de ordenación:**

- esta función ordena una lista dada.

    - **Tanto en Python como en JavaScript, existe la función `sort()`.**

<br>

---

### **Ejemplo: Utilización de funciones predefinidas**

---

<br>

**Aquí tienes un ejemplo en el que una lista de cadenas se transforma en una lista de enteros ordenada:**

<br>

---

**Ejemplo JavaScript: Utilización de funciones predefinidas**

```js
const priceList = ['12.4', '17.1', '5.0']
const newList = []
for (let i = 0; i < priceList.length; i++) {
  newList.push(Number(priceList[i]))
}
newList.sort((a, b) => a - b) // Ordena numéricamente en orden ascendente
console.log(newList)
```

---

<br>

**Ejemplo Python: Utilización de funciones predefinidas**

```js
price_list = ["12.4", "17.1", "5.0"]
new_list = []
for i in range(len(price_list)):
  new_list.append(float(price_list[i]))
new_list.sort()
print(new_list)
```

<br>

---

### **Complemento: Descubrir las funciones predefinidas**

---

<br>

**Para explorar todas las funciones predefinidas, es necesario consultar la documentación:**

- **En JavaScript:**

    - **[Referencia a objetos globales en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects)**

---

<br>

- **En Python:**

    - **[Funciones integradas en Python](https://docs.python.org/fr/3.8/library/functions.html)**

<br>

---

### **Atención!: No redefinir una función predefinida**

---

<br>

Es importante tener cuidado de no sobrescribir una función predefinida al nombrar una de tus propias funciones con el mismo nombre que una función predefinida.

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Existen funciones predefinidas en los lenguajes de programación que buscan simplificar la vida del desarrollador.**

- **Estas funciones ofrecen una optimización máxima para tareas muy simples.**

<br>

---

---