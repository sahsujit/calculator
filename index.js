const result = document.querySelector("#result");
function display(number){
     result.value += number;  
}

function calculate(){
    let finalNumber = result.value;
    let finalResult = eval(finalNumber);
    result.value = finalResult;
}

function clearDisplay(){
    result.value = "";
}
function del(){
    result.value = result.value.slice(0, -1);
}