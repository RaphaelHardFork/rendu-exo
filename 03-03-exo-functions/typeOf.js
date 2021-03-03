const TypeOf = (unknowType) => {
  let type = ''
  type += typeof unknowType
  return type
}

console.log(TypeOf(5666))
console.log(typeof TypeOf(5666))