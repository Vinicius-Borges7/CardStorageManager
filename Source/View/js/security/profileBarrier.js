import REST from "../helpers/REST.js";

document.addEventListener('load', async () => {
    const res = new REST('profileBarrier');
    res ? null : window.open('login', '_self');
    console.log(res)
});