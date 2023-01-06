import Pokemon from '../../models/Pokemon.js';
import Inputs from '../../helpers/Inputs';
import Field from '../../helpers/Fields';

export default async function newPokemon(){
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