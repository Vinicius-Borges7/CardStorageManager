import Bakugan from '../../models/Bakugan.js';
import Inputs from '../../helpers/Inputs.js';
import Field from '../../helpers/Fields.js';

export default async function newBakugan(){
    const inputs = Inputs.getInputs();

    if(Inputs.voidCheck(inputs) == true){
        const card = new Bakugan(
            inputs.name,
            inputs.cardType,
            inputs.pyrus,
            inputs.aquos,
            inputs.ventus,
            inputs.subterra,
            inputs.haos,
            inputs.darkus,
            inputs.quality,
            inputs.rarity,
            inputs.price
        );
    
        Field.response("bkgResponseField").innerHTML = "";
        const res = await card.new();

        Field.response("bkgResponseField").innerHTML = res;
    } else {
        Field.response("bkgResponseField").innerHTML = "";
        Field.response("bkgResponseField").innerHTML = "all fields are obrigatory";
    }
}