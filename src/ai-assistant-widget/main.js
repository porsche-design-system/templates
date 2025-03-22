import './style.scss';

// Example code for demonstration purposes only. Do not use in production.
const modal = document.querySelector('p-modal');
modal.addEventListener('dismiss', () => {
  modal.open = false;
});

const updateTemplate = (id) => {
  for (const template of document.querySelectorAll('[popover] > :not(template)')) {
    template.remove();
  }
  document.querySelector('[popover]').appendChild(document.querySelector(`template${id}`).content.cloneNode(true));
};

window.addEventListener('hashchange', () => updateTemplate(window.location.hash));
updateTemplate(window.location.hash);
