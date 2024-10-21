import '../global.scss';
import './style.scss';

/* Example code for demonstration purposes only. Do not use in production. **/
const voucherCarSelect = document.querySelector('p-select[name="voucher-car"]');
const voucherRateSelect = document.querySelector('p-select[name="voucher-rate"]');
const voucherRate = voucherRateSelect.querySelectorAll('p-select-option');
const voucherInput = document.querySelector('.input input');

voucherCarSelect.addEventListener('update', (e) => {
  const { value } = e.detail;
  if (value) {
    voucherRateSelect.disabled = false;
    voucherRateSelect.value = voucherRate[1].value;
    voucherInput.value = voucherRate[1].value;
  } else {
    voucherRateSelect.disabled = true;
    voucherRateSelect.value = "";
  }
})

voucherRateSelect.addEventListener('update', (e) => {
  voucherInput.value = e.target.value;
})
/* Example code end **/

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
