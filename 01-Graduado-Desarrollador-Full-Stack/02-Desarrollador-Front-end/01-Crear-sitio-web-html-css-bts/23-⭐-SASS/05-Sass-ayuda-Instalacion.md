# **⭐ Muy Importante: Instalación sass con consola manualmente en cualquier otro PC⭐**

<br>

---

## **1. Iniciar VSC y crear `index.html`**

No escribas ninguna línea de código sin antes leer todo.

Al final hay una sorpresa para compilar todas las carpetas.

Léelo todo hasta abajo, y después empiezas.

*Lo primero de todo es haber instalado Node.js en nuestro equipo desde el sitio oficial (Es fácil).*

**Después** vamos a nuestro proyecto en VSC y **abrimos la terminal** `(Git Bash, (podemos incluir gitbash en VSC sin necesidad de abrirla la original en ventana separada))` en la cual escribiremos el siguiente comando.

<br>

---

**Para verificar que hemos instalado `Node.js` correctamente:**

```
node -v
```

---

**A continuación, instalaremos Sass de la siguiente manera:**

```
npm install -location=global sass
```

---


**Después de esto, podemos verificar la instalación de Sass ejecutando el siguiente comando:**

```css
sass --version
```

---


**Podemos usar el siguiente comando para compilar de SCSS a CSS, manualmente a cada vez que queramos ejecutar Sass:**

```css
sass ./src/scss/styles.scss  ./src/css/styles.css
```

---


**Sin embargo, este comando no estará escuchando los cambios en los archivos.**

**Para tener una compilación automática, podemos utilizar el siguiente comando ( --watch ):**

```css
sass --watch ./src/scss/styles.scss  ./src/css/styles.css
```

---

<br>

**Utilizamos `--watch` para que Sass esté continuamente escuchando los cambios en los archivos SCSS y compilará automáticamente los cambios cada vez que guardemos el archivo.**

**Si en algún momento deseamos detener la compilación automática, simplemente presionamos `Ctrl + C`.**

---
---

<br>

<br>

---

## **Rutas relativas en sistemas de archivos**

---

<br>

**Las rutas en un sistema de archivos se pueden expresar de dos formas:**

- **Rutas absolutas:**

  - Son rutas que especifican la ubicación exacta de un archivo o directorio desde la raíz del sistema de archivos. No dependen de la ubicación actual.

<br>  
  
- **Rutas relativas:**

  - Son rutas definidas en relación con el directorio actual.
  
  - **Utilizan referencias relativas como:** 
  
    - **" ` ./ ` "**:
    
      y 
      
    - **" ` ../ ` "**
  
<br>
  
**A continuación, explicaremos cómo funcionan las rutas relativas y las referencias `./` y `../`.**

---
---

<br>

<br>

---

### **`./` - Directorio actual**

---

**El símbolo `./` representa el directorio actual (Carpeta que contiene el archivo en el que estamos).**

**Si estamos en el directorio `proyecto/css/otros.css` y queremos hacer referencia a un archivo `estilos.css` que se encuentra en la misma carpeta que `otros.css`, podemos utilizar la ruta relativa `./estilos.css`.**

<br>

---

**Asi:**

```css
proyecto/
  ├── css/
  │   ├── estilos.css
  │   └── otros.css
  ├── img/
  │   └── logo.png
  └── js/
      └── script.js

```

---
---

<br>
<br>

---

### **`../` - Directorio padre**

---

<br>

**El símbolo `../` representa el directorio padre.**

**Si estamos en el directorio `proyecto/css/estilos.css (independientemente del archivo que estemos editando dentro del directorio "proyecto/css")` y queremos enlazar (en una url por ejemplo de background-image de css),el archivo `logo.png` que está en el directorio `proyecto/img`, podemos utilizar la ruta relativa `../img/logo.png`.**

<br>

---

**A continuación, presentamos un ejemplo con una estructura de directorios para ilustrar mejor el funcionamiento de las rutas relativas:**

```css
proyecto/
  ├── css/
  │   └── estilos.css
  ├── img/
  │   └── logo.png
  └── js/
      └── script.js
```

---

<br>

Supongamos que estamos en el directorio `proyecto/css` y queremos hacer referencia al archivo `logo.png`. Utilizaremos la ruta relativa `../img/logo.png`.

En este caso con `../` salimos del directorio actual (`css`) y entramos al directorio padre (`proyecto`), desde donde podemos acceder al directorio `img` y al archivo `logo.png`.

<br>

---

<br>

Si nos encontramos en el directorio `proyecto/js` y queremos hacer referencia al archivo `estilos.css`, utilizaremos la ruta relativa `../css/estilos.css`.

