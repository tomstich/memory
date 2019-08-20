var textForCards = [5, 0, 4, 1, 3, 2, 2, 3, 1, 4, 0, 5];

export class MemoryCard {
    constructor(id) {
        this.id = id;
    }

    createCard() {
        const emoji = ['💩', '🧠', '🖖🏻', '🌚', '👁', '🐶']
        const emojiForId = emoji[textForCards[this.id]];

        return `<div id=${this.id} class="card disabled"><p>${emojiForId}</p></div>`;
    }
}