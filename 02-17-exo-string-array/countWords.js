let text = `Je suis le ténébreux, - le veuf, - l'inconsolé,
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

console.log(text.split(' '))
//Le problème ici c'est que le texte est mal formaté, ainsi certains mots ne sont pas séparé à cause du \n


let sonnet = "Je suis le ténébreux, - le veuf, - l'inconsolé, \
Le prince d'Aquitaine à la tour abolie : \
Ma seule étoile est morte, - et mon luth constellé \
Porte le soleil noir de la Mélancolie. \
\
Dans la nuit du tombeau, toi qui m'as consolé, \
Rends - moi le Pausilippe et la mer d'Italie, \
La fleur qui plaisait tant à mon cœur désolé, \
Et la treille où le pampre à la rose s'allie. \
\
Suis - je Amour ou Phébus ? ...Lusignan ou Biron ? \
Mon front est rouge encor du baiser de la reine; \
J'ai rêvé dans la grotte où nage la sirène... \
\
Et j'ai deux fois vainqueur traversé l'Achéron; \
Modulant tour à tour sur la lyre d'Orphée \
Les soupirs de la sainte et les cris de la fée."

console.log(sonnet.split(' '))
nbWord = 0
text = sonnet.split(' ')

text.forEach(element => {
  if (element === '?' || element === '-') {
  } else {
    nbWord++
  }
})
console.log(`Il y a ${nbWord} mots dans le sonnet.`)

//Ou plus simplement et si on compte les ? et -
console.log(`Il y a ${text.length} mots dans le sonnet`)