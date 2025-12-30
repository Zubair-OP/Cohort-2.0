let cards = document.querySelectorAll('.cards');
let todoPage = document.querySelector('.todoPage');
let dailyPlannerPage = document.querySelector('.dailyPlannerPage');
let pomodoroPage = document.querySelector('.pomodoroPage');
let motivationsPage = document.querySelector('.motivationsPage');


cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        
        todoPage.style.display = 'none';
        dailyPlannerPage.style.display = 'none';
        pomodoroPage.style.display = 'none';
        motivationsPage.style.display = 'none';
        
        switch(index) {
            case 0:
                todoPage.style.display = 'block';
                break;
            case 1:
                dailyPlannerPage.style.display = 'block';
                break;
            case 2:
                pomodoroPage.style.display = 'block';
                break;
            case 3:
                motivationsPage.style.display = 'block';
                break;
        }
    });
});


// Back Button Functionality
let BackButton = document.querySelectorAll('.btnClose');

BackButton.forEach(button => {
    button.addEventListener('click', () => {
        todoPage.style.display = 'none';
        dailyPlannerPage.style.display = 'none';
        pomodoroPage.style.display = 'none';
        motivationsPage.style.display = 'none';
    });
});


// Todo Page Functionality
const todos = [
    { id: 1, task: "Complete project documentation", completed: false },
    { id: 2, task: "Review pull requests", completed: false },
    { id: 3, task: "Team meeting at 3 PM", completed: false },
    { id: 4, task: "Update portfolio website", completed: false },
    { id: 5, task: "Learn React hooks", completed: false }
];

let todoInput = document.querySelector('.todoInput');
let addTodoBtn = document.querySelector('.addTodoBtn');
let todoList = document.querySelector('.taskitem');

addTodoBtn.addEventListener('click', () => {
        let todoText = todoInput.value.trim();
        if (todoText !== '') {
            todoText.innerHTML = `<div class="taskitem">
                    <h3>${todos.task}</h3>
                    <button class="deletebtn">Delete Task</button>
                </div>`;
            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    });