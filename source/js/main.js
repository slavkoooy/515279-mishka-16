let modal = document.querySelector('.modal');
let showModal = document.querySelectorAll('.catalog__item__buy');

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--opened');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal--opened')) {
      evt.preventDefault();
      modal.classList.remove('modal--opened');
    }
  }
});

