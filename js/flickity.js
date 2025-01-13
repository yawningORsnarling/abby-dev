
/* Theatre */
var tc1 = document.querySelector('.theatre-carousel-1');
var flkty = new Flickity( tc1, {
    // lazyLoad: true,
    // imagesLoaded: true,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    pageDots: false,
});

/* Commercial */
var cc1 = document.querySelector('.commercial-carousel-1');
var flkty = new Flickity( cc1, {
    selectedAttraction: 0.02,
    friction: 1.5,
    autoPlay: true,
    autoPlay: 4000,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false
});
var cc2 = document.querySelector('.commercial-carousel-2');
var flkty = new Flickity( cc2, {
    lazyLoad: true,
    autoPlay: false,
    wrapAround: true,
    pageDots: false
});
var cc3 = document.querySelector('.commercial-carousel-3');
var flkty = new Flickity( cc3, {
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
var flkty = new Flickity( rc1, {
    lazyLoad: true,
    wrapAround: false,
    pageDots: false,
});
var rc2 = document.querySelector('.resume-carousel-2');
var flkty = new Flickity( rc2, {
    lazyLoad: true,
    wrapAround: false,
    pageDots: false,
});