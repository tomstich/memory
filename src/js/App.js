import { MemoryBoard } from "./MemoryBoard";

const gameModes = {
    clickCounter: 0,
    noPressure: 1,
}

const boardState = {
    boardSize: 12,
    cardsFound: 0,
    firstCard: undefined,
    secondCard: undefined,
    gameMode: 1,
}

const clickCounterState = {
    clicks: 0,
}

const memoryBoard = new MemoryBoard(boardState.boardSize);
const statusBar =  document.getElementById("statusBar");

memoryBoard.renderMemoryBoard();
renderStatusBar();

// adds event listeners to all cards 
var cards = document.getElementsByClassName("card");
Array.from(cards).forEach(
    function(element) {
        element.addEventListener( 'click', selectCard, true)
    }
);

function flipCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.toggle('isFlipped');
}

function renderStatusBar() {
    let statusBarHTML = ''
    switch (boardState.gameMode) {
        case gameModes.clickCounter:
            statusBarHTML =  boardState.cardsFound === boardState.boardSize ? `<p>You found all pairs and it took ${clickCounterState.clicks}</p>` : `<p>Click: ${clickCounterState.clicks}</p>`;
            break; 
    
        case gameModes.noPressure:
            statusBarHTML = boardState.cardsFound === boardState.boardSize ? `<p>You found all pairs!</p>` : `<p>Pairs found: ${boardState.cardsFound / 2}</p>`;
            break;
    
        default:
            break;
    }
    console.log(statusBarHTML)
    statusBar.innerHTML = statusBarHTML;
}

function selectCard() {
    if (!boardState.firstCard) {
        boardState.firstCard = event.target;
        flipCard(event.target.id)
    } else {
        boardState.secondCard = event.target;
        flipCard(event.target.id)
        checkForPair();
    }
    clickCounterState.clicks++;
    renderStatusBar()
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
            flipCard(boardState.firstCard.id);
            flipCard(boardState.secondCard.id); 
            resetBoard();
        }, 1000);
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