let array = ["Apple", "HP", "Acer"]; // (1)

console.log (array); // (8)

let marcas = ""; // (2)

for (let i /*(4)*/ of array) { // (3)

  marcas += i + ", "; // (5)

}

console.log (marcas); // (6)