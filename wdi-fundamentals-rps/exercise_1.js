/*


Now replace your first expression with a second expression - this one should evaluate to 'Hello World'.

Finally, replace the previous expression with an expression that evaluates to the boolean true. Try using two or three operations for this one!

*/


var x = 10;
var multi = 3;
var answer;
function multiplier() {
    console.log("x = " + x);
    answer = x * multi;
    console.log(answer);
    x += 1;
    console.log("x is now " + x);
}
multiplier();
console.log("x is now " + x);
x === 11;