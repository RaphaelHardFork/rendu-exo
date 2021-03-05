const isOdd = (nb) => {
  let odd
  if (nb % 2 === 0) {
    odd = false
  } else {
    odd = true
  }
  return odd
}

/*
const isEven = (nb) => {
  let even
  if (isOdd(nb)) {
    even = false
  } else {
    even = true
  }
  return even
}
*/

//Pour simplifier cette fonction

const isEven = (nb) => {
  return !isOdd(nb)
}

console.log(isOdd(6) ? 'true' : 'false')

console.log(isEven(6) ? 'true' : 'false')