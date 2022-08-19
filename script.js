// selectors
const tiles = document.querySelectorAll('.grid-area');
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const displayWinner = document.getElementById("displayWinner");
const playAgain = document.querySelector('#playAgain');

// variables

let currentPlayer = true;
let playAgainBool = true;
let gameBoard = {}
const winningCombination = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];



function gameOver(player) {
    displayWinner.textContent = `Congratulations player ${player} you win!`;
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.remove('inactive');
        modal.classList.add('active');
    }, 1);
    modalContent.classList.remove('exit-transition');
    modalContent.classList.add('enter-transition');
}

function gameWinner(player) {

    return winningCombination.some(combination => {
        return combination.every(index => {
            return gameBoard[index] === player;
        })
    })

}

function playGame(key, player) {

    gameBoard[key] = player;
    currentPlayer = !currentPlayer;
    if(gameWinner(player)){
        gameOver(player);
    }else{

    }
}

tiles.forEach(tile => {
    tile.addEventListener('click', (e) => {

        if(tile.textContent) return;

        if(currentPlayer){
            tile.textContent = 'X';
            playGame(tile.dataset.grid, tile.textContent);
        } else {
            tile.textContent = 'O';
            playGame(tile.dataset.grid, tile.textContent);
        }

    })
})

playAgain.addEventListener('click', e => {
    currentPlayer = true;
    gameBoard = {};
    tiles.forEach(tile => {
        tile.textContent = '';
        tile.removeEventListener;
    })
    modalContent.classList.remove('enter-transition');
    modalContent.classList.add('exit-transition');
    modal.classList.remove('active');
    modal.classList.add('inactive');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 1500);
})