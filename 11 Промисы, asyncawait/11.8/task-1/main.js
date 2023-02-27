async function loadJson(url) { // асинхронно
  let response = await fetch(url); 
  if (response.status == 200) {
    return response.json(); 
  }

  throw new Error(response.status);
}

loadJson('no-such-user.json')
  .catch(alert);  //нельзя await, т.к. вне функции