# Ejemplos de algoritmos

## Objetivos

- Ver un ejemplo de pseudocódigo
- Comparar el pseudocódigo con su transcripción en JavaScript

## Situación

Para ilustrar ejemplos de lenguaje y pseudocódigo, vamos a escribir un algoritmo muy famoso: el código de César.

### El código de César

Cuando Julio César enviaba mensajes que contenían datos importantes, los cifraba de manera que nadie más pudiera leerlos. Para ello, tomaba cada letra de su mensaje y las desplazaba un cierto número, conocido solo por él y por el destinatario del mensaje. Por ejemplo, cuando escribía a Cicerón para hablar de las estrategias militares, usaba un desplazamiento de 3 hacia la derecha: esto significa que la "A" se reemplazaba por "D", la B por "E", etc. Una vez llegado al final del alfabeto, se tomaban las letras del principio: la "Z" valía así "C".

#### Ejemplo

La implementación en pseudocódigo

Para implementar este algoritmo en nuestra aplicación, es útil determinar su pseudocódigo. Esto nos permitirá poder implementar el código de César en cualquier lenguaje. Aquí está el pseudocódigo del código de César:

```text
Sea T el texto a cifrar
Sea D el desplazamiento a hacer
Sea A el alfabeto a usar
Inicializar F, en la que se pondrá la palabra final
Para todas las letras L de T:
  Calcular P, que es la posición de L en A
  Calcular N, que es la longitud de A
  Calcular NP, que es (D + P) módulo N
  Calcular LD, que es la letra en la posición NP en A
  Añadir la letra LD al final de la palabra F
Fin Para
Devolver F
```

#### Comprender los elementos definidos

Este pseudocódigo nos permite observar varias cosas:

- En primer lugar, está compuesto por varias palabras clave que permiten realizar diversas acciones: Sea, Calcular, Para... Estas palabras clave están todas presentes en los lenguajes informáticos, pero su escritura difiere según los lenguajes. Una de las palabras clave importantes es Devolver: permite decir que el algoritmo ha terminado y especificar el resultado del cálculo. En nuestro ejemplo, devolvemos F, es decir, que el resultado de nuestro cálculo es el valor que hemos llamado F.
- En segundo lugar, pone de relieve el hecho de que se asigna un nombre a cada valor que se desea manipular. Por ejemplo, el texto que se desea cifrar se referencia con el nombre "T". Así, no se manipula un valor directamente, sino que se utiliza siempre el nombre que se le ha dado previamente. Este es un principio que también se encuentra en matemáticas y que representa el fundamento de toda programación informática.
- Por último, permite comprender que nuestros algoritmos están compuestos de etapas, a veces muy descompuestas, que serán leídas por nuestro ordenador, línea por línea y de arriba abajo.

**Consejo**

Cada componente de este algoritmo será visto en detalle en un curso dedicado a él. Este ejemplo solo está ahí para mostrar cómo se ve el pseudocódigo.

#### Ejemplo

La implementación en JavaScript

Implementemos ahora este mismo pseudocódigo en el lenguaje JavaScript:

```javascript
function cesar(t, d, a) {
  let f = "";
  for (l of t) {
    let p = a.indexOf(l);
    let n = a.length;
    let np = (p + d) % n;
    let ld = a[np];
    f += ld;
  }
  return f;
}
cesar("cesar", 3, "abcdefghijklmnopqrstuvwxyz");
```

Por el momento, este código es incomprensible. Sin embargo, es posible notar algunas similitudes entre el pseudocódigo y el código JavaScript: la instrucción Calcular , por ejemplo, ha sido reemplazada por el símbolo = , que permite dar un valor (aquí, el resultado de un cálculo) a una variable. También se puede ver el uso de la palabra clave let , que permite declarar una variable. De hecho, en JavaScript, es necesario declarar cualquier nueva variable que se desee utilizar.

**Nota**

A diferencia del lenguaje informático, las palabras clave que componen el pseudocódigo pueden variar. En nuestro ejemplo, hemos utilizado la instrucción Calcular , pero otros desarrolladores preferirían sin duda los términos Asignar , Tomar , o simplemente usar el símbolo = . Para hacer el paralelismo con la indicación de una dirección, se puede mostrar muy bien "Izquierda" y "Derecha" usando el pulgar, la mano o el brazo: la dirección seguirá siendo válida.

## A recordar

- El pseudocódigo permite escribir código usando palabras comprensibles por todos.
- Es posible implementar pseudocódigo en cualquier lenguaje.