function sayHello(name) {
	var greeting = "Hello " + name + ". It's nice to meet you!";
	return greeting;
}

function areBothEven(num1, num2) {
	var num1;
	var num2;
	return (num1 % 2 == 0 && num2 % 2 == 0) || false;
}

function hotOrNot(temp) {
	var temp;
	if (temp > 75) {
		return "hot";
	}
	else {
		return "not hot"; 
	}
}

function threeIfNull(num) {
	var num;
	if (num == null) {
		return 3;
	}
	else {
		return num;
	}
}

function greatest(x, y, z) {
	if (x > y && x > z) {
		return x;
	}
	else if (y > x && y > z) {
		return y;
	}
	else if (z > x && z > y) {
		return z;
	}
	else return "There is no greatest number. You might have put in a number twice, or didn't enter three numbers"}