const body = document.body;
const slides = document.querySelectorAll('.slide');
const lefBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');

let activeSlide = 0;

lefBtn.addEventListener('click', slideToPrevious);
rightBtn.addEventListener('click', slideToNext);

function slideToPrevious() {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setActiveSlide();
  setBgToBody();
}

function slideToNext() {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setActiveSlide();
  setBgToBody();
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[activeSlide].classList.add('active');
}

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
