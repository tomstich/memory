var textForCards = [5, 0, 4, 1, 3, 2, 2, 3, 1, 4, 0, 5];

export class MemoryCard {
    constructor(id) {
        this.id = id;
        this.flipped = false;
    }

    createCard() {
        const emoji = ['💩', '🧠', '🖖🏻', '🌚', '👁', '🐶']
        const emojiForId = emoji[textForCards[this.id]];

        return `<div id=${this.id} class="card"><p>${emojiForId}</p></div>`;
    }
}