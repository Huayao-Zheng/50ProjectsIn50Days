const hourElm = document.querySelector('.hour');
const minuteElm = document.querySelector('.minute');
const secondElm = document.querySelector('.second');
const timeElm = document.querySelector('.time');
const dateElm = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    toggle.innerText = 'Dark mode';
  } else {
    html.classList.add('dark');
    toggle.innerText = 'Light mode';
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hoursForCock = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const amOrPm = time.getHours() >= 12 ? 'PM' : 'AM';

  hourElm.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForCock, 0, 11, 0, 360)}deg)`;
  minuteElm.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
  secondElm.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

  timeElm.innerHTML = `${hoursForCock}:${minutes < 10 ? `0${minutes}` : minutes} ${amOrPm}`;
  dateElm.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
  console.log(days[day]);
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setTime();

setInterval(setTime, 1000);
