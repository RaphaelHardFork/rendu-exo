// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'auBBBBBBu'

//Il faut entrer un nombre impair de voyelles pour avoir le bon code


let test2 = '2346765'.split()
console.log(test2.map((elem) => Number(elem)))
test2 = test2.map((elem) => Number(elem))

console.log(test2.reduce((A, B) => {
  return A + B + 5
}, 5))






const crackme10 = (password) => {
  if (
    password
      .trim()
      .toLowerCase()
      .split('')
      .filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem)) //Permet de prendre en compte uniquement les voyelles 
      .map((elem) => elem.charCodeAt())  //Convertie les voyelles en CharCode
      .reduce((a, b) => { //La fonction .reduce() ici ne sert à rien. Elle permet d'ajouter chiffre ou lettre au début de notre tableau
        return a + b
      }, 0) %
    2 !==
    0
  ) {
    console.log(password)
    console.log('OK')
  } else {
    console.log(password)
    console.log('BAD')
  }
}

crackme10(password)