import '../global.scss';
import './style.scss';

const reserveModal = document.querySelector('#reserve-station-modal');
document.querySelector('#station-input').addEventListener('click', () => {
  reserveModal.open = true;
})
reserveModal.addEventListener('dismiss', () => (reserveModal.open = false));

const reserveDropdown = document.querySelector('.dropdown');
const reserveResults = reserveDropdown.querySelectorAll('p-button-pure');
const reserveImageContainer = reserveDropdown.querySelector('.dropdown__img');
const reserveImg = reserveImageContainer.querySelector('img');
const [reserveText, reserveAddress] = reserveImageContainer.querySelectorAll('p-text');

reserveResults.forEach(result => {
  result.addEventListener('mouseover', (e) => {
    reserveImg.src = e.target.dataset.img;
    reserveText.innerHTML = e.target.textContent;
    reserveAddress.innerHTML = e.target.dataset.address;
  })
})
