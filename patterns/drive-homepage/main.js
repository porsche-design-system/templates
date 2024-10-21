import '../global.scss';
import './style.scss';

/* Example code for demonstration purposes only. Do not use in production. **/
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
/* Example code end **/

// Model Chooser Carousel Animation
const modelChooserCarousel = document.querySelector('p-carousel');
modelChooserCarousel.addEventListener('update', (e) => {
  const { activeIndex = 0, previousIndex } = e.detail || {};
  modelChooserCarousel.children[previousIndex].querySelector('p-model-signature').classList.remove('show');
  modelChooserCarousel.children[activeIndex].querySelector('p-model-signature').classList.add('show');
});


// Scroll Animations on appear
const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation-play");
      observer.unobserve(entry.target); // Animation is only played once on first viewport intersection
    }
  });
};

const Obs = new IntersectionObserver(inViewport);
// Attach observer to every [data-inviewport] element:
document.querySelectorAll('[data-animation]').forEach(el => {
  Obs.observe(el, {});
});
