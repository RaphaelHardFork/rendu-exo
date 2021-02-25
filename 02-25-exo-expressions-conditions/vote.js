let age = 18
let canVote = false

//On rentre directement l'expression dans le console log
console.log(age >= 18 ? 'You can vote' : 'You cannot vote')

//Si l'on a besoin de la variable canVote pour d'autres commandes
canVote = age >= 18 ? canVote = true : canVote = false

console.log(canVote ? 'You can vote' : 'You cannot vote')