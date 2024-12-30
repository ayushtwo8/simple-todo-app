const todoInput = document.getElementById("todoText");
const addButton = document.getElementById("AddUpdateClick");
const alertText = document.getElementById("Alert");
const listContainer = document.getElementById("list-items");

let isEditing = false;
let editingItem = null;


function createToDoItems(){
    const todoText = todoInput.value.trim();
    
    if(todoText === ""){
        alertText.style.color = 'red';
        alertText.textContent = 'Please enter a todo item!';
        return;
    }

    if(isEditing){
        editingItem.querySelector('.todo-text').textContent = todoText;
        addButton.src = 'plus.png';
        isEditing = false;
        alertText.style.color = "green";
        alertText.textContent = "ToDo Updated Successfully!"
    } else{
        const li = document.createElement("li");
        li.innerHTML = `<span class="todo-text" onclick="toggleComplete(this)">${todoText}</span>
        <div class="todo-actions">
            <img src="edit.png" onclick="editTodo(this.parentElement.parentElement)" height="20px">
            <img src="delete.png" onclick="deleteTodo(this.parentElement.parentElement)" height="20px"?
        </div>`;

        listContainer.appendChild(li);
        alertText.style.color = "green";
        alertText.textContent = "Todo added successfully!"
    }

    todoInput.value = "";
    setTimeout(() => {
        alertText.textContent="";
    },2000);
}

function toggleComplete(element){
    if(element.style.textDecoration === 'line-through'){
        element.style.textDecoration = 'none';
    } else{
        element.style.textDecoration = 'line-through';
    }
}

function editTodo(li){
    const todoText = li.querySelector('.todo-text').textContent;
    todoInput.value = todoText;
    addButton.src = "tick.png";
    isEditing = true;
    editingItem = li;
    todoInput.focus();
}

function deleteTodo(li){
    li.remove();
    alertText.style.color = "green";
    alertText.textContent = 'Todo deleted successfully!';

    setTimeout(()=>{
        alertText.textContent='';
    }, 2000);
}

todoInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        createToDoItems();
    }
});