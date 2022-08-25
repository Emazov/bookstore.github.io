//              SEARCH FORM
searchForm = document.querySelector('.header-top__search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active')
}
//              SEARCH FORM

//              LOGIN FORM
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active')
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active')
}
//              LOGIN FORM

//              HEADER-BOTTOM
window.onscroll = () => {

    searchForm.classList.remove('active')

    if (window.scrollY > 80) {
        document.querySelector('.header .header-bottom').classList.add('active')
    } else {
        document.querySelector('.header .header-bottom').classList.remove('active')
    }
}

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-bottom').classList.add('active')
    } else {
        document.querySelector('.header .header-bottom').classList.remove('active')
    }

    fadeOut()
}
//              HEADER-BOTTOM

//              LOADER
function loader() {
    document.querySelector('.loader-container').classList.add('active')
}

function fadeOut() {
    setTimeout(loader, 2000);
}

//              LOADER

//              SWIPER BOOKS-SLIDER
var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
//              SWIPER BOOKS-SLIDER

//              SWIPER FEATURED-SLIDER
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
//              SWIPER FEATURED-SLIDER

//              SWIPER ARRIVALS-SLIDER
var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
//              SWIPER ARRIVALS-SLIDER

//              SWIPER REVIEWS-SLIDER
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
//              SWIPER REVIEWS-SLIDER

//              SWIPER BLOGS-SLIDER
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
//              SWIPER BLOGS-SLIDER



