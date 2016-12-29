var cli = require('cli');

makePascalTriangle = function (n) {
	var triangle = [[1]];

	function makeRow(lastRow) {
		var nextRow = [1];
		lastRow.forEach(function(number, index) {
			if (lastRow[index + 1] !== undefined)
				nextRow.push(lastRow[index + 1] + number);
		});

		nextRow.push(1);

		return nextRow;
	}

	while (triangle.length < n) {
    triangle.push(makeRow(triangle[triangle.length - 1]));
  }

  console.log(triangle);

	return triangle;
}(cli.args[0] || 10);
