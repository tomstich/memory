import { MemoryCard } from "./MemoryCard";

export class MemoryBoard {
    constructor(cardsAmount) {
        this.gameBoard =  document.getElementById("gameBoard");;
        this.cardsAmount = cardsAmount;
        this.cards = ''
    }

    createMemoryBoard() {
        for (let i = 0; i < this.cardsAmount; i++) {
            const memoryCard = new MemoryCard(i)
            this.cards += memoryCard.createCard();
        }
    }

    renderMemoryBoard() {
        this.createMemoryBoard();
        this.gameBoard.innerHTML = this.cards;
    }
}