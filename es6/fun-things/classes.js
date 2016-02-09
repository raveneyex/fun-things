'use strict';
(function () {
	/*  CLASS DEFINITION */
	class User {
		constructor(name, lastName, gender) {
			this.name = name;
			this.lastName = lastName;
			this.gender = gender;
		}

		greetPerson(person) {
			console.log(`Hello ${person}, my Name is ${this.name} ${this.lastName}`);
		}
	}
	let a = new User('Andrés', 'Ossa', 'Male');
	a.greetPerson('Isaac Asimov');
})();
