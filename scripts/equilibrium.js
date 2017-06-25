const calculateSum = integers => integers.reduce((a, b) => a + b, 0);

const solution = (integers) => {
  try {
    if (integers.length === 0) {
      return -1;
    } else if (integers.length === 1) {
      return 0;
    }

    let leftSideSum = 0;
    let rightSideSum = calculateSum(integers.slice(1));

    for (let i = 0; i < integers.length; i += 1) {
      if (leftSideSum === rightSideSum) {
        return i;
      }
      leftSideSum += integers[i];
      rightSideSum -= integers[i + 1] || 0;
    }
  } catch (e) {
    return -1;
  }

  return -1;
};

const testData = [-1, 3, -4, 5, 1, -6, 2, 1];

console.log(solution(testData));
