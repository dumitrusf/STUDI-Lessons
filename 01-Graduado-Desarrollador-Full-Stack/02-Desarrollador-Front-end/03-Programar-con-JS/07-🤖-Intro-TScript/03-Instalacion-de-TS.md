# Instalación de TypeScript

En esta sección, vamos a proceder con la instalación del compilador TypeScript. No hay restricciones con respecto al sistema operativo; se puede usar en Windows, Mac o Linux.

La instalación no es obligatoria si deseas trabajar en runtimes (entornos de ejecución) que soportan nativamente TypeScript, como Deno o Bun, o directamente en el Playground de TypeScript.

## Cómo ejecutar código JavaScript
Antes de ver cómo instalar y compilar TypeScript, primero vamos a explorar cómo y dónde ejecutar código JavaScript.

El código JavaScript se puede ejecutar en diferentes tipos de entornos. Puede ejecutarse en un navegador como Chrome, Brave, en el Playground de TypeScript o en un runtime como Node.js.

## Ejecutar código JavaScript en un navegador
En el primer caso, que involucra a los navegadores, solo necesitas lanzar tu navegador, hacer clic derecho en él y seleccionar "Inspeccionar". También puedes utilizar el atajo de teclado presionando la tecla "F12". Estos pasos son válidos para todos los navegadores.

A primera vista, hay muchos elementos en el panel que aparece, pero lo que nos interesa es solamente la consola. Haz clic en la consola para abrirla y luego puedes probar la ejecución de tu código.

```javascript
let student1 = {
      nom : "Toto",
      note : 17
}
console.log(student1);
```

Podemos ver que nos devuelve nuestro valor; por lo tanto, nuestro código funciona.

## Ejecutar código JavaScript en el Playground
Vamos a ver cómo ejecutarlo en el Playground de TypeScript. Simplemente haz clic en el siguiente enlace para acceder al Playground y luego inserta tu código y haz clic en "Ejecutar".

Ten en cuenta que el Playground se utiliza principalmente para compilar código TypeScript a JavaScript, pero también sirve para ejecutar código JavaScript.

### Ejecutar código en un Runtime

Ahora que hemos visto cómo ejecutar nuestro código en un navegador y en un playground, veamos cómo ejecutarlo en un runtime o entorno de ejecución. Utilizaremos Node.js como runtime.

## ¿Qué es Node.js?

Node.js es un runtime o un entorno de ejecución de JavaScript en el lado del servidor, que permite ejecutar código JavaScript fuera de un navegador. Node.js nos permite desarrollar aplicaciones en el lado del servidor, herramientas de línea de comandos, scripts automatizados y mucho más.

Incluye una biblioteca de módulos integrada, lo que facilita el desarrollo de aplicaciones al ofrecer acceso a una amplia variedad de funciones. A menudo se usa para la creación de servidores web, pero también puede ser utilizado para crear aplicaciones de escritorio, aplicaciones móviles, juegos, etc.

## Ejecutar de código JavaScript en un Runtime

Para poder utilizar Node.js, tendremos que instalarlo. Para hacerlo, basta con ir al sitio oficial de Node.js y descargar la versión más reciente, preferiblemente la versión estable, y luego ejecutar el instalador.

Pero antes, verifiquemos que Node.js se haya instalado correctamente en tu ordenador escribiendo el siguiente comando: `node -v`. Este comando también nos muestra la versión de Node.js que está instalada. Una vez instalado Node.js, podemos proceder a ejecutar nuestro código.

Utilicemos el mismo código que antes para la prueba:

```javascript
let student1 = {
      nom: "Toto",
      note: 17
}
console.log(student1);
```

Si el código se ejecuta correctamente, eso significa que no hay errores.

## ¿Cómo instalar el compilador TypeScript?

Ahora que hemos visto cómo ejecutar JavaScript, vamos a ver cómo ejecutar TypeScript. Si intentamos de inmediato compilar el código TypeScript, no funcionará porque primero debemos instalar un compilador TypeScript.

## ¿Qué es un compilador TypeScript?
Un compilador TypeScript es un paquete NPM que toma código escrito en TypeScript y lo traduce a código JavaScript (que puede ser comprendido por un navegador web o por un entorno de ejecución JavaScript como Node.js). También ofrece características avanzadas como la generación automática de archivos, la transformación de código basada en decoradores, opciones de configuración flexibles y mucho más.

## ¿Qué es NPM?

NPM significa Node Package Manager o gestor de paquetes para Node. Es una colección gigantesca de paquetes JavaScript (aproximadamente 2 millones de paquetes).

