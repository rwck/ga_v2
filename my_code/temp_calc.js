var tempsInF = [100, 72, 88, 15, 25, 32];
var tempsInC = [];

function fahrToCelc(degrees) {
  return (degrees - 32) * (5 / 9);
}

// for (var i = tempsInF.length - 1; i >= 0; i -= 1) {
// 	tempsInC.push(fahrToCelc(tempsInF[i]));
// }

for (var i = 0; i < tempsInF.length; i++) {
	tempsInC.push(fahrToCelc(tempsInF[i]));
}

