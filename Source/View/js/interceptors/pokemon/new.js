import Pokemon from '../../models/Pokemon.js';
import Inputs from '../../helpers/Inputs.js';
import Field from '../../helpers/Fields.js';

export default async function newPokemon(){
    const inputs = Inputs.getInputs();

    if(Inputs.voidCheck(inputs) == true){
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

        Field.response("pkmResponseField").innerHTML = "";
        const res = await card.new();

        Field.response("pkmResponseField").innerHTML = res;
    } else {
        Field.response("pkmResponseField").innerHTML = "";
        Field.response("pkmResponseField").innerHTML = "all fields are obrigatory";
    }
}