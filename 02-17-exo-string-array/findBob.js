let text =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let wordInput = 'BOB' //input
let word = wordInput.toLowerCase()
let search = text.toLowerCase().indexOf(word)

if (search !== -1) {
  console.log(`Le mot "${word}" se trouve à l'index ${search}.`)
} else {
  console.log(`Le mot "${word}" est introuvable.`)
}

//Peut-on utiliser le 'i' de la fonction .replace pour la fonction .indexOf ?