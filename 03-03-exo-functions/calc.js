const add = (a, b) => {
  return a + b
}

const sub = (a, b) => {
  return a - b
}

const mul = (a, b) => {
  return a * b
}

const div = (a, b) => {
  return a / b
}

const calc = (a, x, b) => {
  let result
  switch (x) {
    case '*':
      result = mul(a, b)
      break
    case '/':
      result = div(a, b)
      break
    case '+':
      result = add(a, b)
      break
    case '-':
      result = sub(a, b)
      break
    default:
      console.log('Wrong opperator')
  }
  return result
}

console.log(calc(45, '/', 10))