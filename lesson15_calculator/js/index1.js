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

function onButtonPlusClick() {

    var result = getNumber1() + getNumber2();
    window.alert(result);
}

function onButtonMinusClick() {
    var result = getNumber1() - getNumber2();
    window.alert(result);
}

function onButtonMultiplyClick() {
    var result = getNumber1() * getNumber2();
    window.alert(result);
}

function onButtonDevideClick() {
    var result = getNumber1() / getNumber2();
    window.alert(result);
}


buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);