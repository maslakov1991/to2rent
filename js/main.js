$(function () {

    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev">​<img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next">​<img src="images/arrow-next.svg" alt=""></button>',
        fade: true,
        responsive: [
            {
                breakpoint: 421,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

});