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


// ==Slider=================================================================
const
    slidersTariff = document.querySelectorAll('.tariff__item'),
    sliderLineTariff = document.querySelector('.tariffs__line'),
    slidersComment = document.querySelectorAll('.comment__item'),
    sliderLineComment = document.querySelector('.comments__line'),
    dotsComment = document.querySelectorAll('.dot-comment');
dotsTraffic = document.querySelectorAll('.dot-tariff');

let index = 0;
let width;

const init = (blockWidth, blockLine, blockSliders) => {
    width = document.querySelector(`${blockWidth}`).offsetWidth;
    blockLine.style.width = width * blockSliders.length + 'px';
    blockSliders.forEach(slider => {
        slider.style.width = width + 'px';
        slider.style.height = 'auto';
    });
    // rollSlider();
}

window.addEventListener('resize', init);
init('.tariff__item', sliderLineTariff, slidersTariff);
init('.comment__item', sliderLineComment, slidersComment);

const rollSlider = (blockLine) => {
    blockLine.style.transform = 'translate(-' + index * width + 'px)';
}

const activeSlide = (n, blockSliders) => {
    blockSliders.forEach(slide => {
        slide.classList.remove('active');
    })
    blockSliders[n].classList.add('active');
}

const activeDot = (n, blockDots) => {
    blockDots.forEach(dot => {
        dot.classList.remove('active');
    })
    blockDots[n].classList.add('active');
}

const prepareCurrentSlide = (ind, blockSliders, blockLine, blockDots) => {
    activeSlide(ind, blockSliders);
    activeDot(ind, blockDots);
    rollSlider(blockLine);
}

dotsTraffic.forEach((dot, indexDot) => {
    dot.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index, slidersTariff, sliderLineTariff, dotsTraffic);
    });
})

dotsComment.forEach((dot, indexDot) => {
    dot.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index, slidersComment, slidersComment, dotsComment);
    });
})

// function dotsToggle(blockDots) {
//     blockDots.forEach((dot, indexDot) => {
//         dot.addEventListener('click', () => {
//             index = indexDot;
//             // prepareCurrentSlide(index, slidersTariff, sliderLineTariff, dots);
//             prepareCurrentSlide(ind, blockSliders, blockLine, blockDots);
//         });
//     })
// }

// dotsToggle(dots);


// const nextSlide = () => {
//     if (index == sliders.length - 1) {
//         index = 0;
//     } else {
//         index++;
//     }
//     prepareCurrentSlide(index);
// }

// const prevSlide = () => {
//     if (index == 0) {
//         index = sliders.length - 1;
//     } else {
//         index--;
//     }
//     prepareCurrentSlide(index);
// }

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);