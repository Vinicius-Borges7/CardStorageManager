import REST from "../helpers/REST.js";
import Field from "../helpers/Fields.js";

export default class Yugioh{
    #name = null;
    #cardType = null;
    #pokeType = null;
    #extras = null;
    #quality = null;
    #rarity = null;
    #price = null;
    #owner = null;

    constructor(
        name = null,
        cardType = null,
        pokeType = null,
        extras = null,
        quality = null,
        rarity = null,
        price = null,
        owner = null
    ){
        this.#name = name,
        this.#cardType = cardType,
        this.#pokeType = pokeType,
        this.#extras = extras,
        this.#quality = quality,
        this.#rarity = rarity,
        this.#price = price,
        this.#owner = owner
    }

    async new(){
        const body = {
            "name": this.#name,
            "cardType": this.#cardType,
            "pokeType": this.#pokeType,
            "extras": this.#extras,
            "quality": this.#quality,
            "rarity": this.#rarity,
            "price": this.#price,
            "owner": ""
        }

        const res = new REST("pokemon", body);
        return await res.post();
    }

    static async get(){
        let field = Field.pokemon();
        const req = new REST('pokemonGet', {'id': ''});
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
                            <p class="card-text">Card Type: ${e.cardType}</p>
                            <p class="card-text">Pokémon Type: ${e.pokeType}</p>
                            <p class="card-text">Extras: ${e.extras}</p>
                            <p class="card-text">Card's Quality: ${e.quality}</p>
                            <p class="card-text">Card's Rarity: ${e.rarity}</p>
                            <p class="card-text">Card's Price: ${e.price}</p>
                        </div>
                        <button id="btnDelPkm${e.id}" onClick='deletePkm(${e.id})'>Delete Card</button>
                    </div>
                </div>`
            );
        });
    }
}