let map;

map = [
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["*", "*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "."],
  ["*", "*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["*", "*", "*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["*", "*", "*", "*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["*", "*", "*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["*", "*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["*", "*", "*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*"],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*", "*"],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*", "*", "*", "*"],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*", "*", "*", "*", "*", "*"],
  [".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*", "*", "*"],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
];

const maxRoutesToTry = 100000000;
const obstacleChance = 25;

const findXLocations = map => {
  const xLocations = [];
  for (let [x, row] of map.entries()) {
    for (let [y, location] of row.entries()) {
      if (location === 'X') {
        xLocations.push( { x, y });
      }
    }
  }

  return xLocations;
}

const tryRoute = (route, destination) => {
  let moves = 0;
  while(moves < abandonRouteAfterMoves) {
    const lastMove = route.pop();

    const thisMove = {
      x: lastMove.x + getRandomIntInclusive(-1, 1),
      y: lastMove.y + getRandomIntInclusive(-1, 1)
    }

    route.push(lastMove);

    if (destination.x === thisMove.x && destination.y === thisMove.y) {
      route.push(thisMove);
      return route;
    }

    if (map[thisMove.x]) {
      switch (map[thisMove.x][thisMove.y]) {
        case '.':

          route.push(thisMove);
        break;

        case '*':
        break;
      }
    }

    moves++;
  }

  return false;
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const printMap = (map) => {
  for(const row of map) {
    console.log(row.toString().replace(/,/g, ' '));
  }
}

const generateRandomMap = (sizeX, sizeY) => {
  const map = [];
  const tileTypes = {
    clear: '.',
    obstacle: '*',
  };
  for (let i = 0; i < sizeX; i++) {
    map[i] = [];
    for (let y = 0; y < sizeY; y++) {
      if (getRandomIntInclusive(0, 100) > obstacleChance) {
        map[i][y] = tileTypes.clear;
      } else {
        map[i][y] = tileTypes.obstacle;
      }
    }
  }

  map[getRandomIntInclusive(0, sizeX - 1)][getRandomIntInclusive(0, sizeY - 1)] = 'X';
  map[getRandomIntInclusive(0, sizeX - 1)][getRandomIntInclusive(0, sizeY - 1)] = 'X';

  return map;
}

console.log('')
console.log('')
console.log('')
console.log('')
console.log('')
console.log('Map');
console.log('====================');

if (!map) {
  map = generateRandomMap(20, 20);
}

printMap(map);

const mapLocations = findXLocations(map);

if (mapLocations.length !== 2) {
  throw "There must be exactly 2 locations!";
}

let [startLocation, stopLocation] = mapLocations;
let abandonRouteAfterMoves = map.length * 4;
let route;
let routesTried = 0;

console.log('')
console.log('Finding route...');
console.log('====================');

while (routesTried < maxRoutesToTry) {
  route = new Array(startLocation);
  route = tryRoute(route, stopLocation);
  if (route) {
    console.log(`Route found after ${routesTried} routes tried! Route is ${route.length} points long.`);
    break;
  } else {
    routesTried += 1;
  }
}

route.shift();
route.pop();

for (const point of route) {
  map[point.x][point.y] = 'O';
}

printMap(map);

if (!route) {
  console.log(`No route found. Tried ${maxRoutesToTry} routes.`);
}
