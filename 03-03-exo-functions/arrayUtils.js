const biggest = (tab) => {
  let bigNb = tab[0]
  for (i = 0; i < tab.length; i++) {
    if (bigNb < tab[i]) {
      bigNb = tab[i]
    }
  }
  return bigNb
}

const sortAscend = (tab) => {
  let copyTab = [...tab] //Bien utiliser le spread pour faire une copie !
  let sortedTab = []

  while (copyTab.length !== 0) {
    sortedTab.push(biggest(copyTab))
    copyTab.splice(copyTab.indexOf(biggest(copyTab)), 1) //.splice(index,number)
  }
  return sortedTab
}

const makeUnique = (tab) => {
  let newTab = []
  for (let elem of tab) {
    if (newTab.includes(elem)) {
    } else {
      newTab.push(elem)
    }
  }
  return newTab
}

table = [4, 6, 76, 87, 134, 4, 90, 76, 4, 56, 79, 90]

console.log(biggest(table))

console.log(sortAscend(table))

console.log(makeUnique(table))














/*




  ```js
const functionName = (parameter) => {
  let x

  return x
}
```

const functionName = (parameter1, parameter2) => {
  console.log('blabla')
}*/