var textForCards = [5, 0, 4, 1, 3, 2, 2, 3, 1, 4, 0, 5];

export class MemoryCard {
    constructor(id, picture) {
        this.id = id;
        this.picture = picture;
    }

    createCard() {
        return `   
            <div class="cardWrapper ">
                <div class="card" id=${this.id}>
                    <div class="cardFace cardFaceFront" id=${this.id}><p>${this.picture}</p></div>
                    <div class="cardFace cardFaceBack">${this.picture}</div>
                </div>
            </div>
        `;
    }
}