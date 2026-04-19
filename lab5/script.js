const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time-left');
const target = document.getElementById('target');
const startScreen = document.getElementById('start-screen');

let score = 0;
let timeLeft;
let gameInterval;
let currentDifficulty = 'easy';


const levels = {
    easy: { time: 10, padding: 200 },   
    medium: { time: 3, padding: 50 },   
    hard: { time: 1, padding: 0 }       
};


function startGame(difficulty) {
    currentDifficulty = difficulty;
    score = 0;
    scoreDisplay.textContent = score;
    startScreen.style.display = 'none'; 
    
    moveTarget();
    resetTimer();
}


function moveTarget() {
    const padding = levels[currentDifficulty].padding;
    const squareSize = 50;

    
    const maxX = window.innerWidth - squareSize - padding;
    const maxY = window.innerHeight - squareSize - padding;

    
    const randomX = padding + Math.random() * (maxX - padding);
    const randomY = padding + Math.random() * (maxY - padding);

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
    target.style.display = 'block';
}

function resetTimer() {
    clearInterval(gameInterval);
    timeLeft = levels[currentDifficulty].time; 
    timeDisplay.textContent = timeLeft;

    gameInterval = setInterval(function() {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            gameOver();
        }
    }, 1000);
}

target.addEventListener('click', function() {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
    resetTimer();
});

function gameOver() {
    clearInterval(gameInterval);
    target.style.display = 'none';
    alert('Час вийшов! Ваш рахунок: ' + score);
    startScreen.style.display = 'flex'; 
}