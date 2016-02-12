'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Shamelessly copied from http://es6-features.org/#ClassInheritanceFromExpressions
(function () {
	'use strict';

	var aggregation = function aggregation(baseClass) {
		for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			mixins[_key - 1] = arguments[_key];
		}

		var base = function (_baseClass) {
			_inherits(_Combined, _baseClass);

			function _Combined() {
				var _Object$getPrototypeO;

				_classCallCheck(this, _Combined);

				for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					args[_key2] = arguments[_key2];
				}

				var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_Combined)).call.apply(_Object$getPrototypeO, [this].concat(args)));

				mixins.forEach(function (mixin) {
					mixin.prototype.initializer.call(_this);
				});
				return _this;
			}

			return _Combined;
		}(baseClass);

		var copyProps = function copyProps(target, source) {
			Object.getOwnPropertyNames(source).concat(Object.getOwnPropertySymbols(source)).forEach(function (prop) {
				if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) {
					return;
				}
				Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
			});
		};

		mixins.forEach(function (mixin) {
			copyProps(base.prototype, mixin.prototype);
			copyProps(base, mixin);
		});
		return base;
	};

	var Colored = function () {
		function Colored() {
			_classCallCheck(this, Colored);
		}

		_createClass(Colored, [{
			key: 'initializer',
			value: function initializer() {
				this._color = 'white';
			}
		}, {
			key: 'color',
			get: function get() {
				return this._color;
			},
			set: function set(v) {
				this._color = v;
			}
		}]);

		return Colored;
	}();

	var ZCoord = function () {
		function ZCoord() {
			_classCallCheck(this, ZCoord);
		}

		_createClass(ZCoord, [{
			key: 'initializer',
			value: function initializer() {
				this._z = 0;
			}
		}, {
			key: 'z',
			get: function get() {
				return this._z;
			},
			set: function set(v) {
				this._z = v;
			}
		}]);

		return ZCoord;
	}();

	var Shape = function () {
		function Shape(x, y) {
			_classCallCheck(this, Shape);

			this._x = x;
			this._y = y;
		}

		_createClass(Shape, [{
			key: 'x',
			get: function get() {
				return this._x;
			},
			set: function set(v) {
				this._x = v;
			}
		}, {
			key: 'y',
			get: function get() {
				return this._y;
			},
			set: function set(v) {
				this._y = v;
			}
		}]);

		return Shape;
	}();

	var Rectangle = function (_aggregation) {
		_inherits(Rectangle, _aggregation);

		function Rectangle(x, y) {
			_classCallCheck(this, Rectangle);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Rectangle).call(this, x, y));
		}

		return Rectangle;
	}(aggregation(Shape, Colored, ZCoord));

	var rect = new Rectangle(7, 42);
})();