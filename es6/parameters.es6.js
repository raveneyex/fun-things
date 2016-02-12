(function () {
	/*   DEFAULT PARAMETERS */
	'use strict';
	function randomCalc ( a = 1 , b = 1 , c = 1 ) {
		return a + b + c;
	}
	console.log(randomCalc()); // 3
})();

(function () {
	/*  REST PARAMETER  */
	'use strict';
	function foo (a, b, ...c) {
		console.log(`c: ${c}`);
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
	function bar (a, b, c, d, e) {
		console.log(`c: ${c}`);
		console.log(`d: ${d}`);
		console.log(`e: ${e}`);
	}
	var params = [ 'hello', true, 7 ];
	var other1 = [ 1, 2, ...params ];// [ 1, 2, "hello", true, 7 ]
	var other2 = [ 1, 2, params];// [ 1, 2, [ "hello", true, 7]]

	bar(1, 2, ...params);
	// hello
	// true
	// 7
	bar(...other1);

	var str = 'foobar';
	var strArr = [...str];// [ f, o, o, b, a, r ]
	console.log(strArr.length); // 6

})();

(function () {
	/*  PROPERTY SHORTHAND  */
	'use strict';
	let a = 'hello';
	let b = 'bye';
	let obj = {a, b};
	console.log(obj); // Object {a: "hello", b: "bye"}
})();

(function () {
	/*  COMPUTED PROPERTY NAMES IN OBJECT DEFINITIONS */
	'use strict';
	function foo () {
		return 'foo';
	}
	var bar = 'hai';
	var obj = {
		foo: 'bar',
		[ 'prop_' + foo() ]: 42,
		[ 'prop_' + bar]: 43
	};
	console.log(obj); // Object {foo: "bar", prop_foo: 42, prop_hai: 43}
})();

(function () {
	/*  ARRAY MATCHING  */
	/* PENDING. NEEDS BABEL */
	'use strict';
	var list = [ 1, 2, 3 ];
	var [a, b, c] = list;
	console.log(`a: ${a}`);
	console.log(`b: ${b}`);
	console.log(`c: ${c}`);
	// [b, a] = [ a, b ];
	console.log(`a: ${a}`);
	console.log(`b: ${b}`);
})();

(function () {
	/*  OBJECT MATCHING */
	'use strict';
	function getObj () {
		return { a: 'a', b: 'b' };
	}

	var { a , b} = getObj();
	console.log(`a: ${a}`); // a: a
	console.log(`b: ${b}`); // b: b
})();
