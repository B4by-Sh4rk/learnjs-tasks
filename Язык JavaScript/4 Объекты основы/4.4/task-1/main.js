function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // ошибка


  function makeUser2() {
    return {
      name2: "John",
      ref() {
        return this;
      }
    };
  }
  
  let user2 = makeUser2();
  
  alert( user2.ref().name2 ); // John