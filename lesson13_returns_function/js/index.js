
// function firstNameLog() {
//     var id = 'first-name';
//     var element = document.getElementById(id);
//     console.log(element.value);
// };

// function lastNameLog() {
//     var id = 'last-name';
//     var element = document.getElementById(id);
//     console.log(element.value);
// }

function logValue(id) {
    var element = document.getElementById(id);
    console.log(element.value);
}

function getValue(id) {
    var element = document.getElementById(id);
    return element.value;
}


// firstNameLog();
// firstNameLog();
// firstNameLog();

// lastNameLog();
// lastNameLog();
// lastNameLog();

var lastNameId = 'last-name';
var firstNameId = 'first-name';

// logValue(lastNameLog);
// logValue(lastNameLog);
// logValue(lastNameLog); 

let value1 = getValue(firstNameId);
window.alert(value1);