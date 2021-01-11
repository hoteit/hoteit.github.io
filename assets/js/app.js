// Initialise FlexSlider for Carousels
$(window).load(function() {
    $('.flexslider').flexslider({
    animation: "fade",
    directionNav: true,
    slideshowSpeed: 5000,
    animationSpeed: 600,
    touch: true,
    randomize: true,
    });
});

/*
Animation: “fade” or “slide”
controlNav: “thumbnails” or false (this is for the thumbnail sliders)
directionNav: true or false (this is for the directional arrows)
slideshow: true or false
slideshowSpeed: number in milliseconds
animationSpeed: number in milliseconds
animationLoop: true or false
touch: true or false (for touchscreens)
itemWidth: width in pixels
itemHeight: height in pixels
itemMargin: margin in pixels
asNavFor: used by thumbnail controlNav sliders to select main slider
sync: used by main slider to sync with thumbnail controlNav slider
*/
