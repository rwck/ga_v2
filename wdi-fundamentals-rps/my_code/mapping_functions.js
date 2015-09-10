function square(x) {
	console.log(x * x);
	return x * x;	
}

function squareMap() {
	var resultingArray = [1, 2, 3].map(square);
}

function squareForEach() {
	var resultingArray = [1, 2, 3].forEach(square);
	console.log([1, 2, 3].forEach(square));
	console.log(resultingArray);
}