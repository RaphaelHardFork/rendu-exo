//Nombres à convertir
10
15
16
5005
52390903

//Conversion en binaire, en octal puis en hexadécimal
let table = [10, 15, 16, 5005, 52390903]
for (i = 0; i < table.length; i++) {
  console.log('Pour ' + table[i] + ' en décimal on a :')
  console.log(table[i].toString(2) + ' en binaire')
  console.log(table[i].toString(8) + ' en octal')
  console.log(table[i].toString(16) + ' en hexadécimal\n ')
}