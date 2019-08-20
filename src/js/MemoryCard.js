var textForCards = [5, 0, 4, 1, 3, 2, 2, 3, 1, 4, 0, 5];

export class MemoryCard {
    constructor(id) {
        this.id = id;
    }

    createCard() {
        const emoji = ['💩', '🧠', '🖖🏻', '🌚', '👁', '🐶']
        const emojiForId = emoji[textForCards[this.id]];
        return `   
            <div class="cardWrapper ">
                <div class="card" id=${this.id}>
                    <div class="cardFace cardFaceFront" id=${this.id}><p>${emojiForId}</p></div>
                    <div class="cardFace cardFaceBack">${emojiForId}</div>
                </div>
            </div>
        `;
    }
}