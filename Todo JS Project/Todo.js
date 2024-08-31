let todolist = [
  {
    item: 'Buy Milk',
    dueDate: '01/06/2024'
  },
  {
    item: 'Go to Market',
    dueDate: '02/06/2024'

  }
];
function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dataElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dataElement.value;
  todolist.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = '';

  displayItems();

}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todolist.length; i++) {
    let {item,dueDate} = todolist[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="todolist.splice(${i},1); displayItems();"> Delete </button> `;

  }
  containerElement.innerHTML = newHtml;
}