function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true, т.к. a.__proto__ == B.prototype, т.к. сравнинвается prorotype 