# **Bucles de Entradas / Salidas**

<br>

## **_Objetivos:_**

- **Aprender a utilizar entradas / salidas en un bucle.**

- **Aprender a solicitar información hasta obtener una respuesta válida.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**En programación, hay un famoso adagio que dice:**

- **"Never trust user input":**

  - lo que significa "nunca confíes en lo que el usuario ingresa".

---

<br>

De hecho, cuando se espera información del usuario, **siempre es importante asegurarse de que la información ingresada sea la correcta,** como asegurarse de que tenga el formato adecuado.

**Si no se realiza esta verificación, una entrada incorrecta, como una fecha en lugar de un nombre, podría hacer que nuestro programa falle.**

---

<br>

**Por lo tanto, es necesario implementar un mecanismo de verificación que se repita hasta que la entrada sea correcta.**

<br>

---

---

<br>

<br>

---

## **Iteraciones**

---

<br>

Las estructuras iterativas permiten realizar bucles para repetir instrucciones, ya sea un número determinado de veces o hasta que se cumpla una condición.

**Las palabras clave `for`, `while` y `do while` permiten estos tipos de bucles.**

<br>

---

---

<br>

<br>

---

## **Entradas e Iteraciones Condicionales**

---

<br>

Las entradas son particularmente propensas a errores por parte del usuario.

No se puede estar seguro de si su respuesta coincidirá con lo que se espera.

En casos en los que la respuesta es demasiado corta, demasiado larga, no tiene el formato correcto (como un correo electrónico o un número de teléfono), etc, a menudo es necesario volver a solicitar información, posiblemente varias veces.

<br>

---

<br>

**Las estructuras iterativas que utilizan una condición son especialmente adecuadas para esto.**

<br>

---

<br>

Las estructuras iterativas que utilizan una condición son especialmente adecuadas para esto.

<br>

---

---

<br>

<br>

---

## **Prompt en un Bucle**

---

<br>

Para solicitar información hasta que sea correcta, se puede evaluar la o las condiciones después del `prompt` o el `input`, y repetir la solicitud mientras los criterios no se cumplan.

En este caso, el bucle `while` es útil.

---

<br>    

**Verificar la Longitud de la Respuesta:**

<br>

---

**Ejemplo JavaScript: bucle hasta que la respuesta tenga al menos 12 caracteres**

```js
let contraseña = prompt('Ingrese una contraseña válida (mínimo 12 caracteres)')
while (contraseña.length < 12) {
  contraseña = prompt('Contraseña demasiado corta. Inténtelo nuevamente')
}
console.log('Contraseña aceptada')

```

---

<br>

**Ejemplo Python: bucle hasta que la respuesta tenga al menos 12 caracteres**

```Python
contraseña = input('Ingrese una contraseña válida (mínimo 12 caracteres)\n')
while len(contraseña) < 12:
  contraseña = input('Contraseña demasiado corta. Inténtelo nuevamente\n')
print('Contraseña aceptada')
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

- **Combinar bucles con la lectura de entradas es una forma efectiva de repetir una solicitud y asegurarse de que la respuesta sea válida**

<br>

---

---
