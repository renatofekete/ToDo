var submit = document.getElementById("submit");
var form = document.querySelector("textarea");
var todoList = document.getElementById("list");
var deleteAll = document.getElementById("clear");


if(localStorage.getItem('list')) {
  var localArray = JSON.parse(localStorage.getItem('list'));
}
else {
  var localArray = [];
}

localStorage.setItem('list', JSON.stringify(localArray));
var todo = JSON.parse(localStorage.getItem('list'));


submit.addEventListener("click", function () {
  if (form.value !== '') {
    todoList.innerHTML += `<li>${form.value}<div class="close_btn_box"><div class="close_btn"></div></div></li>`;
    localArray.push(form.value);
    localStorage.setItem('list', JSON.stringify(localArray));
    form.value = '';
    
  }
});
deleteAll.addEventListener("click", function () {
  localStorage.removeItem('list');
  todoList.innerHTML = '';
  localArray = [];
});

todoList.addEventListener("click", function(e) {
  var deleteOne = document.querySelectorAll(".close_btn");
  for(i = 0; i < deleteOne.length; i++) {
    if(e.target == deleteOne[i]) {
      deleteOne[i].parentElement.parentElement.remove();
      
    }
  }
});

function listPrint() {

  for(i = 0; i < localArray.length; i ++) {
    todoList.innerHTML += `<li>${localArray[i]}<div class="close_btn_box"><div class="close_btn"></div></div></li>`;
  }
}
listPrint();


console.log(JSON.parse(localStorage.getItem('list'))[0]);






