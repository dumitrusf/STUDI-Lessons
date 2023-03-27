// Declara una variable constante llamada 'heigth' y asígnale el valor 10
const heigth = 10

// Crea un bucle for que iterará desde 0 hasta el valor de 'heigth' (10)
for (let h = 0; h < heigth; h++) {
  // Declara una variable llamada 'line' y asígnale una cadena vacía
  let line = ''
  
  // Crea otro bucle for que iterará desde 0 hasta el valor de 'heigth' (10)
  for (let w = 0; w < heigth; w++) {
    // Concatena un asterisco (*) a la variable 'line'
    line = line + '*'
  }
  
  // Registra el valor de la variable 'line' en la consola
  console.log(line)
}