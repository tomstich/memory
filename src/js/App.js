import { MemoryBoard } from "./MemoryBoard";

const app = document.getElementById("app");
// defines how many cards are going to be rendered
const cardsAmount = 12
const game = new MemoryBoard(app, cardsAmount);

var state = {
    firstSelectedCardId: undefined,
    secondSelectedCardId: undefined,
    firstSelectedCard: undefined,
    secondSelectedCard: undefined,
    nextClickReset: false,
}

function checkForPair() {
    // check if firstSelectedCard and secondSelectedCard have the same value/picture,
    if (state.firstSelectedCard === state.secondSelectedCard && state.firstSelectedCardId !== undefined) {
        console.log(`You found a pair: ${state.firstSelectedCard} : ${state.secondSelectedCard}`);
    } else {
        console.log('No pair found')
    }

    if (state.nextClickReset) {
        toggleCard(state.firstSelectedCardId);
        toggleCard(state.secondSelectedCardId);

        state = {
        ...state,
            firstSelectedCardId: undefined,
            firstSelectedCard: undefined,
            secondSelectedCardId: undefined,
            secondSelectedCard: undefined,
            nextClickReset: false,
        }
    }

}

function toggleCard(cardId) {
    var card = document.getElementById(cardId);

    card.classList.toggle("show");
    card.classList.toggle("disabled");
}

var select = (event) => {
    if (!state.firstSelectedCardId && event.target.id) {        
        state = {
            ...state,
            nextClickReset: false,
            firstSelectedCardId: event.target.id,
            firstSelectedCard: event.target.innerHTML
        }
        
        toggleCard(event.target.id);
    } else if (state.firstSelectedCardId && !state.secondSelectedCardId) {
        state = {
            ...state,
            secondSelectedCardId: event.target.id,
            secondSelectedCard: event.target.innerHTML
        }
        
        if (state.firstSelectedCardId !== state.secondSelectedCardId) {
            toggleCard(event.target.id);
            checkForPair();

            state =  {
                ...state,
                nextClickReset: true,
            }
        }
    } else {
        // after updating the state, check for pair
        checkForPair();
    }
}

game.renderMemoryBoard();

// we call the function select to update the state after each click
document.addEventListener('click', function (event) {
    if (!event.target.matches('.card')) return;
    event.preventDefault();

    select(event);
}, false);


