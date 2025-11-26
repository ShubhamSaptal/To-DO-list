function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let ul = document.getElementById("taskList");
    let li = document.createElement("li");

    li.innerHTML = `${taskText} <span onclick="removeTask(this)">X</span>`;
    ul.appendChild(li);

    input.value = "";
}

function removeTask(element) {
    element.parentElement.remove();
}
