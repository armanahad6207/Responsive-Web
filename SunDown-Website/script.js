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



var design=document.querySelector("#design");
var project=document.querySelector("#project");
var executio=document.querySelector("#execution");
var text=document.querySelector(".text")

var backimg=document.querySelector(".col-2");

design.addEventListener("click",function(){
   this.style.borderLeft="3px solid red";
   this.style.color="#fff";
   project.style.color="#504A45"
    project.style.borderLeft="3px solid #504A45"
    execution.style.color="#504A45"
    execution.style.borderLeft="3px solid #504A45"
   backimg.style.backgroundImage="url(image/design.webp)"
   text.innerHTML="<p >Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.</p>"
})
project.addEventListener("click",function(){
    this.style.borderLeft="3px solid red";
    this.style.color="#fff";
    design.style.color="#504A45"
    design.style.borderLeft="3px solid #504A45"
    execution.style.color="#504A45"
    execution.style.borderLeft="3px solid #504A45"
    backimg.style.backgroundImage="url(image/project.webp)"
    text.innerHTML=" <p>Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.</p>"
 })
 execution.addEventListener("click",function(){
    this.style.borderLeft="3px solid red";
    this.style.color="#fff";
    design.style.color="#504A45"
    design.style.borderLeft="3px solid #504A45"
    project.style.color="#504A45"
    project.style.borderLeft="3px solid #504A45"
    backimg.style.backgroundImage="url(image/execution.webp)"
    text.innerHTML="  <p>We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.</p>"
    
 })

 var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  function loaderanimate(){
    var loader=document.querySelector(".loader")
    var loadertxt=document.querySelector(".loadertxt")
  setTimeout(()=>{
   loader.style.top="-100%"
  },4000)

  
  };
  

  loaderanimate();


  var menu=document.querySelector(".menu");
  var menu_list=document.querySelector(".menu_list");
  var nav=document.querySelector("nav");
  var openmenu=document.querySelector("#open-menu");
  var closemenu=document.querySelector("#close-menu");
  var body = document.querySelector("body");
   var flag=true;
  menu.addEventListener('click',function(){
     if(flag){
      menu_list.style.top="0";
      closemenu.style.opacity=1;
      openmenu.style.opacity=0;
      body.style.overflow = "hidden"; 
      flag=false;
     }
     else{
      menu_list.style.top="-100%";
      closemenu.style.opacity=0;
      openmenu.style.opacity=1;
      body.style.overflow = "scroll";
      flag=true;
     }
    
  })