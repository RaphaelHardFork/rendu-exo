//Ici on reprend les fonctions crées dans calc.js
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


const foreach = (tab, func) => {
  let newTab = []
  for (let elem of tab) {
    newTab.push(func(elem, elem))
  }
  return newTab
}


table = [3, 4, 5, 6, 7]
console.log(foreach(table, div))