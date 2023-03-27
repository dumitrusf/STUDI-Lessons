# **Variables Globales**

<br>

## **_Objetivos:_**

- **Comprender qué son y para qué sirven las variables globales**

- **Adoptar las buenas prácticas.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Las variables suelen tener un alcance local, lo que significa que solo son accesibles en el bloque de código donde se han definido.

En la mayoría de los casos, esto es suficiente, pero puede ser necesario que una variable sea accesible en todo el programa.

Por ejemplo, una variable que contenga información de configuración utilizada en diferentes partes del código.

Para lograr esto, es posible utilizar una variable con alcance global, que no estará limitada de la misma manera que una variable local.

<br>

---

---

<br>
<br>

---

## **Variable global en JavaScript**

---

<br>

**En JavaScript, generalmente se define una variable con `let nameV = value`**

**Al "reemplazar" la palabra clave `let` por la palabra clave `var`, se cambia el alcance de la variable.**

La variable **tendrá un alcance global** y, por lo tanto, **será visible en todo el programa después de su definición.**

**En Python, la palabra clave `global`, seguida del nombre de la variable, indica que la variable a utilizar se ha definido previamente en otro bloque del programa y que es esa variable la que se debe modificar.**

<br>

---

**Si modificamos el programa** sobre el número de manzanas, **reemplazando `let` por `var`** en la definición de enoughApple, **ya no hay error** porque la variable es visible fuera del bloque if.

**Ejemplo: JS**

```JavaScript
const numberApple = 30

console.log(numberApple)

if(numberApple === 30)
{
  var enoughApple = true
  console.log(enoughApple)
}

console.log(enoughApple)
// 👆 esto ya no da error por que enoughApple es de ámbito global "gracias a var", aun estando declarada dentro del bloque if

```

<br>

---

---

<br>

<br>

---

## **Atención!: Usar con moderación**

---

<br>

**Las variables globales son fuente de muchos problemas.**

De hecho, una variable declarada globalmente puede modificarse en cualquier otra parte del programa, lo que puede provocar errores difíciles de detectar, como la sobrescritura inesperada del valor original (esto se llama efecto secundario).

Se recomienda no utilizar variables globales por defecto y utilizarlas con moderación solo en casos bien identificados.

<br>

---

### **Complemento**

---

<br>

Si deseamos intercambiar los valores de dos variables con una función, **podemos usar variables globales `(aunque no es una buena práctica)`**.

<br>

---

**Ejemplo: Python**

```python
fruit_1 = 'pera'
fruit_2 = 'piña'

def swap_fruits():
    global fruit_1 # pera
    global fruit_2 # piña

    temp = fruit_2  # Aquí se guarda el valor de fruit_2 temporalmente, que es piña

    fruit_2 = fruit_1  # Se asigna el valor de fruit_1 (pera) a la variable fruit_2 (que esta vacia, por que su valor esta en temp (piña) )
    fruit_1 = temp  # Se asigna el valor guardado en temp a fruit_1 (que es (piña) )

print(fruit_1, fruit_2)  # Imprime "pera piña"

swap_fruits() # llamamos a esa función con instrucciones nuevas a las variables para cambiar sus valores ..

print(fruit_1, fruit_2)  # Imprime "piña pera"

```

---

<br>

El programa muestra "pera piña" y luego "piña pera".

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Es posible crear variables cuyo alcance se extienda más allá de su bloque de definición, usando la palabra clave var en JavaScript y la palabra clave global en Python, estas son las variables globales.**

- **Sin embargo, se recomienda usarlas con precaución, ya que pueden producir resultados inesperados.**

<br>

---

---
