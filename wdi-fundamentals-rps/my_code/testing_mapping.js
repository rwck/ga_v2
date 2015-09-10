var z = 0;
var y = [1, 53, 75, 99, 309, 77, 53, 77, 63];
var newArray = [];
var blobArray = [];

function addTen(x) {
	return x + 10;
}

function mapTen(p) {
	newArray = p.map(addTen);
	return newArray;
}

// This code is not working properly
function forEachTen() {
	blobArray = y.forEach(addTen);
	return y.forEach(addTen);
}


function square(x) {
  console.log(x * x);
  return x * x;
}

function blob() {
	var resultingArray = y.forEach(square);
}

 // Prints out 1, 4, and 9, but
// doesn't return an array. This means resultingArray is undefined :( grrrrr


var kilos = [12, 44, 66, 99, 908, 75, 55, 777];

function kilosToPounds(x) {
	return x * 2.2;
}

var pounds = kilos.map(kilosToPounds);
console.log (pounds);

var statements = ["this is string number one", "here is another string", "a third string is here", "not on your nelly", "blippy blippington"]
var lengthArray = []

function getLength(x) {
	for (var i = 0; i < x.length; i++) {
		lengthArray.push(x[i].length);
	}
}

// i found this one stupidly difficult to work out for some reason
var statements = ["this is string number one", "here is another string", "a third string is here", "not on your nelly", "blippy blippington"]
var lengthArray = []

function getLengthblob(x) {
	return x.length;
}

function mapLength(y) {
	lengthArray = y.map(getLengthblob);
}


