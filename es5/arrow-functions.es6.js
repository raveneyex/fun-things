'use strict';

(function () {
	function Alpha() {
		var _this = this;

		this.random = 'Random Stuff';

		var print1 = function print1() {
			console.log('this:', this);
		};

		var print2 = function print2() {
			console.log('this:', _this);
		};

		print1(); // this: undefined
		print2(); // this: alpha { random: 'Random Stuff'}
	}

	var a = new Alpha();
})();