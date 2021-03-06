var sliderFactory = {

    createNewSlider: function () {

        var newSlider = {
            imagesUrls: [],
            currentImageIndex: 0,
            showPrevBtn: null, //document.querySelector('.show-prev-btn'),
            showNextBtn: null, //document.querySelector('.show-next-btn'),
            slideImage: null, //document.querySelector('.slide-img'),



            start: function (elId) {
                var that = this;

                var elementSelectorId = '#' + elId;
                var el = document.querySelector(elementSelectorId);

                this.slideImage = el.querySelector('.slide-img');
                this.showPrevBtn = el.querySelector('.show-prev-btn');
                this.showNextBtn = el.querySelector('.show-next-btn');


                //add wrapper for this
                this.showPrevBtn.addEventListener('click', function (e) {
                    that.onShowPrevBtnClick(e);
                });
                this.showNextBtn.addEventListener('click', function (e) {
                    that.onShowNextBtnClick(e);
                });

                //Create Array of Pictures
                this.imagesUrls.push('https://elitetraveler.com/wp-content/uploads/2019/07/Screenshot-2020-05-12-at-15.10.34.png');
                this.imagesUrls.push('https://cdn.jdpower.com/JDPA_2020%20Cadillac%20CT5%20Luxury%20Sedan.jpg');
                this.imagesUrls.push('https://cdn.motor1.com/images/mgl/eJVOP/s3/mclaren-speedtail.jpg');
                this.imagesUrls.push('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/maxresdefault-1-1567422858.jpg');


                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = true;

            },

            onShowPrevBtnClick: function (e) {
                this.currentImageIndex--;
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showNextBtn.disabled = false;
                if (this.currentImageIndex === 0) {
                    this.showPrevBtn.disabled = true;
                }
            },

            onShowNextBtnClick: function (e) {
                this.currentImageIndex++;
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = false;
                if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
                    this.showNextBtn.disabled = true;
                }
            }
        }
        return newSlider;
    }
}