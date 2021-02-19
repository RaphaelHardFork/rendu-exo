// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'JustASimplePassword'

console.log(Number.isNaN(6))
console.log(Number.isNaN(Number('AKNXK')))
console.log(String.fromCharCode(35))



const crackme9 = (password) => {
  if (password.startsWith('Just') && password.endsWith('Password')) {
    let tmp1 = password.slice(4).slice(0, -8)  //Attention à ce que retient la fonction .slice()
    tmp1 = tmp1.split('').reverse().join('')
    if (Number.isNaN(Number(tmp1))) {  //Est faux que si il n'y a rien dans tmp1 ou si ce sont des nombres (même en string)
      tmp1 += String.fromCharCode(35)
      if (tmp1 === 'e' + 'l' + 'p' + 'm' + 'iSA#') {
        console.log('OK')
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}
crackme9(password)