//1 Mille est à égal à 1.60934 Kilomètres.

const MiToKm = (miles) => {
  let Km
  Km = miles * 1.60934
  return Km
}


let miles = 56
console.log(`${miles} miles sont égale à ${MiToKm(miles)} km.`)