var text=document.querySelector("#text");
var g=document.querySelector(".green");
var b=document.querySelector(".blue");
var r=document.querySelector(".red");

g.addEventListener("click",()=> {text.style.color="green";})
b.addEventListener("click",()=>{text.style.color="blue";})
r.addEventListener("click",()=>{text.style.color="red";})