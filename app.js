let screen = document.getElementsByClassName("display")[0];

function getvalue(value){
    switch(value){
        case "=" : 
        if(!screen.innerText){
            screen.innerText = "";
        }
         else{
            let result = eval(screen.innerText);
         screen.innerText = result;}
         break;

         case "AC" : 
         screen.innerText = '';
         break;

         case "DEL":
            screen.innerText = screen.innerText.slice(0,screen.innerText.length-1);
        break;

        default:
           screen.innerText += value;
           
    }
    
}