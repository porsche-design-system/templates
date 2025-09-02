import './style.css';

// DO NOT USE IN PRODUCTION!
// EXAMPLE CODE FOR DEMONSTRATION PURPOSE ONLY.

let t;

const updateTemplate = (id) => {
  removeTemplate();
  addTemplate(id);
  focusInput();
  simulateAiChatRequest();
};

const removeTemplate = () => {
  for (const template of document.querySelectorAll('.c-popover > :not(template)')) {
    template.remove();
  }
};

const addTemplate = (id) => {
  document.querySelector('.c-popover').appendChild(document.querySelector(`template${id}`)?.content.cloneNode(true));
};

const focusInput = () => {
  document.querySelector('.c-input')?.focus();
};

const focusButton = () => {
  document.querySelector('.c-button').focus();
};

const simulateAiChatRequest = () => {
  clearTimeout(t);
  t = setTimeout(() => {
    for (const el of document.querySelectorAll('.c-answer,.c-question')) {
      el.removeAttribute('hidden');
    }
  }, 2000);
};

const toggleAiWidget = () => {
  document.querySelector('.c-button').click();
};

// update template based on hash url change
window.addEventListener('hashchange', () => updateTemplate(window.location.hash));

// on init
toggleAiWidget();
updateTemplate(window.location.hash);

// close c-popover on ESC
document.querySelector('.c-popover').onkeydown = (e) => {
  if (e.key === 'Escape') {
    toggleAiWidget();
    focusButton();
  }
};

document.addEventListener('click', (e) => {
  if (e.target.closest('.js-close-popover')) {
    toggleAiWidget();
    focusButton();
  }
});


