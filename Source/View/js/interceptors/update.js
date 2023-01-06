import User from '../models/User.js';
import Inputs from '../helpers/Inputs.js';
import Field from '../helpers/Fields.js';

document.getElementById("submitChanges").addEventListener('click', async () => {
    const inputs = Inputs.getUpdateInputs();

    if(Inputs.updateVerify(inputs)){
        const user = new User(inputs.name, inputs.email, inputs.pass, inputs.passc);
        
        const res = await user.update();

        console.log(res);

        if(res == true){
            Field.response("responseFieldEmail").innerHTML = "";
            Field.response("responseFieldSubmit").innerHTML = "Updated Sucessfully!";
        }

        if(res == false){
            Field.response("responseFieldEmail").innerHTML = "";
            Field.response("responseFieldSubmit").innerHTML = "some required field is empty";
        }
        
        if(res == "email"){
            Field.response("responseFieldSubmit").innerHTML = "";
            Field.response("responseFieldEmail").innerHTML = "this email is registrated, try another one";
        }

        if(res == "senha"){
            Field.response("responseFieldEmail").innerHTML = "";
            Field.response("responseFieldSubmit").innerHTML = "Wrong password";
        }
        
    } else {
        Field.response("responseFieldEmail").innerHTML = "";
        Field.response("responseFieldSubmit").innerHTML = "at least one field must be filled";
    }
});