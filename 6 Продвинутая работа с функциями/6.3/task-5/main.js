function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

/* --- */

function inArray(arr2) {
  return function(x) {
    return arr2.includes(x);
  };
}
let arr2 = [1, 2, 3, 4, 5, 6, 7];
alert( arr2.filter(inArray([1, 2, 10])) ); // 1,2