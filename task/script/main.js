import Task from "./types/task.js";

const taskList = document.querySelector("#task-list");

async function loadTasks() {

    const response = await fetch("./data/tasks.json");

    const data = await response.json();

    const tasks = data.map(task => {

        return new Task(
            task.text,
            task.category,
            task.completed
        );

    });

    tasks.forEach(task => {

        taskList.appendChild(task.render());

    });

}

loadTasks();