# Las variables y los operadores

## Objetivos

- Asignar una variable
- Conocer los diferentes tipos de datos
- Manipular los datos gracias a la concatenación y las operaciones aritméticas

## Contexto

Con Python, como con cualquier otro lenguaje de programación, es posible manipular variables y realizar operaciones de concatenación y aritméticas. Además de eso, vamos a ver los diferentes tipos de datos disponibles en este lenguaje y en qué se diferencian de un lenguaje de programación como JavaScript.

## Asignar una variable

En cualquier lenguaje de programación, antes de asignar una variable, conviene declararla. En Python, es un poco diferente. No existe realmente una palabra clave que permita declarar una variable, basta simplemente con utilizarla en el marco de una asignación. Por ejemplo, en JavaScript, deberíamos escribir el siguiente código:

```javascript
let x;
x = 10; // o directamente let x = 10;
```

En Python, es simplemente:

```python
x = 10
```

En Python, pues, no hace falta declarar una variable con una palabra clave, basta con simplemente utilizarla.

## Los diferentes tipos de datos

Entre los diferentes tipos utilizables en Python, podemos encontrar:

- un tipo texto: `str`
- tipos numéricos: `int`, `float`, `complex`
- tipos secuencia: `list`, `tuple`, `range`
- tipos mapeo: `dict`
- tipos conjunto: `set`, `frozenset`
- un tipo booleano: `bool`
- tipos binarios: `bytes`, `bytearray`, `memoryview`

No entraremos aquí en la explicación de todos los tipos de datos, pero hay que saber que están descritos en la [documentación](https://docs.python.org/3/library/stdtypes.html).

## Nota:

>La función `type()`

>La función `type()` en lenguaje Python toma como argumento un dato y devuelve su tipo, es el equivalente de "typeof" en javascript.

### Ejemplo: Una variable de tipo texto

Para utilizar el tipo texto por ejemplo, podemos delimitar una cadena de caracteres directamente con `"` o utilizando la sintaxis con `str()`:

```python
message = "Hello world"
print(type(message))
# o
message = 'Hello world'
print(type(message))
```

## Atención: La notación de los booleanos

A diferencia de JavaScript, al utilizar el tipo booleano, la definición de un valor booleano toma una mayúscula: `True` o `False`. Escritas `true` o `false`, estas cadenas serán consideradas como variables y no como valores.

```python
true = True
```

Aquí, almacenamos el valor booleano verdadero en la variable que se llama true.

## Nota: Los comentarios

>En Python, las líneas de comentarios empiezan por un `#`. No existe realmente una sintaxis para un comentario multilínea, pero podemos utilizar la sintaxis de cadena de caracteres multilínea:

```python
#This is a
#multiline comment
```

```python
"""
This is a multiline comment
"""
```

Como esta cadena no está asignada a ninguna variable, no se mostrará ni se utilizará.

## Operaciones de concatenación

En Python, existen varias formas de concatenación que podemos poner en paralelo con las diferentes formas disponibles con JavaScript. Para concatenar dos cadenas en JavaScript, utilizaremos la sintaxis siguiente:

```javascript
let message = "Hello " + "world";
```

En Python, es igual:

```python
message = "Hello " + "world"
```

Para la expresión string literal en JavaScript, tendremos:

```javascript
let hello = "Hello",
  world = "world";
let message = `${hello} ${world}`;
```

En Python, es un poco diferente. Tendremos que utilizar una sintaxis con tokens de sustitución:

```python
hello = "Hello"
world = "world"
message = "%s %s" % (hello, world)
```

También podemos emplear una sintaxis más reciente llamada las "fstring":

```python
name = "John"
age = 32
f"Buenos días, {name}. Tienes {age} años." # Buenos días , John . Tienes 32 años .
```

## Operaciones aritméticas

Entre los operadores aritméticos, encontraremos en Python los tipos que ya conocemos en JavaScript: `+`, `-`, `*`, `/` o `%`. También encontraremos operadores inéditos, tales como:

- `**` que calcula el exponencial de un número, por ejemplo `2 ** 5` dará `32`.
- `//` que calcula el cociente entero redondeado al inferior de una división, por ejemplo `19 // 5` dará `3`.

Su utilización es idéntica, ya sea en JavaScript o en Python.

```python
sum = 17 + 5
```

## A recordar

- En Python, las variables no necesitan ser declaradas, no existe una palabra clave para ello. Se pueden utilizar directamente gracias a la operación de asignación `=`.
- Los tipos de datos básicos son similares a los tipos JavaScript, pero hay algunos más complejos.
- La concatenación se hace gracias al operador `+` o una sintaxis con tokens de sustitución.
- Para las operaciones aritméticas, su utilización es idéntica, aunque hay algunas adicionales.

## Complemento

- **[Tipos de datos](https://docs.python.org/fr/3/library/datatypes.html)**

- **[Operadores](https://docs.python.org/fr/3/reference/lexical_analysis.html#operators)**
