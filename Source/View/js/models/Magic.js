import REST from "http://localhost/CardManager/Source/View/js/helpers/REST.js";
import Inputs from 'http://localhost/CardManager/Source/View/js/helpers/Inputs.js';
import Field from 'http://localhost/CardManager/Source/View/js/helpers/Fields.js';

export default class Magic{
    #name = null;
    #cardType = null;
    #color = null;
    #category = null;
    #quality = null;
    #rarity = null;
    #price = null;
    #owner = null;

    constructor(
        name = null,
        cardType = null,
        color = null,
        category = null,
        quality = null,
        rarity = null,
        price = null,
        owner = null
    ){
        this.#name = name,
        this.#cardType = cardType,
        this.#color = color,
        this.#category = category
        this.#quality = quality,
        this.#rarity = rarity,
        this.#price = price,
        this.#owner = owner
    }

    async new(){
        const body = {
            "name": this.#name,
            "cardType": this.#cardType,
            "color": this.#color,
            "category": this.#category,
            "quality": this.#quality,
            "rarity": this.#rarity,
            "price": this.#price,
            "owner": ""
        }

        const res = new REST("http://localhost/cardManager/mgc", body);
        return await res.post();
    }

    static async get(){
        let field = Field.magic();
        const req = new REST('http://localhost/CardManager/mgcGet', {'id': ''});
        let cards = await req.post();
        console.log(cards);

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
                            <p class="card-text">Card's Color(s): ${e.color}</p>
                            <p class="card-text">Card's Category: ${e.category}</p>
                            <p class="card-text">Card's Quality: ${e.quality}</p>
                            <p class="card-text">Card's Rarity: ${e.rarity}</p>
                            <p class="card-text">Card's Price: ${e.price}</p>
                        </div>
                        <button id="btnDelMgc" onClick='deleteMgc(${e.id})' style="background-color: rgb(240, 194, 93);>Delete Card</button>
                    </div>
                </div>`
            );
        });
    }
}