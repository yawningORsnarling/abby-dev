
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

/* Commercial - Ad Ticker #1 */
/*var cc1 = document.querySelector('.commercial-carousel-1');
var flkty_cc1 = new Flickity( cc1, {
    selectedAttraction: 0.02,
    lazyLoad: true,
    imagesLoaded: true,
    friction: 1.5,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    draggable: false,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false
});*/

/* Continue playing Ad Ticker #1 after user interaction */
flkty_cc1.on('staticClick', function() {
    flkty_cc1.playPlayer();
});
flkty_cc1.on('dragEnd', function() {
    flkty_cc1.playPlayer();
});

/* Commercial - Video Carousel */
var cc2 = document.querySelector('.commercial-carousel-2');
var flkty_cc2 = new Flickity( cc2, {
    autoPlay: false,
    wrapAround: true,
    pageDots: false
});

/* Commercial - Ad Ticker #2 */
var cc3 = document.querySelector('.commercial-carousel-3');
var flkty_cc3 = new Flickity( cc3, {
    selectedAttraction: 0.02,
    lazyLoad: true,
    imagesLoaded: true,
    friction: 1.5,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    draggable: false,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false
});

/* Continue playing Ad Ticker #2 after user interaction */
flkty_cc3.on('staticClick', function() {
    flkty_cc3.playPlayer();
});
flkty_cc3.on('dragEnd', function() {
    flkty_cc3.playPlayer();
});

/* Resume - Resumes */
var rc1 = document.querySelector('.resume-carousel-1');
var flkty_rc1 = new Flickity( rc1, {
    lazyLoad: true,
    wrapAround: false,
    pageDots: false,
});

/* Resume - Headshots */
var rc2 = document.querySelector('.resume-carousel-2');
var flkty_rc2 = new Flickity( rc2, {
    lazyLoad: true,
    wrapAround: false,
    pageDots: false,
});


let tickerSpeed = .75;

let flickity = null;
let isPaused = false;
const slideshowEl = document.querySelector('.commercial-carousel-1');

const update = () => {
    if (isPaused) return;
    if (flickity.slides) {
        flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
        flickity.selectedIndex = flickity.dragEndRestingSelect();
        flickity.updateSelectedSlide();
        flickity.settle(flickity.x);
    }
    window.requestAnimationFrame(update);
};

const pause = () => {
    isPaused = false;
};

const play = () => {
    if (isPaused) {
        isPaused = false;
        window.requestAnimationFrame(update);
    }
};


flickity = new Flickity(slideshowEl, {
    selectedAttraction: 0.02,
    lazyLoad: true,
    imagesLoaded: true,
    friction: 1.5,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    draggable: false,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false
});
flickity.x = 0;



slideshowEl.addEventListener('mouseenter', pause, false);
slideshowEl.addEventListener('focusin', pause, false);
slideshowEl.addEventListener('mouseleave', play, false);
slideshowEl.addEventListener('focusout', play, false);

flickity.on('dragStart', () => {
    isPaused = true;
});


update();