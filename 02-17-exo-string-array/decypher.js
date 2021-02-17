let code = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ\
 IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL \
 BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'

// Test pour comprendre les fonctions
console.log('HELLO'.charCodeAt(3))
console.log(String.fromCharCode(34))

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
for (i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i].charCodeAt(0))
} //Donne toutes les codes des lettres majuscules de l'alphabet (entre 65 et 90)

for (j = 65; j <= 90; j++) {
  console.log(String.fromCharCode(j))
} //Affiche toutes les lettres de l'alphabet via le code ASCII



//Déchiffrement :
//Problème rencontré : Le code ASCII doit être entre 65 et 90 sinon des chiffres, symboles et des minuscules apparaissent.

//Mes variables 
let decipheredCode = '' //Cette variable contiendra l'ensemble du message déchiffré 
let d = 0 //d représente le décalage

/*
Les deux variables suivantes doivent être déclarée à l'intérieur des boucles 
let codedLetter = code[i].charCodeAt()                          Le code ASCII de ma lettre à déchiffrer
let decipheredLetter = String.fromCharCode(codedLetter + d)     La lettre modifiée après un décalage de 'd'
*/

//Le programme
for (d = 0; d < 27; d++) {
  decipheredCode = '' //On vide la variable avant chaque essaie pour un certain décalage
  console.log('\nCode Caesar décalé par ' + d)

  for (i = 0; i < code.length; i++) {
    //Mes variables déclarées dans les boucles
    let codedLetter = code[i].charCodeAt() //Le code ASCII de ma lettre à déchiffrer
    let decipheredLetter = String.fromCharCode(codedLetter + d) //La lettre modifiée après un décalage de 'd'

    if (code[i] !== ' ') {

      if ((codedLetter + d) > 90) {
        decipheredLetter = String.fromCharCode((codedLetter + d) - 26)  //90 et 26 proviennent du problème cité ci-dessus
        decipheredCode += decipheredLetter

      } else {
        decipheredCode += decipheredLetter
      }
    } else {
      decipheredCode += ' '
    }
  }
  console.log(decipheredCode)
}
