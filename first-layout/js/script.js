const btnEntry = document.querySelector('.btn-entrance'),
    btnRegistration = document.querySelector('.btn-registration'),
    modal = document.querySelector('.modal'),
    modalRegistration = document.querySelector('.modal_registration');
// modalRegistration = document.querySelector('[data-registration]');

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
}

function openModalRegistration() {
    modalRegistration.classList.add('show');
    modalRegistration.classList.remove('hide');
}

btnEntry.addEventListener('click', openModal);
btnRegistration.addEventListener('click', openModalRegistration);

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
}

function closeModalRegistration() {
    modalRegistration.classList.add('hide');
    modalRegistration.classList.remove('show');
}

modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.getAttribute('data-close') == '') {
        closeModal();
    }
});

modalRegistration.addEventListener('click', (event) => {
    if (event.target === modalRegistration || event.target.getAttribute('data-close') == '') {
        closeModalRegistration();
    }
});