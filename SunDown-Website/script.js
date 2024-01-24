// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


var hover_con=document.querySelector(".hover_effect_con");
 var card=document.querySelector(".card");
 var hover_efect=document.querySelectorAll(".hover_efect");

hover_con.addEventListener("mouseenter",function(){
         card.style.display="block"; 
});

hover_con.addEventListener("mouseleave",function(){
    card.style.display="none"; 
});

hover_efect.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var imgurl=this.getAttribute("data-image");
        card.style.backgroundImage=`url(${imgurl})`
    })
})

