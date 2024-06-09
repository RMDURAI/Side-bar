document.addEventListener("DOMContentLoaded",function (){
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click",function (){
sidebar.classList.add("active");
menuBtn.style.visibility ="hidden";
});
//close button code
const closeBtn = document.querySelector(".close-btn")
closeBtn.addEventListener("click",function (){
    sidebar.classList.remove("active");
    menuBtn.style.visibility ="visible";
});
//sub menu code
const subMenuBtns = document.querySelectorAll(".sub-btn"); 
subMenuBtns.forEach((btn)=>{
    btn.addEventListener("click", function(event){
        event.preventDefault();
        const container=document.getElementById(this.dataset.container);
        
        if(!container.classList.contains("active")) {
            // Add Active to sub menu
            //Add Rotate to Arrow
            this.querySelector(".dropdown").classList.add("rotate");
            container.classList.add("active");
            container.style.height ="auto";
            const height = container.clientHeight + "px";
            container.style.height ="0px";
            setTimeout(function(){
                container.style.height = height;
            },0);
        } else {
            // Remove Active from sub menu
            container.style.height ="0px"
            
            this.querySelector(".dropdown").classList.remove("rotate");
            container.addEventListener("transitionend",function(){
                container.classList.remove("active");
            },
            {
once:true,

            }
            );
        }


    });
});
    
});
