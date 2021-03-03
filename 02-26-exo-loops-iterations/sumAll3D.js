let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],
]
let sum = 0
for (n = 0; n < tab.length; n++) {
  for (p = 0; p < tab[n].length; p++) {
    for (k = 0; k < tab[n][p].length; k++) {
      sum += tab[n][p][k]
    }
  }
}
console.log(sum)