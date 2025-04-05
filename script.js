const num =document.getElementsById('display')
function display(x){
     input.value+= x;
}
function cleared(){
    input.value+= '';
}

function calculator(){
    try{
        input.value= eval(input.value)
    }
    catch{
        alert ('Invalid input');
    }
}  