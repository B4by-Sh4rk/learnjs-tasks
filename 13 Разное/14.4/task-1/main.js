let user = {
  name: "John",
  go: function() { alert(this.name) }
}//не хватает ;

(user.go)() // ошибка



