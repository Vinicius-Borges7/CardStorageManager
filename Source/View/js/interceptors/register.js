import User from 'http://localhost/CardManager/Source/View/js/models/User.js';
import Inputs from 'http://localhost/CardManager/Source/View/js/helpers/Inputs.js';
import Field from 'http://localhost/CardManager/Source/View/js/helpers/Fields.js';

document.querySelector('#btn').addEventListener('click', async () => {
    const inputs = Inputs.getInputs();
    const user = new User(inputs.name, inputs.email, inputs.pass);

    if(Inputs.validateInputs(inputs)){
        const res = await user.register();
        
        if(res == true){
            Field.response("responseField").innerHTML = "Registrated Sucessfully!";
        }
        
        else if(res == false){
            Field.response("responseField").innerHTML = "User already exists, try another email";
        }
    } else {
        Field.response("responseField").innerHTML = "some field is empty";
    }
})