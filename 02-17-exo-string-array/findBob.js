let text =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let wordInput = 'ET' //input
let word = wordInput.toLowerCase()
let search = text.toLowerCase().indexOf(word)

if (search !== -1) {
  console.log(`Le mot "${word}" se trouve à l'index ${search}.`)
} else {
  console.log(`Le mot "${word}" est introuvable.`)
}
//Ce programme ne trouve qu'un seul bob