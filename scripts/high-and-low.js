function highAndLow(numbersString) {
  const numbers = numbersString.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}


console.log(highAndLow('4 5 0 10 22'));
console.log(highAndLow('34 234 34 32 23 4'));
