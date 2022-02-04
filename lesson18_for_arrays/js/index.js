var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

var operationsButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];

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
//???????????????????
function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}


// function addCommonEventListener(i) {
//     operationsButtons[i].addEventListener('click', onOperationButtonClick);
// }

// var operationsButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];

// addCommonEventListener(0);
// addCommonEventListener(1);
// addCommonEventListener(2);
// addCommonEventListener(3);

//пока i равен 0 мы хотим пока он меньше длины массива, мы хотим выполнять 
//указанная функция с параметром i. после выполнения итерации(функции),
//мы увеличиваем наше i на еденицу.
for (var i = 0; i < operationsButtons.length; i++) {
    var button = operationsButtons[i]
    button.addEventListener('click', onOperationButtonClick);
}



// operationsButtons[0].addEventListener('click', onOperationButtonClick);
// operationsButtons[1].addEventListener('click', onOperationButtonClick);
// operationsButtons[2].addEventListener('click', onOperationButtonClick);
// operationsButtons[3].addEventListener('click', onOperationButtonClick);


// buttonPlus.addEventListener('click', onOperationButtonClick);
// buttonMinus.addEventListener('click', onOperationButtonClick);
// buttonMultiply.addEventListener('click', onOperationButtonClick);
// buttonDevide.addEventListener('click', onOperationButtonClick);


//Array of elements.
// [ 13, 551, 122, 0];
//    0   1    2   3

// var arrayOfNumbers = [2, 33, 0, 166];
// var arrayOfStrings = ['Dima', 'Sasha', 'Tanya', 'Olya'];

// var operationsButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];


