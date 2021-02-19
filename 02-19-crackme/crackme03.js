// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '@aa!aaaaaaaaaa'

console.log(password.length) //Vérification des paramètres
console.log(password[0])
console.log(password[3])

const crackme3 = (password) => {
  if (password.length === 14 && password[0] === '@' && password[3] === '!') {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme3(password)