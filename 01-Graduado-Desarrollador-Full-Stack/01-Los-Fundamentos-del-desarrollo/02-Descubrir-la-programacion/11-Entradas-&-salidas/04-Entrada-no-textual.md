# **Entrada NO textual**

<br>

## **_Objetivos:_**

- **Aprender a recuperar información no textual**

- **Aprender a convertir texto.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Los datos esperados durante la lectura de la entrada estándar no siempre son cadenas de caracteres.**

**En ocasiones, es necesario convertir la información en:**

- números

- booleanos

- fechas

- etc.

---

<br>

La entrada estándar permite obtener las frases escritas por el usuario, es decir, cadenas de caracteres.

**Sin embargo, si queremos obtener su edad y esta se recupera como una cadena de caracteres, las operaciones en ella, como sumas, comparaciones, etc., no darán el resultado deseado.**

Por lo tanto, en este caso, es necesario convertir el resultado de la lectura.

<br>

---

---

<br>

<br>

---

## **Conversión**

---

<br>

La **conversión** de un elemento **implica cambiar su tipo, como transformar un número en una cadena de caracteres** o, viceversa, una cadena en un número.

<br>

---

### **Recordatorio: Tipos**

---

<br>

**El tipo de un elemento es, de alguna manera, su naturaleza:**

- Un número (entero, decimal, etc.),

- Una cadena de caracteres,

- Un booleano (verdadero o falso),

- Una fecha,

- etc.

<br>

---

---

<br>

<br>

---

## **Convertir un valor**

---

<br>

- **En JavaScript:**

  - **se puede convertir un elemento usando las funciones:**
  
    - String()

    - Boolean()

    - Number()

    - Date()

    - etc.

---

<br>    

- **En Python**

  - **existen las funciones:**
  
    - int()

    - float()

    - str()

    - etc.

<br>

---

**Ejemplo JavaScript:**

```js
let numero = '42'
console.log(typeof numero) // muestra 'string'
numero = Number(numero) // convierte la cadena en un número
console.log(typeof numero) // muestra 'number'
```

---

<br>

**Ejemplo Python:**

```Python
numero = '42'
print(type(numero)) # muestra el tipo 'str'
numero = int(numero) # convierte la cadena a un entero
print(type(numero)) # muestra el tipo 'int'
```

<br>

---

---

<br>

<br>

---

### **Atención: NaN (Not a Number)**

---

<br>

Siempre debemos asumir que la entrada del usuario puede ser errónea y no coincidir con lo esperado, como ingresar una letra en lugar de un número.

---

<br>

**Por lo tanto, se debe verificar la entrada cuando siga una conversión a número:**

1. **Enfoque 1:**

    - **se convierte**
    
      y
      
    - **luego se verifica el resultado**

---    

<br>

2. **Enfoque 2:**

    - **se verifica si:**
    
      - **la variable es convertible:**

        y
      
      - **solo en ese caso, se realiza la conversión**

<br>

---

### **Ejemplo: Solicitud de un Entero**

---

<br>

**En JavaScript, aquí está cómo usar el Enfoque 2:**

- se verifica si la cadena representa un número usando la `función isNaN()`.

- Esta función devuelve `true` si el valor probado no es un número.

<br>

---

**JavaScript: Luego, se convierte utilizando la función `Number()`**

```js
let edad = prompt('Su edad:')
if (!isNaN(edad)) {
  edad = Number(edad)
  console.log(edad)
} else {
  console.log('¡Respuesta incorrecta!')
}
```

---

<br>

**En Python, aquí está cómo usar el Enfoque 2:**

  - primero se prueba la cadena con `isnumeric()`, que devuelve `True` o `False`.
  
  - Si es `True`, se puede convertir.

<br>

**Ejemplo Python:**

```Python
edad = input('Su edad: ')
if not edad.isnumeric():
  print('Respuesta incorrecta')
else:
  print(edad)
```

<br>

---

### **Ejemplo: Solicitud de fecha**

---

<br>

**En Python, la función `strptime` `(analizador de cadenas de tiempo)` toma dos argumentos:**

  - la cadena a convertir y el formato en el que está escrita

---

<br>

**En JavaScript, la clase `Date` puede transformar una cadena en formato `AAAA-MM-DD`(por defecto) en una fecha.**

**Las manipulaciones de fecha son muy sensibles a los formatos.**

<br>

---

**Ejemplo JavaScript: convierte la respuesta en fecha**

```js
let cumpleaños = prompt('¿Cuál es su fecha de nacimiento? (AAAA-MM-DD)')
console.log(new Date(cumpleaños))
```

---

<br>

---

**Ejemplo Python: convierte la respuesta en fecha**

```python
import time
cumpleaños = input('¿Cuál es su fecha de nacimiento? (DD MM AAAA)\n')
print(time.strptime(cumpleaños, '%d %m %Y')) # formato %d %m %Y = DD MM AAAA
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

- **La conversión, al leer una entrada, permite adaptar el valor obtenido para el uso que se le dará.**

<br>

---

---
