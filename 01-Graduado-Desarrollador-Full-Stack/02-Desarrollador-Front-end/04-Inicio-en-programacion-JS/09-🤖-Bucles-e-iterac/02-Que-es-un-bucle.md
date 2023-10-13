# ¿Qué es un bucle?

## Objetivo

Aprender qué es un bucle y para qué sirve

## Contexto

En nuestros desarrollos, podemos tener que realizar varias veces acciones idénticas, ya sea para recorrer una lista de datos (ej: mostrar una lista de productos) o para ejecutar varias veces el mismo bloque de instrucciones usando un contador (ej: mostrar una lista de números del 0 al 100 sin tener que escribirlos todos manualmente).

## ¿Para qué sirve?

Un bucle va a ejecutar el mismo bloque de instrucciones un número de veces definido. Por ejemplo, vamos a poder recorrer nuestra lista de valores para ejecutar el bloque de instrucciones tantas veces como elementos haya en la lista. Imaginemos una lista de notas (sobre 20) "0, 5, 19, 13, 2, 16" para la que nos gustaría saber cuáles son las notas superiores a la media (10) para mostrar un mensaje específico. Vamos a poder recorrer esta lista, y para cada valor, ejecutar la misma instrucción. En este ejemplo, vamos a comprobar si el valor es superior a 10, y, en consecuencia, mostrar un mensaje.

## Recordatorio: Pseudo-código

El pseudo-código permite describir de forma simple un algoritmo sin basarse en un lenguaje de programación en particular.

### Bucle PARA en pseudo-código

El bucle PARA en pseudo-código utiliza cuatro valores numéricos: iterador , valor_inicial , valor_de_salida e incremento . El bloque de instrucciones se ejecutará n veces, donde n corresponde al número de iteraciones para que iterador , partiendo de valor_inicial , llegue a valor_de_salida sumándole incremento en cada iteración. El uso de este bucle nos obliga a conocer de antemano el número de iteraciones que queremos realizar (el valor_de_salida ): este valor puede corresponder al número de elementos que componen la lista.

```pseudo
PARA <iterador> DESDE <valor_inicial> HASTA <valor_de_salida> CON_PASO_DE <incremento>
    <BLOQUE_INSTRUCCIONES>
FIN_PARA
```

### Ejemplo

```pseudo
PARA i DESDE 0 HASTA 100 {CON_PASO_DE 1} HACER
    SI i MAYOR QUE 50 ENTONCES
        MOSTRAR("El valor de i es mayor que 50")
    SINO
        MOSTRAR("El valor de i es menor o igual que 50")
    FIN_SI
FIN_PARA
```

### Bucle MIENTRAS en pseudo-código

Con el bucle MIENTRAS , un bloque de instrucciones se ejecuta mientras se cumpla una condición dada.

```pseudo
MIENTRAS <CONDICION> HACER
    <BLOQUE_INSTRUCCIONES>
FIN_MIENTRAS
```

### Ejemplo

En el ejemplo siguiente, tenemos una variable total inicializada con el valor cero. El bucle se ejecutará mientras total sea menor que 100. Cuidado, es necesario incrementar el valor de total en el bloque de instrucciones, si no, la condición de salida del bucle nunca se alcanzará y bloqueará la ejecución del script: esto se llama un bucle infinito. total valdrá entonces 0 + 1 en el primer paso, luego 1 + 1 | 2 + 1 | 3 +1 | ..., hasta 99 +1. total ya no es menor que 100, así que el bucle se detiene, porque la condición ya no se cumple.

```pseudo
total = 0
MIENTRAS total MENOR QUE 100 HACER
    total = total + 1
FIN_MIENTRAS
```

## Complemento: Los bucles y los arreglos

Los bucles permiten recorrer elementos como listas o arreglos.

## Para recordar

- Un bucle va a ejecutar un número de veces definido el mismo bloque de instrucciones.
- Los bucles permiten sobre todo recorrer listas de valores para poder manipularlos o realizar acciones sobre ellos.

## Nota

>los vídeos presentan bucles en PHP, el método es el mismo para JS.

## Complemento

**[Structure de contrôle Boucles sur Wikipédia](https://fr.wikipedia.org/wiki/Structure_de_contr%C3%B4le#Boucles)**

**[Les boucles dans le code (MDN Web Docs)](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Building_blocks/Looping_code)**