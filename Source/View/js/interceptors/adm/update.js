import User from '../models/User.js';
import Inputs from '../helpers/Inputs.js';
import Field from '../helpers/Fields.js';

document.getElementById("updateUserSubmitChanges").addEventListener('click', async () => {
    const inputs = {
        "name" : document.querySelector("#updateUserName").value,
        "email" : document.querySelector("#updateUserEmail").value,
        "pass" : document.querySelector("#updateUserPass").value,
        "passc" : document.querySelector("#updateUserPassc").value
    }

    if(Inputs.updateVerify()){
        const user = new User(inputs.name, inputs.email, inputs.pass, inputs.passc);
        const res = await user.update();

        if(inputs.pass.length > 12){
            Field.response("updateResponseField").innerHTML = "the password cannot have more than 12 characteres";
            return;
        }
    
        if(res == true){
            Field.response("updateResponseField").innerHTML = "";
            Field.response("updateResponseField").innerHTML = "Updated Sucessfully!";
        }
    
        if(res == false){
            Field.response("updateResponseField").innerHTML = "";
            Field.response("updateResponseField").innerHTML = "some required field is empty";
        }

        if(res == "email"){
            Field.response("updateResponseField").innerHTML = "";
            Field.response("updateResponseField").innerHTML = "this email is already registrated, try another one";
        }
    } else {
        Field.response("updateResponseField").innerHTML = "";
        Field.response("updateResponseField").innerHTML = "at least one field must be filled";
    }
});