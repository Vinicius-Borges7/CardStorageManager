import Magic from '../../models/Magic.js';
import Inputs from '../../helpers/Inputs.js';
import Field from '../../helpers/Fields.js';

export default async function newMagic(){
    const inputs = Inputs.getInputs();
    
    if(Inputs.voidCheck(inputs) == true){
        const card = new Magic(
            inputs.name,
            inputs.cardType,
            inputs.color,
            inputs.category,
            inputs.quality,
            inputs.rarity,
            inputs.price,
            inputs.owner
            );
            
            Field.response("mgcResponseField").innerHTML = "";
            const res = await card.new();
            
            Field.response("mgcResponseField").innerHTML = res;
    } else {
        Field.response("mgcResponseField").innerHTML = "";
        Field.response("mgcResponseField").innerHTML = "all fields are obrigatory";
    }
}