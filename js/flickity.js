
/* Theatre */
var tc1 = document.querySelector('.theatre-carousel-1');
var flkty_tc1 = new Flickity( tc1, {
    lazyLoad: true,
    imagesLoaded: true,
    contain: true,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    pageDots: false,
});

/* Commercial */
var cc1 = document.querySelector('.commercial-carousel-1');
var flkty_cc1 = new Flickity( cc1, {
    selectedAttraction: 0.02,
    friction: 1.5,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    draggable: false,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false
});
// Override the stopPlayer method
var flkty_cc1_copy = flkty_cc1;
// var flkty_cc1_copy = Object.assign({}, flkty_cc1);
flkty_cc1_copy.stopPlayer = function() {
    this.player.stop();
    // Resume autoPlay after 3 seconds
    setTimeout(() => {
        this.player.play();
    }, 1000);
};
var cc2 = document.querySelector('.commercial-carousel-2');
var flkty_cc2 = new Flickity( cc2, {
    autoPlay: false,
    wrapAround: true,
    pageDots: false
});
var cc3 = document.querySelector('.commercial-carousel-3');
var flkty_cc3 = new Flickity( cc3, {
    selectedAttraction: 0.02,
    friction: 1.5,
    autoPlay: true,
    autoPlay: 4000,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false
});

/* Resume */
var rc1 = document.querySelector('.resume-carousel-1');
var flkty_rc1 = new Flickity( rc1, {
    lazyLoad: true,
    wrapAround: false,
    pageDots: false,
});
var rc2 = document.querySelector('.resume-carousel-2');
var flkty_rc2 = new Flickity( rc2, {
    lazyLoad: true,
    wrapAround: false,
    pageDots: false,
});