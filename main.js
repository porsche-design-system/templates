import './style.scss';
import { load as loadPorscheDesignSystem } from '@porsche-design-system/components-js';

loadPorscheDesignSystem();

document.querySelector('#app').innerHTML = `
  <p-heading align="center">Vite x Porsche Design System</p-heading>
`;
