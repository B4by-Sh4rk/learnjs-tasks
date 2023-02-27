function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // true


function Rabbit2() {}
Rabbit2.prototype = {
  eats2: true
};

/* --- */

let rabbit2 = new Rabbit2();

Rabbit2.prototype.eats2 = false;

alert( rabbit2.eats2 ); // false

/* --- */

function Rabbit3() {}
Rabbit3.prototype = {
  eats3: true
};

let rabbit3 = new Rabbit3();

delete rabbit3.eats3;

alert( rabbit3.eats3 ); // true

/* --- */

function Rabbit4() {}
Rabbit4.prototype = {
  eats4: true
};

let rabbit4 = new Rabbit4();

delete Rabbit4.prototype.eats4;

alert( rabbit4.eats4 ); // undefined
