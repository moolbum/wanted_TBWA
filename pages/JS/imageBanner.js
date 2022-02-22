// transform: translateX(0%);
const bannerContainer = document.querySelector('.bannerContainerMobile');
const selectCircle = document.querySelector('.imageSelector');
const selectorYellow = document.querySelector('.imageSelectorYellow');

const isSelectCircle = () => {
  bannerContainer.style.transform = 'translateX(-50%)';
  bannerContainer.style.transition = '0.3s';
  selectCircle.style.backgroundColor = '#f5ca5f';
  selectorYellow.style.backgroundColor = '#e4e4e4';
};

const isSelectorYCircleFalse = () => {
  bannerContainer.style.transform = 'translateX(0%)';
  bannerContainer.style.transition = '0.3s';
  selectorYellow.style.backgroundColor = '#f5ca5f';
  selectCircle.style.backgroundColor = '#e4e4e4';
};

const isResizeValueDesktop = () => {
  if (window.innerWidth >= 768) {
    bannerContainer.style.transform = 'none';
    selectorYellow.style.backgroundColor = '#f5ca5f';
    selectCircle.style.backgroundColor = '#e4e4e4';
  }
};

const isResizeValueMobile = () => {
  if (window.innerWidth <= 768) {
    if ((bannerContainer.style.transform = 'none')) {
      bannerContainer.style.transform = 'translateX(0%)';
    }
  }
};

selectCircle.addEventListener('click', isSelectCircle);
selectorYellow.addEventListener('click', isSelectorYCircleFalse);
window.addEventListener('resize', isResizeValueDesktop);
window.addEventListener('resize', isResizeValueMobile);
