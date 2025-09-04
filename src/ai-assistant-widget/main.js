import './style.css';

// DO NOT USE IN PRODUCTION!
// EXAMPLE CODE FOR DEMONSTRATION PURPOSE ONLY.

const popoverElement = document.getElementById('ai-popover');
let animationFrameId = null;
let startTime = 0;

function animateAngularGradient(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }
  const elapsedTime = timestamp - startTime;

  const angle = ((elapsedTime * 0.05) % 360).toFixed(2);
  const blurAmount = (Math.sin(elapsedTime * 0.005) * 5 + 95).toFixed(2);

  popoverElement.style.setProperty('--gradient-angle', `${angle}deg`);
  popoverElement.style.setProperty('--blur-amount', `${blurAmount}px`);

  animationFrameId = requestAnimationFrame(animateAngularGradient);
}

function startAnimation() {
  if (animationFrameId === null) {
    startTime = 0;
    animationFrameId = requestAnimationFrame(animateAngularGradient);
  }
}

function stopAnimation() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

let t;

const updateTemplate = (id) => {
  for (const template of document.querySelectorAll('.c-popover > :not(template)')) {
    template.remove();
  }

  const template = document.querySelector(`template${id}`);

  if (template) {
    document.querySelector('.c-popover').appendChild(template.content.cloneNode(true));
  }

  document.querySelector('.c-input')?.focus();

  clearTimeout(t);
  t = setTimeout(() => {
    for (const el of document.querySelectorAll('.c-answer,.c-question')) {
      el.removeAttribute('hidden');
    }
  }, 2000);

  const popover = document.getElementById('ai-popover');
  if (popover && template && template.dataset.animation === 'true') {
    popover.classList.add('is-animated');
    startAnimation();
  } else {
    popover.classList.remove('is-animated');
    stopAnimation();
  }

  // Ruft die Event-Listener-Funktion auf, nachdem die neue Vorlage geladen wurde
  setupEventListeners();
};

const focusButton = () => {
  document.querySelector('.c-button').focus();
};

const toggleAiWidget = () => {
  document.querySelector('.c-button').click();
};

// update template based on hash url change
window.addEventListener('hashchange', () => {
  // Verhindert, dass leere Hashes das Popover leeren
  if (window.location.hash) {
    updateTemplate(window.location.hash);
  }
});

// on init
toggleAiWidget();
// Stellt sicher, dass immer eine Vorlage geladen wird, auch wenn kein Hash vorhanden ist.
if (window.location.hash) {
  updateTemplate(window.location.hash);
} else {
  updateTemplate('#template-login');
}

// close c-popover on ESC
document.querySelector('.c-popover').onkeydown = (e) => {
  if (e.key === 'Escape') {
    toggleAiWidget();
    focusButton();
  }
};

// Funktion zum Einrichten von Event-Listenern für dynamische Elemente
const setupEventListeners = () => {
  // Listener für den "Sign in" Link in #template-login
  const loginLink = document.querySelector('p-link[href="#template-intro"]');
  if (loginLink) {
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, '', '#template-intro');
      updateTemplate('#template-intro');
    });
  }

  // Listener für den "Ask AI Assistant" Button in #template-intro
  const submitButton = document.querySelector('form[action="#template-chat"] p-button[type="submit"]');
  if (submitButton) {
    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, '', '#template-chat');
      updateTemplate('#template-chat');
    });
  }

  // Schließt das Popover, wenn auf den Schließen-Button geklickt wird
  const closeButton = document.querySelector('.js-close-popover');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      toggleAiWidget();
      focusButton();
    });
  }
};
