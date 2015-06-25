$(document).ready(function() {

	var inputNumber = parseInt(prompt("Enter a number you would like to FizzBuzz."));
	if (isNaN(inputNumber)) {
		prompt("Enter a number.");
	} else if (inputNumber % 1 !== 0) {
		prompt("Enter a WHOLE number!");
	} else {
		fizzbuzz(inputNumber);
	}

function fizzbuzz() {}

	for(var i = 1; i <= inputNumber; i++){
	if (i % 3 == 0 && i % 5 ==0) {
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

});