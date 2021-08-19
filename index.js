var cards=document.querySelector(".cards");
var tops=document.querySelector(".top");

fetch("./ribbon.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data2){
        console.log('ji');
        tops.classList.add("anirudh");
        tops.innerHTML=tops.innerHTML+'<a href='+data2[0].href+' class="link">'+data2[0].para+'</a>';
    })

fetch("./data.json")
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        for(var i=0;i<data.length;i++)
        {
            var item=data[i];
            if(i==0 || i==data.length-1)
            {
                cards.innerHTML=cards.innerHTML+'<a href='+item.href+'><div class="card"><img src='+item.src+' alt="icon"><p class="h1">'+item.p1+'</p><p class="h2">'+item.p2+'</p></div></a>';
            }
            else
            {
                cards.innerHTML=cards.innerHTML+'<a href='+item.href+'><div class="card"><i class="fab fa-2x '+item.src+'" aria-hidden="true"></i><p class="h1">'+item.p1+'</p><p class="h2">'+item.p2+'</p></div></a>';
            }
        }
    })

