import User from '../models/User.js';
import Inputs from '../helpers/Inputs.js';
import Field from '../helpers/Fields.js';

document.querySelector('#btn').addEventListener('click', async () => {
    const inputs = Inputs.getInputs();
    const user = new User(null, inputs.email, inputs.pass, null);

    if(Inputs.voidCheck(inputs)){
        const res = await user.login();

        if(res == true){
            window.open('perfil', '_self');
        } else {
            Field.response("responseField").innerHTML = "Acess Denied";
        }
    }
});