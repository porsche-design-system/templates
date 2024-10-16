import '../global.scss';
import './style.scss';

const reserveModal = document.querySelector('#reserve-station-modal');
document.querySelector('#station-input').addEventListener('click', () => {
  reserveModal.open = true;
})
reserveModal.addEventListener('dismiss', () => (reserveModal.open = false));
