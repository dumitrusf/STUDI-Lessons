# **Operaciones en Arrays**

<br>

## **_Objetivo_**

- **Saber cómo usar las funciones para manipulación de arrays.**

- **Saber cómo encontrar un elemento "sin su índice".**

- **"Agregar/eliminar" elementos de un array.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Hemos aprendido cómo recorrer diferentes tipos de arrays,** pero hay otras operaciones interesantes para realizar.

De hecho, **los arrays no son estructuras fijas;**

- su tamaño

    y
    
- los elementos que los componen pueden cambiar con el tiempo.

---

<br>

**Se dice que los arrays son mutables.**

- Es posible ordenar un array

- buscar un elemento específico

    o
    
- agregar elementos a él.

<br>

**Para realizar estas operaciones, la mayoría de los lenguajes ofrecen funciones ya listas para usar, que vamos a estudiar.**

<br>

---

---

<br>

<br>

---

## **Ordenar un Array**

---

<br>

**En Python y JavaScript:**

- **La función `sort()`:**

    - realiza una clasificación por defecto del array **(ascendente)**.

---

<br>

- **La función `reverse()`:**

    - invierte el orden de los elementos.

<br>

---

### **Atención!:**

---

**En JavaScript, la función `sort()` ordena los números en orden "alfabético", no numérico: 11 está antes que 7 porque el primer carácter 1 viene antes que 7.**

<br>

---

**Ejemplo JavaScript:**

```javascript
/** JavaScript */
const names = ['Maria', 'Tarek', 'Anaïs', 'Benjamin']
const notes = [12, 7, 18, 14]
names.sort() // ['Anaïs', 'Benjamin', 'Maria', 'Tarek']
notes.sort() // [12, 14, 18, 7]
notes.reverse() // [7, 18, 14, 12]
console.log('Participants:', names)
console.log('Notes:', notes)
```

---

<br>

**Ejemplo Python:**

```python
names = ['Maria', 'Tarek', 'Anaïs', 'Benjamin']
notes = [12, 7, 18, 14]
# modifie les listes
names.sort() # ['Anaïs', 'Benjamin', 'Maria', 'Tarek']
notes.sort() # [7, 12, 14, 18]
notes.reverse() # [18, 14, 12, 7]
print('Participants:', names)
print('Notes:', notes)
```

<br>

---

---

<br>

<br>

---

## **Añadir y Quitar un elemento**

---

<br>

**En Python:**

- **`append()`:**

    - permite agregar un elemento al final del array 
    
        y
    
- **`pop()`:**

    - elimina el último elemento del array.

---

<br>

**En JavaScript:**

- **`push():`**

    - permite agregar un elemento al final del array 
    
        y
        
- **`pop()`:**

    - elimina el último elemento del array.

<br>

---

**Ejemplo JavaScript:**

```javascript
const travelPlan = ['Paris', 'Berlin', 'Osaka', 'Busan']
console.log('Escales prévues:', travelPlan)
travelPlan.push('Pekin') // ['Paris', 'Berlin', 'Osaka', 'Busan', 'Pekin']
console.log('Nouvelle destination:', travelPlan)
travelPlan.pop() // ['Paris', 'Berlin', 'Osaka', 'Busan']
console.log('Annulation:', travelPlan)
```

---

<br>

**Ejemplo Python:**

```python
travel_plan = ['Paris', 'Berlin', 'Osaka', 'Busan']
print('Escales prévues:', travel_plan)
travel_plan.append('Pekin') # ['Paris', 'Berlin', 'Osaka', 'Busan', 'Pekin']
print('Nouvelle destination:', travel_plan)
travel_plan.pop() # ['Paris', 'Berlin', 'Osaka', 'Busan']
print('Annulation:', travel_plan)
```

<br>

---

---

<br>

<br>

---

## **Búsqueda de un elemento**

---

<br>

**Se puede encontrar el índice de un elemento dado en un array.**

**En Python:**

- la función **`index()`:**

    - **devuelve el índice del primer elemento coincidente con la búsqueda.**

y 

**En JavaScript:**

- la función **`indexOf()`:** hace lo mismo **(devuelve el índice del primer elemento coincidente con la búsqueda)**

<br>

---

**Ejemplo JavaScript:**

```javascript
const meses = ['Janv', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Nov', 'Dec']
const indice = meses.indexOf('Août') // devuelve 7
console.log('Agosto es el', indice + 1, 'er mes del año')
```

---

<br>

**Ejemplo Python:**

```python
meses = ['Janv', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Nov', 'Dec' ]
indice = meses.index('Août') # devuelve 7
print('Agosto es el', indice + 1, 'er mes del año')
```

<br>

---

---

<br>

<br>

---

### **Complemento: Documentación**

---

<br>

**Existen muchas otras funciones y están documentadas aquí 👇:**

- **(Array) Listas en Python:**

    - **[https://docs.python.org/es/3/tutorial/datastructures.html?highlight=liste](https://docs.python.org/es/3/tutorial/datastructures.html?highlight=liste)**

---

<br>

- **Arrays en JavaScript:**

    - **[https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

**Los arrays son estructuras mutables:**

- **los lenguajes ofrecen una variedad de funciones para manipular sus elementos.**

<br>

---

---