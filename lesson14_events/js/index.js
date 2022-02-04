function addErrorClass(id) {
    var element = document.getElementById(id);
    element.className = 'temp-error';
}

function addErrorClassToAllInputs() {
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('address');   
}

//Set some time range before executing function.
//window.setTimeout(addErrorClassToAllInputs, 2000);
//addErrorClassToAllInputs();

//Sobitie
//knopka vuzuvaet function posle klika

var sendButton = document.getElementById('send-button');

//listener function kotoraya vizovet nashu addError kogda proizoydet sobitie click.
//
sendButton.addEventListener('click', addErrorClassToAllInputs);


//listener menyaet cvet polya kogda najataya knopka klaviatury otpuskaetsya
function onFirstnameKeyUp() {
    addErrorClass('first-name');
}

var firstNameEl = document.getElementById('first-name');
firstNameEl.addEventListener('keyup', onFirstnameKeyUp);