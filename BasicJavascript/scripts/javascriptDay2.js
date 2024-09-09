//EXERCISE - EVENT LISTENERS
const button = document.getElementById("button");
const message = document.getElementById("message");


button.addEventListener("mouseout", function () {
    message.classList.remove("visible");
    message.classList.add("hidden");
})

button.addEventListener("mouseover", function () {
    message.classList.remove("hidden");
    message.classList.add("visible");
})

//EXERCISE - TODO EXAMPLE

function addListElement() {
    const newToDoText = document.getElementById("newTodoText").value;
    const newLi = document.createElement("li");
    newLi.textContent = newToDoText;

    document.getElementById("todoList").appendChild(newLi);
}

document.getElementById("addTodo").addEventListener("click", function () {
    addListElement()
})

document.getElementById("newTodoText").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addListElement()
    }

})