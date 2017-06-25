const cli = require('cli');

const makePascalTriangle = (n) => {
  const triangle = [[1]];

  function makeRow(lastRow) {
    const nextRow = [1];
    lastRow.forEach((number, index) => {
      if (lastRow[index + 1] !== undefined) {
        nextRow.push(lastRow[index + 1] + number);
      }
    });

    nextRow.push(1);

    return nextRow;
  }

  while (triangle.length < n) {
    triangle.push(makeRow(triangle[triangle.length - 1]));
  }

  return triangle;
};

const pascalTriangle = makePascalTriangle(cli.args[0] || 10);

console.log(pascalTriangle);
