import { MemoryCard } from "./MemoryCard";

export class MemoryBoard {
    constructor(boardSize) {
        this.gameBoard =  document.getElementById("gameBoard");;
        this.boardSize = boardSize;
        this.cards = ''
        this.pictures = ['💩', '🧠', '🖖🏻', '🌚', '👁', '🐶', '🍌', '🍗', '🍟', '🏀', '🚗', '🦷']
    }

    renderMemoryBoard() {
        this.createMemoryBoard();
        this.gameBoard.innerHTML = this.cards;
    }

    createMemoryBoard() {
        const randomPictureOrder = this.generateRandomPictureOrder();
        for (let i = 0; i < this.boardSize; i++) {
            const memoryCard = new MemoryCard(i, randomPictureOrder[i])
            this.cards += memoryCard.createCard();
        }
    }

    generateRandomPictureOrder() {
        let arrayWithPictures = this.fillArrayWithPictures()
        this.shuffleArray(arrayWithPictures)
        return arrayWithPictures;
    }

    fillArrayWithPictures() {
        let arrayWithPictures = new Array(this.boardSize)
        let imageIndex = 0
        for (let i = 0; i < arrayWithPictures.length; i = i + 2) {
            arrayWithPictures[i] = this.pictures[imageIndex]
            arrayWithPictures[i + 1] = this.pictures[imageIndex]
            imageIndex++;
        }
        return arrayWithPictures
    }

    shuffleArray(array) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}