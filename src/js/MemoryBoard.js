import { MemoryCard } from "./MemoryCard";

export class MemoryBoard {
    constructor(app, cardsAmount, memoryCard) {
        this.app = app;
        this.cardsAmount = cardsAmount;
        this.cards = ''
    }

    createMemoryBoard() {
        for (let i = 0; i < this.cardsAmount; i++) {
            const memoryCard = new MemoryCard(i)
            this.cards += memoryCard.createCard();
        }
        console.log(this.cards);
    }

    renderMemoryBoard() {
        this.createMemoryBoard();
        this.app.innerHTML = this.cards;
    }
}