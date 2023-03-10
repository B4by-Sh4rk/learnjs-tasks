button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

/*
1 и 2.

Первый обработчик сработает,
потому что он не был удалён методом removeEventListener.
Чтобы удалить обработчик, необходимо передать именно ту функцию,
которая была назначена в качестве обработчика. Несмотря на то,
что код идентичен, в removeEventListener передаётся новая,
другая функция.

*/
