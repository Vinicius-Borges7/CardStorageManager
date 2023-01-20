async function post(url, body){
    const res = await fetch(url, {
        method: `POST`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(body).toString(),
    });
    return await res.json();
}

async function deleteVng(id){
    const res = await post('vanguardDel', {"id":`${id}`});

    if(res){
      const vanguard = document.querySelector(`#card${id}`);
      while (vanguard.firstChild) {
          vanguard.removeChild(vanguard.lastChild);
      }
      vanguard.remove();
    }
}