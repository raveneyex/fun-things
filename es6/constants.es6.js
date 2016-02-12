'use strict';
(function () {
	const PI = 3.141593;
	PI = 5; // TypeError

	const user = {
		name: 'Arya'
	};
	user.lastName = 'Stark';
	console.log(user);  // { name: 'Arya', lastName: 'Stark' }

	let a = { type: 'city' };
	user = a; //	TypeError

	const coins = [];
	coins.push({name: 'euro'});
	coins.push({name: 'dollar'});
	console.log(coins); // [ { name: 'euro' }, { name: 'dollar' } ]

	coins = []; // TypeError
})();
