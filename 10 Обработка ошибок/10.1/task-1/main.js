function func() {
    try {
      alert('start');
      return "result";
    } catch (e) {
      alert('error')
    } finally {
      alert('clean'); //очистка произойдёт в любом случае
    }
  }
  func();

  /* --- */

