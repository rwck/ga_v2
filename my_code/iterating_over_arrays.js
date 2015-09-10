var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];

function addFive() {
	for (i = 0; i < oldArray.length; i++) {
		newArray.push(oldArray[i] + 5);
}
}

function squareIt() {
	for (i = 0; i < oldArray.length; i++) {
		newArray.push(oldArray[i] * oldArray[i]);
	}
}

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

function mirrorMe() {
	for (i = 0; i < oldArray.length; i++) {
		newArray.push(oldArray[(oldArray.length - 1) - i]);
	}
}