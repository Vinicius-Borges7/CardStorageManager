import Pokemon from 'http://localhost/CardManager/Source/View/js/models/Pokemon.js';
import Inputs from 'http://localhost/CardManager/Source/View/js/helpers/Inputs.js';
import Field from 'http://localhost/CardManager/Source/View/js/helpers/Fields.js';

async function newPokemon(){
    const inputs = Inputs.getInputs();

    if(Inputs.validatePkmInputs(inputs) == true){
        const card = new Pokemon(
            inputs.name,
            inputs.cardType,
            inputs.pokeType,
            inputs.extras,
            inputs.quality,
            inputs.rarity,
            inputs.price,
            inputs.owner
        );
    
        console.log(card);

        Field.response("pkmResponseField").innerHTML = "";
        const res = await card.new();

        Field.response("pkmResponseField").innerHTML = res;
    } 
    
    else {
        Field.response("pkmResponseField").innerHTML = Inputs.validatePkmInputs(inputs);
    }
}