const sliderContainer = document.querySelector('.slider-container');
const leftSLide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');
const slidesLength = rightSlide.querySelectorAll('div').length;

leftSLide.style.top = `-${(slidesLength - 1) * 100}vh`;

let activeSLideIndex = 0;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const slideHeight = sliderContainer.clientHeight;

    if (direction === 'up') {
        activeSLideIndex++;
        if (activeSLideIndex > slidesLength - 1) {
            activeSLideIndex = 0;
        }
    }

    if (direction === 'down') {
        activeSLideIndex--;
        if (activeSLideIndex < 0) {
            activeSLideIndex = slidesLength - 1;
        }
    }

    leftSLide.style.transform = `translateY(${activeSLideIndex * slideHeight}px)`;
    rightSlide.style.transform = `translateY(-${activeSLideIndex * slideHeight}px)`;
};
//
