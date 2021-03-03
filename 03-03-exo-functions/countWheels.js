const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {
  nb_moto = nb_moto * 2
  nb_voiture = nb_voiture * 4
  nb_limousine = nb_limousine * 6
  return nb_limousine + nb_monocycle + nb_moto + nb_voiture
}

console.log(countWheels(10, 20, 7, 2))