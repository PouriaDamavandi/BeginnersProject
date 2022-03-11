const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Defining functions for our close and open buttons
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// We need a loop event for all 3 btns
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);
// Just one btn we dont need any loop anymore!
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// We add event listener to document so it works all over the page

document.addEventListener('keydown', function (e) {
  // for finding the string of keyboard event
  // console.log(e.key)
  // if (e.key === 'Escape') {
  //     if (!modal.classList.contains('hidden'))
  // Improving our code
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
