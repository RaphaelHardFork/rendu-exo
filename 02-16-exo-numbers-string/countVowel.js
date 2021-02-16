let texte = `Je suis le ténébreux, - le veuf, - l'inconsolé,
Le prince d'Aquitaine à la tour abolie :
Ma seule étoile est morte, - et mon luth constellé
Porte le soleil noir de la Mélancolie.

Dans la nuit du tombeau, toi qui m'as consolé,
Rends - moi le Pausilippe et la mer d'Italie,
La fleur qui plaisait tant à mon cœur désolé,
Et la treille où le pampre à la rose s'allie.

Suis - je Amour ou Phébus ? ...Lusignan ou Biron ?
Mon front est rouge encor du baiser de la reine;
J'ai rêvé dans la grotte où nage la sirène...

Et j'ai deux fois vainqueur traversé l'Achéron;
Modulant tour à tour sur la lyre d'Orphée
Les soupirs de la sainte et les cris de la fée.`

let nbVowel = 0
let nbVowel2 = 0

for (i = 0; i < texte.length; i++) {
  let y = texte[i].toLowerCase()
  if (y === 'a' || y === 'e' || y === 'u' || y === 'i' || y === 'o' || y === 'y') {
    nbVowel++
    nbVowel2++
  } else if (y === 'à' || y === 'é' || y === 'è' || y === 'ê' || y === 'ù') {
    nbVowel2++
  }
}
console.log(`Il y a ${nbVowel} voyelles dans le texte. ${nbVowel2} si on compte les voyelles avec des accents.`)