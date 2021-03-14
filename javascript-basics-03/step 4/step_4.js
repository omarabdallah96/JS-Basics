var pass=document.querySelector("#password");
var conf=document.querySelector("#confirmation");
var button=document.querySelector("button");
button.addEventListener("click",execute);
    
function execute(){
    
    if (pass.value != conf.value){
        pass.style.border="3px solid red";
        conf.style.border="3px solid red";
        }  } 

