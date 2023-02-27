let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // true

delete rabbit.jumps; //удаление rabbit, остаётся animal

alert( rabbit.jumps ); // null

delete animal.jumps; //удаление animal, ничего не остаётся 

alert( rabbit.jumps ); // undefined