'use strict';
(function () {
	function Alpha () {
		this.random = 'Random Stuff';

		let print1 = function () {
			console.log('this:', this);
		};

		let print2 = () => {
			console.log('this:', this);
		};

		print1(); // this: undefined
		print2(); // this: alpha { random: 'Random Stuff'}
	}

	let a = new Alpha();
})();
