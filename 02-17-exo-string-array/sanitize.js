let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

console.log(str)


let trimmedStr = str.trim() //Permet de retirer les espaces vides inutiles

console.log(trimmedStr.toLowerCase())

//Pour ajouter une majuscule au début de la phrase
let sanitizedStr = trimmedStr[0].toUpperCase() + trimmedStr.slice(1, trimmedStr.length).toLowerCase()

console.log(sanitizedStr)