Tiene al menos 17 millones de usuarios en todo el mundo, lo cual no es insignificante. Según sus fundadores, su objetivo es hacer que el desarrollo con JavaScript sea más rápido y seguro.

## Instalación de NPM
Veamos cómo instalar el gestor de paquetes NPM. Si vamos al sitio de NPM, npmjs Docs, se indica que primero debemos instalar Node.js, y NPM se instala automáticamente durante este proceso.

Como ya hemos instalado Node.js, NPM también debería estar instalado. Node.js instala automáticamente NPM, ya que es un gestor de paquetes que se utiliza a menudo junto con Node.js para instalar módulos y paquetes de terceros. Para verificar si NPM está instalado, ingresamos el siguiente comando en un terminal: `npm -v`.

Podemos ver que NPM se ha instalado correctamente, ya que la versión instalada se muestra en el terminal. Si NPM no está instalado, es posible instalarlo escribiendo el siguiente comando en el terminal: `npm install -g npm`. Es recomendable hacerlo incluso si ya está instalado para evitar problemas de autorización cuando se utilizan paquetes de NPM.

### Instalación del compilador de TypeScript
Ahora que hemos instalado NPM, podemos proceder a instalar el paquete de compilación de TypeScript. Para hacerlo, basta con ejecutar el siguiente comando: `npm install -g typescript` (`-g` significa global). Ten en cuenta que hemos instalado TypeScript de forma global, pero también podemos instalarlo localmente. Para instalarlo localmente, solo tienes que escribir el siguiente comando en el terminal: `npm install typescript --save-dev`. A veces es preferible instalarlo localmente cuando tenemos varios proyectos con diferentes versiones.

En nuestro caso, tenemos varios proyectos pero con las mismas versiones. Por lo tanto, es más sencillo instalarlo de manera global, especialmente porque cambiamos de un proyecto a otro.

### Verificación del compilador de TypeScript
Para comprobar si el compilador de TypeScript se ha instalado correctamente, vamos a ejecutar el siguiente comando: `tsc -v`, lo cual también nos permite ver la versión (`-v` para versión).

Ahora que todo está correctamente instalado, podemos proceder a la compilación de nuestro código TypeScript. Para hacerlo, basta con escribir nuestro código TypeScript en el IDE o editor de texto y luego ingresar el siguiente comando en el terminal: `tsc`, seguido del nombre del archivo TypeScript que deseamos compilar. Ejemplo: `tsc test1.ts` (el `.ts` no es obligatorio).

```javascript
//Objeto TypeScript
let client = {
      nom : "Aubergine",
      tel : 7777777777
}
console.log(client.nom);
```

## La necesidad de ejecutar JavaScript para trabajar con TypeScript
Es necesario aprender a ejecutar código JavaScript para programar con TypeScript, ya que debemos compilar el código TypeScript a JavaScript para que se ejecute en un navegador o en un entorno de ejecución como Node.js. Sin embargo, si usamos un entorno de ejecución que soporta nativamente TypeScript (como Deno, Bun, etc.), ya no será necesario seguir estos pasos. Además, si trabajas con frameworks frontend que soportan TypeScript de forma nativa, como Angular, no habrá necesidad de compilar.

## Compilación de un Proyecto TypeScript
Hemos visto cómo ejecutar código JavaScript, luego instalamos el compilador de TypeScript y compilamos código TypeScript. Ahora vamos a compilar un proyecto TypeScript completo.

## ¿Cómo compilar un proyecto TypeScript?
Compilar un proyecto TypeScript en un proyecto JavaScript es similar a compilar un archivo o código TypeScript en JavaScript, excepto que en este caso estamos compilando varios archivos a la vez. Para hacerlo, es necesario crear un archivo `tsconfig.json` que permite especificar las diferentes opciones para indicar al compilador cómo debe compilar el proyecto.

Aquí hay un ejemplo de un archivo `tsconfig.json` que permite especificar las opciones de compilación:

```json
{
      "compilerOptions": { 
            "target": "ES6",                  // Versión de ECMAScript 6
            "outDir": "dossierJS",            // Nombre del directorio de destino para los archivos JavaScript
      },
      "include": [
            "**.ts"                           // Tipo de archivo a compilar
      ]
}
```

Para compilar el proyecto, basta con escribir el comando `tsc` en el terminal, y se generará la carpeta que contiene los archivos JavaScript.

Ten en cuenta que hay muchas más opciones de configuración disponibles, pero aquí nos hemos limitado a las más básicas.