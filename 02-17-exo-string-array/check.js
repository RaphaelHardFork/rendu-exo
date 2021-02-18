let text = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'

console.log(text.indexOf("Javascript"))
console.log(text.lastIndexOf("Javascript"))
//L'output est toujours la première lettre du mot recherché. Si ce mot n'existe pas, l'output est -1.

let word = 'Javascript'

//Méthode (.indexOf())
if (text.indexOf(word) !== -1) {
  console.log(`Le mot "${word}" à été trouvé à l'index ${text.indexOf(word)}.`)
} else {
  console.log(`Le mot "${word}" est introuvable.`)
}

//Méthode alternative (.includes())
if (text.includes(word)) {
  console.log(`Le mot "${word}" à été trouvé`)
} else {
  console.log(`Le mot "${word}" est introuvable.`)
}

//Méthode alternative (.search()), similaire à .indexOf()
if (text.search(word) !== -1) {
  console.log(`Le mot "${word}" à été trouvé à l'index ${text.search(word)}.`)
} else {
  console.log(`Le mot "${word}" est introuvable.`)
}


//Méthode pour mettre un "if" rapidement
console.log(`Le mot "${word}" ${text.includes(word) ? 'à été trouvé' : 'est introuvable'} dans la phrase`);