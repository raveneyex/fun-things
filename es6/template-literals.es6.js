'use strict';
(function () {
	let user = { name: 'Allan', lastName: 'Turing' };
	let message = `Hello Mr. ${user.name} ${user.lastName}`;
	console.log(message);
	let a = (message2) => {
		console.log(message2);
	};
	a(`Hello Mr. ${user.name} ${user.lastName}`);
})();
