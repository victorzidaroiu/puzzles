//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbersString) {
  const numbers = numbersString.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
