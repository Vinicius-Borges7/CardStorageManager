async function post(url, body){
    const res = await fetch(url, {
        method: `POST`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(body).toString(),
    });
    return await res.json();
}

async function deleteVanguard(id){
    const res = await post('vanguardDel', {"id":`${id}`});

    if(res){
      const vang = document.querySelector(`#card${id}`);
      while (vang.firstChild) {
          vang.removeChild(vang.lastChild);
      }
      vang.remove();
    }
}