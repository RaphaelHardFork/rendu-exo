let isRainy = false
let isSunny = true
let temperature = -6
let clothes = ''
let accessory = ''

if (isRainy) {
  clothes += 'Kway, ' // concatenation de string
  accessory += 'umbrella, '
}

if (temperature < 0) {
  clothes += 'coat, '
  accessory += 'hat, scarf, '
}
else if (temperature < 15) {
  clothes += 'coat, '
} else if (temperature >= 15 && temperature <= 20) {
  clothes += 'sweater, '
} else {
  clothes += 't-shirt, '
  if (isSunny) {
    accessory += 'sun glasses'
  }
}
console.log(`Clothes you need: ${clothes} and don't forget: ${accessory}`)