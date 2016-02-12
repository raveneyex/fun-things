'use strict';

(function () {
	var PI = 3.141593;
	//PI = 5; // TypeError

	var user = {
		name: 'Arya'
	};
	user.lastName = 'Stark';
	console.log(user); // { name: 'Arya', lastName: 'Stark' }

	var a = { type: 'city' };
	//user = a; //	TypeError

	var coins = [];
	coins.push({ name: 'euro' });
	coins.push({ name: 'dollar' });
	console.log(coins); // [ { name: 'euro' }, { name: 'dollar' } ]

	//coins = []; // TypeError
})();