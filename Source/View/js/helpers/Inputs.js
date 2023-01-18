export default class Inputs{
    static getInputs(){
        let inputs = {};
        document.querySelectorAll('input').forEach((e) => inputs[e.id] = e.value);
        return inputs;
    }

    static pssConfirm(inputs){
        if(inputs.pass !== inputs.passc){
            document.querySelector("#responseField").innerHTML = "Passwords dont check";
            return false;
        }
        return true;
    }

    static voidCheck(inputs){
        let token = true;
        Object.values(inputs).forEach(e => {
            if(e == ''){
                token = false;
            }
        });
        return token;
    }

    static updateVerify(){
        let inputs = {};
        document.querySelectorAll('input').forEach((e) => inputs[e.id] = e.value);
        if(Object.values(inputs).filter(e => e).length > 1){
            return true;
        } else {
            return false;
        }
    }
}