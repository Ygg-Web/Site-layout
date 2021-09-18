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
    sliderBlockWidthTariff = document.querySelector('.tariff__slider'),
    sliderColumWidthTariff = document.querySelector('.tariff__colum'),
    dotsTraffic = document.querySelectorAll('.dot-tariff'),
    slidersComment = document.querySelectorAll('.comment__item'),
    sliderLineComment = document.querySelector('.comments__line'),
    sliderBlockWidthComment = document.querySelector('.comment__slider'),
    sliderColumWidthComment = document.querySelector('.comment__colum'),
    dotsComment = document.querySelectorAll('.dot-comment'),
    slidersStep = document.querySelectorAll('.step__item'),
    sliderLineStep = document.querySelector('.steps__line'),
    sliderBlockWidthStep = document.querySelector('.step__slider'),
    sliderColumWidthStep = document.querySelector('.step__colum'),
    dotsStep = document.querySelectorAll('.dot-step');

let index = 0;
let width;

const init = (blockWidthSlider, blockLine, blockSliders, blockColumWidth) => {
    width = blockWidthSlider.offsetWidth;
    blockLine.style.width = width * blockSliders.length + 'px';
    blockSliders.forEach(slider => {
        slider.style.width = blockColumWidth.offsetWidth + 'px';
        slider.style.height = 'auto';
    });
    // rollSlider();
}

// window.addEventListener('resize', init);
init(sliderBlockWidthTariff, sliderLineTariff, slidersTariff, sliderColumWidthTariff);
init(sliderBlockWidthComment, sliderLineComment, slidersComment, sliderColumWidthComment);
init(sliderBlockWidthStep, sliderLineStep, slidersStep, sliderColumWidthStep);

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
        prepareCurrentSlide(index, slidersComment, sliderLineComment, dotsComment);
    });
})

dotsStep.forEach((dot, indexDot) => {
    dot.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index, slidersStep, sliderLineStep, dotsStep);
    });
})

// =============================================================================

const headerBurger = document.querySelector('.header__burger'),
    headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
})