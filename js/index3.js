var shops=document.querySelector(".shops");
var clo =document.getElementById("clo");
var close2 =document.getElementById("close2");
var pre=document.getElementById("prev");
var box=document.querySelector(".lightBox-container");
var rate=document.getElementById("Rate");
var topate=document.querySelector("topRate");
var salee=document.getElementById("salee");
var sale=document.querySelector("sale");
var selles=document.getElementById("selles");
var Feature=document.getElementById("Features");
 var bags=document.getElementById("bag");


clo.addEventListener("click",function(){
   shops.classList.add("hide")
});
close2.addEventListener("click",function(){
   box.classList.add("hide")
});
 

 
 var beat=document.querySelector(".beat");
beat.addEventListener("click",function(){
   box.classList.add("show2");
});

// correct
var bestSelles=document.getElementById("bestSelles");
 bestSelles.addEventListener("click",function(){
   selles.classList.add("hide");
   
});
//correct
 salee.addEventListener("click",function(){
   selles.classList.add("hide");
     Feature.classList.add("hide");
       sale.classList.remove("sale");
    
    
 });


rate.addEventListener("click",function(){
   selles.classList.add("hide");
     Feature.classList.add("hide");
   topate.classList.remove("topRate");
   
    
 });
// correct
bags.addEventListener("click",function(){
 
   selles.classList.remove("hide");
    Feature.classList.add("Feature");
 });