import REST from "http://localhost/CardManager/Source/View/js/helpers/REST.js";
import Inputs from 'http://localhost/CardManager/Source/View/js/helpers/Inputs.js';

export default class User{
    #name = null;
    #email = null;
    #pass = null;
    #passc = null;

    constructor(
        name = null,
        email = null,
        pass = null,
        passc = null
    )
    {
        this.#name = name,
        this.#email = email,
        this.#pass = pass,
        this.#passc = passc
    }

    async register(){
        const body = 
        {
            'name': this.#name,
            'pass': this.#pass,
            'email': this.#email
        }

        const res = new REST(`http://localhost/CardManager/register`, body);
        return await res.post();
    }

    async login(){
        const body = { 
            'email': this.#email,
            'pass': this.#pass 
        }

        const res = new REST('http://localhost/CardManager/login', body);
        return await res.post();
    }

    async update(){
        const body = {
            'name': this.#name,
            'email': this.#email,
            'pass': this.#pass,
            'passc': this.#passc
        }
    
        const res = new REST('http://localhost/cardManager/profile', body);   
        return await res.post();
    }
}