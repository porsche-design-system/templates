import './style.scss';

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
  for (const template of document.querySelectorAll('.ai-popover > :not(template)')) {
    template.remove();
  }
};

const addTemplate = (id) => {
  document.querySelector('.ai-popover').appendChild(document.querySelector(`template${id}`)?.content.cloneNode(true));
};

const focusInput = () => {
  document.querySelector('.ai-input')?.focus();
};

const focusButton = () => {
  document.querySelector('.ai-button').focus();
};

const simulateAiChatRequest = () => {
  clearTimeout(t);
  t = setTimeout(() => {
    for (const el of document.querySelectorAll('.ai-answer,.ai-question')) {
      el.removeAttribute('hidden');
    }
  }, 2000);
};

const toggleAiWidget = () => {
  document.querySelector('.ai-button').click();
};

// update template based on hash url change
window.addEventListener('hashchange', () => updateTemplate(window.location.hash));

// on init
toggleAiWidget();
updateTemplate(window.location.hash);

// close ai-popover on ESC
document.querySelector('.ai-popover').onkeydown = (e) => {
  if (e.key === 'Escape') {
    toggleAiWidget();
    focusButton();
  }
};
