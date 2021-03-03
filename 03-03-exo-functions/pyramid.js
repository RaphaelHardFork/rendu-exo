const pyramid = (base, reverse, char) => {
  let str = ''
  char = String(char)
  if (reverse) {
    for (i = base; i > 0; i--) {
      str += char.repeat(i) + (i !== 1 ? '\n' : '')
    }

  } else {
    for (i = 1; i <= base; i++) {
      str += char.repeat(i) + (i !== base ? '\n' : '')

    }
  }
  return str
}

console.log(pyramid(6, false, 7))
console.log(pyramid(8, true, 'A'))