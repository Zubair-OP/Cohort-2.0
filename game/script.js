// DOM Elements ko get karna
const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('high-score');
const timeDisplay = document.getElementById('time');
const gameOverModal = document.getElementById('game-over-modal');
const finalScoreDisplay = document.getElementById('final-score');
const restartButton = document.getElementById('restart-button');

// Game Variables
const gridSize = 20;
let snake;
let food;
let direction;
let score;
let highScore = 0;
let time;
let gameInterval;
let timerInterval;
let isGameOver;
const gameSpeed = 200; // Milliseconds (jitna kam, utna tez)

// Game ko shuru ya restart karne ka function
function startGame() {
    // Purane intervals clear karna
    clearInterval(gameInterval);
    clearInterval(timerInterval);

    // Initial values set karna
    // Snake 3 objects (segments) se shuru hoga
    snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];
    direction = 'right';
    score = 0;
    time = 0;
    isGameOver = false;

    // High score ko local storage se load karna
    loadHighScore();

    // UI update karna
    scoreDisplay.textContent = score;
    timeDisplay.textContent = '0s';
    gameOverModal.classList.add('modal-hidden');

    // Pehla food generate karna
    generateFood();

    // Game loop shuru karna
    gameInterval = setInterval(gameLoop, gameSpeed);
    // Timer shuru karna
    timerInterval = setInterval(updateTime, 1000);
}

// Har game tick par yeh function chalega
function gameLoop() {
    if (isGameOver) return;

    moveSnake();
    if (checkCollision()) {
        gameOver();
    } else {
        draw();
    }
}

// Game board ko draw/update karna
function draw() {
    // Board ko khali karna
    gameBoard.innerHTML = '';

    // Snake ko draw karna
    snake.forEach(segment => {
        const snakeElement = createGameElement('div', 'snake');
        setGridPosition(snakeElement, segment);
        gameBoard.appendChild(snakeElement);
    });

    // Food ko draw karna
    const foodElement = createGameElement('div', 'food');
    setGridPosition(foodElement, food);
    gameBoard.appendChild(foodElement);
}

// Helper function: Naya game element banana
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// Helper function: Element ki grid position set karna
function setGridPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

// Snake ko move karna
function moveSnake() {
    const head = { ...snake[0] }; // Naya head banana

    // Direction ke hisab se head ki position update karna
    switch (direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }

    snake.unshift(head); // Naya head snake ke shuru mein add karna

    // Check karna ke food khaya ya nahi
    if (head.x === food.x && head.y === food.y) {
        // Food khaya
        score++;
        scoreDisplay.textContent = score;
        generateFood(); // Naya food banana
    } else {
        // Food nahi khaya, toh poonch (tail) hatado
        snake.pop();
    }
}

// Collision check karna
function checkCollision() {
    const head = snake[0];

    // 1. Border se takkar (Aapki requirement)
    if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
        return true;
    }

    // 2. Apne jism se takkar
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

// Naya food random jagah par generate karna
function generateFood() {
    let newFoodPosition;
    do {
        newFoodPosition = {
            x: Math.floor(Math.random() * gridSize) + 1,
            y: Math.floor(Math.random() * gridSize) + 1
        };
    } while (isSnakeOnFood(newFoodPosition)); // Jab tak food snake ke upar hai, naya banao

    food = newFoodPosition;
}

// Check karna ke food ki position snake ke upar toh nahi
function isSnakeOnFood(position) {
    return snake.some(segment => segment.x === position.x && segment.y === position.y);
}

// Time update karna
function updateTime() {
    if (isGameOver) return;
    time++;
    timeDisplay.textContent = `${time}s`;
}

// High score update aur save karna
function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        highScoreDisplay.textContent = highScore;
        localStorage.setItem('snakeHighScore', highScore);
    }
}

// High score ko local storage se load karna
function loadHighScore() {
    const storedHighScore = localStorage.getItem('snakeHighScore');
    if (storedHighScore) {
        highScore = parseInt(storedHighScore, 10);
        highScoreDisplay.textContent = highScore;
    }
}

// Game over function
function gameOver() {
    isGameOver = true;
    clearInterval(gameInterval);
    clearInterval(timerInterval);

    updateHighScore();

    finalScoreDisplay.textContent = score;
    gameOverModal.classList.remove('modal-hidden');
}

// Keyboard input (Arrow keys) handle karna
function handleKeyPress(event) {
    // Snake ko ulta ghoomne se rokna
    const goingUp = (direction === 'up');
    const goingDown = (direction === 'down');
    const goingLeft = (direction === 'left');
    const goingRight = (direction === 'right');

    switch (event.key) {
        case 'ArrowUp':
            if (!goingDown) direction = 'up';
            break;
        case 'ArrowDown':
            if (!goingUp) direction = 'down';
            break;
        case 'ArrowLeft':
            if (!goingRight) direction = 'left';
            break;
        case 'ArrowRight':
            if (!goingLeft) direction = 'right';
            break;
    }
}

// Event Listeners set karna
document.addEventListener('keydown', handleKeyPress);
restartButton.addEventListener('click', startGame);

// Game ko pehli baar shuru karna
startGame();