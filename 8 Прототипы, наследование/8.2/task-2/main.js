function HamstersAge(age) {
  this.age = age;
}

let age = new HamstersAge('1');
let age2 = new age.constructor('2');

alert( age2.age ); 