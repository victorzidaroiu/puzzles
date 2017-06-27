const isIsogram = (str) => {
  const letters = str.toLowerCase().split('');
  return new Set(letters).size === letters.length;
};

console.log(isIsogram('abc'));
console.log(isIsogram('abca'));
