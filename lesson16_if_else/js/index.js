var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');

function getNumber1() {
    return Number(input1.value);
}

function getNumber2() {
    return Number(input2.value);
}

function makeOperation(operationCode) {

    if (operationCode === '+') {
        var result = getNumber1() + getNumber2();
    } else if (operationCode === '-') {
        var result = getNumber1() - getNumber2();
    } else if (operationCode === '*') {
        var result = getNumber1() * getNumber2();
    } else {
        var result = getNumber1() / getNumber2();
    }

    window.alert(result);
}

function onButtonPlusClick() {
    makeOperation('+');
}

function onButtonMinusClick() {
    makeOperation('-');
}

function onButtonMultiplyClick() {
    makeOperation('*');
}

function onButtonDevideClick() {
    makeOperation('/');
}


buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);