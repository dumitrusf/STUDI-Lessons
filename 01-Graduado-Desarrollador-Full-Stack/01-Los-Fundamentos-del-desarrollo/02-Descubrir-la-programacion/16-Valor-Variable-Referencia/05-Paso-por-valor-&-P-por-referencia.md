# **Paso por valor y paso por referencia**

<br>

## **_Objetivo_**

- **Entender los conceptos de paso por valor y paso por referencia.**

- **Conocer el comportamiento en JavaScript y Python.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Dependiendo de cómo se pasa un parámetro a una función,** el proceso potencial de **la función puede o no afectar a la variable original.**

De hecho, **"si la variable pasada como parámetro se copia", "cualquier modificación realizada por la función NO SE REFLEJARA en la variable original.**

**Y viceversa, si se trata de una referencia.**

**"ES IMPORTANTE" dominar estos aspectos al usar funciones:**

- ya que:

    - **ambos comportamientos pueden llevar a resultados muy diferentes en la ejecución del programa.**

<br>

---

---

<br>

<br>

---

## **Paso por el valor**

---

<br>

**El paso** de un **parámetro por valor:**

- **"copia el valor" del "parámetro" en una "variable local de la función"**.

---

<br>

De esta manera, **"si el argumento es modificado"**, **el parámetro pasado a la función no lo será.**

<br>

---

---

<br>

<br>

---

## **Fundamental: El paso de tipos primitivos en `Python` y en `JavaScript` se asemeja a un paso por valor.**

---

<br>

---

### **Ejemplo: Paso por valor en Python**

---

<br>

**Aquí tenemos un ejemplo de paso por valor en Python.**

```python
def double_bank_account(amount):
  amount = amount * 2

bank_account_amount = 777
double_bank_account(bank_account_amount)
print(bank_account_amount)

```

---

```c#
777
```

**En este caso, los valores con tipos primitivos no son modificados después de llamar a la función.**

<br>

---

### **Ejemplo: Paso por valor en JavaScript**

---

<br>

**Se obtiene el mismo comportamiento en JavaScript.**

---

```js
function doubleBankAccount (amount) {
  amount = amount * 2
}

let bankAccountAmount = 777
doubleBankAccount(bankAccountAmount)
console.log(bankAccountAmount)
```

---

```c#
777
```

**En este caso, al igual que en Python, los valores con tipos primitivos no se modifican después de llamar a la función.**

<br>

---

---

<br>

<br>

---

## **Paso por Referencia**

---

<br>

**El paso** de un **parámetro por referencia:**

- **"copia la referencia" del "parámetro" en un "argumento que es una variable local con el alcance de la función".**

---

<br>

Por lo tanto, **"si el argumento es modificado"**, **el parámetro pasado a la función también lo será.**

<br>

---

---

<br>

<br>

---

## **Fundamental: El paso de tipos compuestos en Python y en JavaScript se asemeja a un paso por referencia.**

---

<br>

---

### **Ejemplo: Paso por referencia en JavaScript**

---

<br>

**Aquí tenemos un ejemplo de paso por referencia en JavaScript.**

```js
function addSpecialNumber(numbers) {
  numbers.push(23)
}

let lottoNumbers = [32, 41, 130]
addSpecialNumber(lottoNumbers)
console.log(lottoNumbers)
```

---

```c#
[32, 41, 130, 23]
```

**En este caso, `lottoNumbers`, al estar asociada a un valor de tipo compuesto, se modifica después de llamar a la función.**

<br>

---

### **Ejemplo: Paso por valor en Python**

---

<br>

**Se obtiene el mismo comportamiento en Python.**

---

```js
def addSpecialNumber(numbers):
  numbers.append(23)

lottoNumber = [32, 41, 130]
addSpecialNumber(lottoNumber)
print(lottoNumber)
```

---

```c#
[32, 41, 130, 23]
```

**En este caso, `lottoNumber`, al estar asociada a un valor de tipo compuesto, se modifica después de llamar a la función.**

<br>

---

---

<br>

<br>

---

## **Complemento: Paso por asignación**

---

<br>

**En Python, el paso de argumentos se realiza más exactamente por asignación:**

- La asignación solo crea referencias a `objetos` y no hay alias entre el nombre de un argumento en el ámbito llamador y el ámbito llamado.

---

<br>

Por lo tanto, no hay una llamada por referencia en sí misma.

Puedes encontrar más información en la documentación: **[https://docs.python.org/3/faq/programming.html#how-do-i-write-a-function-with-output-parameters-call-by-reference](https://docs.python.org/3/faq/programming.html#how-do-i-write-a-function-with-output-parameters-call-by-reference)**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **El paso por valor copia el valor en una variable en el alcance de una función.**

  **El paso por referencia copia la referencia en una variable en el alcance de una función.**

  ---

  <br>

- **En JavaScript y Python, el paso por valor se aplica a los tipos primitivos, mientras que el paso por referencia se aplica a los tipos compuestos.**

<br>

---

---