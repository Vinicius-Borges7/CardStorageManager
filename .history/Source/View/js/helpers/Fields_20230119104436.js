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
        return document.querySelector("#pCards");
    }

    static bakugan(){
        return document.querySelector("#bakuganCards");
    }

    static vanguard(){
        return document.querySelector("#vanguardCards");
    }
}