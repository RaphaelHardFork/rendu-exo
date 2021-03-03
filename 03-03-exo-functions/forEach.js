table = [3, 4, 5, 6, 7]

table.forEach(elem => {

});

const mul = (a, b) => {
  return a * b
}

const foreach = (tab, fonction) => {
  let result = []
  for (i = 0; i < tab.length; i++) {

    result.push(mul(tab[i], 10))
  }
  return result
}

console.log(foreach(table, mul()))