let display = document.getElementById("display");

function addValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){

    let expression = display.value;

    if(expression === ""){
        return;
    }

    try{
        display.value = eval(expression);
    }

    catch(error){
        display.value = "Error";
    }
}