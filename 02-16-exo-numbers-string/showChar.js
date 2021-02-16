let phrase = 'C\'était à Mégara, faubourg de Carthage, dans les jardins d\'Hamilcar.'
//«Carthage», par Daniel Rondeau, NiL Editions, 184 p., 18 euros.

console.log(phrase)
console.log(`\nCette phrase de ${phrase.length} caractère est issue du livre "Carthage" écrit par Daniel Rondeau.\n`)

for (i = 0; i < phrase.length; i++) {
  console.log(`Le caractère ${phrase[i]} est à l'index ${i}`)
}

// On peut noter que le caractère \' compte toujours comme un caractère