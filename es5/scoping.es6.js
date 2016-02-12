'use strict';

(function () {
	/*	OLD SCHOOL	*/
	var counterFunctions = [];
	for (var i = 0; i < 2; i += 1) {
		(function (i) {
			counterFunctions[i] = function () {
				return i;
			};
		})(i);
	}
	console.log('i:', i); // 2
	counterFunctions[0](); // 0
	counterFunctions[1](); // 1
})();

(function () {
	/*	NEW SCHOOL (ES6)	*/
	var counterFunctions = [];

	var _loop = function _loop(_i) {
		counterFunctions[_i] = function () {
			return _i;
		};
	};

	for (var _i = 0; _i < 2; _i += 1) {
		_loop(_i);
	}
	console.log('i:', i); // ReferenceError: i is not defined
	counterFunctions[0](); // 0
	counterFunctions[1](); // 1
})();