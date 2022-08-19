const tiles = document.querySelectorAll('.grid-area');
let currentPlayer = true;
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

function gameWinner() {
    for(let i = 0; i < winningCombination.length; i++){
        console.log(winningCombination[i].every(index => {
            gameBoard[index] === 'X';
        }))
    }
    // for(let i = 0; i < winningCombination.length; i++){
    //     for(let j = 0; j < winningCombination[i].length; j++){
    //         console.log(gameBoard[winningCombination[i][j]])
    //     }
    // }
}

function playGame(key, player) {

    gameBoard[key] = player;
    currentPlayer = !currentPlayer;
    gameWinner()
}

tiles.forEach(tile => {
    tile.addEventListener('click', (e) => {

        if(currentPlayer){
            tile.textContent = 'X';
            playGame(tile.dataset.grid, tile.textContent);
        } else {
            tile.textContent = 'O';
            playGame(tile.dataset.grid, tile.textContent);
        }

    }, {once: true})
})
