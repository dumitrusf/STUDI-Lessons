# **Ejercicio para el tema: Tipos Numéricos**

<br>

---

## **Question-1**

---

<br>

Affichez le type de nombre dans la console.

<br>

---

**Código:**

```js
const nombre = 45;
//code
```

---

---

<br>

---

## **Question-2**

---

<br>

Définissez une variable nombre de type Bigint.

<br>

---

**Código:**

```js
//code
console.log(typeof nombre);
```

---

---

<br>

---

## **Question-3**

---

<br>

Corrigez le code pour qu’il n’y ait pas d’erreur.

<br>

---

**Código:**

```js
const a = 678361083183098137091378n;
const b = 100003917097716398713970197;
console.log(a + b);
```

---

---

<br>

---

## **Question-4**

---

<br>

Définissez nombre sur le nombre décimal 15.13.

<br>

---

**Código:**

```js
const nombre;
console.log(nombre);
```

---

---

<br>

---

## **Question-5**

---

<br>

Le code suivant affiche notre nombre arrondi. Corrigez le code pour que le nombre apparaisse tel quel.

<br>

---

**Código:**

```js
const nombre =8473638490274657392736;
console.log (nombre);
```

---

---

<br>

⭐⭐⭐⭐⭐⭐⭐⭐

<br>

**Descripción en español:**

---

<br>---

## **Pregunta 1**

---

<br>

Muestra el tipo de número en la consola.

<br>

---

**Código:**

```js
const nombre = 45;

//code
```

<br>

---

**Resultado-1**

```js
const nombre = 45;

//code
console.log(typeof nombre);

// Con type of podemos ver el tipo de numero que en este caso es number
```

<br>

---

---

<br>

---

## **Pregunta 2**

---

<br>

Définissez une variable nombre de type Bigint.

<br>

---

**Código:**

```js
//code
console.log(typeof nombre);
```

<br>

---

**Resultado-2**

```js
//code

// Aquí como vimos, el numero es muy grande y con "n" al final se convierte en `BigInt`
const nombre = 678361083183098137091378n;

console.log(typeof nombre);
```

<br>

---

---

<br>

---

## **Pregunta 3**

---

<br>

Corrija el código para que no haya error.

<br>

---

**Código:**

```js
const a = 678361083183098137091378n;

const b = 100003917097716398713970197;

console.log(a + b);
```

<br>

---

**Resultado-3**

```js
const a = 678361083183098137091378n;

const b = 100003917097716398713970197n;
// Con la "n" al final transformamos la segunda linea también en BigInt para poder calcular ambos

console.log(a + b);
```

---

---

<br>

---

## **Pregunta 4**

---

<br>

Define "numero" con el número decimal 15.13

<br>

---

**Código:**

```js
const nombre;
console.log(nombre);
```

<br>

---

**Resultado-4**

```js
// Aquí le iniciamos la constante declarada no iniciada, iniciándola con el numero "15.13 "
const nombre = 15.13;

console.log(nombre);
```

---

---

<br>

---

## **Pregunta 5**

---

<br>

El siguiente código muestra nuestro número redondeado.

Corrija el código para que el número aparezca tal cual.

<br>

---

**Código:**

```js
const nombre =8473638490274657392736;

console.log (nombre);
```

<br>

---

**Resultado-5**

```js
// Para que aparezca tal cual y que no se redondee el solo en la consola lo volvemos BigInt con la "n" al final
const nombre =8473638490274657392736n;

console.log (nombre);
```

---

---