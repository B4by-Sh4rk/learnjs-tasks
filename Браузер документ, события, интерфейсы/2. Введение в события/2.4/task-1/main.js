/*
Когда браузер считывает атрибут on*, например onclick, 
он создаёт функцию-обработчик с содержимым этого атрибута
в качестве тела функции.
Функция для onclick="handler()" будет:

function(event) {
  handler() // содержимое onclick
}
*/

//исправленный вариант:
function handler(event) {
  alert("...");
  event.preventDefault();
}