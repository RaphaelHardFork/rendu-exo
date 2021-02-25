let currentFloor = 7
let targetFloor = 7
let floor = ''

if (currentFloor !== targetFloor && targetFloor > -3 && targetFloor <= 7) {
  switch (targetFloor) {
    case -2:
      floor = '2ème sous-sol'
      console.log(`Vous êtes arrivé au ${floor}.`)
      break
    case -1:
      floor = '1er sous-sol'
      console.log(`Vous êtes arrivé au ${floor}.`)
      break
    case 0:
      floor = 'RDC'
      console.log(`Vous êtes arrivé au ${floor}.`)
      break
    case 1:
      floor = '1er étage'
      console.log(`Vous êtes arrivé au ${floor}.`)
      break
    default:
      floor = `${targetFloor}ème étage`
      console.log(`Vous êtes arrivé au ${floor}.`)
  }

} else if (currentFloor === targetFloor) {
  console.log(`Vous êtes déjà au ${targetFloor !== 0 ? targetFloor + 'ème étage' : 'RDC'}`)

} else {
  console.log('Où as-tu trouvé ce bouton ?')
}

currentFloor = targetFloor