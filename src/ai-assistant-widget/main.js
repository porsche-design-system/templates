import './style.css';
// DO NOT USE IN PRODUCTION!
// EXAMPLE CODE FOR DEMONSTRATION PURPOSE ONLY.
let t;
const focusButton = () => {
  document.getElementById('ai-button').focus();
};
const toggleAiWidget = () => {
  document.getElementById('ai-button').click();
};
const setupEventListeners = () => {
  const loginLink = document.querySelector('p-link[href="#template-intro"]');
  if (loginLink) {
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, '', '#template-intro');
      updateTemplate('#template-intro');
    });
  }
  const submitButton = document.querySelector('form[action="#template-chat"] p-button[type="submit"]');
  if (submitButton) {
    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, '', '#template-chat');
      updateTemplate('#template-chat');
    });
  }
  const closeButton = document.querySelector('.js-close-popover');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      toggleAiWidget();
      focusButton();
    });
  }
};
const updateTemplate = (id) => {
  for (const template of document.querySelectorAll('#ai-scroller > :not(template)')) {
    template.remove();
  }
  const template = document.querySelector(`template${id}`);
  if (template) {
    document.getElementById('ai-scroller').appendChild(template.content.cloneNode(true));
  }
  document.querySelector('.ai-input')?.focus();
  clearTimeout(t);
  t = setTimeout(() => {
    for (const el of document.querySelectorAll('.ai-answer,.ai-question')) {
      el.removeAttribute('hidden');
    }
  }, 2000);
  const popover = document.getElementById('ai-popover');
  if (popover && template && template.dataset.animation === 'true') {
    popover.classList.add('ai-popover--animated');
  } else {
    popover.classList.remove('ai-popover--animated');
  }
  setupEventListeners();
};
window.addEventListener('hashchange', () => {
  if (window.location.hash) {
    updateTemplate(window.location.hash);
  }
});
toggleAiWidget();
if (window.location.hash) {
  updateTemplate(window.location.hash);
} else {
  updateTemplate('#template-login');
}
document.getElementById('ai-popover').onkeydown = (e) => {
  if (e.key === 'Escape') {
    toggleAiWidget();
    focusButton();
  }
};
