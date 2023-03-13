document.onclick = function(e) { // показывает координаты точки клика
    coords.innerHTML = e.clientX + ':' + e.clientY;
  };

//1
let coords = elem.getBoundingClientRect();

let answer1 = [coords.left, coords.top];
let answer2 = [coords.right, coords.bottom];

//2
let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop];

//3
let answer4 = [
    coords.left + elem.clientLeft + elem.clientWidth,
    coords.top + elem.clientTop + elem.clientHeight
  ];