class Insert{
    static async magic(){
        document.querySelector("#inputsContainer").remove();
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
                    <h6 id="mgcResponseField">erro muito tri</h6>
                    <button id="btnMgc">Submit Card!</button>
                </div>
            </div>`
        );
    }
}