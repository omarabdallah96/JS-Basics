var newDiv=document.createElement("div");
var namee=document.querySelector("#name");
namee.onkeyup=()=>{
    newDiv.innerHTML=namee.value;
    document.body.appendChild(newDiv);
}