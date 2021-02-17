let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

str
  .trim()
  .toUpperCase()
  .split(' ')
  .forEach((elem) => console.log(`mot: ${elem}`))


table = str
  .trim()
  .split(' ')

table.forEach((elem) => {
  console.log(`Mot: ${elem.toUpperCase()}`)
})
