// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '4321drowssap'

/*
On peut lire les fonctions avec :
 .split pour séparer les caractères dans un tableau
 .reverse() pour inverser un tableau
 .join() pour transformer un tableau en string
*/

const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'password1234') {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme5(password)