function fizzbuzz(x) {

var x;
var result;

if (x % 3 == 0 && x % 5 == 0) {
	result = "fizzbuzz";
}

else if (x % 5 == 0) {
	result = "buzz";
}

else if (x % 3 == 0) {
	result = "fizz";
}

else {
	result = x;
}

console.log("Your result is " + result + ".");

}