/*

You have an array of objects in JavaScript. Each one contains a name (a string) and ranking
(a number).
Write two functions, one to return the objects ordered by ranking and another to return
the average ranking.

*/
const rankSort = list => list.sort((a, b) => a.rank - b.rank);
const averageRank = list =>
  list.reduce((previousValue, item) => previousValue + item.rank, 0) / list.length;

const list = [{
  name: 'Apple',
  rank: 5,
}, {
  name: 'Pear',
  rank: 2,
}, {
  name: 'Banana',
  rank: 100,
}];

console.log(rankSort(list));
console.log(averageRank(list));
