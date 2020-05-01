const toDO = document.querySelectorAll('.app-list-item-label');

fetch('https://todo-a7861.firebaseio.com/todos.json')
.then(result => result.json())
.then(result => {
    toDO.forEach((el, i) => {
      el.textContent = result[i].title;
    });
});

