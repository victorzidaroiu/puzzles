const defaultMap = [
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'X', '.'],
  ['*', '*', '*', '*', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['*', '*', '*', '*', '*', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['*', '*', '*', '*', '*', '*', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['*', '*', '*', '*', '*', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['*', '*', '*', '*', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['*', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '*', '*'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '*', '*', '*'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '*', '*', '*', '*', '*'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '*', '*', '*', '*'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'X', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
];

const maxRoutesToTry = 10000000;

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const printMap = (map) => {
  map.forEach((row) => {
    console.log(row.toString().replace(/,/g, ' '));
  });
};

const generateRandomMap = (sizeX, sizeY) => {
  const obstacleChance = 25;
  const map = [];
  const tileTypes = {
    clear: '.',
    obstacle: '*',
  };

  for (let i = 0; i < sizeX; i += 1) {
    map[i] = [];
    for (let y = 0; y < sizeY; y += 1) {
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
};

const findXLocations = (map) => {
  const xLocations = [];

  map.forEach((row, x) => {
    row.forEach((value, y) => {
      if (value === 'X') {
        xLocations.push({ x, y });
      }
    });
  });

  return xLocations;
};

const tryRoute = (map, route, destination) => {
  let moves = 0;
  const abandonRouteAfterMoves = map.length * 4;

  while (moves < abandonRouteAfterMoves) {

    const lastMove = route.pop();

    const thisMove = {
      x: lastMove.x + getRandomIntInclusive(-1, 1),
      y: lastMove.y + getRandomIntInclusive(-1, 1),
    };

    route.push(lastMove);

    if (destination.x === thisMove.x && destination.y === thisMove.y) {
      route.push(thisMove);
      return route;
    }

    if (map[thisMove.x] && map[thisMove.x][thisMove.y] === '.') {
      route.push(thisMove);
    }

    moves += 1;
  }

  return false;
};

const findMapRoutes = (map) => {
  console.log('');
  console.log('Map');
  console.log('====================');

  printMap(map);

  const mapLocations = findXLocations(map);

  if (mapLocations.length !== 2) {
    throw new Error('There must be exactly 2 locations!');
  }

  const [startLocation, stopLocation] = mapLocations;
  let route;
  let routesTried = 0;

  console.log('\n', 'Finding route...', '\n');

  while (routesTried < maxRoutesToTry) {
    route = new Array(startLocation);
    route = tryRoute(map, route, stopLocation);
    if (route) {
      console.log(`Route found after ${routesTried} routes tried! Route is ${route.length} points long.`);

      route.shift();
      route.pop();

      const mapWithPath = map;

      route.forEach(({ x, y }) => {
        mapWithPath[x][y] = 'O';
      });

      printMap(mapWithPath);

      break;
    } else {
      routesTried += 1;
    }
  }

  if (!route) {
    console.log(`No route found. Tried ${maxRoutesToTry} routes.`);
  }
};

findMapRoutes(defaultMap);
findMapRoutes(generateRandomMap(100, 100));
