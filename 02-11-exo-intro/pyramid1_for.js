star = ''
for (let count = 0; count <= 6; count = count + 1) {// "count + 1" peut être écrit "count ++"
  star = star + '*' // peut être écrit -> star += '*'
  console.log(star)
}

//En utilisant la fonction .length
for (let dot = '*'; dot.length < 8; dot = dot + '*') {
  console.log(dot)
}

//La meilleur solution car plus épuré et utilise la fonction .repeat (pas de création de variable pour les *)
for (let i = 1; i < 9; i++) {
  console.log('*'.repeat(i))
}

//Pour la deuxième pyramide : 
space = ' '
dot = '*'
tot = 16
for (let line = 1; line < 9; line++) {
  console.log(dot.repeat(line) + space.repeat(tot - 2 * line) + dot.repeat(line))
}