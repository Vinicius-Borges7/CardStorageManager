import newYugioh from "../../js/interceptors/yugioh/new.js";
import newPokemon from "../../js/interceptors/pokemon/new.js";
import newMagic from "../../js/interceptors/magic/new.js";
import newBakugan from "../../js/interceptors/bakugan/new.js";
import newVanguard from "../../js/interceptors/vanguard/new.js";

document.querySelector(".inputBox").addEventListener('click', () => {
    let radio = {
        "ygo": document.querySelector("#ygo"),
        "mgc": document.querySelector("#mgc"),
        "pkm": document.querySelector("#pkm"),
        "bkg": document.querySelector("#bkg"),
        "vng": document.querySelector("#vng")
    }

    if(radio.ygo.checked){
        let groupAlive = document.querySelector("#inputsContainer");
        if(groupAlive){
            groupAlive.remove();
        }

        document.querySelector("body").insertAdjacentHTML('beforeend', 
            `<div id="inputsContainer" style="display: flex; justify-content: center; align-items: center;">
                <div class="inputBox">
                    <h2>Yu-Gi-Oh!</h2>
                    <input type="text" class="ygo ainput" placeholder="Name" id="name"/>
                    <input type="text" class="ygo ainput" placeholder="Card's Type" id="cardType"/>
                    <input type="text" class="ygo ainput" placeholder="Card's Category" id="cardCategory"/>
                    <input type="text" class="ygo ainput" placeholder="Card's Quality" id="quality"/>
                    <input type="text" class="ygo ainput" placeholder="Cards's Rarity" id="rarity"/>
                    <input type="text" class="ygo ainput" placeholder="Price" id="price"/>
                    <h6 id="ygoResponseField"></h6>
                    <button id="btnYgo">Submit Card!</button>
                </div>
            </div>`   
        );
        document.querySelector("#btnYgo").addEventListener('click', newYugioh);
    }

    if(radio.mgc.checked){
        let groupAlive = document.querySelector("#inputsContainer");
        if(groupAlive){
            groupAlive.remove();
        }

        document.querySelector("body").insertAdjacentHTML('beforeend', 
            `<div id="inputsContainer" style="display: flex; justify-content: center; align-items: center;">
                <div class="inputBox">
                    <h2>Magic The Gaterring</h2>
                    <input type="text" class="mgc ainput" placeholder="Name" id="name"/>
                    <input type="text" class="mgc ainput" placeholder="Card Type" id="cardType"/>
                    <input type="text" class="mgc ainput" placeholder="Color(s)" id="pokeType"/>
                    <input type="text" class="mgc ainput" placeholder="Card's Category" id="extras"/>
                    <input type="text" class="mgc ainput" placeholder="Card's Quality" id="quality"/>
                    <input type="text" class="mgc ainput" placeholder="Cards's Rarity" id="rarity"/>
                    <input type="text" class="mgc ainput" placeholder="Card's Price" id="price"/>
                    <h6 id="mgcResponseField"></h6>
                    <button id="btnMgc">Submit Card!</button>
                </div>
            </div>`
        );
        document.querySelector("#btnMgc").addEventListener('click', newMagic);
    }

    if(radio.pkm.checked){
        let groupAlive = document.querySelector("#inputsContainer");
        if(groupAlive){
            groupAlive.remove();
        }

        document.querySelector("body").insertAdjacentHTML('beforeend', 
            `<div id="inputsContainer" style="display: flex; justify-content: center; align-items: center;">
                <div class="inputBox">
                    <h2>Pokémon</h2>
                    <input type="text" class="pkm ainput" placeholder="Name" id="name"/>
                    <input type="text" class="pkm ainput" placeholder="Card Type" id="cardType"/>
                    <input type="text" class="pkm ainput" placeholder="Pokémon Type" id="pokeType"/>
                    <input type="text" class="pkm ainput" placeholder="Card's Extras" id="extras"/>
                    <input type="text" class="pkm ainput" placeholder="Card's Quality" id="quality"/>
                    <input type="text" class="pkm ainput" placeholder="Cards's Rarity" id="rarity"/>
                    <input type="text" class="pkm ainput" placeholder="Price" id="price"/>
                    <h6 id="pkmResponseField"></h6>
                    <button id="btnPkm">Submit Card!</button>
                </div>
            </div>`
        );
        document.querySelector("#btnPkm").addEventListener('click', newPokemon);
    }

    if(radio.bkg.checked){
        let groupAlive = document.querySelector("#inputsContainer");
        if(groupAlive){
            groupAlive.remove();
        }

        document.querySelector("body").insertAdjacentHTML('beforeend', 
            `<div id="inputsContainer" style="display: flex; justify-content: center; align-items: center;">
                <div class="inputBox">
                    <h2>Bakugan!</h2>
                    <input type="text" class="vng ainput" placeholder="Name" id="name"/>
                    <input type="text" class="vng ainput" placeholder="Card's Type" id="cardType"/>
                    <input type="text" class="vng ainput" placeholder="Pyrus Enforcer" id="pyrus"/>
                    <input type="text" class="vng ainput" placeholder="Aquos Enforcer" id="aquos"/>
                    <input type="text" class="vng ainput" placeholder="Ventus Enforcer" id="ventus"/>
                    <input type="text" class="vng ainput" placeholder="Subterra Enforcer" id="subterra"/>
                    <input type="text" class="vng ainput" placeholder="Haos Enforcer" id="haos"/>
                    <input type="text" class="vng ainput" placeholder="Darkus Enforcer" id="darkus"/>
                    <input type="text" class="vng ainput" placeholder="Card's Quality" id="quality"/>
                    <input type="text" class="vng ainput" placeholder="Cards's Rarity" id="rarity"/>
                    <input type="text" class="vng ainput" placeholder="Price" id="price"/>
                    <h6 id="bkgResponseField"></h6>
                    <button id="btnBkg">Submit Card!</button>
                </div>
            </div>`   
        );
        document.querySelector("#btnBkg").addEventListener('click', newBakugan);
    }

    if(radio.vng.checked){
        let groupAlive = document.querySelector("#inputsContainer");
        if(groupAlive){
            groupAlive.remove();
        }

        document.querySelector("body").insertAdjacentHTML('beforeend', 
            `<div id="inputsContainer" style="display: flex; justify-content: center; align-items: center;">
                <div class="inputBox">
                    <h2>Vanguard</h2>
                    <input type="text" class="vng ainput" placeholder="Name" id="name"/>
                    <input type="text" class="vng ainput" placeholder="Card's Type" id="cardType"/>
                    <input type="text" class="vng ainput" placeholder="Card's Gauge" id="gauge"/>
                    <input type="text" class="vng ainput" placeholder="Card's Quality" id="quality"/>
                    <input type="text" class="vng ainput" placeholder="Cards's Rarity" id="rarity"/>
                    <input type="text" class="vng ainput" placeholder="Price" id="price"/>
                    <h6 id="vngResponseField"></h6>
                    <button id="btnVng">Submit Card!</button>
                </div>
            </div>`   
        );
        document.querySelector("#btnVng").addEventListener('click', newVanguard);
    }
})