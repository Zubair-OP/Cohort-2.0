let tasks = document.querySelectorAll(".task");
let columns = document.querySelectorAll(".task-colomn");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let right = document.querySelector(".right");
let addbtn = document.querySelector(".Add-btn");
let draggedTask = null;
let taskCount = 0;
let todoCount = document.getElementById("todo");
let progressCount = document.getElementById("progress");
let doneCount = document.getElementById("done");

let Delete = document.querySelectorAll(".delete-btn");


function saveTasks() {
    const tasksData = {
        todo: [],
        progress: [],
        done: []
    };
    
    // Save tasks from each column
    columns[0].querySelectorAll('.task').forEach(task => {
        tasksData.todo.push({
            title: task.querySelector('h2').textContent,
            description: task.querySelector('p').textContent
        });
    });
    
    columns[1].querySelectorAll('.task').forEach(task => {
        tasksData.progress.push({
            title: task.querySelector('h2').textContent,
            description: task.querySelector('p').textContent
        });
    });
    
    columns[2].querySelectorAll('.task').forEach(task => {
        tasksData.done.push({
            title: task.querySelector('h2').textContent,
            description: task.querySelector('p').textContent
        });
    });
    
    localStorage.setItem('kanbanTasks', JSON.stringify(tasksData));
}

// Function to load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('kanbanTasks');
    
    if (savedTasks) {
        const tasksData = JSON.parse(savedTasks);
        
        // Load tasks into each column
        tasksData.todo.forEach(taskData => {
            createTask(taskData.title, taskData.description, 0);
        });
        
        tasksData.progress.forEach(taskData => {
            createTask(taskData.title, taskData.description, 1);
        });
        
        tasksData.done.forEach(taskData => {
            createTask(taskData.title, taskData.description, 2);
        });
        
        updateTaskCounts();
    }
}

// Function to create a task element
function createTask(title, description, columnIndex) {
    const div = document.createElement("div");
    div.className = "task";
    div.draggable = true;
    
    div.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <button class="delete-btn">Delete</button>
    `;
    
    // Add drag event listeners
    div.addEventListener("dragstart", (e) => {
        draggedTask = div;
        div.classList.add("dragging");
    });

    div.addEventListener("dragend", (e) => {
        div.classList.remove("dragging");
        draggedTask = null;
    });
    
    addDeleteFunctionality(div);
    columns[columnIndex].appendChild(div);
}

// Function to update task counts
function updateTaskCounts() {

    const todoTasks = columns[0].querySelectorAll('.task').length;
    const progressTasks = columns[1].querySelectorAll('.task').length;
    const doneTasks = columns[2].querySelectorAll('.task').length;
    
    // Update the count displays
    todoCount.textContent = todoTasks;
    progressCount.textContent = progressTasks;
    doneCount.textContent = doneTasks;
}

// Function to add delete functionality
function addDeleteFunctionality(task) {
    const deleteBtn = task.querySelector(".delete-btn");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent drag events
            task.remove();
            updateTaskCounts(); // Update counts after deletion
            saveTasks(); // Save to localStorage
        });
    }
}

// Task drag events
tasks.forEach((task) => {
    task.addEventListener("dragstart", (e) => {
        draggedTask = task;
        task.classList.add("dragging");
    });

    task.addEventListener("dragend", (e) => {
        task.classList.remove("dragging");
        draggedTask = null;
    });
    
    // Add delete functionality to existing tasks
    addDeleteFunctionality(task);
});

// Column drag events
columns.forEach((column) => {
    column.addEventListener("dragover", (e) => {
        e.preventDefault(); // Important: allows drop
        column.classList.add("drag-over");
    });

    column.addEventListener("dragleave", (e) => {
        // Check if we're actually leaving the column (not just entering a child)
        if (e.target === column) {
            column.classList.remove("drag-over");
        }
    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();
        column.classList.remove("drag-over");
        
        if (draggedTask) {
            column.appendChild(draggedTask);
            updateTaskCounts(); // Update counts after moving task
            saveTasks(); // Save to localStorage
        }
    });
});


right.addEventListener("click", () => {
    overlay.style.display = "block";
    modal.style.opacity = "1";
});


addbtn.addEventListener("click", () => {
    // Get input values
    let titleInput = document.querySelector('.modal input[type="text"]');
    let descriptionInput = document.querySelector('.modal textarea');
    
    let title = titleInput.value.trim();
    let description = descriptionInput.value.trim();
    
    // Validate inputs
    if (!title) {
        alert("Please enter a task title");
        return;
    }
    createTask(title, description || 'No description', 0);

    // Update counts after adding new task
    updateTaskCounts();
    saveTasks(); // Save to localStorage

    overlay.style.display = "none";
    modal.style.opacity = "0";
    titleInput.value = "";
    descriptionInput.value = "";
});
loadTasks();
updateTaskCounts();

