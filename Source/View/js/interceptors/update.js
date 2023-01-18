import User from '../models/User.js';
import Inputs from '../helpers/Inputs.js';
import Field from '../helpers/Fields.js';

document.getElementById("submitChanges").addEventListener('click', async () => {
    const inputs = Inputs.getInputs();

    if(Inputs.updateVerify()){
        if(inputs.pass.length > 12){
            Field.response("responseFieldEmail").innerHTML = "the password cannot have more than 12 characteres";
            return;
        }

        if(inputs.passc){
            const user = new User(inputs.name, inputs.email, inputs.pass, inputs.passc);
            const res = await user.update();
    
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
                Field.response("responseFieldEmail").innerHTML = "this email is already registrated, try another one";
            }
    
            if(res == "senha"){
                Field.response("responseFieldEmail").innerHTML = "";
                Field.response("responseFieldSubmit").innerHTML = "Wrong password";
            }
            
        } else {
            Field.response("responseFieldEmail").innerHTML = "";
            Field.response("responseFieldSubmit").innerHTML = "you must type your current password to confirm the changes";
        }
    } else {
        Field.response("responseFieldEmail").innerHTML = "";
        Field.response("responseFieldSubmit").innerHTML = "at least one field must be filled";
    }

});