let vrai = true
let faux = false

console.log(!(faux || faux))
console.log(!(vrai || faux))
console.log(!(faux || vrai))
console.log(!(vrai || vrai))