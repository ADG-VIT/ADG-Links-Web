var cards=document.querySelector(".cards");

fetch("./mediumdata.json")
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        console.log(data);
        for(var i=0;i<data.length;i++)
        {
            var item=data[i];
            cards.innerHTML=cards.innerHTML+'<div class="card"><div class="one"><img src='+item.src+' alt=""><div class="image_overlay image_overlay_blur"><div class="overlay_title"><p class="image_description">'+item.img_desc+'</p></div></div></div><div class="two"><p class="main_para">'+item.main_para+'</p></div></div>';
        }
    })