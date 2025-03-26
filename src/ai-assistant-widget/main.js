import './style.scss';

// DO NOT USE IN PRODUCTION!
// EXAMPLE CODE FOR DEMONSTRATION PURPOSE ONLY.

let t;

const updateTemplate = (id) => {
  removeTemplate();
  addTemplate(id);
  autoFocusTextarea();
  simulateAiChatRequest();
};

const removeTemplate = () => {
  for (const template of document.querySelectorAll('[popover] > :not(template)')) {
    template.remove();
  }
};

const addTemplate = (id) => {
  document.querySelector('[popover]')?.appendChild(document.querySelector(`template${id}`)?.content.cloneNode(true));
};

const autoFocusTextarea = () => {
  document.querySelector('textarea')?.focus();
};

const simulateAiChatRequest = () => {
  clearTimeout(t);
  t = setTimeout(() => {
    for (const el of document.querySelectorAll('.ai-answer[hidden],.ai-question[hidden]')) {
      el.removeAttribute('hidden');
    }
  }, 2000);
};

const toggleAiWidget = () => {
  document.querySelector('button.ai-button')?.click();
};

// update template based on hash url change
window.addEventListener('hashchange', () => updateTemplate(window.location.hash));

// on init
toggleAiWidget();
updateTemplate(window.location.hash);

// close ai-popover on ESC
document.getElementById('ai-popover').onkeydown = (e) => {
  if (e.key === 'Escape') {
    toggleAiWidget();
    document.querySelector('button.ai-button').focus();
  }
}
