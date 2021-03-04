const filtre = (tab, sup) => {
  let newTab = []
  for (let elem of tab) {
    if (elem > sup) {
      newTab.push(elem)
    }
  }
  return newTab
}

table = [1, 3, 5, 6, 3, 7, 8, 9, 65, 76]

console.log(filtre(table, 4))
console.log(table.filter(nb => nb > 4))