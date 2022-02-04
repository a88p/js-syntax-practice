var nameId = 'first-name';
var nameF = document.getElementById(nameId);
    //window.alert(nameF.value);

var lastId = 'last-name';
var lastN = document.getElementById(lastId);
    //window.alert(lastN.value);

var addressId = 'address';
var address = document.getElementById(addressId);
    //window.alert(address.value);

var citiesId = 'cities';
var citiesElement = document.getElementById(citiesId);
    //window.alert(citiesElement.value);

var hobbiesId = 'hobbies';
var hobbiesElement = document.getElementById(hobbiesId);
    //window.alert(hobbiesElement.value);

var imgId = 'avatar-wrapper';
var imgElement = document.getElementById(imgId);
    // window.alert(imgElement);
    // window.alert(hobbiesElement.innerHTML);
    // window.alert(citiesElement.innerHTML);

var imgIdd = 'avatar';
var ava = document.getElementById(imgIdd);
    // window.alert(ava.src)
    // window.alert(ava.alt)

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
