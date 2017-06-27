function* pow() {
	let result = Math.pow(yield "a", yield "b");
  return result;
}

const g = pow();

console.log(g.next().value);
console.log(g.next(10).value);
console.log(g.next(2).value);
