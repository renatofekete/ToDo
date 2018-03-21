var submit = document.getElementById("submit");
var form = document.querySelector("textarea");
var todoList = document.getElementById("list");
var deleteAll = document.getElementById("clear");
var counter = localStorage.length + 1;


submit.addEventListener("click", function () {
  if (form.value !== '') {
    todoList.innerHTML += `<li>${form.value}<div class="close_btn_box"><div class="close_btn"></div></div></li>`;
    localStorage.setItem(`item${counter}`, JSON.stringify(form.value));
    form.value = '';
    counter ++;
  }
});
form.addEventListener("keyup", function(e) {
  e.preventDefault;
  if (e.keyCode == 13) {
    submit.click();
  }
});
deleteAll.addEventListener("click", function () {
  localStorage.clear();
  counter = localStorage.length + 1;
  todoList.innerHTML = '';
});

todoList.addEventListener("click", function (e) {
  var deleteOne = document.querySelectorAll(".close_btn");
  for (i = 0; i < deleteOne.length; i++) {
    if (e.target == deleteOne[i]) {
      // obrisati iz DOM - a
      deleteOne[i].parentElement.parentElement.remove();
    }
  }
    localStorage.clear();
   // Pokupiti tekst iz <li> i override localstorage
   var li = document.querySelectorAll("li");
   for (j = 0; j < li.length; j++) {
     localStorage.setItem(`item${j+1}`, JSON.stringify(li[j].textContent));
   }
   location.reload();
});

function printList() {  
  for (i = 1; i < localStorage.length +1; i++) {
    todoList.innerHTML += `<li>${JSON.parse(localStorage.getItem("item" + i +""))}<div class="close_btn_box"><div class="close_btn"></div></div></li>`;
  }
}
printList();
