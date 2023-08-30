new Swiper('.swiper', {
    navigation: {
        nextEl: '.portfolio__arrow-right',
        prevEl: '.portfolio__arrow-left',
        disabledClass: 'portfolio__arrow-desable',
    },
    breakpoints: {
        480: {
            grid: {
                fill: 'row',
                rows: 2
            }
        },
        768: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 2
            }
        },

    }
});

$('.header__contacts-burger').click(() => {
    $('.header__contacts').slideToggle();
    console.log($('#input'));
    $('.callback__label').focus();
});

$('.preset__order-btn').click(() => {
    $('.page__overlay-modal').fadeIn(400).css('display', 'flex');
});

$('.modal__close').click(() => {
    $('.page__overlay-modal').fadeOut(400);
});

$('.page__overlay-modal').click((e) => {
    if(e.target.classList.contains('page__overlay-modal')){
        $('.page__overlay-modal').fadeOut(400);
    }
});

$('.callback__btn').click((e) => {
    e.preventDefault();
        $('.page__overlay-modal').fadeOut(400);
});