function getNumber() {
	var yourNumber = parseInt(prompt("Give me a number you'd like to FizzBuzz"));
	if (isNaN(yourNumber)) {
		alert("You did not enter a number! Please enter a number");
		return false;
	} else {
		return yourNumber;
	}
}
 
function fizzbuzz(number) {
	for(var i = 1; i <= number; i++) {
		if (i % 15 ==0) {
			document.write('FizzBuzz'+"<br />");
		}
		else if (i % 3 == 0) {
			document.write('Fizz'+"<br />");
		}
		else if (i % 5 == 0) {
			document.write('Buzz'+"<br />");
		}
		else {
			document.write(i+"<br />");
		};
	}
}
 
$(document).ready(function() {
 
	var yourNumber = false;
	while(yourNumber == false) {
		yourNumber = getNumber();
	}
	
	fizzbuzz(yourNumber);
 
});