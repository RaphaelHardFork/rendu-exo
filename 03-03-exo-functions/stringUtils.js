const reversestr = (str) => {
  str = str.split('').reverse().join('')
  return str
}

console.log(reversestr('S A T O R'))
console.log(reversestr('A R E P O'))
console.log(reversestr('T E N E T'))
console.log(reversestr('O P E R A'))
console.log(reversestr('R O T A S'))

const isPalindrome = (str) => {
  let palindrome
  if (str === reversestr(str)) {
    palindrome = true
  } else {
    palindrome = false
  }
  return palindrome
}

console.log(isPalindrome('TENET') ? 'true' : 'false')