const btnEntry = document.querySelector('.btn-entrance'),
    btnRegistration = document.querySelector('.btn-registration'),
    modal = document.querySelector('.modal'),
    modalRegistration = document.querySelector('.modal_registration');

function openModal(nameModal) {
    nameModal.classList.add('show');
    nameModal.classList.remove('hide');
}

function closeModal(nameModal) {
    nameModal.classList.add('hide');
    nameModal.classList.remove('show');
}

btnEntry.addEventListener('click', () => openModal(modal));
btnRegistration.addEventListener('click', () => openModal(modalRegistration));

function closeWindow(nameModal) {
    nameModal.addEventListener('click', (event) => {
        if (event.target === nameModal || event.target.getAttribute('data-close') == '') {
            closeModal(nameModal);
        }
    });
}

closeWindow(modal);
closeWindow(modalRegistration);
// ============================================================================
//swiper slider
new Swiper('.tariffs', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    },
});
new Swiper('.comments', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1.3,
        },
        992: {
            slidesPerView: 1.7,
        },
        1200: {
            slidesPerView: 2,
        }
    },
});


// ==Slider=================================================================
// const
//     slidersTariff = document.querySelectorAll('.tariff__item'),
//     sliderTariff = document.querySelector('.tariff__item'),
//     sliderLineTariff = document.querySelector('.tariffs__line'),
//     dotsTraffic = document.querySelectorAll('.dot-tariff'),
//     slidersComment = document.querySelectorAll('.comment__item'),
//     sliderComment = document.querySelector('.comment__item'),
//     sliderLineComment = document.querySelector('.comments__line'),
//     dotsComment = document.querySelectorAll('.dot-comment'),
//     slidersStep = document.querySelectorAll('.step__item'),
//     sliderStep = document.querySelector('.step__item'),
//     sliderLineStep = document.querySelector('.steps__line'),
//     dotsStep = document.querySelectorAll('.dot-step');

// let index = 0;
// let width;

// const init = (itemSlider, blockSliders) => {
//     width = itemSlider.offsetWidth;
//     blockSliders.forEach(slider => {
//         slider.style.width = width + 'px';
//         slider.style.height = 'auto';
//     });
//     // rollSlider();
// }

// const rollSlider = (blockLine) => {
//     blockLine.style.transform = 'translate(-' + index * width + 'px)';
// }

// const activeSlide = (n, blockSliders) => {
//     blockSliders.forEach(slide => {
//         slide.classList.remove('active');
//     })
//     blockSliders[n].classList.add('active');
// }

// const activeDot = (n, blockDots) => {
//     blockDots.forEach(dot => {
//         dot.classList.remove('active');
//     })
//     blockDots[n].classList.add('active');
// }

// const prepareCurrentSlide = (ind, blockSliders, blockLine, blockDots) => {
//     activeSlide(ind, blockSliders);
//     activeDot(ind, blockDots);
//     rollSlider(blockLine);
// }


// function dotsToggle(itemSlider, blockSliders, blockLine, blockDots) {
//     blockDots.forEach((dot, indexDot) => {
//         dot.addEventListener('click', () => {
//             index = indexDot;
//             init(itemSlider, blockSliders);
//             prepareCurrentSlide(index, blockSliders, blockLine, blockDots);
//         });
//     })
// }

// dotsToggle(sliderTariff, slidersTariff, sliderLineTariff, dotsTraffic);
// dotsToggle(sliderStep, slidersStep, sliderLineStep, dotsStep);
// dotsToggle(sliderComment, slidersComment, sliderLineComment, dotsComment);


// const nextSlide = (itemSlider, blockSliders, blockLine, blockDots) => {
//     if (index == blockSliders.length - 1) {
//         index = 0;
//         init(itemSlider, blockSliders);
//         prepareCurrentSlide(index, blockSliders, blockLine, blockDots);
//     } else {
//         index++;
//         init(itemSlider, blockSliders);
//         prepareCurrentSlide(index, blockSliders, blockLine, blockDots);
//     }
// }

// const prevSlide = (itemSlider, blockSliders, blockLine, blockDots) => {
//     if (index == 0) {
//         index = slidersTariff.length - 1;
//         init(itemSlider, blockSliders);
//         prepareCurrentSlide(index, blockSliders, blockLine, blockDots);
//     } else {
//         index--;
//         init(itemSlider, blockSliders);
//         prepareCurrentSlide(index, blockSliders, blockLine, blockDots);
//     }
// }

// let x1 = null,
//     y1 = null;

// const handleTouchStart = (event) => {
//     event.preventDefault();
//     const touch = event.changedTouches[0];
//     x1 = touch.pageX;
//     y1 = touch.pageY;
// }

// const handleTouchEnd = (event, itemSlider, blockSliders, blockLine, blockDots) => {
//     event.preventDefault();
//     if (!x1 || !y1) {
//         return false;
//     }

//     let x2 = event.changedTouches[0].pageX;
//     let y2 = event.changedTouches[0].pageY;

//     let xDiff = x2 - x1;
//     let yDiff = y2 - y1;
//     if (Math.abs(xDiff) > Math.abs(yDiff)) {
//         if (xDiff > 0) {
//             prevSlide(itemSlider, blockSliders, blockLine, blockDots);
//         } else {
//             nextSlide(itemSlider, blockSliders, blockLine, blockDots);
//         }
//     }

//     x1 = null;
//     y1 = null;
// }

// function touchSwipe(itemSlider, blockSliders, blockLine, blockDots) {
//     blockSliders.forEach(slider => {
//         slider.addEventListener('touchstart', handleTouchStart);
//         slider.addEventListener('touchend', () => handleTouchEnd(event, itemSlider, blockSliders, blockLine, blockDots));
//     })
// }

// touchSwipe(sliderTariff, slidersTariff, sliderLineTariff, dotsTraffic);
// touchSwipe(sliderStep, slidersStep, sliderLineStep, dotsStep);
// touchSwipe(sliderComment, slidersComment, sliderLineComment, dotsComment);






// =============================================================================

const headerBurger = document.querySelector('.header__burger'),
    headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
})

// =============================================================================
const password = document.querySelectorAll('.password'),
    toggle = document.querySelectorAll('.password-control');

const checkPasswd = () => {
    password.forEach(item => {
        if (item.type === 'password') {
            item.setAttribute('type', 'text');
        } else {
            item.setAttribute('type', 'password');
        }
    })
}

const checkImgPasswd = () => {
    toggle.forEach(item => {
        item.classList.toggle('view')
    })
}

toggle.forEach(item => {
    item.addEventListener('click', () => {
        checkImgPasswd();
        checkPasswd();
    })

})