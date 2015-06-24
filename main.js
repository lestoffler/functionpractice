
// tripleFive
var tripleFive = function() {
    for (var i = 1; i <= 3; i++) {
        console.log('Five!');
    }
}
tripleFive();

// lastLetter
var lastLetter = function(word) {
		return (word.slice(-1));
}
console.log(lastLetter('hello'));
console.log(lastLetter('island'));
	
// square
function square(a) {
	return a * a;
};
console.log(square(3));
console.log(square(5)):

// negate
function negate(a) {
	return -a ;
}
console.log(negate(5));
console.log(negate(-8));

// toArray
function toArray(a, b, c) {
	return [a, b, c];
}
console.log(toArray(1, 4, 5));
console.log(toArray(8, 9, 10));

// startsWithA
var startsWithA = function(string) {
	if (string[0] === 'a') {
	return true;
	} else {
	return false;
	}
}
console.log(startsWithA ('aardvark'));
console.log(startsWithA ('bear'));

// excite
function excite(a) {
	return a + '!!!';
}
console.log(excite('yes'));
console.log(excite('go'));

// sun
var sun = function(string) {
	if(string.indexOf('sun') === (-1)) {
		return false;
	} else {
		return true;
	}
}
console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));

// tiny
var tiny = function(num) {
	if(num > 0 && num < 1) {
	return true;
	} 
	// return num > 0 && number < 1;
}

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));


// getSeconds
var getSeconds = function(time) {
	var min = time.slice(0,2);
	var sec = time.slice(3,5);

	min = parseInt(min, 10);
	sec = parseInt(sec, 10);

	return (min * 60) + sec;
}
console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));





