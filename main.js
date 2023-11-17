import './style.scss';
import { load as loadPorscheDesignSystem } from '@porsche-design-system/components-js';

loadPorscheDesignSystem();

document.querySelector('#app').innerHTML = `
  <p-heading>Welcome to Vanilla JS</p-heading>
`;
