(function () {
	/*	CLASS INHERITANCE */
	'use strict';
	class Human {
		constructor(name, height, weight) {
			this._name = name || '';
			this._height = height || 190;
			this._weight = weight || 180;
		}

		set name(name) {
			this._name = name;
		}
		get name() {
			console.log(`Hello, Im ${this._name}!`);
			return this._name;
		}
		set height(height) {
			this._height = height;
		}
		get height() {
			return this._height;
		}
		set weight(weight) {
			this._weight = weight;
		}
		get weight() {
			return this._weight;
		}

		grow(height, weight) {
			this._height += height;
			this._weight += weight;
			console.log(`${this._name}  has grown`);
		}
	}

	class Cyborg extends Human {
		constructor(name, height, weight, ...plugins) {
			super(name, height, weight);
			this._plugins = [...plugins];
			// this._plugins = plugins; // Equivalent to previous line
			// this._plugins = [plugins]; // [[],...] Array in Array
		}

		get name() {
			return super.name;
		}

		static getHollowShell() {
			return new Cyborg();
		}

		get plugins() {
			return this._plugins;
		}

		addPlugin(plugin) {
			this._plugins.push(plugin);
		}
	}

	var molly = new Cyborg('Molly Millions', 170, 190, {type: 'byonic_nails'}, {type: 'enhanced_vision'});
	var emptyBody = Cyborg.getHollowShell();

	molly.addPlugin({type: 'super_strength'});
	molly.grow(0, 10); // Molly Millions  has grown
	molly.name; // Hello Im Molly Millions

	emptyBody.addPlugin({type: 'super_strength'});
})();

(function () {
	'use strict';

	var agregation = (baseClass, ...mixins) => {

	};
})();
