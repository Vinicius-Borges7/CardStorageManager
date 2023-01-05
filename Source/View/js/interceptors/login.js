import User from 'http://localhost/CardManager/Source/View/js/models/User.js';
import Inputs from 'http://localhost/CardManager/Source/View/js/helpers/Inputs.js';
import Field from 'http://localhost/CardManager/Source/View/js/helpers/Fields.js';

document.querySelector('#btn').addEventListener('click', async () => {
    const inputs = Inputs.getInputs();
    const user = new User(null, inputs.email, inputs.pass, null);

    if(Inputs.voidCheck(inputs)){
        const res = await user.login();

        if(res == true){
            window.open('http://localhost/cardManager/perfil', '_self');
        } else {
            Field.response("responseField").innerHTML = "Acess Denied";
        }
    }
});