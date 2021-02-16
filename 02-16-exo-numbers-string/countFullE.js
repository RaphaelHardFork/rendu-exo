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

let nb_e = 0
let nb_eE = 0

for (i = 0; i < texte.length; i++) {
  if (texte[i] === 'e') {
    nb_e++
    nb_eE++
  } else if (texte[i] === 'E') {
    nb_eE++
  }
}
console.log(`Il y a ${nb_e} "e" dans le texte et ${nb_eE} en comptant les majuscules.`)


//Si l'on ne veut pas faire de distinction entre les minuscules et les majuscules :
nb_e = 0
for (i = 0; i < texte.length; i++) {
  if (texte[i].toUpperCase() === 'E') {
    nb_e++
  }
}
console.log(`Il y a ${nb_e} "e" dans le texte.`)