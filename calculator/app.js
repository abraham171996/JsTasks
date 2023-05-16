let calculatorInput = document.querySelector('.calculator-input')
let btn = document.querySelectorAll(".btn")
let operator = document.querySelectorAll(".operator")
const clear = document.querySelector(".clear");
let initialValue = 0
let operatorElem = ""
let empty = null

btn.forEach(element => {    
    element.onclick = () => {
     calculatorInput.value += element.value        
}
});
operator.forEach(elem=>{
    elem.onclick = () => {
        initialValue = parseFloat(calculatorInput.value)
        calculatorInput.value = ""
         operatorElem = elem.value 
    }
})


clear.onclick = ()=>{
    calculatorInput.value = empty
    initialValue = 0;
    currentOperator = "";
}

operator[4].onclick = () => {
    const secondValue = parseFloat(calculatorInput.value)
    let result = 0
    switch(operatorElem){
        case "+":
            result = initialValue + secondValue;
            break;
        case "-":
            result = initialValue - secondValue;
            break;
        case "*":
            result = initialValue * secondValue;
            break;
        case "/":
            result = initialValue / secondValue;
            break;
        default:
            break;
    }
    calculatorInput.value = result;
}
