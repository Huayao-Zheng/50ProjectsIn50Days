const panels = document.querySelectorAll('.panel');

const removeActive = () => {
  //loop throgh panels
   //remove all active class
  panels.forEach(pan => {
    pan.classList.remove('active');
  })
};

panels.forEach(pan => {
  pan.addEventListener('click', () => {
    removeActive();
    pan.classList.add('active');
  });
});