import { MemoryBoard } from "./MemoryBoard";

const boardState = {
    boardSize: 12,
    cardsFound: 0,
    firstCard: undefined,
    secondCard: undefined,
}

const memoryBoard = new MemoryBoard(boardState.boardSize);
const statusBar =  document.getElementById("statusBar");

memoryBoard.renderMemoryBoard();
renderStatusBar();

// adds event listeners to all cards 
var cards = document.getElementsByClassName("card");
Array.from(cards).forEach(function(element) {
    element.addEventListener('click', selectCard, true);
});

function renderStatusBar() {
    statusBar.innerHTML = boardState.cardsFound === boardState.boardSize ? `<p>You found all pairs!</p>` : `<p>Pairs found: ${boardState.cardsFound / 2}</p>`;
}

function selectCard(event) {
    if (!event.target.matches('.card')) return;
    event.preventDefault();

    let {firstCard} = boardState;

    if (!firstCard) {
        boardState.firstCard = event.target;
        turnCard(event.target.id);

    } else {
        boardState.secondCard = event.target;
        turnCard(event.target.id);
        checkForPair();
    }
}

function turnCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.toggle("show");
    card.classList.toggle("disabled");
}

function checkForPair() {
    let {firstCard, secondCard} = boardState;

    if (firstCard.innerHTML === secondCard.innerHTML) {
        boardState.cardsFound += 2;
        console.info('You found a pair!');
        disableClickForCard();
        renderStatusBar();
        resetBoard();
    } else {
        setTimeout(function() {
            turnCard(boardState.firstCard.id);
            turnCard(boardState.secondCard.id); 
            resetBoard();
        }, 1500);
    }
}

function resetBoard() {
    boardState.firstCard = undefined;
    boardState.secondCard = undefined;
}

function disableClickForCard() {
    console.log('listeners Removed');
    // removes the event listeners from the found pair
    document.getElementById(boardState.firstCard.id).removeEventListener("click", selectCard, true);
    document.getElementById(boardState.secondCard.id).removeEventListener("click", selectCard, true);
}




