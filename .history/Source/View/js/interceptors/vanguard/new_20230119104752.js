import Vanguard from '../../models/Vanguard.js';
import Inputs from '../../helpers/Inputs.js';
import Field from '../../helpers/Fields.js';

export default async function newVanguard(){
    const inputs = Inputs.getInputs();

    if(Inputs.voidCheck(inputs) == true){
        const card = new Vanguard(
            inputs.name,
            inputs.cardType,
            inputs.gauge,
            inputs.quality,
            inputs.rarity,
            inputs.price,
            inputs.owner
        );
    
        console.log(card);

        Field.response("vanResponseField").innerHTML = "";
        const res = await card.new();

        Field.response("vanResponseField").innerHTML = res;
    } else {
        Field.response("vanResponseField").innerHTML = "";
        Field.response("vanResponseField").innerHTML = "all fields are obrigatory";
    }
}