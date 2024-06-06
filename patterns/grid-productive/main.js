import './style.scss';

document.querySelectorAll('button.toggle-sidebar-left').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#app > aside:first-of-type').toggleAttribute('data-open');
  })
});

document.querySelectorAll('button.toggle-sidebar-right').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#app > aside:last-of-type').toggleAttribute('data-open');
  })
});
