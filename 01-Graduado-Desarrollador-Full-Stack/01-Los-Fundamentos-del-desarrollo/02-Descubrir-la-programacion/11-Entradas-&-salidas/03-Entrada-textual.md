# **Entrada textual**

<br>

## **_Objetivos:_**

- **Aprender a utilizar la entrada de texto.**

- **Aprender a recuperar información del usuario.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Con la comunicación del programa al usuario, es esencial que la comunicación inversa sea posible, (usuario al programa):**

- la comunicación del usuario al programa.

---

<br>

Ambas se complementan y permiten interacciones entre el programa y el usuario al permitirles intercambiar información.

<br>

---

---

<br>

<br>

---

## **Entradas**

---

<br>

En programación, **las entradas se refieren a la información enviada desde:**

- (ejemplo:) un dispositivo de entrada **como el teclado hacia el programa.**

<br>

Son **flujos de datos enviados desde el exterior,** `👉 hacia` **la unidad de procesamiento** (de ahí el término "entrada" o "input").

---

<br>

**También se le llama a este flujo de datos, la entrada estándar,** que a menudo **se refiere al flujo que transporta las entradas del teclado hacia el procesador.**

<br>

---

### **Fundamental:**

---

<br>

**Leer la entrada estándar, implica que el programa recupere datos que fueron escritos por el usuario.**

<br>

---

---

<br>

<br>

---

## **Lectura de entradas**

---

<br>

Los **lenguajes** a menudo **proporcionan** funciones cuyos **nombres son similares en inglés** para permitir escribir frases, números o cualquier tipo de valor.

- **En JavaScript:**

    - se utiliza la función `prompt` **que toma como parámetro el texto a mostrar:**
    
      - **prompt('...')**

    ---

    <br>

- **En Python:**

    - la función `input:` **"SOLICITA" `ingresar texto` directamente `en la consola` y "toma como parámetro el texto a mostrar como indicación":**
    
       - **input('...')**

<br>

---

**Ejemplo JavaScript: abre una ventana que solicita ingresar el nombre**

```js
prompt('Ingrese su nombre: ')
```

---

<br>

**Ejemplo Python: abre una ventana que solicita ingresar el nombre**

```Python
input('Ingrese su nombre: ')
```

<br>

---

---

<br>

<br>

---

### **Atención: Recuperar la Entrada**

---

<br>

La instrucción de lectura por sí sola no es muy útil ya que el resultado se pierde.

Es importante recuperarla para almacenarla en una variable y poder conservarla para usarla más adelante.

<br>

---

<br>

Se puede utilizar especialmente para verificar ciertas condiciones, como si no está vacía o si coincide con lo que se solicitó.

<br>

---

**Ejemplo JavaScript: abre una ventana que solicita responder sí o no**

```js
const respuesta = prompt('¿Eres estudiante? (si/no) ')
if (respuesta === 'si' || respuesta === 'no') {
  console.log('Lo tengo en cuenta')
}
```

---

<br>

**Ejemplo Python: solicita responder sí o no.**

```Python
respuesta = input('¿Eres estudiante? (si/no)')
if respuesta == 'si' or respuesta == 'no':
  print('Lo tengo en cuenta')
```

<br>

---

### **Atención: Tipo del Resultado**

---

<br>

El resultado obtenido de una entrada es una cadena de caracteres.

Si el usuario ingresa un número, este también se recuperará como una cadena de caracteres.

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Las funciones de lectura son útiles para solicitar información al usuario y utilizarla en el programa al almacenarla en una variable.**

<br>

---

---
