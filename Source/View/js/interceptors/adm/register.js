import User from '../models/User.js';
import Inputs from '../helpers/Inputs.js';
import Field from '../helpers/Fields.js';

document.querySelector('#newUser').addEventListener('click', async () => {
    const inputs = {
        "name" : document.querySelector("#newUserName").value,
        "email" : document.querySelector("#newUserEmail").value,
        "pass" : document.querySelector("#newUserPass").value,
        "passc" : document.querySelector("#newUserPassc").value
    }

    const user = new User(inputs.name, inputs.email, inputs.pass);

    if(Inputs.voidCheck(inputs)){
        if(inputs.pass.length > 12){
            Field.response("newUserResponseField").innerHTML = "the password cannot have more than 12 characteres";
            return;
        }

        if(Inputs.pssConfirm(inputs)){
            const res = await user.register();
            if(res == true){
                Field.response("newUserResponseField").innerHTML = "Registrated Sucessfully!";
            } else {
                Field.response("newUserResponseField").innerHTML = "User already exists, try another email";
            }
        }
    } else {
        Field.response("newUserResponseField").innerHTML = "some field is empty";
    }
})