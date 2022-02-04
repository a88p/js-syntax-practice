var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');

function makeOperation(operationCode) {

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);


    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else {
        var result = number1 / number2;
    }

    window.alert(result);
}
//onButtonClick ( eventObject  - object sobutiya)
//Read about eventObject and currentTarget.
function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultiply.addEventListener('click', onOperationButtonClick);
buttonDevide.addEventListener('click', onOperationButtonClick);