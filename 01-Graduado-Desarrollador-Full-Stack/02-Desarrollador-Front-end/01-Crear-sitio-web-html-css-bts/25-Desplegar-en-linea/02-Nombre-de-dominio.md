# **Nombre de dominio**

<br>

## **_Objetivos:_**

- Entender la utilidad del nombre de dominio

- Saber donde comprar un nombre de dominio

---

---

<br>

---

## **Contexto**

---

<br>

La mayoría de las empresas en la web utilizan su propio nombre de dominio para identificar su sitio web, correos electrónicos, etc.

Aquí veremos de qué está compuesto un nombre de dominio y en qué condiciones se puede adquirir uno.

<br>

---

---

<br>
<br>

---

## **Nombre de dominio**

---

<br>

Para acceder a un servidor a través de Internet, es necesario conocer su dirección IP (Protocolo de Internet). 

sta dirección única está compuesta por cuatro números entre 0 y 255, separados por puntos (por ejemplo, 172.217.17.68).

Identifica al servidor y permite el enrutamiento de las solicitudes desde un cliente, como nuestro navegador.

Funciona de manera similar a un número de teléfono para contactar a una persona, pero en este caso, la dirección IP permite contactar a un servidor.

El inconveniente de la dirección IP, al igual que un número de teléfono, es que no es fácil de recordar.

<br>

---
---

<br>

El nombre de dominio es una máscara de esta dirección IP, utilizada para facilitar su memorización.

De hecho, es más fácil recordar google.com que 172.217.17.68.

Así como usaríamos el nombre de una persona para representar su número de teléfono, utilizamos un nombre de dominio para representar una dirección IP.

<br>

---
---

<br>

Todo esto se basa en el Sistema de Nombres de Dominio, o DNS.

Es una especie de directorio telefónico que establece la correspondencia entre nombres de dominio y direcciones IP.

El DNS funciona gracias a numerosos servidores en Internet que responden a solicitudes realizadas por clientes de DNS.

Cuando nuestro navegador desea conocer la dirección de www.eff.org, realiza una solicitud DNS a un servidor, que le proporcionará la dirección IP del servidor que sirve ese sitio web.

<br>

---

---

<br>
<br>

---

## **Comando `PING`**

---

<br>

**Cuando especificamos un nombre de dominio en el comando `"ping"` desde la línea de comandos, podemos ver la dirección IP asociada:**

```
ping google.fr
```

---

<br>

**Resultado con Windows:**

```
Enviando solicitud 'ping' a google.fr [172.217.22.131] con 32 bytes de datos:
Respuesta desde 172.217.22.131: bytes=32 tiempo=13 ms TTL=53
Respuesta desde 172.217.22.131: bytes=32 tiempo=13 ms TTL=53
Respuesta desde 172.217.22.131: bytes=32 tiempo=13 ms TTL=53
Respuesta desde 172.217.22.131: bytes=32 tiempo=13 ms TTL=53

Estadísticas de ping para 172.217.22.131:
    Paquetes: enviados = 4, recibidos = 4, perdidos = 0 (0% de pérdida),
Tiempos aproximados de ida y vuelta en milisegundos:
    Mínimo = 13ms, Máximo = 13ms, Media = 13ms
```

La IP asociada al dominio google.fr es 172.217.22.131

<br>

---
---

<br>
<br>

---

## **Composición de un nombre de dominio**

---

<br>

**Un nombre de dominio está compuesto por dos partes :**

<br>

- **El TLD (Dominio de nivel superior, también conocido como "extensión"):**

    - son los caracteres que siguen al último punto **(fr, com, org...),**

<br>

- **El dominio:** es el nombre que precede al último punto **(google en google.com, mozilla en mozilla.org)**.

---
<br>

El nombre de dominio debe ser obligatoriamente único.

Para garantizar esta unicidad, todos los nombres de dominio se registran ante la ICANN (Corporación de Asignación de Nombres y Números de Internet).

La ICANN delega la gestión de los dominios a una empresa o asociación por TLD.

En Francia, la AFNIC (Asociación Francesa para el Nombraje de Internet en Cooperación) tiene esta delegación y gestiona los TLD (.fr, .re, etc.).

<br>

---
---

<br>
<br>

---

## **La asignación de un nombre de dominio**

---

<br>

Adquirir un nombre de dominio no es gratuito desafortunadamente.

Para poder comprar un nombre de dominio como particular o empresa, se debe recurrir a un registrador (o "registrar" en inglés).

Estas son empresas comerciales registradas ante el organismo encargado de gestionar los TLD y pagan una tarifa cada vez que se compra un nombre de dominio.

Cada registrador tiene su propia política de precios.

<br>

---

<br>

Un nombre de dominio no se compra de por vida, en realidad se alquila por un período de 1 a 10 años.

Es importante recordar renovar la compra del nombre de dominio periódicamente, de lo contrario, podría ser adquirido por otra persona o simplemente desaparecer.

<br>

---
---

<br>
<br>

---

### **Consejo:**

---

<br>

Para encontrar un registrador para un dominio con el TLD ".fr", el sitio web de AFNIC ofrece un **[Directorio de registradores](https://www.afnic.fr/fr/votre-nom-de-domaine/comment-choisir-et-creer-mon-nom-de-domaine/annuaire-des-bureaux-d-enregistrement/)**.

<br>

---
---

<br>
<br>

---

## **A recordar**

---

<br>

- **El nombre de dominio es un identificador único que se utiliza para "ocultar" la dirección IP de un servidor.**

- **Este nombre de dominio se adquiere por un tiempo limitado a través de un registrador.**

<br>

---

---

<br>
<br>

---

### **Complemento**

---

<br>

- **[ICANN](https://www.icann.org/)**



- **[AFNIC](https://www.afnic.fr/)**

<br>

---
---