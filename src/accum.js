// The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

const accum = s =>
  s.split('').map((letter, index) => {
    const generatedLetters = Array(index + 1).fill(letter.toLowerCase());
    generatedLetters[0] = generatedLetters[0].toUpperCase();

    return `${generatedLetters.join('')}-`;
  }).join('').slice(0, -1);

console.log(accum('abcd'));
