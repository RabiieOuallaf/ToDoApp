const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUl = document.getElementById('todos');
const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => {
        addToDo(todo)
    });
};

form.addEventListener( 'submit', (e) => {
    e.preventDefault();

    addToDo()
    
});
function addToDo(todo){
    let todoText = input.value;
    if(todo){
        todoText = todo.text;
    }
    
    if(todoText){
        const todoEl = document.createElement('li');
        todoEl.innerText = todoText;
        todoUl.appendChild(todoEl)
        if(todo && todo.completed){
            todoEl.classList.add('done');
        }
        todoEl.addEventListener('click' , () => {
            todoEl.classList.toggle('done');
            TodoLs()
        });
        todoEl.addEventListener("contextmenu" , (e) => {
            e.preventDefault(); 
            todoEl.remove();
            TodoLs()
        });
    };
    input.value='';
};

function TodoLs(){
    const todoEL = document.querySelectorAll('li');
    const todo = [];

    todoEL.forEach( todoEL => {
        todo.push({
            text : todoEL.innerText,
            completed : todoEL.classList.contains('done'),
        });
    });
    localStorage.setItem('todos' , JSON.stringify(todo));
};

