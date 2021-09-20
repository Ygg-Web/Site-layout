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
    sliderTariff = document.querySelector('.tariff__item'),
    sliderLineTariff = document.querySelector('.tariffs__line'),
    dotsTraffic = document.querySelectorAll('.dot-tariff'),
    slidersComment = document.querySelectorAll('.comment__item'),
    sliderComment = document.querySelector('.comment__item'),
    sliderLineComment = document.querySelector('.comments__line'),
    dotsComment = document.querySelectorAll('.dot-comment'),
    slidersStep = document.querySelectorAll('.step__item'),
    sliderStep = document.querySelector('.step__item'),
    sliderLineStep = document.querySelector('.steps__line'),
    dotsStep = document.querySelectorAll('.dot-step');

let index = 0;
let width;

const init = (itemSlider, blockSliders) => {
    width = itemSlider.offsetWidth;
    blockSliders.forEach(slider => {
        slider.style.width = width + 'px';
        slider.style.height = 'auto';
    });
    // rollSlider();
}

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


function dotsToggle(itemSlider, blockSliders, blockLine, blockDots) {
    blockDots.forEach((dot, indexDot) => {
        dot.addEventListener('click', () => {
            index = indexDot;
            init(itemSlider, blockSliders);
            prepareCurrentSlide(index, blockSliders, blockLine, blockDots);
        });
    })
}

dotsToggle(sliderTariff, slidersTariff, sliderLineTariff, dotsTraffic);
dotsToggle(sliderStep, slidersStep, sliderLineStep, dotsStep);
dotsToggle(sliderComment, slidersComment, sliderLineComment, dotsComment);


// =============================================================================

const headerBurger = document.querySelector('.header__burger'),
    headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
})