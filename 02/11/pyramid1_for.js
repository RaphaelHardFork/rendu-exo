star = ''
for (let count = 0; count <= 6; count = count + 1) {
  star = star + '*'
  console.log(star)
}

//En utilisant la fonction .length
for (let dot = '*'; dot.length < 8; dot = dot + '*') {
  console.log(dot)
}