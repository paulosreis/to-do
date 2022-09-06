// declara variáveis
const todoForm = document.querySelector('#todo-form');
const editForm = document.querySelector('#edit-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editInput = document.querySelector('#edit-input');
const cancelEditButton = document.querySelector('#cancel-edit');

// funções

const saveTodo = (text) => { //Cria card dinamicamente
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const cardInfo = document.createElement("div")
    cardInfo.classList.add("card-info")
    todo.appendChild(cardInfo);

    const todoTitle = document.createElement("h4");
    todoTitle.innerText = text;
    cardInfo.appendChild(todoTitle);

    const cardControl = document.createElement("div");
    cardControl.classList.add("card-control")
    todo.appendChild(cardControl);

    const doneBox = document.createElement("div");
    doneBox.classList.add("button-on-card")
    cardControl.appendChild(doneBox);

    const editBox = document.createElement("div");
    editBox.classList.add("button-on-card")
    cardControl.appendChild(editBox);

    const deleteBox = document.createElement("div");
    deleteBox.classList.add("button-on-card")
    cardControl.appendChild(deleteBox);

    const buttonDone = document.createElement("button");
    buttonDone.classList.add("finish-todo");
    buttonDone.innerHTML = '<span class="material-icons-outlined md-32">done</span>';
    doneBox.appendChild(buttonDone);
    const pConcluir = document.createElement("p");
    pConcluir.innerText = 'Concluir';
    doneBox.appendChild(pConcluir);

    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("edit-todo");
    buttonEdit.innerHTML = '<span class="material-icons-outlined md-32">edit</span>';
    editBox.appendChild(buttonEdit);
    const pEditar = document.createElement("p");
    pEditar.innerText = 'Editar';
    editBox.appendChild(pEditar);

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("remove-todo");
    buttonDelete.innerHTML = '<span class="material-icons-outlined md-32">delete</span>';
    deleteBox.appendChild(buttonDelete);
    const pExcluir = document.createElement("p");
    pExcluir.innerText = 'Excluir';
    deleteBox.appendChild(pExcluir);



    todoList.appendChild(todo);

    todoInput.focus();


    console.log(todo);


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
