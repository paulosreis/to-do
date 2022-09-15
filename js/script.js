// declara variáveis
const todoForm = document.querySelector('#todo-form');
const editForm = document.querySelector('#edit-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editInput = document.querySelector('#edit-input');
const cancelEditButton = document.querySelector('#cancel-edit');

// funções

const saveTodo = (text) => { //Cria card dinamicamente

    // div.todo
    const todo = document.createElement("div");
    todo.classList.add("todo");

    // div.card-info
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    todo.appendChild(cardInfo);

    //button.finish-todo
    const buttonCheck = document.createElement("button");
    buttonCheck.classList.add("finish-todo");
    buttonCheck.innerHTML = '<span class="material-icons-outlined md-32">check_box_outline_blank</span>';
    cardInfo.appendChild(buttonCheck);

    // h4
    const todoTitle = document.createElement("h4");
    todoTitle.innerText = text;
    cardInfo.appendChild(todoTitle);

    //button.remove-todo
    const buttonRemove = document.createElement("button");
    buttonRemove.classList.add("remove-todo");
    buttonRemove.innerHTML = '<span class="material-icons-outlined md-32">delete</span>';
    todo.appendChild(buttonRemove);

    //add card a lista de cards
    todoList.appendChild(todo);
    //mantem o campo add aberto
    todoInput.focus();

    // console.log(todo);


}



// eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita refrash ao add tarefa

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue);
        todoInput.value = '';
    }

});


document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest(".todo");
    

    if(targetEl.classList.contains("finish-todo")){
        if(parentEl.classList.toggle("done")){
            targetEl.innerHTML='<span class="material-icons-outlined md-32">check_box</span>';
        }else{
            targetEl.innerHTML='<span class="material-icons-outlined md-32">check_box_outline_blank</span>';
        }
    }
})
