let outputVal=document.getElementById("outputVal");
let errorMsg=document.getElementById("errorMsg");

function showError(message){
    let counter=0;
    
        let interval=setInterval(function(){
                errorMsg.classList.remove('hidden');
                counter=counter+1;
                console.log(counter);
                if (counter===2){
                        clearInterval(interval);
                        outputVal.textContent="";
                        errorMsg.classList.add('hidden');
                }
        },1000);
        
}

function handleConversion(event)
{   let counter=0;
    if (event.target.value>0){
        let interval=setInterval(function(){
            let pounds=parseInt(event.target.value);
            console.log(event.target.value);
            let kg = pounds * (0.453592);
            outputVal.textContent=kg.toFixed(2);
            errorMsg.classList.add('hidden');
            counter=counter+1;
            console.log(counter);
            
                if (counter===10){
                    clearInterval(interval);
                    outputVal.textContent="";
                    errorMsg.classList.add('hidden');
                }
        },1000);
        
    }
    else if(event.target.value<1){
        showError();
    }
}


inputElement.addEventListener('input', handleConversion);
