// Move a knight from 0,0 to destination

const solution = (destinationA, destinationB) => {
  const knight = {
    x: 0,
    y: 0,
  };

  const destination = {
    x: destinationA,
    y: destinationB,
  };

  let iterationsCount = 0;
  let directionX;
  let directionY;
  let absX;
  let absY;

  while (iterationsCount < 100000000) {
    absX = Math.abs(knight.x - destination.x);
    absY = Math.abs(knight.y - destination.y);

    if (knight.x === destination.x && knight.y === destination.y) {
      return iterationsCount;
    } else if ((knight.x === destination.x && absY === 1) ||
               (knight.y === destination.y && absX === 1)) {
      return -1;
    }

    directionX = destination.x - knight.x > 0 ? 1 : -1;
    directionY = destination.y - knight.y > 0 ? 1 : -1;

    if (absX > absY) {
      knight.x += (2 * directionX);
      knight.y += directionY;
    } else {
      knight.x += directionX;
      knight.y += (2 * directionY);
    }

    iterationsCount += 1;
  }

  return -2;
};


console.log(solution(4, 3));
