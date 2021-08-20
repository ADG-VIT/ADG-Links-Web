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


fetch("./mediumdata.json")
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        console.log(data);
        for(var i=0;i<data.length;i++)
        {
            var item=data[i];
            cards.innerHTML=cards.innerHTML+'<div class="card"><a class="main_a" href="./anirudh.html"><div class="one"><img src='+item.src+' alt="base_img"><div class="image_overlay image_overlay_blur"><div class="overlay_title"><p class="image_description">'+item.img_desc+'</p></div></div></div></a><div class="two"><p class="main_para">'+item.main_para+'</p></div></div>';
        }
    })