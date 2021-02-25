const chalk = require('chalk')



let currentFloor = 0
let targetFloor = process.argv //ATTENTION valeur de l'étage à mettre après le fichier .js
targetFloor = Number(targetFloor[2])
let floor = ''

console.log(`Vous êtes au ${currentFloor}. Où allez vous ?`)



if (currentFloor !== targetFloor && targetFloor > -3 && targetFloor <= 7) {
  switch (targetFloor) {
    case -2:
      floor = '2ème sous-sol'
      console.log(chalk.blueBright(`Vous êtes arrivé au ${floor}.`))
      break
    case -1:
      floor = '1er sous-sol'
      console.log(chalk.blue(`Vous êtes arrivé au ${floor}.`))
      break
    case 0:
      floor = 'RDC'
      console.log(chalk.red(`Vous êtes arrivé au ${floor}.`))
      break
    case 1:
      floor = '1er étage'
      console.log(chalk.bgGreenBright(`Vous êtes arrivé au ${floor}.`))
      break
    default:
      floor = `${targetFloor}ème étage`
      console.log(chalk.green(`Vous êtes arrivé au ${floor}.`))
  }

} else if (currentFloor === targetFloor) {
  console.log(chalk.magenta(`Vous êtes déjà au ${targetFloor !== 0 ? targetFloor + 'ème étage' : 'RDC'}`))

} else {
  console.log(chalk.gray('Où as-tu trouvé ce bouton ?'))
}

currentFloor = targetFloor