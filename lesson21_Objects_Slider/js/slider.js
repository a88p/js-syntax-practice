//Find Elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');

//Declare Events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

//Create Array of Pictures
var imagesUrls = [];
imagesUrls.push('https://elitetraveler.com/wp-content/uploads/2019/07/Screenshot-2020-05-12-at-15.10.34.png');
imagesUrls.push('https://cdn.jdpower.com/JDPA_2020%20Cadillac%20CT5%20Luxury%20Sedan.jpg');
imagesUrls.push('https://cdn.motor1.com/images/mgl/eJVOP/s3/mclaren-speedtail.jpg');
imagesUrls.push('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/maxresdefault-1-1567422858.jpg');


var currentImageIndex = 0;

slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;

//Functions Definitions
function onShowPrevBtnClick() {
    //Disabled Button
    showNextBtn.disabled = false;
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    //Disabled Button
    if (currentImageIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}
