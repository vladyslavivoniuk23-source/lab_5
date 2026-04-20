const boardElement = document.getElementById('game-board');
let boardState = []; 


function initGame(matrix) {
    boardState = matrix;
    renderBoard();
}


function renderBoard() {
    boardElement.innerHTML = ''; 
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
            const cell = document.createElement('div');
            cell.className = `cell ${boardState[r][c] === 1 ? 'on' : 'off'}`;
            cell.addEventListener('click', () => handleCellClick(r, c));
            boardElement.appendChild(cell);
        }
    }
}


function handleCellClick(r, c) {
    toggle(r, c);       
    toggle(r - 1, c);   
    toggle(r + 1, c);   
    toggle(r, c - 1);   
    toggle(r, c + 1);   
    renderBoard();
    checkWin();
}

function toggle(r, c) {
    if (r >= 0 && r < 5 && c >= 0 && c < 5) {
        boardState[r][c] = boardState[r][c] === 1 ? 0 : 1;
    }
}

function checkWin() {
    const isWin = boardState.every(row => row.every(cell => cell === 0));
    if (isWin) alert('Вітаємо! Ви перемогли!');
}



const matrixA = [
    [0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1]
];

initGame(matrixA);