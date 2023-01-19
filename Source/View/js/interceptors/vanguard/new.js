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

        Field.response("vngResponseField").innerHTML = "";
        const res = await card.new();

        Field.response("vngResponseField").innerHTML = res;
    } else {
        Field.response("vngResponseField").innerHTML = "";
        Field.response("vngResponseField").innerHTML = "all fields are obrigatory";
    }
}