let tower = [[], [], []];
let levels;
let printSpeed;
let step = 0;

const printTower = () => {
  console.log('-------------------');

  for (let i = levels - 1; i > -1; i -= 1) {
    const tower1 = tower[0][i] || ' ';
    const tower2 = tower[1][i] || ' ';
    const tower3 = tower[2][i] || ' ';

    console.log(`|  ${tower1}  |  ${tower2}  |  ${tower3}  |`);
  }
  console.log('-------------------');
};

function printEnd() {
  console.log(`Done in ${step} moves!`);
}

function makeLegalMove() {
  let rod1;
  let rod2;

  switch (step % 3) {
    case 0:
      rod1 = tower[0];
      rod2 = tower[1];
      break;

    case 1:
      rod1 = tower[0];
      rod2 = tower[2];
      break;

    case 2:
      rod1 = tower[1];
      rod2 = tower[2];
      break;

    default:
      break;
  }

  const a = rod1.pop();
  const b = rod2.pop();

  if (!a) {
    rod1.push(b);
  } else if (!b) {
    rod2.push(a);
  } else if (a < b) {
    rod2.push(b);
    rod2.push(a);
  } else {
    rod1.push(a);
    rod1.push(b);
  }

  step += 1;

  printTower();

  if (tower[0].length > 0 || tower[1].length > 0) {
    setTimeout(makeLegalMove, printSpeed);
  } else {
    printEnd();
  }
}

export default(_levels = 4, _printSpeed = 2000, startDelay = 2000) => {
  levels = _levels;
  printSpeed = _printSpeed;
  for (let i = levels; i > 0; i -= 1) {
    tower[0].push(i);
  }

  console.log(`Levels: ${levels}, Print speed: ${printSpeed}.`);
  console.log('');
  console.log('Initial tower:');
  console.log('-------------------');

  printTower();

  console.log('');
  console.log(`Starting in ${startDelay} ms.`);
  console.log('-------------------');

  setTimeout(() => {
    switch (levels) {
      case 0:
        console.log('The tower is empty!');
        break;

      case 1:
        tower = [[], [], [1]];
        step += 1;
        printTower();
        printEnd();
        break;

      default:
        makeLegalMove(printEnd);
        break;
    }
  }, startDelay);

  return tower;
};
