/**
 * Brackets count
 * @param {String} brackets
 * @return {Number} i
 */

const solution = (brackets) => {
  const bracketsList = brackets.split('');

  if (bracketsList.length === 0) {
    return 0;
  }

  let openingBracketsCount = 0;
  const closingBracketsList = brackets.match(/\)/g);
  let closingBracketsCount = closingBracketsList ? closingBracketsList.length : 0;

  for (let i = 0; i <= bracketsList.length; i += 1) {
    if (openingBracketsCount === closingBracketsCount) {
      return i;
    }

    openingBracketsCount += bracketsList[i] === '(' ? 1 : 0;
    closingBracketsCount -= bracketsList[i] === ')' ? 1 : 0;
  }

  return new Error('Could not find K');
};

console.log(solution('(()'));
