let tokens = [1, 2, 3, 4, 5]
let numbers = Object.assign([], tokens)

tokens[2] = 98

console.log(tokens, numbers)