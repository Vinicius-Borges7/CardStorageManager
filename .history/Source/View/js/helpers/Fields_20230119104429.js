export default class Field{
    static response(element){
        return document.getElementById(element);
    }

    static yugioh(){
        return document.querySelector("#ygoCards");
    }

    static magic(){
        return document.querySelector("#mgcCards");
    }

    static pokemon(){
        return document.querySelector("#pkmCards");
    }

    static bakugan(){
        return document.querySelector("#bkgCards");
    }

    static vanguard(){
        return document.querySelector("#vanguardCards");
    }
}