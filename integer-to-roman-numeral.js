const generateLetter = (letter, count) => new Array(count + 1).join(letter);

const digitToRomanNumeral = (digit, position) => {
  const romanNumerals = [{
    one: 'I',
    five: 'V',
    four: 'IV',
    nine: 'IX',
  }, {
    one: 'X',
    five: 'L',
    four: 'XL',
    nine: 'XC',
  }, {
    one: 'C',
    five: 'D',
    four: 'CD',
    nine: 'CM',
  }, {
    one: 'M',
  }];

  switch (digit) {
    case 1:
    case 2:
    case 3:
      return generateLetter(romanNumerals[position].one, digit);

    case 4:
      return romanNumerals[position].four;

    case 5:
      return romanNumerals[position].five;

    case 6:
    case 7:
    case 8:
      return generateLetter(romanNumerals[position].five, 1) +
             generateLetter(romanNumerals[position].one, digit - 5);

    case 9:
      return romanNumerals[position].nine;

    default:
      return '';
  }
};

/**
 * Convert an integer in the range 1 - 3999 to roman numeral
 * @param {Number} number - The number to be converted
 */

const integerToRomanNumeral = (number) => {
  if (!(typeof number === 'number' && Number.isInteger(number) && number > 0 && number < 4000)) {
    throw new Error('Invalid value provided!');
  }

  let romanNumber = '';
  const digits = number.toString().split('').map(x => parseInt(x, 10));

  digits.forEach((digit, index) => {
    romanNumber += digitToRomanNumeral(digit, digits.length - index - 1);
  });

  return romanNumber;
};

console.log(integerToRomanNumeral(3999));
console.log(integerToRomanNumeral(466));
console.log(integerToRomanNumeral(5));
console.log(integerToRomanNumeral(8));
console.log(integerToRomanNumeral(1000));
console.log(integerToRomanNumeral(1001));
console.log(integerToRomanNumeral(3005));
console.log(integerToRomanNumeral(2399));
