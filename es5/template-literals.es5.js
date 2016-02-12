'use strict';

(function () {
	var user = { name: 'Allan', lastName: 'Turing' };
	var message = 'Hello Mr. ' + user.name + ' ' + user.lastName;
	console.log(message);
	var a = function a(message2) {
		console.log(message2);
	};
	a('Hello Mr. ' + user.name + ' ' + user.lastName);
})();
