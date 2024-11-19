const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsividade
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 4,
        },
        2000: {
            slidesPerView: 5
        },
    },
});

