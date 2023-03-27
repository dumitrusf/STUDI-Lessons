# **Bucles Anidados**

<br>

## **_Objetivos:_**

- **Comprender la anidación de varias estructuras iterativas.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Imaginemos un programa que se encarga de modificar todos los píxeles de una pantalla.

Para ello, realiza un bucle en cada píxel, uno tras otro, para asignarle el valor deseado.

Como saben, una pantalla está compuesta por filas y columnas de píxeles.

Por lo tanto, podemos decir que nuestro programa recorrerá todas las filas de nuestra pantalla y, para cada una de estas filas, recorrerá todas las columnas.

Por lo tanto, en realidad tenemos 2 bucles, uno anidado dentro del otro.

Veremos que la anidación de bucles no es complicada de realizar, pero requiere un poco de vigilancia.

<br>

---

---

<br>

<br>

---

## **Anidación**

---

<br>

Un bucle puede contener a otro y, más precisamente, estar anidado dentro de otro.

Debe tenerse especial cuidado con las variables que se modifican durante las iteraciones de un bucle anidado, ya que estas pueden tener repercusiones en el otro bucle.

En particular, **DEBEMOS EVITAR MODIFICAR EL CONTADOR DEL BUCLE EXTERNO DENTRO DEL BUCLE ANIDADO.**

<br>

---

### **Ejemplo: Doble contador**

---

<br>

**Se declaran dos contadores diferentes.**

Para cada iteración del bucle externo, el bucle anidado (o **interno**) realiza 11 iteraciones.

**El contador del bucle anidado se reinicia a cero en cada nueva iteración del bucle externo.**

<br>

---

**Ejemplo JavaScript: muestra las tablas de multiplicar del `0` al `10`**

```js
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    console.log(i, '*', j, '=', i * j)
  }
}
```

---

<br>

**Ejemplo Python: muestra las tablas de multiplicar del `0` al `10**

```Python
for i in range(11):
  for j in range(11):
    print(i, '*', j, '=', i * j)
```

<br>

---

---

<br>

<br>

---

## **Anidación mixta**

---

<br>

**La anidación es posible para todos los tipos de bucles.**

**Incluso se pueden anidar bucles de tipos diferentes, como un bucle for dentro de un bucle while.**

---

<br>

El programa sigue iterando mientras el juego continúa.

En cada turno, se elige un número aleatorio y se solicita su tabla de multiplicar del `0` al `9`.

<br>

---

**Ejemplo JavaScript:**

```js
let end = false
let score = 0
let maximumScore = 0
// Continúa mientras el usuario responda 'o'
while (!end) {
  // Calcula un número aleatorio
  const randomNumber = Math.floor(Math.random() * 9) + 1
  console.log('Tabla de ' + randomNumber)
  // Solicita la tabla de multiplicar del número aleatorio
  for (let i = 0; i < 10; i++) {
    const answer = Number(prompt(randomNumber + '*' + i + ' ?'))
    // Cuenta el número total de preguntas
    maximumScore = maximumScore + 1
    // 1 punto por cada respuesta correcta
    if (answer === randomNumber * i) {
      score = score + 1
    }
  }
  console.log('Tienes ' + score + '/' + maximumScore)
  end = prompt('¿Continuar la prueba? (o/n)') !== 'o'
}
```

---

<br>

**Ejemplo Python:**

```Python
import random
end = False
score = 0
maximumScore = 0
# Continúa mientras el usuario responda 'o'
while not end:
  # Calcula un número aleatorio
  randomNumber = random.randint(0, 9)
  print('Tabla de', randomNumber)
  # Solicita la tabla de multiplicar del número aleatorio
  for i in range(10):
    answer = input('{0}*{1} = ? '.format(randomNumber, i))
    # Cuenta el número total de preguntas
    maximumScore = maximumScore + 1 
    # 1 punto por cada respuesta correcta
    if answer == str(randomNumber*i):
      score = score + 1 
  print('Tienes {0}/{1}'.format(score, maximumScore))
  end = input('¿Continuar la prueba? (o/n)') != 'o'
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

- **Los bucles anidados permiten asociar iteraciones con otras y deben manejarse con cuidado.**

<br>

---

---
