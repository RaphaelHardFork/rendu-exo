const count = (min, max, step) => {
  for (i = min; i <= max; i += step) {
    console.log(i)
  }
}

count(1, 6, 0.25)