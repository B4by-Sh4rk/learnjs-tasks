let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList(list) {
  let tmp = list;
  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}
printList(list);

/* ---- */

let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList2(list2) {
  alert(list2.value); // выводим текущий элемент
  if (list2.next) {
    printList2(list2.next); // делаем то же самое для остальной части списка
  }

}
printList(list2);