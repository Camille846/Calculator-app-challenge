function calculate(type, value){
   if (type === 'action') { 
       if(value === 'c'){
        document.getElementById("display").value = ''
       }

   } else if(type === 'value'){
       document.getElementById("display").value += value 
   }
}