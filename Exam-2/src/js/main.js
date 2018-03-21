$(document).ready(function() {

    $(function() {
        //Initialize filterizr with default options
        $('#filtr-container').filterizr();
    });
    $('#team__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="team__slider-btn team__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="team__slider-btn team__slider-btn--next"><span class="ion-chevron-right"></span></button>',
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('#testimonials__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="testimonials__slider-btn testimonials__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="testimonials__slider-btn testimonials__slider-btn--next"><span class="ion-chevron-right"></span></button>',
        autoplay: true,
        autoplaySpeed: 2000

    });

    $(function() {
        $('.team__item-description').slimScroll({
            height: '250px',
            color: 'lightgreen'
        });
    });



});
/*Скролл к выбранному блоку*/
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

// Плавная прокрутка якоря
$(document).ready(function() {
    $('#top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// Появление-исчезновение якоря
$(function(f) {
    var element = f('.up-uncor');
    f(window).scroll(function() {
        element['fade' + (f(this).scrollTop() > 350 ? 'In' : 'Out')](100);
    });
});

// open modal
$(".section-about__btn--show-modal").click(function() {
    $('#modal').addClass('modal--show');
    $('body').addClass('hidden');
});


// close modal
$('.modal__btn--close, .modal__btn--cancel').click(function() {
    $('#modal').removeClass('modal--show');
    $('body').removeClass('hidden');
});


// close modal by clicking outside of modal content
$(document).click(function(event) {
    if (!$(event.target).closest(".modal__wrapper, .section-about__btn--show-modal").length) {
        $("#modal").removeClass("modal--show");
        $('body').removeClass('hidden');
    }
});