const sudoku = [
  [6, 0, 0, 0, 5, 8, 0, 0, 0],
  [0, 0, 3, 4, 0, 0, 0, 0, 0],
  [0, 9, 1, 7, 6, 0, 0, 0, 0],
  [7, 0, 2, 0, 3, 0, 8, 0, 9],
  [0, 8, 9, 0, 2, 0, 5, 7, 0],
  [1, 0, 5, 0, 8, 0, 6, 0, 2],
  [0, 0, 0, 0, 4, 1, 3, 6, 0],
  [0, 0, 0, 0, 0, 2, 9, 0, 0],
  [0, 0, 0, 3, 9, 0, 0, 0, 4]
];

const validSudoku = [
  [2, 9, 5, 7, 4, 3, 8, 6, 1],
  [4, 3, 1, 8, 6, 5, 9, 2, 7],
  [8, 7, 6, 1, 9, 2, 5, 4, 3],
  [3, 8, 7, 4, 5, 9, 2, 1, 6],
  [6, 1, 2, 3, 8, 7, 4, 9, 5],
  [5, 4, 9, 2, 1, 6, 7, 3, 8],
  [7, 6, 3, 5, 2, 4, 1, 8, 9],
  [9, 2, 8, 6, 7, 1, 3, 5, 4],
  [1, 5, 4, 9, 3, 8, 6, 7, 2]
];

const getCols = (array) => {
    const cols = [];
    array.forEach((row) => {
      row.forEach((value, colNumber) => {
        if (cols[colNumber] instanceof Array) {
          cols[colNumber].push(value);
        } else {
          cols[colNumber] = [value];
        }
      });
    });

    return cols;
}

const areArrayValuesUnique = (array) => (new Set(array)).size === array.length;

const validateBlocks = (sudoku, size) => {
  let sudokuBlocks = [];
  for (let i = 0; i < size * size; i += size) {
    for (let j = 0; j < size * size; j += size) {
      const sudokuBlock = [];
      for (let a = 0; a < size; a += 1) {
        sudokuBlock.push([]);
        for (let b = 0; b < size; b += 1) {
          sudokuBlock[a].push(sudoku[i + a][j + b]);
        }
      }
      sudokuBlocks.push(sudokuBlock);
    }
  }

  return sudokuBlocks.reduce((isValid, sudokuBlock) => { return isValid && isSudokuBlockValid(sudokuBlock) }, true);
}

isSudokuBlockValid = (array) => {
  const mergedValues = array.reduce((arr, element) => { return arr.concat(element) }, []);

  return areArrayValuesUnique(mergedValues);
}

const isSudokuValid = (sudoku) => {
  let isValid = true;

  isValid = validateBlocks(sudoku, 3);

  sudoku.forEach((row) => {
    if (!areArrayValuesUnique(row)) {
      isValid = false;
    }
  });

  getCols(sudoku).forEach((col) => {
    if (!areArrayValuesUnique(col)) {
      isValid = false;
    }
  });

  console.log(isValid);
  console.log("==============");
  console.log(sudoku);
  return isValid;
}

let isValid = isSudokuValid(validSudoku);