Aquí, `../` nos lleva al directorio padre (`proyecto`) y luego accedemos al directorio `css` y al archivo `estilos.css`.

<br>

---

<br>

En resumen, `./` se utiliza para referirse al directorio actual y `../` se utiliza para referirse al directorio padre.

Al combinar estas referencias con los nombres de archivos y directorios, podemos construir rutas relativas para acceder a diferentes niveles de la estructura de directorios.

---

---

<br>

<br>

---

## **No mas `.map`**

---

<br>

**Si no deseamos generar el `source map` al compilar el SCSS, podemos utilizar la opción `--no-source-map` de la siguiente manera:**

```css
sass --watch --no-source-map ./src/scss/styles.scss  ./src/css/styles.css
```

---

<br>

**La opción "`--no-source-map`" indica a Sass que no genere el archivo de mapas de origen (`*.css.map`), lo cual puede ser útil en ciertos casos.**

---

---

<br>

<br>

---

## **1. Automatizar la escucha de SCSS**

---

<br>

#### **Opción 1: Configurar `package.json`**

**Para automatizar la compilación cada vez que se realicen cambios en los archivos SCSS, puedes seguir estos pasos:**

- **En la terminal, en el directorio raíz de tu proyecto, ejecuta el siguiente comando para crear un archivo `package.json`:**

```

    npm init -y

```

---

<br>

**Esto creará un archivo `package.json` en el directorio raíz con la configuración por defecto.**

---

<br>

---

### **Opción 2: Ejecutar comando manualmente**

- **Puedes ir directamente al directorio raíz del proyecto y ejecutar manualmente el siguiente comando:**

```css
    sass --watch --no-source-map ./src/scss/styles.scss  ./src/css/styles.css
```

---

<br>

Sin embargo, esta opción **no automatiza el proceso.**

---
---

<br>

---

## **2. Abre el archivo `package.json` y agrega el siguiente código de ejemplo en la sección `"scripts"`:**

```json
{
  "name": "05-sass-s",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "sass": "rm -rf ./src/css & sass --watch ./src/scss/styles.scss ./src/css/styles.css"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

---

<br>

Reemplaza `"05-sass-s"` con el nombre de tu proyecto.

---

<br>

---

### **2.5 Explicación: Eliminación del directorio CSS existente con `rm -rf` y por que hacerlo**

---

<br>

_Antes de compilar los archivos Sass, es recomendable eliminar el directorio CSS existente para asegurarse de que los estilos se generen desde cero._

**Esto asegura que cualquier archivo CSS existente sea eliminado antes de la compilación, evitando posibles conflictos o residuos de estilos anteriores.**

En este caso, se utiliza el comando **`rm -rf`** en el script de Sass para lograrlo.

<br>

---

<br>

El comando `rm -rf` se utiliza para eliminar directorios y archivos de forma recursiva y forzada.

<br>

---
---

<br>

La opción `-r` indica que la eliminación debe realizarse de forma recursiva, es decir, eliminar todos los archivos y directorios contenidos en el directorio especificado.

La opción `-f` indica que la eliminación debe ser forzada, lo que significa que no se solicitará confirmación para eliminar los archivos.

<br>

---
---

<br>

**En el script de Sass dado:**

```json
"scripts": {
  "sass": "rm -rf ./src/css && sass --watch ./src/scss/styles.scss ./src/css/styles.css"
}
```

**El comando `rm -rf ./src/css` se ejecuta antes de la compilación de Sass.**

---

<br>

---

## **3. Guarda el archivo `package.json`.**

---

## **4. Para iniciar la compilación automática de SCSS, ejecuta el siguiente comando en la terminal:**

---

```bash
npm run sass
```

**Esto ejecutará el script `"sass"` que definiste en el archivo `"package.json"`, y Sass estará escuchando los cambios en los archivos SCSS, compilándolos automáticamente cada vez que se guarden cambios.**

---
---

<br>

---

## **Pequeños recordatorios**

---

<br>



<br>

**3.** Iniciar Git (`git init`), activar Git Large File Storage y preparar `.gitkeep` y `.gitignore`.

---
<br>

**4.** Instalar Bootstrap mediante npm en la consola de Git en VSC.

---
<br>

**5.** Crear el mixin `_responsive.scss` con el código responsive que tengas disponible.

---
<br>

**6.** No olvides activar Code Spell, instalandolo desde las extensiones de VSCode.

---
<br>

**7.** Crear el logo que está en la parte superior de la pestaña de cualquier página web, toda la ayuda posible se encuentra en la carpeta `programming`, **aqui la pagina web que nos ayudara:**.

👇

**[https://realfavicongenerator.net/](https://realfavicongenerator.net/)**

---
---