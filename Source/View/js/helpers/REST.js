export default class REST{
    #url = null;
    #body = null;

    constructor( url, body = null ){
        this.#url = url;
        this.#body = body
    }

    async post(){
        const res = await fetch(this.#url, {
            method: `POST`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams(this.#body).toString(),
        });
        return await res.json();
    }

    async get(){
        const res = await fetch(this.#url, {
            method: `GET`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        });
        return await res.json();
    }

    async delete(){
        const res = await fetch(this.#url, {
            method: `DELETE`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams(this.#url).toString(),
        });
        return await res.json();
    }
}