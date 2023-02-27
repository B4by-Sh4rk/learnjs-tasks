new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(alert);
  // catch не может сгенерировать ошибку вне выполнения кода