'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	/*	CLASS INHERITANCE */
	'use strict';

	var Human = function () {
		function Human(name, height, weight) {
			_classCallCheck(this, Human);

			this._name = name || '';
			this._height = height || 190;
			this._weight = weight || 180;
		}

		_createClass(Human, [{
			key: 'grow',
			value: function grow(height, weight) {
				this._height += height;
				this._weight += weight;
				console.log(this._name + '  has grown');
			}
		}, {
			key: 'name',
			set: function set(name) {
				this._name = name;
			},
			get: function get() {
				console.log('Hello, Im ' + this._name + '!');
				return this._name;
			}
		}, {
			key: 'height',
			set: function set(height) {
				this._height = height;
			},
			get: function get() {
				return this._height;
			}
		}, {
			key: 'weight',
			set: function set(weight) {
				this._weight = weight;
			},
			get: function get() {
				return this._weight;
			}
		}]);

		return Human;
	}();

	var Cyborg = function (_Human) {
		_inherits(Cyborg, _Human);

		function Cyborg(name, height, weight) {
			_classCallCheck(this, Cyborg);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cyborg).call(this, name, height, weight));

			for (var _len = arguments.length, plugins = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
				plugins[_key - 3] = arguments[_key];
			}

			_this._plugins = [].concat(plugins);
			// this._plugins = plugins; // Equivalent to previous line
			// this._plugins = [plugins]; // [[],...] Array in Array
			return _this;
		}

		_createClass(Cyborg, [{
			key: 'addPlugin',
			value: function addPlugin(plugin) {
				this._plugins.push(plugin);
			}
		}, {
			key: 'name',
			get: function get() {
				return _get(Object.getPrototypeOf(Cyborg.prototype), 'name', this);
			}
		}, {
			key: 'plugins',
			get: function get() {
				return this._plugins;
			}
		}], [{
			key: 'getHollowShell',
			value: function getHollowShell() {
				return new Cyborg();
			}
		}]);

		return Cyborg;
	}(Human);

	var molly = new Cyborg('Molly Millions', 170, 190, { type: 'byonic_nails' }, { type: 'enhanced_vision' });
	var emptyBody = Cyborg.getHollowShell();

	molly.addPlugin({ type: 'super_strength' });
	molly.grow(0, 10); // Molly Millions  has grown
	molly.name; // Hello Im Molly Millions

	emptyBody.addPlugin({ type: 'super_strength' });
})();