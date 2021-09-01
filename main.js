function calculate(type, value){
   if (type === 'action') { 
    if(value === 'c'){
        document.getElementById("display").value = ''
    }

    if (value === '+' || value === '-' || value === '*' || value === '/' || value === '.'){
        document.getElementById("display").value += value 
    }

    if(value === '='){
        var result = eval(document.getElementById("display").value) 
        document.getElementById("display").value = result
    }
     

   } else if(type === 'value'){
       document.getElementById("display").value += value 
   }
}