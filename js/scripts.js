const mobileBtn = document.querySelector('.mobile-btn');
const headerNav = document.querySelector('.header__nav');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        headerNav.classList.toggle('header__nav_open');
    });
}

const swiper = new Swiper(".clients__picture", {
    // spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });

const swiper2 = new Swiper(".clients__info", {
// spaceBetween: 10,
navigation: {
    nextEl: ".clients__next",
    prevEl: ".clients__prev",
},
thumbs: {
    swiper: swiper,
},
});