# **Seguir la evolución del software**

<br>

## **_Objetivos:_**

- Descubra buenas prácticas de corrección de bugs.

---

---

<br>

---

## **Contexto**

---

<br>

Es común que durante un desarrollo nos encontremos con un problema que luchamos por resolver.

Si la investigación no ha sido suficiente para encontrar una solución, es necesario tomarse el tiempo para formalizar bien su problema.

A veces eso es suficiente para darse cuenta de que si no puede encontrar una respuesta, es que la pregunta se hizo mal.

Si esto sigue siendo insuficiente, entonces podemos hacer la pregunta a una comunidad de desarrolladores. Si esta pregunta se hace bien, es muy probable que alguien pueda proporcionarnos una respuesta rápidamente.

<br>

---

---

<br>
<br>

---

## **Fundamental: Comportamiento frente a un error**

---

<br>

Una situación común para todos los desarrolladores es encontrarse con un error enviado por el intérprete del compilador del lenguaje de programación utilizado. El comportamiento a adoptar en este caso es el siguiente:

- Intente comprender el problema en cuestión con el mensaje de error (esto es suficiente en la mayoría de los casos).

- De lo contrario, busque con palabras clave apropiadas soluciones en línea, pruebe y comprenda propuestas.

- De lo contrario, explique el error a otra persona o explica escribiendo el error.

- De lo contrario, mire ejemplos similares en la documentación de las herramientas utilizadas.

- Como último recurso para enviar el problema al mantenimiento de la herramienta.

<br>

---

---

<br>
<br>

---

### **Ejemplo: Un problema bien planteado esta medio acabado**

---

<br>

En el caso de que nos encontremos con un problema técnico, lo mejor es explicarlo.

En el caso de que trabajemos solos, podemos usar el método de pato de plástico: equivale a hablar con un personaje para explicarle el problema.

Hablar hace posible formalizar el problema para comprenderlo mejor, y generalmente la solución sigue lo suficientemente rápido.

<br>

---

---

<br>
<br>

---

## **informar un problema a los que mantienen una herramienta**

---

<br>

En el caso de que el desarrollador no encuentre soluciones después de haber buscado modificando su código y pruebas, siempre tiene la posibilidad de llamar a la comunidad de lenguaje de programación utilizado.

Para esto, debemos respetar ciertas reglas formales a menudo explicadas en general:

- Explicar el problema encontrado de manera concisa,

- Proporcionar un ejemplo minimalista de reproducción del problema,

- Explique las soluciones probadas,

- Enumere las versiones de las herramientas utilizadas,

- Sea cortés y agradezca a los desarrolladores durante las respuestas.

<br>

---

---

<br>

---

### **Ejemplo: Informar de un problema para el entorno de Calculo Dask**

---

<br>

Aquí hay un buen ejemplo de aplazamiento del problema técnico: [Problema técnico](https://github.com/dask/dask/issues/6062)

Esto permitió la resolución del problema que existía en la Biblioteca Dask en 4 días.

Tenga en cuenta que este trabajo de formalización es útil para los mantenedores, pero también para los desarrolladores que encontrarán el mismo problema en el futuro.

<br>

---

---

<br>
<br>

---

## **Método: Capitalizar las búsquedas**

---

<br>

Después de resolver el problema, es útil realizar un seguimiento de las fuentes utilizadas para resolverlo.

De hecho, nada nos impide recurrir a este mismo problema más adelante.

Estas fuentes se pueden enumerar y compartir a otros desarrolladores de proyectos.

También es útil suscribirse a informes de problemas cuando éste aún no ha sido corregido.

<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- _**Un problema se resuelve primero solo, si eso no es suficiente, estamos buscando en línea, entonces estamos dirigidos a otros.**_

- _**podemos resolver un problema si este esta bien planteado**_

- _**Los espacios comunitarios están llenos de personas listas para ayudar, el desarrollador debe hacer el máximo para facilitar los intercambios.**_

- _**Es necesario capitalizar la investigación anterior realizada.**_

<br>

---

---
