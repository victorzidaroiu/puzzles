function findNextSquare(x) {
  const squareRoot = Math.sqrt(x);
  return Number.isInteger(squareRoot) ? (squareRoot + 1) ** 2 : -1;
}
