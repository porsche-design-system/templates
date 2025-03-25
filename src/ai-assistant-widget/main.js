import './style.scss';

// DO NOT USE IN PRODUCTION!
// EXAMPLE CODE FOR DEMONSTRATION PURPOSE ONLY.

const updateTemplate = (id) => {
  // remove template
  for (const template of document.querySelectorAll('[popover] > :not(template)')) {
    template.remove();
  }

  // add template
  document.querySelector('[popover]').appendChild(document.querySelector(`template${id}`).content.cloneNode(true));

  // simulate computing ai answers
  setTimeout(() => {
    for (const el of Array.from(document.querySelectorAll('.ai-answer[hidden],.ai-question[hidden]'))) {
      el.removeAttribute('hidden');
    }
  }, 2000);
};

// update template based on hash url
window.addEventListener('hashchange', () => updateTemplate(window.location.hash));

// on init: update template and show widget
updateTemplate(window.location.hash);
document.querySelector('button.ai-button').click();
