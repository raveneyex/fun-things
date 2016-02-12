'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
	/*   DEFAULT PARAMETERS */
	'use strict';

	function randomCalc() {
		var a = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
		var b = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
		var c = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

		return a + b + c;
	}
	console.log(randomCalc()); // 3
})();

(function () {
	/*  REST PARAMETER  */
	'use strict';

	function foo(a, b) {
		for (var _len = arguments.length, c = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			c[_key - 2] = arguments[_key];
		}

		console.log('c: ' + c);
		console.log('Is c an Array?', Array.isArray(c));
		console.log('Length: ', c.length);
	}

	foo(1, 2, 3, 4, 5);
	// c: 3,4,5
	// Is c an Array? true
	// Length:  3
	foo(1, 2);
	// c:
	// Is c an Array? true
	// Length:  0
})();

(function () {
	/*  SPREAD OPERATOR */
	'use strict';

	function bar(a, b, c, d, e) {
		console.log('c: ' + c);
		console.log('d: ' + d);
		console.log('e: ' + e);
	}
	var params = ['hello', true, 7];
	var other1 = [1, 2].concat(params); // [ 1, 2, "hello", true, 7 ]
	var other2 = [1, 2, params]; // [ 1, 2, [ "hello", true, 7]]

	bar.apply(undefined, [1, 2].concat(params));
	// hello
	// true
	// 7
	bar.apply(undefined, _toConsumableArray(other1));

	var str = 'foobar';
	var strArr = [].concat(_toConsumableArray(str)); // [ f, o, o, b, a, r ]
	console.log(strArr.length); // 6
})();

(function () {
	/*  PROPERTY SHORTHAND  */
	'use strict';

	var a = 'hello';
	var b = 'bye';
	var obj = { a: a, b: b };
	console.log(obj); // Object {a: "hello", b: "bye"}
})();

(function () {
	/*  COMPUTED PROPERTY NAMES IN OBJECT DEFINITIONS */
	'use strict';

	var _obj;

	function foo() {
		return 'foo';
	}
	var bar = 'hai';
	var obj = (_obj = {
		foo: 'bar'
	}, _defineProperty(_obj, 'prop_' + foo(), 42), _defineProperty(_obj, 'prop_' + bar, 43), _obj);
	console.log(obj); // Object {foo: "bar", prop_foo: 42, prop_hai: 43}
})();

(function () {
	/*  ARRAY MATCHING  */
	/* PENDING. NEEDS BABEL */
	'use strict';

	var list = [1, 2, 3];
	var a = list[0];
	var b = list[1];
	var c = list[2];

	console.log('a: ' + a);
	console.log('b: ' + b);
	console.log('c: ' + c);
	// [b, a] = [ a, b ];
	console.log('a: ' + a);
	console.log('b: ' + b);
})();

(function () {
	/*  OBJECT MATCHING */
	'use strict';

	function getObj() {
		return { a: 'a', b: 'b' };
	}

	var _getObj = getObj();

	var a = _getObj.a;
	var b = _getObj.b;

	console.log('a: ' + a); // a: a
	console.log('b: ' + b); // b: b
})();