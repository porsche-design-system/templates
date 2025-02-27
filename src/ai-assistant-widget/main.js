import './style.scss';

// Example code for demonstration purposes only. Do not use in production.
const updateTemplate = (id) => {
  for (const template of document.querySelectorAll('#ai-assistant[popover] > :not(template)')) {
    template.remove();
  }
  document
    .querySelector('#ai-assistant[popover]')
    .appendChild(document.querySelector(`template${id}`).content.cloneNode(true));
};

window.addEventListener('hashchange', () => updateTemplate(window.location.hash));
updateTemplate(window.location.hash);
