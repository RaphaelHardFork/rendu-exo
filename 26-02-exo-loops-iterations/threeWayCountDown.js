//Ecrire avec 3 boucles différentes, un décompte de 101 à 1 en décomptant de 2 en 2: L'affichage attendu:
console.log('Boucle 1')
for (let i = 101; i >= 0; i--) {
  if (i % 2 === 0) {
    continue
  } else {
    console.log(i)
  }
}

console.log('Boucle 2')
i = 101
while (i >= 0) {
  if (i % 2 === 0) {
    i--
    continue
  } else {
    console.log(i)
    i--
  }
}

console.log('Boucle 3')
i = 101
do {
  if (i % 2 === 0) {
    i--
    continue
  } else {
    console.log(i)
    i--
  }
} while (i >= 0)