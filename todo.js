let todoItems = []
const todoInput = document.querySelector('.todo-input')
const completedTodosDiv = document.querySelector('.completed-todos')
const uncompletedTodosDiv = document.querySelector('.uncompleted-todos')
// const audio = new Audio('sound.mp3')

window.onload = () => {
    let storageTodoItems = localStorage.getItem('todoItems')
    if (storageTodoItems !== null) {
        todoItems = JSON.parse(storageTodoItems);
    }

    render();
}

todoInput.onkeyup = ((e) => {
    let value = e.target.value.replace(/^\s+/, "")
    if (value && e.keyCode === 13) {
        addTodo(value)

        todoInput.value = ''
        todoInput.focus()
    }
})

function addTodo(text) {
    todoItems.push({
        id: Date.now(),
        text,
        completed: false
    })

    console.log(todoItems)
}

function removeTodo(id) {

}

function markAsCompleted(id) {

}

function markAsUncompleted(id) {

}

function save() {
    localStorage.setItem('todoItems', JSON.stringify(todoItems))
}

function render() {

}

function saveAndRender() {
    save()
    render()
}

function createTodoElement(todo) {

}