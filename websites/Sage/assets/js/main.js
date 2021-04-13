// Slider
$(document).ready(function() {
    $('.pro-slides').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false


    });
});

// Slider 2
$(document).ready(function() {
    $('.t-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true


    });
});

// Slider 3
$(document).ready(function() {
    $('.t-slider-3').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true


    });
});

//Slick Nav

$(function() {
    $('.nav-links').slicknav();
});