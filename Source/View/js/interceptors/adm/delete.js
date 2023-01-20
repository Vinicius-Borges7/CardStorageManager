import REST from "../../helpers/REST.js";

document.querySelector("#btnDeleteUser").addEventListener('click', () => {
    let body = {
        "email" : document.querySelector("#deleteUser").value
    }
    
    let req = new REST('admDelete', body);
    req.post();
});