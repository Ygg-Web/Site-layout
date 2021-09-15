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

// const init = (blockWidth, blockLine, blockSliders) => {
//     // width = document.querySelector(`${blockWidth}`).offsetWidth;
//     // console.log(width);
//     width = blockWidth;
//     // blockLine.style.width = width * blockSliders.length + 'px';
//     blockLine.style.width = width * 3 + 'px';
//     console.log(blockLine.style.width);
//     blockSliders.forEach(slider => {
//         slider.style.width = width + 'px';
//         slider.style.height = 'auto';
//     });
//     // rollSlider();
// }

// window.addEventListener('resize', init);
// init(400, sliderLineTariff, slidersTariff);
// // init('.comments', sliderLineComment, slidersComment);

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

// dotsTraffic.forEach((dot, indexDot) => {
//     dot.addEventListener('click', () => {
//         index = indexDot;
//         prepareCurrentSlide(index, slidersTariff, sliderLineTariff, dotsTraffic);
//     });
// })





// +====================================================

// const init = () => {
//     // width = document.querySelector('.tariff__item').offsetWidth;
//     width = 400;
//     sliderLineTariff.style.width = width * slidersTariff.length + 'px';
//     console.log(sliderLineTariff.style.width);
//     slidersTariff.forEach(slider => {
//         slider.style.width = width + 'px';
//         slider.style.height = 'auto';
//     })
// }

// window.addEventListener('resize', init);
// init();
// const rollSlider = () => {
//     sliderLineTariff.style.transform = 'translate(-' + index * width + 'px)';
// }


// const activeSlide = n => {
//     slidersTariff.forEach(slide => {
//         slide.classList.remove('active');
//     })
//     slidersTariff[n].classList.add('active');
// }

// const activeDot = n => {
//     dotsTraffic.forEach(dot => {
//         dot.classList.remove('active');
//     })
//     dotsTraffic[n].classList.add('active');
// }

// const prepareCurrentSlide = ind => {
//     activeSlide(ind);
//     activeDot(ind);
// }

// dotsTraffic.forEach((dot, indexDot) => {
//     dot.addEventListener('click', () => {
//         index = indexDot;
//         rollSlider();
//         prepareCurrentSlide(index);
//     });
// })



// ================================================

// const init = () => {
//     // width = document.querySelector('.tariff__item').offsetWidth;
//     width = 400;
//     sliderLineTariff.style.width = width * slidersTariff.length + 'px';
//     console.log(sliderLineTariff.style.width);
//     slidersTariff.forEach(slider => {
//         slider.style.width = width + 'px';
//         slider.style.height = 'auto';
//     })
// }
const init = () => {
    width = document.querySelector('.comment__colum').offsetWidth;
    console.log(width);
    // width = document.querySelector('.comments').clientWidth;
    // width = 400;
    sliderLineComment.style.width = width * slidersComment.length + 'px';
    console.log(sliderLineComment.style.width);
    slidersComment.forEach(slider => {
        slider.style.width = width + 'px';
        slider.style.height = 'auto';
    })
}


window.addEventListener('resize', init);
init();
const rollSlider = () => {
    sliderLineComment.style.transform = 'translate(-' + index * width + 'px)';
}


const activeSlide = n => {
    slidersComment.forEach(slide => {
        slide.classList.remove('active');
    })
    slidersComment[n].classList.add('active');
}

const activeDot = n => {
    dotsComment.forEach(dot => {
        dot.classList.remove('active');
    })
    dotsComment[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

dotsComment.forEach((dot, indexDot) => {
    dot.addEventListener('click', () => {
        index = indexDot;
        rollSlider();
        prepareCurrentSlide(index);
    });
})