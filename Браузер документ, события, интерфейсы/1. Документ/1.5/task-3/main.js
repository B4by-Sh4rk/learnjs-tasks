let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert( body.firstChild.data ); 
//BODY, т.к. тег <body> заменили на комментарий: body.tagName == "BODY"
