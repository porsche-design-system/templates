import './style.scss';
import { breakpointS } from '@porsche-design-system/components-js/styles';

document.querySelector('p-canvas').addEventListener('sidebarStartUpdate', (e) => {
  e.target.sidebarStartOpen = e.detail.open;
});

document.querySelector('p-canvas').addEventListener('sidebarEndDismiss', (e) => {
  e.target.sidebarEndOpen = false;
});

for (const flyout of document.querySelectorAll('p-flyout')) {
  flyout.addEventListener('dismiss', (e) => {
    e.target.open = false;
  });
}

for (const modal of document.querySelectorAll('p-modal')) {
  modal.addEventListener('dismiss', (e) => {
    e.target.open = false;
  });
}

const updateBackgroundOpacity = (opacity) => {
  document.querySelector('p-canvas > [slot="background"]').style.opacity = opacity;
};

const updateTemplate = (id) => {
  for (const template of document.querySelectorAll('p-canvas > :not(template):not([slot])')) {
    template.remove();
  }
  document.querySelector('p-canvas').appendChild(document.querySelector(`template${id}`).content.cloneNode(true));
};

const closeSidebarOnRouteChangeOnMobile = () => {
  if (!window.matchMedia(`(min-width: ${breakpointS}px)`).matches) {
    document.querySelector('p-canvas').sidebarStartOpen = false;
    document.querySelector('p-canvas').sidebarEndOpen = false;
  }
};

const scrollToBottom = () => {
  setTimeout(() => {
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: 'smooth',
    });
  }, 40);
};

const updateLayout = (hash) => {
  switch (hash) {
    case '#template-chat': {
      updateBackgroundOpacity(0);
      updateTemplate('#template-chat');
      closeSidebarOnRouteChangeOnMobile();
      scrollToBottom();
      break;
    }
    default: {
      updateBackgroundOpacity(1);
      updateTemplate('#template-intro');
      closeSidebarOnRouteChangeOnMobile();
      break;
    }
  }
};

window.addEventListener('hashchange', () => updateLayout(window.location.hash));
updateLayout(window.location.hash);

// initially, p-canvas sidebar-start should be closed on mobile and opened on desktop
if (window.matchMedia(`(min-width: ${breakpointS}px)`).matches) {
  document.querySelector('p-canvas').sidebarStartOpen = true;
}
