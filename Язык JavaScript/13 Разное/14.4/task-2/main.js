let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object] ссылка на объект

(obj.go)();             // (2) [object Object] метод перед точкой срабатывает певрым

(method = obj.go)();    // (3) undefined сначала выполняется method, затем метод перед точкой

(obj.go || obj.stop)(); // (4) undefined потеря this