import User from '../models/User.js';

document.querySelector('#logout').addEventListener('click', async (e) => {
    const res = await User.logout();
    if(res == true){
        window.open('cadastro', '_self');
    } else {
        window.alert("ERROR 504, CONTACT THE ADM");
    }
})