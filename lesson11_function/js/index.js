var nameId = 'first-name';
var nameF = document.getElementById(nameId);
    //console.log(nameF.value);

var lastId = 'last-name';
var lastN = document.getElementById(lastId);
    //console.log(lastN.value);

var addressId = 'address';
var address = document.getElementById(addressId);
    //console.log(address.value);

var citiesId = 'cities';
var citiesElement = document.getElementById(citiesId);
    //console.log(citiesElement.value);

var hobbiesId = 'hobbies';
var hobbiesElement = document.getElementById(hobbiesId);
    //console.log(hobbiesElement.value);

var imgId = 'avatar-wrapper';
var imgElement = document.getElementById(imgId);
    // console.log(imgElement);
    // console.log(hobbiesElement.innerHTML);
    // console.log(citiesElement.innerHTML);

var imgIdd = 'avatar';
var ava = document.getElementById(imgIdd);
    // console.log(ava.src)
    // console.log(ava.alt)

    //lesson #9
nameF.value = 'Stepan';
lastN.value = 'Razin';
    // nameF.className = 'temp-error';

lastN.setAttribute('class', 'lastname input temp-error');
ava.setAttribute('src', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*');
ava.setAttribute('title', 'I\'m your car');

citiesElement.value = 'Moscow';
hobbiesElement.value = 'Hey hey hey! I am have some interest for JS coding, dude';

imgElement.innerHTML = '<textarea style= "width: 800px; border: yellow 15px solid;"> Here we can type any tags and other stuff. So I added tags \'textarea\' with some styles parameters. </textarea>';

// functions
// function name(params) { }



// function alertValues() {
//     console.log('1');
//     console.log('2');
//     console.log('3');
//     console.log(nameF.value);
//     console.log(lastN.value);
//     console.log(address.value);
//     console.log(citiesElement.value);
//     console.log(hobbiesElement.value);
//     console.log(ava.alt)
//     console.log(ava.src)
// };

// alertValues();


function alertFirstNameValues() {
    console.log(nameF.value);
    console.log(nameF.className);
};

function alertLastNameValues() {
    console.log(lastN.value);
    console.log(lastN.className);
};

//parameters
//describe parameter in ()
//при вызове данной функции в скобках мы пишем параметры функции,
//значение которого будет обрабатываться потом самой функцией,
//которая описана в {}

function alertValues(elementParameter) {
    console.log(elementParameter.value);
    console.log(elementParameter.className);
};

alertValues(nameF);
alertValues(lastN);
alertValues(hobbiesElement);

