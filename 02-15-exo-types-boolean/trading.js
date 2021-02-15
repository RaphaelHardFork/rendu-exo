// Définition des variables
let lastPrice = 65000

//Actualisation du prix
let price = lastPrice
lastPrice = 45000 //Input du dernier prix
let change24h = ((lastPrice - price) / price) * 100

//Affichage console
console.log('BTC : ' + lastPrice + '$')
console.log('24h change: ' + change24h + '%')
console.log(' ')
console.log('Hey bot, what I have to do?')
console.log('Bot:')

if (lastPrice < 10000) {
  console.log("ALL IN!!")
} else if (lastPrice < 24000 || change24h < -20) {
  console.log("Buy BTC now!")
} else if (lastPrice > 249000 || change24h > 250) {
  console.log("Sell BTC now!")
} else {
  console.log("Patience is a vertue...")
}
