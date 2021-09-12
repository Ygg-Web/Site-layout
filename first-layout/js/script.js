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
    sliders = document.querySelectorAll('.tariff__item'),
    sliderLine = document.querySelector('.tariffs__line'),
    dots = document.querySelectorAll('.dot');

let index = 0;
let width;

const init = () => {
    width = document.querySelector('.tariff__colum').offsetWidth;
    sliderLine.style.width = width * sliders.length + 'px';
    sliders.forEach(slider => {
        slider.style.width = width + 'px';
        slider.style.height = 'auto';
    });
    // rollSlider();
}

window.addEventListener('resize', init);
init();

let rollSlider = () => {
    sliderLine.style.transform = 'translate(-' + index * width + 'px)';
}

const activeSlide = n => {
    sliders.forEach(slide => {
        slide.classList.remove('active');
    })
    sliders[n].classList.add('active');
}

const activeDot = n => {
    dots.forEach(dot => {
        dot.classList.remove('active');
    })
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
    rollSlider();
}

const nextSlide = () => {
    if (index == sliders.length - 1) {
        index = 0;
    } else {
        index++;
    }
    prepareCurrentSlide(index);
}

const prevSlide = () => {
    if (index == 0) {
        index = sliders.length - 1;
    } else {
        index--;
    }
    prepareCurrentSlide(index);
}

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);

dots.forEach((dot, indexDot) => {
    dot.addEventListener('click', () => {
        index = indexDot;
        rollSlider();
        prepareCurrentSlide(index);
    });
})