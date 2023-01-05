import Field from "http://localhost/CardManager/Source/View/js/helpers/Fields.js";

export default class Inputs{
    static getInputs(){
        let inputs = {};
    
        document.querySelectorAll('input').forEach((e) => {
            inputs[e.id] = e.value;
        });
        
        if(this.voidCheck(inputs)){
            return inputs;
        }
        return false;
    }

    static getUpdateInputs(){
        let inputs = {};
    
        document.querySelectorAll('input').forEach((e) => {
            inputs[e.id] = e.value;
        });
        
        if(inputs.passc == "" || null || undefined){
            return false;
        }
        return inputs;
    }

    static validateInputs(inputs){
        let token = false;
        if(this.voidCheck(inputs)){
            if(this.pssConfirm(inputs)){
                token = true;
            } 
        }
        return token;
    }

    static validateYgoInputs(inputs){
        let token = false;
        if(this.ygoVoidCheck(inputs)){
            if(this.pssConfirm(inputs)){
                token = true;
            } else {
                token = "passwords dont check";
            }
        } else {
            token = "all fields are necessary";
        }
        return token;
    }

    static validateMgcInputs(inputs){
        let token = false;
        if(this.mgcVoidCheck(inputs)){
            if(this.pssConfirm(inputs)){
                token = true;
            } else {
                token = "passwords dont check";
            }
        } else {
            token = "all fields are necessary";
        }
        return token;
    }

    static validatePkmInputs(inputs){
        let token = false;
        if(this.pkmVoidCheck(inputs)){
            if(this.pssConfirm(inputs)){
                token = true;
            } else {
                token = "passwords dont check";
            }
        } else {
            token = "all fields are necessary";
        }
        return token;
    }

    static updateVerify(inputs){
        let cont = [];

        if(inputs.name != ""){
            cont.push('name');
        }

        if(inputs.email == ""){
            cont.push('email');
        }

        if(inputs.pass == ""){
            cont.push('password');
        }

        if(cont === []){
            return false;
        }
    }

    static pssConfirm(inputs){
        if(inputs.pass !== inputs.passc){
            Field.response("responseFieldSubmit").innerHTML = "Passwords dont check";
            return false;
        }
        return true;
    }

    static ygoVoidCheck(inputs){
        if(inputs.name == "" || null || undefined){
            return false;
        }
    
        if(inputs.cardType == "" || null || undefined){
            return false;
        }
    
        if(inputs.cardCategory == "" || null || undefined){
            return false;
        }
    
        if(inputs.quality == "" || null || undefined){
            return false;
        }

        if(inputs.rarity == "" || null || undefined){
            return false;
        }

        if(inputs.price == "" || null || undefined){
            return false;
        }
        return true;
    }

    static mgcVoidCheck(inputs){
        if(inputs.name == "" || null || undefined){
            return false;
        }
    
        if(inputs.cardType == "" || null || undefined){
            return false;
        }
    
        if(inputs.color == "" || null || undefined){
            return false;
        }

        if(inputs.category == "" || null || undefined){
            return false;
        }
    
        if(inputs.quality == "" || null || undefined){
            return false;
        }

        if(inputs.rarity == "" || null || undefined){
            return false;
        }

        if(inputs.price == "" || null || undefined){
            return false;
        }
        return true;
    }

    static pkmVoidCheck(inputs){
        if(inputs.name == "" || null || undefined){
            return false;
        }
    
        if(inputs.cardType == "" || null || undefined){
            return false;
        }
    
        if(inputs.pokeType == "" || null || undefined){
            return false;
        }

        if(inputs.extras == "" || null || undefined){
            return false;
        }
    
        if(inputs.quality == "" || null || undefined){
            return false;
        }

        if(inputs.rarity == "" || null || undefined){
            return false;
        }

        if(inputs.price == "" || null || undefined){
            return false;
        }
        return true;
    }

    static voidCheck(inputs){
        if(inputs.name == "" || null || undefined){
            return "todos campos são obrigatórios";
        }
    
        if(inputs.email == "" || null || undefined){
            return "todos campos são obrigatórios";
        }
    
        if(inputs.pass == "" || null || undefined){
            return "todos campos são obrigatórios";
        }
    
        if(inputs.passc == "" || null || undefined){
            return "todos campos são obrigatórios";
        }
        return true;
    }
}