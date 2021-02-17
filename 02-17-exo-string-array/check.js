let text = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'

console.log(text.indexOf("Javascript"))
console.log(text.lastIndexOf("Javascript"))
//L'output est toujours la première lettre du mot recherché. Si ce mot n'existe pas, l'output est -1.

let word = 'Javoscript'

if (text.indexOf(word) !== -1) {
  console.log(`Le mot "${word}" à été trouvé à l'index ${text.indexOf(word)}.`)
} else {
  console.log(`Le mot "${word}" est introuvable.`)
}