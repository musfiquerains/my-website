$(document).ready(function() {
    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,


    });
});


$(function() {
    $('.nav-links').slicknav();
});