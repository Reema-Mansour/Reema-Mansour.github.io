$(function(){
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 70){
            $("body").addClass("sticky-header");
        }else{
            $("body").removeClass("sticky-header");
        }//if-else
    });//win func.
});//ready func.
$('#about').click(function () {
    $('header .bottom-bar .main-nav li a').removeClass("active");
    $(this).addClass("active");
    $('html, body').animate({
        scrollTop: $(".about-section").offset().top-200
    }, 2000);
});
$('#services').click(function () {
    $('header .bottom-bar .main-nav li a').removeClass("active");
    $(this).addClass("active");
    $('html, body').animate({
        scrollTop: $(".services-section").offset().top-50
    }, 2000);
});
$('#products').click(function () {
    $('header .bottom-bar .main-nav li a').removeClass("active");
    $(this).addClass("active");
    $('html, body').animate({
        scrollTop: $(".products-section").offset().top-50
    }, 2000);
});
$('#contact').click(function () {
    $('header .bottom-bar .main-nav li a').removeClass("active");
    $(this).addClass("active");
    $('html, body').animate({
        scrollTop: $(".contact-section").offset().top-50
    }, 2000);
});
$('#go-services').click(function () {
    $('.active').removeClass("active");
    $('#services').addClass("active");
    $('html, body').animate({
        scrollTop: $(".services-section").offset().top-50
    }, 2000);
});
AOS.init({
    offset: 100,
    duration: 500,
    easing: 'ease-in-sine',
    delay: 100,
});
$(window).on('load', function() {
    AOS.refresh();

});
$('.product-wrapper .products-items-containter').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    dots: false,             
    nextArrow:"<div class='right-arrow mt-160'><img src='images/right-arrow.png' alt=''></div>",
    prevArrow:"<div class='left-arrow mt-160'><img src='images/left-arrow.png' alt=''></div>",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true,
                dots:false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots:false
            }
        },
    ],
});
$('.bottom-part .opinion-container').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    dots: false,             
    nextArrow:"<div class='right-arrow'><img class='slick-next' src='images/right-arrow.png'></div>",
    prevArrow:"<div class='left-arrow'><img class='slick-prev' src='images/left-arrow.png'></div>",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true,
                dots:false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots:false
            }
        },
    ],
});