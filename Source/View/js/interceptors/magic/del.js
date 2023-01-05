async function post(url, body){
    const res = await fetch(url, {
        method: `POST`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(body).toString(),
    });
    return await res.json();
}

async function deleteMgc(id){
    const res = await post('http://localhost/cardManager/mgcDel', {"id":`${id}`});

    if(res){
      const mgc = document.querySelector(`#card${id}`);
      while (mgc.firstChild) {
          mgc.removeChild(mgc.lastChild);
      }
      mgc.remove();
    }
}