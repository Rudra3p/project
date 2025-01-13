document.addEventListener("DOMContentLoaded", function () {
    // References to DOM elements
    const taskInput = document.getElementById("task_input");
    const taskList = document.getElementById("task_list");
    const addTaskButton = document.getElementById("add_task");

    /**
     * Load tasks from localStorage
     */
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task) => createTask(task));
    }

    /**
     * Save tasks to localStorage
     */
    function saveTasks() {
        const tasks = Array.from(taskList.children).map((item) =>
            item.querySelector("span").textContent
        );
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    /**
     * Create a new task and add it to the task list
     * @param {string} taskText - The text of the task
     */
    function createTask(taskText) {
        // Create task container (li)
        const listItem = document.createElement("li");
        listItem.classList.add("task_item");

        // Task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&#x2715;"; // Unicode for "X"
        deleteButton.setAttribute("aria-label", "Delete task");
        deleteButton.classList.add("delete_button");

        // Event listener to delete task
        deleteButton.addEventListener("click", function () {
            listItem.remove();
            saveTasks();
        });

        // Append elements to task container
        listItem.appendChild(deleteButton);
        listItem.appendChild(taskSpan);

        // Add task to the task list
        taskList.appendChild(listItem);
    }

    /**
     * Add a new task when the button is clicked or the "Enter" key is pressed
     */
    function addTask() {
        const taskValue = taskInput.value.trim();

        if (taskValue !== "") {
            createTask(taskValue);
            saveTasks();
            taskInput.value = ""; // Clear input
        } else {
            alert("Task cannot be empty!");
        }
    }

    // Event listener for the "Add Task" button
    addTaskButton.addEventListener("click", addTask);

    // Event listener for the "Enter" key in the input field
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load tasks from localStorage on page load
    loadTasks();
});
