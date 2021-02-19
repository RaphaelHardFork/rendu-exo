// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme

let password = ''

for (let i = 0; i < 150; i++) {  //Pour ne pas le faire manuellement
  let div = 1337 / i
  if ((div % 1) !== 0) {
  } else {
    password = String.fromCharCode(div).repeat(i)
  }
}

GoodChar = String.fromCharCode(1)
password = GoodChar.repeat(1337)

console.log(String.fromCharCode(127))



const crackme4 = (password) => {
  let tmp1 = 0
  for (let i = 0; i < password.length; ++i) {
    tmp1 += password.charCodeAt(i)
  }
  console.log(tmp1)
  if (tmp1 === 1337) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme4(password)