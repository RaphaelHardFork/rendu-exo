let vrai = "Ma réponse est TRUE"
let faux = "Ma réponse est FALSE"

let res1 = (true && false) || (false && true)
console.log('1/' + res1)
console.log(faux)

let res2 = 10 > 11 && 11 > 10
console.log('2/' + res2)
console.log(faux)

let res3 = (true || false) && true
console.log('3/' + res3)
console.log(vrai)

let res4 = (!true && !false) || (!false && !false)
console.log('4/' + res4)
console.log(vrai)

let res5 = 'Hello' === 'Hello' && 'World' == 'Word'
console.log('5/' + res5)
console.log(faux)

let res6 = (!(20 >= 20) && 7 === 7) || true
console.log('6/' + res6)
console.log(vrai)

let res7 = '1' === 1 && '2' == 2 && '3' === 3
console.log('7/' + res7)
console.log(faux)

let res8 = !res7
console.log('8/' + res8)
console.log(vrai)

let res9 = !res8
console.log('9/' + res9)
console.log(faux)

let res10 =
  (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)
console.log('10/' + res10)
console.log(vrai)