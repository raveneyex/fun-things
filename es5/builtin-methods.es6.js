'use strict';

(function () {
	/*  OBJECT.ASSIGN */
	var a = Object.create({ test: 'Hidden with Object.assign' });
	a.name = 'Joffrey';
	console.log(a.test); // Hidden with Object.assign

	var b = { lastName: 'Baratheon' };
	var c = { house: 'Lannister' };
	var character = {};

	Object.assign(character, a, b, c);

	console.log(character.name); // Joffrey
	console.log(character.lastName); // Baratheon
	console.log(character.house); // Lannister
	console.log(character.test); // Undefined
})();

(function () {
	/*  ARRAY.PROTOTYPE.FIND  */
	var people = [{ name: 'Davos' }, { name: 'Stannis' }, { name: 'Melissandre' }];
	var result = people.find(function (x) {
		return x.name === 'Melissandre';
	});
	console.log(result); // {name: 'Melissandre'}
})();

(function () {
	/*  STRING.PROTOTYPE.REPEAT */
	var crazy = 'cu'.repeat(2);
	console.log(crazy); // cucu
})();

(function () {
	/*  STRING.PROTOTYPE.STARTSWITH */
	var bigString = 'Hello, I´m Batman';
	var contains = bigString.startsWith('Hello');
	console.log(contains); // true

	var contains2 = bigString.startsWith('llo', 2); // Optionally specify on which position to start matching
	console.log(contains2); // true
})();

(function () {
	/*  STRING.PROTOTYPE.ENDSWITH */
	var bigString = 'Hello, I´m Batman';
	var contains = bigString.endsWith('Batman');
	console.log(contains); // true

	var contains2 = bigString.endsWith('I´m', 10); // Optionally specify until which position to search.
	console.log(contains2); // true
})();

(function () {
	/*  STRING.PROTOTYPE.INCLUDES */
	var bigString = 'NaNaNaNa Batman!';
	var contains = bigString.includes('Batman');
	console.log(contains); // true
})();

(function () {
	/*  NUMBER TYPE OPERATIONS */
	console.log(Number.isNaN(69)); // false
	console.log(Number.isNaN(NaN)); // true

	console.log(Number.isFinite(69)); // true
	console.log(Number.isFinite(Infinity)); // false
	console.log(Number.isNaN(Infinity)); // false
})();

(function () {
	/*  NUMBER SAFETY OPERATIONS  */
	console.log(Number.isSafeInteger(69)); // true
	console.log(Number.isSafeInteger(666666666666666666666)); // false

	console.log(Math.trunc(66.6)); // 66
	console.log(Math.trunc(-0.45)); // -0 still ugly, but better than the past.

	console.log(0.1 + 0.2 === 0.3); // false
	console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
})();