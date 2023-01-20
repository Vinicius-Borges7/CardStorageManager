async function post(url, body){
    const res = await fetch(url, {
        method: `POST`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(body).toString(),
    });
    return await res.json();
}

async function deletePkm(id){
    const res = await post('pokemonDel', {"id":`${id}`});

    if(res){
      const pkm = document.querySelector(`#card${id}`);
      while (pkm.firstChild) {
          pkm.removeChild(pkm.lastChild);
      }
      pkm.remove();
    }
}