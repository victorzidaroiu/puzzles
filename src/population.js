function nbYear(p0, percent, aug, p) {
  let year = 0;
  let population = p0;
  const percentCalc = percent / 100;

  while (p > population) {
    population += (population * percentCalc) + aug;
    year += 1;
  }

  return year;
}
