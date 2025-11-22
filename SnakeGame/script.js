let board = document.querySelector('.board');
let blockwidth = 55;
let blockheight = 55;
let blocks = [];
let direction = 'left'
let modal = document.querySelector('.modal');
let RestartBtn = document.querySelector('.ReStart-btn');
let startBtn = document.querySelector('.Start-btn');
let Over = document.querySelector('.Over');
let Start = document.querySelector('.Start');
let highscoreElement = document.querySelectorAll('.infos h1')[0];
let scoreElement = document.querySelectorAll('.infos h1')[1];
let intervel = null;
let timerInterval = null;
let time = document.querySelector('#time');
let num = 0;
let highscore = 0;



let snake = [
    {x:5, y:5},
    {x:5, y:6},
    {x:5, y:7}
];

let totalbloksHeight = Math.floor(board.clientHeight / blockheight);
let totalbloksWidth = Math.floor(board.clientWidth / blockwidth);

let food = {
    x :Math.floor(Math.random() * totalbloksHeight),
    y: Math.floor(Math.random() * totalbloksWidth)
};

for (let i = 0; i < totalbloksHeight; i++) {
    for (let j = 0; j < totalbloksWidth; j++) {
    let block = document.createElement('div');
    block.classList.add('block');
    board.appendChild(block);
    blocks[`${i},${j}`] = block;
    }
}


function drawSnake() {

    
    let head = null;
    if (direction === 'up') {
        head= [{x: snake[0].x - 1, y: snake[0].y}];
    } else if (direction === 'down') {
        head= [{x: snake[0].x + 1, y: snake[0].y}];
    } else if (direction === 'left') {
        head= [{x: snake[0].x,  y: snake[0].y - 1}];
    } else if (direction === 'right') {
        head= [{x: snake[0].x,  y: snake[0].y + 1}];
    }

     blocks[`${food.x},${food.y}`].classList.add('food');

    if (head[0].x == food.x && head[0].y == food.y) {
        num += 10;
        scoreElement.textContent = `Score : ${num}`;
        blocks[`${food.x},${food.y}`].classList.remove('food');
        food = {
            x :Math.floor(Math.random() * totalbloksHeight),
            y: Math.floor(Math.random() * totalbloksWidth)
    }
    blocks[`${food.x},${food.y}`].classList.add('food');
        snake.unshift(head[0]);
}



    if (head[0].x < 0 || head[0].x >= totalbloksHeight || head[0].y < 0 || head[0].y >= totalbloksWidth) {
        modal.style.display = 'flex';
        Start.style.display = 'none';
        Over.style.display = 'flex';
        clearInterval(intervel);
        clearInterval(timerInterval);
        return;
    }
    snake.forEach(segment => {
        let block = blocks[`${segment.x},${segment.y}`];
        if (block) {
            block.classList.remove('fill');
        } 
    });
    snake.unshift(head[0]);
    snake.pop();

    snake.forEach(segment => {
        let block = blocks[`${segment.x},${segment.y}`];
        if (block) {
            block.classList.add('fill');
        } 
    });
}

startBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    intervel = setInterval(() => {
        drawSnake();
    }, 300);
    let [min,sec] = time.textContent.replace('Time : ', '').split('-').map(Number);
        timerInterval = setInterval(() => {
            sec += 1;
            if (sec >= 60) {
                min += 1;
                sec = 0;
            }
            time.textContent = `Time : ${min.toString().padStart(2, '0')}-${sec.toString().padStart(2, '0')}`;
        }, 1000);
});

function ReStart() {
    if (num > highscore) {
        highscore = num;
        highscoreElement.textContent = `High Score : ${highscore}`;
    }
    scoreElement.textContent = `Score : 0`;
    num = 0;
    clearInterval(timerInterval);
    time.textContent = `Time : 00-00`;
    {
    blocks[`${food.x},${food.y}`].classList.remove('food');
    snake.forEach(segment => {
        let block = blocks[`${segment.x},${segment.y}`];
            block.classList.remove('fill');
    });
    modal.style.display = 'none';
    snake = [{x:5, y:5},{x:5, y:6}, {x:5, y:7}];
    food = {
    x :Math.floor(Math.random() * totalbloksHeight),
    y: Math.floor(Math.random() * totalbloksWidth)
}};
    intervel = setInterval(() => {
        drawSnake();
    }, 300);
    let [min,sec] = time.textContent.replace('Time : ', '').split('-').map(Number);
    timerInterval = setInterval(() => {
        sec += 1;
        if (sec >= 60) {
            min += 1;
            sec = 0;
        }
        time.textContent = `Time : ${min.toString().padStart(2, '0')}-${sec.toString().padStart(2, '0')}`;
    }, 1000);
}
RestartBtn.addEventListener('click', () => {
    ReStart();
});

addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        direction = 'up';
    } else if (e.key === 'ArrowDown') {
        direction = 'down';
    } else if (e.key === 'ArrowLeft') {
        direction = 'left';
    } else if (e.key === 'ArrowRight') {
        direction = 'right';
    }
});