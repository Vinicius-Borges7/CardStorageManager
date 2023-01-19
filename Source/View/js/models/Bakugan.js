import REST from '../helpers/REST.js';
import Field from "../helpers/Fields.js";

export default class Bakugan{
    #name = null;
    #cardType = null;
    #pyrus = null;
    #aquos = null;
    #ventus = null;
    #subterra = null;
    #haos = null;
    #darkus = null;
    #quality = null;
    #rarity = null;
    #price = null;
    #owner = null;

    constructor(
        name = null,
        cardType = null,
        pyrus = null,
        aquos = null,
        ventus = null,
        subterra = null,
        haos = null,
        darkus = null,
        quality = null,
        rarity = null,
        price = null,
        owner = null
    ){
        this.#name = name,
        this.#cardType = cardType,
        this.#pyrus = pyrus;
        this.#aquos = aquos;
        this.#ventus = ventus;
        this.#subterra = subterra;
        this.#haos = haos;
        this.#darkus = darkus;
        this.#quality = quality,
        this.#rarity = rarity,
        this.#price = price,
        this.#owner = owner
    }

    async new(){
        const body = {
            "name": this.#name,
            "cardType": this.#cardType,
            "pyrus": this.#pyrus,
            "aquos": this.#aquos,
            "ventus": this.#ventus,
            "subterra": this.#subterra,
            "haos": this.#haos,
            "darkus": this.#darkus,
            "quality": this.#quality,
            "rarity": this.#rarity,
            "price": this.#price,
            "owner": ""
        }

        const res = new REST("bakugan", body);
        return await res.post();
    }

    static async get(){
        let field = Field.bakugan();
        const req = new REST('bakuganGet', {'id': ''});
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
                            <p class="card-text">Pyrus Enforcer: ${e.pyrus}</p>
                            <p class="card-text">Aquos Enforcer: ${e.aquos}</p>
                            <p class="card-text">Ventus Enforcer: ${e.ventus}</p>
                            <p class="card-text">Subterra Enforcer: ${e.subterra}</p>
                            <p class="card-text">Haos Enforcer: ${e.haos}</p>
                            <p class="card-text">Darkus Enforcer: ${e.darkus}</p>
                            <p class="card-text">Card's Quality: ${e.quality}</p>
                            <p class="card-text">Card's Rarity: ${e.rarity}</p>
                            <p class="card-text">Card's Price: ${e.price}</p>
                        </div>
                        <button id="btnDelBakugan${e.id}" onClick='deleteBakugan(${e.id})'>Delete Card</button>
                    </div>
                </div>`
            );
        });
    }
}