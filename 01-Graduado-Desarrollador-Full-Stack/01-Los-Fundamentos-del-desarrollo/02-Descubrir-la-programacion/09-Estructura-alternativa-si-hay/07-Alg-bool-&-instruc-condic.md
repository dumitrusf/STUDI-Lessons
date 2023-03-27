# **Álgebra booleana e instrucciones condicionales**

<br>

## **_Objetivos:_**

- **Utilizar las instrucciones condicionales con álgebra booleana.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Las expresiones lógicas son muy útiles para expresar condiciones con estructuras condicionales.**

**Al igual que con las expresiones condicionales simples, las expresiones que utilizan funciones lógicas como `"y"`, `"o"` y `"no"` permiten obtener un resultado que es verdadero o falso.**

**Por lo tanto, estas expresiones "se pueden usar como condiciones `en las instrucciones condicionales`".**

**También se pueden almacenar en variables.**

<br>

---

**Ejemplo JavaScript: muestra "Plus de place à ce prix"**

```js
let availablePlace = true

let budget = 40

if (availablePlace && budget > 120) {
  console.log('1ère classe')
} else if (!availablePlace || budget < 60) {
  console.log('Plus de place à ce prix')
}
```

---

<br>

**Ejemplo Python: muestra "Plus de place à ce prix"**

```Python
availablePlace = True

budget = 40

if availablePlace and budget > 120:
  print('1ère classe')
elif not availablePlace or budget < 60:
  print('Plus de place à ce prix')
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

- **Los operadores booleanos permiten construir expresiones con varias condiciones combinando sus resultados.**

<br>

---

---
