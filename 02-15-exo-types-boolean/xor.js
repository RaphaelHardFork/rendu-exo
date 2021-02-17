let a = true
let b = true

//Méthode 1
if ((a || b) && !(a && b)) {
  console.log('True')
} else {
  console.log('False')
}

//Méthode 2
if ((!a && b) || (a && !b)) {
  console.log('True')
} else {
  console.log('False')
}