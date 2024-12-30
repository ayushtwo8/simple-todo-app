const todoValue = document.getElementById("todoText");
const todoAlert = document.getElementById("Alert");
const listItems = document.getElementById("list-items");
const addUpdate = document.getElementById("AddUpdateClick");

let todo = JSON.parse(localStorage.getItem("todo-list"));
if(!todo){
    todo = [];
}


function CreateToDoItems(){
    if(todoValue.value === ""){
        todoAlert.innerText = "Please enter you todo text!";
        todoValue.focus();
    } else {
        let IsPresent = false;
        todo.forEach(element => {
            if(element.item == todoValue.value) {
                IsPresent = true;
            }
        });

        if(IsPresent){
            setAlertMessage("This item already present on the list!");
            return;
        }

        let li = document.createElement("li");
        const todoItems = `<div title="Hit double click and complete" ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div> <img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="edit.png" /> <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="delete.png" /></div></div>`;

        li.innerHTML = todoItems;
        listItems.appendChild(li);

        if(!todo){
            todo = [];
        }
        let itemList = { item: todoValue.value, status: false};
        todo.push(itemList);
        setLocalStorage();
    }
    todoValue.value = "";
    setAlertMessage("Todo item Created Successfully!");
}

function ReadToDoItems(){
    
}