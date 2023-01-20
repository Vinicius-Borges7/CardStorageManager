import REST from "../../helpers/REST.js";

document.querySelector("#btnPromove").addEventListener('click', () => {
    let body = {
        "email" : document.querySelector("#promoveUser").value
    }
    
    let req = new REST('admPromove', body);
    req.post();
});