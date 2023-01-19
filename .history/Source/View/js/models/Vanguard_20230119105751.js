import REST from '../helpers/REST.js';
import Field from "../helpers/Fields.js";

export default class Vanguard{
    #name = null;
    #cardType = null;
    #gauge = null;
    #quality = null;
    #rarity = null;
    #price = null;
    #owner = null;

    constructor(
        name = null,
        cardType = null,
        gauge = null,
        quality = null,
        rarity = null,
        price = null,
        owner = null
    ){
        this.#name = name,
        this.#cardType = cardType,
        this.#gauge = gauge,
        this.#quality = quality,
        this.#rarity = rarity,
        this.#price = price,
        this.#owner = owner
    }

    async new(){
        const body = {
            "name": this.#name,
            "cardType": this.#cardType,
            "gauge": this.#gauge,
            "quality": this.#quality,
            "rarity": this.#rarity,
            "price": this.#price,
            "owner": ""
        }

        const res = new REST("vanguard", body);
        return await res.post();
    }

    static async get(){
        let field = Field.yugioh();
        const req = new REST('vanguardGet', {'id': ''});
        let cards = await req.post();

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
                            <p class="card-text">Card's Gauge: ${e.gauge}</p>
                            <p class="card-text">Card's Quality: ${e.quality}</p>
                            <p class="card-text">Card's Rarity: ${e.rarity}</p>
                            <p class="card-text">Card's Price: ${e.price}</p>
                        </div>
                        <button id="btnDelVng${e.id}" onClick='deleteVanguard(${e.id})'>Delete Card</button>
                    </div>
                </div>`
            );
        });
    }
}