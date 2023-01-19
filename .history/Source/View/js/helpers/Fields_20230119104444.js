export default class Field{
    static response(element){
        return document.getElementById(element);
    }

    static yugioh(){
        return document.querySelector("#yugiohCards");
    }

    static magic(){
        return document.querySelector("#magicCards");
    }

    static pokemon(){
        return document.querySelector("#pokemonCards");
    }

    static bakugan(){
        return document.querySelector("#bakuganCards");
    }

    static vanguard(){
        return document.querySelector("#vanguardCards");
    }
}