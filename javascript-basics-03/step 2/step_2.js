var show=document.querySelector("#show");
var hide=document.querySelector("#hide");
var texte=document.querySelector("#texte");


function click(action, t){
    if (action===hide){
    action.addEventListener("click",()=>{t.style.display="none"}); }
else

    {action.addEventListener("click",()=>{t.style.display="block"});}
    }
click(hide,texte);
click(show, texte);