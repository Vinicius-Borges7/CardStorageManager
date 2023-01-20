async function post(url, body){
    const res = await fetch(url, {
        method: `POST`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(body).toString(),
    });
    return await res.json();
}

async function deleteYgo(id){
    const res = await post('yugiohDel', {"id":`${id}`});

    if(res){
      const ygo = document.querySelector(`#card${id}`);
      while (ygo.firstChild) {
          ygo.removeChild(ygo.lastChild);
      }
      ygo.remove();
    }
}