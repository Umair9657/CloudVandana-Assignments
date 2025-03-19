document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = taskText;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = function () {
        li.remove();
        saveTasks();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";

    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = function () {
            li.remove();
            saveTasks();
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    });
}
