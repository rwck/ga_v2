var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];

// creates new array with each member plus 5
function addFive() {
	for (i = 0; i < oldArray.length; i++) {
		newArray.push(oldArray[i] + 5);
}
}

// creates new array with each member squared
function squareIt() {
	for (i = 0; i < oldArray.length; i++) {
		newArray.push(oldArray[i] * oldArray[i]);
	}
}


// creates a new array with corresponding member doubled if it's odd, leaves it the same if it's even
function oddIndexed() {
	for (i = 0; i < oldArray.length; i++) {
		if (i % 2 !== 0) {
			newArray.push(oldArray[i] * 2);
		}
		else {
			newArray.push(oldArray[i]);
		}
	}
}

// creates a mirror image of the array
function mirrorMe() {
	for (i = 0; i < oldArray.length; i++) {
		newArray.push(oldArray[(oldArray.length - 1) - i]);
	}
}