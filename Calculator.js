const display = document.getElementById("calc-display");

function appendToDisplay(input){
    display.value+=input;
}
function clearDisplay(){
    display.value = "";
}
function deleteLast(){
    let currentDisplay = display.value;
    display.value = currentDisplay.slice(0,-1);
}
function calculateResult(){
    let currentDisplay = display.value;
    try{
        display.value = eval(currentDisplay);
    }
    catch(error){
        display.value="Error";
        //alert('Invalid expression') it is optional
    }
} 