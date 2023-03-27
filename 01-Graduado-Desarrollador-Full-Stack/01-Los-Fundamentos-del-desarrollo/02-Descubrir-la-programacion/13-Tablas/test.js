const grupos = [
  ['Manon', 'Lou', 'Alexandre'],
  ['Lucas', 'Antonin', 'Ayman'],
  ['Elliot', 'Kylian', 'Alix'],
  ['Cassandre', 'Tom', 'Erika']
]
for (let i = 0; i < grupos.length; i++) {
  console.log('\nGrupo', i)
  for (let j = 0; j < grupos[j].length; j++) {
    console.log(grupos[i][j])
  }
}