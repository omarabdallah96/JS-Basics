var shoe,birth;
shoe=prompt("enter shoe size:");
birth=prompt("enter your birthday:");

function multiply(shoe,birth){
     shoe*=2;
     shoe+=5;
     shoe*=50;
     var total=shoe-birth+1766;
     return total;
    }
window.alert(multiply(shoe,birth));