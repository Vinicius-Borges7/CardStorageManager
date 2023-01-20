import REST from "../../helpers/REST.js";

document.querySelector("#btnDownmove").addEventListener('click', () => {
    let body = {
        "email" : document.querySelector("#downmoveUser").value
    }
    
    let req = new REST('admDownmove', body);
    req.post();
});