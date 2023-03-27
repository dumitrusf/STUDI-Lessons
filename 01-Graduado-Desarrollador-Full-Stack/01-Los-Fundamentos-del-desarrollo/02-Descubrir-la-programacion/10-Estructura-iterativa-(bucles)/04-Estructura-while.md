# **Structure `while`**

<br>

## **_Objetivos:_**

- **Comprender la estructura del bucle while.**

- **Saber cómo usar y finalizar un bucle while.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**"NO TODAS" las situaciones se prestan a un bucle con un contador para incrementar.**

---

**Por ejemplo:**

- considera un programa que solicita al usuario que ingrese su edad.

  - **Si la edad ingresada no es un número válido:**

    - el programa vuelve a solicitar que se ingrese la edad.

---

<br>

**Aquí tenemos "UN MECANISMO DE BUCLE" que debe ejecutarse un número "DESCONOCIDO" de veces.**

En este caso, `la condición del bucle verificará la validez del valor ingresado por el usuario`.**

**por ejemplo, probando el tipo de la variable.**

<br>

---

---

<br>

<br>

---

## **Bucle `while`**

---

<br>

**El bucle while**, o "mientras", **permite realizar iteraciones según condiciones booleanas** (verdadero o falso).

**Algorítmicamente, el bucle while se puede traducir como:**

- `"Mientras la condición sea verdadera, hacer..."`

---

<br>

La estructura de **este bucle `"WHILE"`** es bastante simple y **consta de una condición y un bloque de instrucciones**.

<br>

**Ejemplo JavaScript:**

```js
while (condición) {
  // instrucciones
}
```

<br>

---

### **Ejemplo: Menu de recomendaciones**

---

<br>

**Se muestra un menú con opciones.**

- **Solo la opción `"0"` permite salir del menú gracias a la condición del bucle.**

<br>

---

**Ejemplo JavaScript:**

```js
let choice = '';
// Continuar mientras no se seleccione 0
while (choice !== '0') {
  console.log('0. Salir');
  console.log('1. Mostrar la película recomendada');
  console.log('2. Mostrar el álbum recomendado');
  // Espera la respuesta
  choice = prompt('Selección');
  if (choice === '1') { // película
    console.log('Titanic (1997) - James Cameron\n');
  } else if (choice === '2') { // álbum
    console.log('Thriller (1982) - Michael Jackson\n');
  }
}
```

---

<br>

**Ejemplo Python:**

```Python
choice = ''
# Continuar mientras no se seleccione 0
while choice != '0':
  print('0. Salir')
  print('1. Mostrar la película recomendada')
  print('2. Mostrar el álbum recomendado')
  # Espera la respuesta
  choice = input('Selección > ')
  if choice == '1': # película
    print('Titanic (1997) - James Cameron\n')
  elif choice == '2': # álbum
    print('Thriller (1982) - Michael Jackson\n')
```

<br>

---

### **Ejemplo: Ruleta**

---

<br>

**Se fija una apuesta inicial de `10 €`.**

**"EN CADA TURNO", la ruleta genera un número:**

- si es par, se gana el dinero (menos la apuesta)

- de ser impar, la apuesta se duplica y se continúa.

<br>

---

**Ejemplo JavaScript:**

```js
let intentos = 0
let ganancia = 0
let apuesta = 10
let perdida = 0
let ganador = false
console.log('Ganas si la ruleta muestra un número par. La apuesta inicial es de 10 euros.')
// Continuar hasta ganar
while (!ganador) {
  // Dinero en juego
  perdida = perdida + apuesta
  intentos = intentos + 1
  // Número aleatorio entre 0 y 30
  const numero = Math.floor(Math.random() * 31)
  console.log('Intento...........', numero)
  if (numero % 2 === 1) { // número impar
    console.log('Lástima, la apuesta se duplica. Vuelve a intentarlo')
    apuesta = apuesta * 2
  } else { // número par
    console.log('¡Has ganado!')
    ganancia = apuesta * 2
    ganador = true
  }
  prompt('(Presiona Enter)')
}
console.log('Ganancia de ' + (ganancia - perdida) + ' euros después de ' + intentos + ' intento(s)')
```

---

<br>

**Ejemplo Python:**

```Python
import random
intentos = 0
ganancia = 0
apuesta = 10
perdida = 0
ganador = False
print('Ganas si la ruleta muestra un número par. La apuesta inicial es de 10 euros.')
# Continuar hasta ganar
while not ganador:
  # Dinero en juego
  perdida = perdida + apuesta
  intentos = intentos + 1
  # Número aleatorio entre 0 y 30
  numero = random.randint(0, 30)
  print('Intento...........', numero)
  if numero % 2 == 1: # número impar
    print('Lástima, la apuesta se duplica. Vuelve a intentarlo')
    apuesta = apuesta * 2
  else: # número par
    print('¡Has ganado!')
    ganancia = apuesta * 2
    ganador = True
  input('(Presiona Enter)')
print('Ganancia de', (ganancia - perdida), ' euros después de ', intentos, ' intento(s)')
```

<br>

---

---

<br>

<br>

---

### **Complemento: El bucle `do...while`**

---

<br>

**En JavaScript, existe una estructura similar al "bucle while", el bucle `do...while`, en este caso:**

  - **el bloque de instrucciones se ejecuta primero**
  
    y
    
  - **luego se prueba la condición**
  

---

<br>
  
**Si la condición del `do...while` se cumple, "SE CONTINUA"**.

Por lo tanto, **siempre hay al menos una iteración, que se ejecuta si o si, que es el `do`**.

**Algorítmicamente, el bucle `do...while` se puede traducir como:** 

```
"Hacer... mientras la condición sea verdadera".
```

<br>

---

**Ejemplo JavaScript:**

```js
let i = 0

do {
  console.log(i)
} while (i < -2)
```

---

<br>

**Ejemplo Python:**

```Python
do {
  // instrucciones
} while (condición)
```

<br>

---

### **Complemento: Contador con while**

---

<br>

El bucle `while` puede reproducir el comportamiento de un contador (aunque en general, en este caso, se prefiere un bucle for).

<br>

---

**Ejemplo JavaScript:**

```js
let i = 0
while (i < 5) {
  console.log(i++)
}
```

---

<br>

**Ejemplo Python:**

```Python
i = 0
while i < 5:
  print(i)
  i += 1
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

- **El bucle while permite realizar iteraciones con condiciones arbitrarias.**

- **Se utiliza principalmente cuando no se conoce la cantidad de iteraciones a realizar antes de comenzar el bucle.**

<br>

---

---
