const search = document.querySelector('.logo__search');
const close = document.querySelector('.search__close');
const containerForm = document.querySelector('.form');


search.addEventListener('click', () => {
  containerForm.style.display = 'block';
});

close.addEventListener('click', () => {
  containerForm.style.display = 'none';
});