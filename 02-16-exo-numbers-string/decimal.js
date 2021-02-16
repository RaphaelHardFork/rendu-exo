// Nombres à convertir
0x123
0123
0b10011001
0xdeadbeef
0xea7beef
0b1111111111111111
0777

//Conversion
console.log(Number(0x123.toString())) //Par défaut la conversion se fait dans une base 10
console.log(Number(0123.toString(10))) // On peut préciser la base 10 dans la parenthèse
console.log(Number(0b10011001.toString()))
console.log(Number(0xdeadbeef.toString()))
console.log(Number(0xea7beef.toString()))
console.log(Number(0b1111111111111111.toString()))
console.log(Number(0777.toString()))


console.log('Automatisation')  //Pour automatiser on peut créer un tableau
let table = [0x123, 0123, 0b10011001, 0xdeadbeef, 0xea7beef, 0b1111111111111111, 0777]
for (i = 0; i < table.length; i++) {
  console.log(Number(table[i].toString(10)))
}