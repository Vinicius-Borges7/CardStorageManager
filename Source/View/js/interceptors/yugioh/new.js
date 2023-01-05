import Yugioh from 'http://localhost/CardManager/Source/View/js/models/Yugioh.js';
import Inputs from 'http://localhost/CardManager/Source/View/js/helpers/Inputs.js';
import Field from 'http://localhost/CardManager/Source/View/js/helpers/Fields.js';

// async function a(){
//     window.alert("a")
// }

async function newYugioh(){
    const inputs = Inputs.getInputs();

    if(Inputs.validateYgoInputs(inputs) == true){
        const card = new Yugioh(
            inputs.name,
            inputs.cardType,
            inputs.cardCategory,
            inputs.quality,
            inputs.rarity,
            inputs.price,
            inputs.owner
        );
    
        console.log(card);

        Field.response("ygoResponseField").innerHTML = "";
        const res = await card.new();

        Field.response("ygoResponseField").innerHTML = res;
    } 
    
    else {
        Field.response("ygoResponseField").innerHTML = Inputs.validateYgoInputs(inputs);
    }
}