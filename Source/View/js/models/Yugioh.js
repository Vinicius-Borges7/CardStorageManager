import REST from '../helpers/REST.js';
import Field from "../helpers/Fields.js";

export default class Yugioh{
    #name = null;
    #cardType = null;
    #cardCategory = null;
    #quality = null;
    #rarity = null;
    #price = null;
    #owner = null;

    constructor(
        name = null,
        cardType = null,
        cardCategory = null,
        quality = null,
        rarity = null,
        price = null,
        owner = null
    ){
        this.#name = name,
        this.#cardType = cardType,
        this.#cardCategory = cardCategory,
        this.#quality = quality,
        this.#rarity = rarity,
        this.#price = price,
        this.#owner = owner
    }

    async new(){
        const body = {
            "name": this.#name,
            "cardType": this.#cardType,
            "cardCategory": this.#cardCategory,
            "quality": this.#quality,
            "rarity": this.#rarity,
            "price": this.#price,
            "owner": ""
        }

        const res = new REST("yugioh", body);
        return await res.post();
    }

    static async get(){
        let field = Field.yugioh();
        const req = new REST('yugiohGet', {'id': ''});
        let cards = await req.post();
        console.log("yugioh: " + cards);

        if(cards == false){
            cards = [];
        }

        cards.forEach((e) => {
            field.insertAdjacentHTML('beforeend', 
                `<div class="col-md-3 mb-4" id="card${e.id}">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-tittle">${e.name}</h5>
                            <p class="card-text">Card's Type: ${e.cardType}</p>
                            <p class="card-text">Card's Category: ${e.cardCategory}</p>
                            <p class="card-text">Card's Quality: ${e.quality}</p>
                            <p class="card-text">Card's Rarity: ${e.rarity}</p>
                            <p class="card-text">Card's Price: ${e.price}</p>
                        </div>
                        <button id="btnDelYgo${e.id}" onClick='deleteYgo(${e.id})'>Delete Card</button>
                    </div>
                </div>`
            );
        });
    }
}