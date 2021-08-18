var cards=document.querySelector(".cards");

fetch("./data.json")
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        for(var i=0;i<data.length;i++)
        {
            var item=data[i];
            cards.innerHTML=cards.innerHTML+'<a href='+item.href+'><div class="card"><i class="fab fa-2x '+item.src+'" aria-hidden="true"></i><p class="h1">'+item.p1+'</p><p class="h2">'+item.p2+'</p></div></a>';
        }
    })