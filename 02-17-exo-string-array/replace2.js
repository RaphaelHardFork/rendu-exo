let text = `In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions\
 about cryptographic protocols or systems.
As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a \
particular meaning.
The most common characters are Alice and Bob.Eve, Mallory, and Trent are also common names.`

let myName = 'Raphael'

//ATTENTION la commande en dessous est du regex.
console.log(text.replace(/Alice/g, myName))   //'g' pour toutes les occurences de la recherche
console.log(text.replace(/ALICE/gi, myName))  //'i' pour ignorer la case (majuscule/minuscule)

//Méthode alternative
console.log(text.replaceAll('Alice', myName))