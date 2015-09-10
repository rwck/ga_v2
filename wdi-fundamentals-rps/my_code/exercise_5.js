var result;
var max;

function flipper() {
	for (var i = 1; i < 20; i++) {
		console.log("hello" + i + ".");
	}
}

function maxFizzBuzz(max) {
	for (var i = 1; i < max+1; i++) {
		
		if (i % 3 == 0 && i % 5 == 0) {
			result = "fizzbuzz";
		}

		else if (i % 5 == 0) {
			result = "buzz";
		}

		else if (i % 3 == 0) {
			result = "fizz";
		}

		else {
			result = i;	
		}

		console.log(result);
	}
	
}