import Magic from '../../models/Magic.js';
import Inputs from '../../helpers/Inputs.js';
import Field from '../../helpers/Fields.js';

export default async function newMagic(){
    const inputs = Inputs.getInputs();
    
    if(Inputs.validatePkmInputs(inputs) == true){
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
            
            console.log(inputs);
            console.log(card);
            
            Field.response("mgcResponseField").innerHTML = "";
            const res = await card.new();
            
            Field.response("mgcResponseField").innerHTML = res;
        } 
        
        else {
            Field.response("mgcResponseField").innerHTML = Inputs.validateMgcInputs(inputs);
        }
}