# **La programación declarativa**

<br>

## **_Objetivos:_**

- **Entender los fundamentos de la programación declarativa**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Cuando programamos, a veces es necesario obtener un resultado preciso, independientemente del estado actual del programa o de la máquina.

Es decir, deseamos que la máquina realice una tarea sin necesidad de describir las diversas operaciones necesarias para lograrlo.

Los lenguajes de programación declarativos permiten describir con precisión el resultado deseado, al tiempo que delegan la gestión de "cómo queremos obtenerlo" en la computadora.

<br>

---

---

<br>
<br>

---

## **Programación declarativo**

---

<br>

Es un paradigma que **implica crear programas basados en componentes independientes del contexto y sin estado.**

**Esta forma de programación busca reducir los efectos secundarios al describir la tarea que el programa debe realizar en lugar de describir cómo debe realizar esa tarea.**

De esta manera, se puede encontrar una conexión clara (correspondencia) clara entre este tipo de lenguaje y la lógica matemática.

<br>

---

**Ejemplo: SQL**

**Las consultas `SQL` de tipo `SELECT` son declarativas.**

```SQL
CREATE TABLE users (
    id    INTEGER,
    name  VARCHAR(50),
    PRIMARY KEY(id)
);
INSERT INTO users (id, name)
VALUES (1, 'Luke');
INSERT INTO users (id, name)
VALUES (2, 'Anakin');
SELECT id, name
FROM users;
```

---

<br>

**Este código 👆 permite declarar a la máquina que se desea:** 

- crear

- insertar 

    y
    
- recuperar:

    - **los campos id y name de la tabla users**, sin describirle cómo lograrlo.

<br>
    
---

**En este caso, el desarrollador no se preocupa por el contexto ni el estado del programa que enviará el resultado.**

**Con un lenguaje imperativo, el desarrollador tendría que escribir las instrucciones para buscar entre todas las tablas y encontrar los resultados correctos.**

<br>

---

---
---

<br>
<br>

---

## **Programación Lógica**

---

<br>

```
Los lenguajes lógicos pueden ser considerados como lenguajes declarativos en el sentido de que permiten declarar verdades (premisas) para relacionarlas y así crear programas para consultar estas verdades.

El desarrollador no necesita proporcionar instrucciones precisas, pero debe ser capaz de formular sus declaraciones de manera adecuada (lo que puede llevar a efectos secundarios).
```

<br>

---

**Primero se declara una base de hechos (las verdades).**

**Ejemplo: `Prolog`**

**se establece que Alice vive en Francia y que Bob vive en Inglaterra.**

```prolog
(alice, Francia).
(bob, Inglaterra).
```

---

<br>

**Luego se puede consultar esta base de hechos, preguntando si Alice vive en Francia y si Bob vive en Francia.**

```prolog
| ?- country(alice,france).
yes.
| ?- country(bob,france).
no.
```

<br>
    
---

**También "es posible declarar una base de reglas", es decir, "verdades generales".**

**De hecho, un desarrollador podría agregar que dos personas que no viven en el mismo país no son vecinas.**

**La forma en que el programa responde a las preguntas no es importante y el desarrollador solo busca el resultado.**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **La programación declarativa se utiliza para realizar tareas sin tener que expresar cómo realizar esas tareas.**

- **El desarrollador "se enfoca en el qué" y "NO en el cómo".**

- **La programación "lógica puede verse como una forma de programación declarativa".**

<br>

---

---
