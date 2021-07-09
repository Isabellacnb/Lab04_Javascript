var btnPost = document.getElementById("ButtonPost");
var btnClear = document.getElementById("ButtonClear");
var btnMark = document.getElementById("ButtonMarkAll");
var btnDeleteMarked = document.getElementById("ButtonDeleteMarked");
var btnDelete = document.getElementById("ButtonDeleteAll");

btnPost.addEventListener("click", todoPost);
btnClear.addEventListener("click", todoClear);
btnMark.addEventListener("click", todoMark);
btnDelete.addEventListener("click", todoDelete);
btnDeleteMarked.addEventListener("click", todoDeleteMarked);

function todoPost(e) {
  e.preventDefault();

  // Get elements
  var to_do = document.getElementById("TextPost");
  var todoList = document.getElementById("TodoList");

  // Save current content of list
  var currentListHTML = todoList.innerHTML;

  // // OPTION 1 // //
  // Write input type checkbox on list together with previous content
  // todoList.innerHTML =
  //   currentListHTML + `<input type="checkbox" name="todo"/> ${to_do.value}<br>`;

  // // OPTION 2 // //
  var div = document.createElement("div");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");

  div.className = "checkboxOption";
  checkbox.type = "checkbox";
  checkbox.name = "todo";

  label.textContent = to_do.value;

  div.appendChild(checkbox);
  div.appendChild(label);
  todoList.appendChild(div);

  // Clear value in text area
  to_do.value = "";
}

function todoClear() {
  var todos = document.getElementsByName("todo");
  todos.forEach((element) => {
    element.checked = false;
  });
}

function todoMark() {
  var todos = document.getElementsByName("todo");
  for (var i = 0; i < todos.length; i++) {
    todos[i].checked = true;
  }
}

function todoDelete() {
  // Delete all options on the list
  var list = document.getElementById("TodoList");
  list.innerHTML = "";
}

function todoDeleteMarked() {
  // Delete checked options on the list
  var todos = document.getElementsByName("todo");
  todos.forEach((element) => {
    if (element.checked) {
      element.parentElement.remove();
    }
  });
}
