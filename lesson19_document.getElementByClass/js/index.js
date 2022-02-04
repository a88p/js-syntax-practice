// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMultiply = document.getElementById('buttonMultiply');
// var buttonDevide = document.getElementById('buttonDevide');


//найдёт все елементы класса и добавит этот HTMLCollection в переменную.
var operationsButtons = document.getElementsByClassName('operation-button');

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

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for (var i = 0; i < operationsButtons.length; i++) {
    var button = operationsButtons[i]
    button.addEventListener('click', onOperationButtonClick);
}