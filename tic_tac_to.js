const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('resetButton');
const winnerOverlay = document.getElementById('winnerOverlay');
const winnerMessage = document.getElementById('winnerMessage');
const overlayResetButton = document.getElementById('overlayResetButton');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', '']; // empty board
let gameActive = true;

// Winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Handle a cell click
const handleCellClick = (event) => {
    const cellIndex = event.target.getAttribute('data-cell-index');
    
    if (gameBoard[cellIndex] !== '' || !gameActive) return; // Ignore if already filled or game over
    
    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    
    if (checkWinner()) {
        gameActive = false;
        winnerMessage.textContent = `${currentPlayer} wins!`;
        winnerOverlay.style.display = 'flex'; // Show the winner overlay
        return;
    }
    
    if (gameBoard.every(cell => cell !== '')) {
        gameActive = false;
        winnerMessage.textContent = 'It\'s a draw!';
        winnerOverlay.style.display = 'flex'; // Show the draw overlay
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `Player ${currentPlayer}'s turn`;
};

// Check if there's a winner
const checkWinner = () => {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard[c] === currentPlayer;
    });
};

// Reset the game
const resetGame = () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    statusText.textContent = `Player ${currentPlayer}'s turn`;

    cells.forEach(cell => {
        cell.textContent = '';
    });

    winnerOverlay.style.display = 'none'; // Hide the winner overlay
};

// Add event listeners
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);
overlayResetButton.addEventListener('click', resetGame);
