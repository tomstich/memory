import { MemoryBoard } from "./MemoryBoard";

const app = document.getElementById("app");
// defines how many cards are going to be rendered
const cardsAmount = 12
const game = new MemoryBoard(app, cardsAmount);

var state = {
    firstSelectedCardId: undefined,
    secondSelectedCardId: undefined,
    firstSelectedCard: undefined,
    secondSelectedCard: undefined
}

function checkForPair() {
    // check if firstSelectedCard and secondSelectedCard have the same value/picture,
    if (state.firstSelectedCard === state.secondSelectedCard) {
        console.log(`You found a pair: ${state.firstSelectedCard} : ${state.secondSelectedCard}`);
    }

    // reset the state after checking for a pair
    state = {
        ...state,
        firstSelectedCardId: undefined,
        firstSelectedCard: undefined,
        secondSelectedCardId: undefined,
        secondSelectedCard: undefined,
    }
}

// this part is needed to check if a pair got selected
document.addEventListener('click', function (event) {
    if (!event.target.matches('.card')) return;
    event.preventDefault();

    // console.log(event.target.innerHTML);
    if (!state.firstSelectedCardId) {
        state = {
            ...state,
            firstSelectedCardId: event.target.id,
            firstSelectedCard: event.target.innerHTML
        }
    } else if (state.firstSelectedCardId != event.target.id) {
        state = {
            ...state,
            secondSelectedCardId: event.target.id,
            secondSelectedCard: event.target.innerHTML
        }
    }

    // Check if a second card got clicked, if yes, check for pair
    if (state.secondSelectedCardId) {
        checkForPair()
    }
}, false);

game.renderMemoryBoard();



