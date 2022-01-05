const button = document.querySelector('.ripple');

button.addEventListener('click', (e) => {
    const yTop = e.clientY - e.target.offsetTop;
    const xLeft = e.clientX - e.target.offsetLeft;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yTop + 'px';
    circle.style.left = xLeft + 'px';

    button.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
});
