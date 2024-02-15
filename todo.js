
let todoList = [];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';

  if (todoList.length > 0) {
    for (let i = 0; i < todoList.length; i++) {
      let { item, dueDate } = todoList[i];
      newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
      `;
    }
  } else {
    newHtml = '<p>No items added yet.</p>';
  }

  containerElement.innerHTML = newHtml;
}












// let todoList =[
//   {
//     item:'Go for Walk ',
//     dueDate:'04/10/2023',
//   }

// ];

//localStorage.setItem('Score',JSON.stringify(todoList))


// displayItems();

// function addTodo(){
//   let inputElement = document.querySelector('#todo-input');
//   let dateElement = document.querySelector('#todo-date');
//   let todoItem = inputElement.value;
//   let todoDate = dateElement.value;
  // todoList.push({item: todoItem,dueDate:todoDate});
//   inputElement.value='';
//   dateElement.value='';

//   displayItems();
// }


// function displayItems(){
//   let containerElement = document.querySelector('.todo-container');
//   let newHtml = '';
//   for(let i=0;i<todoList.length;i++){
//     // let item = todoList[i].item;
//     // let dueDate = todoList[i].dueDate;
//     let{item, dueDate} = todoList[i];
//     newHtml += `
//     <span>${item}</span>
//     <span>${dueDate}</span>
//     <button  class="btn-delete" onclick="todoList.splice(${i},1); displayItems();"> Delete</button>
//     `;
//   }
//   containerElement.innerHTML = newHtml;

// }  

// function displayItems(){
//   let displayElement = document.querySelector('#todo-items');

//   displayElement.innerText='';
//   for(let i=0;i<todoList.length;i++){

//     displayElement.innerText = displayElement.innerText + "\n"+todoList[i];
//   }

// }

