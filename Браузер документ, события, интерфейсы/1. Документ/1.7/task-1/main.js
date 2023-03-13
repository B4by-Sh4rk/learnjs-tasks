let text = '<b>текст</b>';

  elem1.append(document.createTextNode(text)); // <b>текст</b>
  elem2.innerHTML = text; // текст
  elem3.textContent = text; // <b>текст</b>